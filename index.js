//--------------------------------------------------------
//-- File System Sync
//--------------------------------------------------------
'use strict';

const fsExtra    = require('fs-extra');
const gracefulFs = require('graceful-fs');
const junk       = require('junk');
const klaw       = require('klaw-sync');
const minimatch  = require('minimatch');
const ow         = require('ow');
const path       = require('path');


module.exports = {

	access:     gracefulFs.accessSync,
	appendFile: gracefulFs.appendFileSync,
	chmod:      gracefulFs.chmodSync,
	chown:      gracefulFs.chownSync,
	close:      gracefulFs.closeSync,
	copyFile:   gracefulFs.copyFileSync,
	exists:     gracefulFs.existsSync,
	fchmod:     gracefulFs.fchmodSync,
	fchown:     gracefulFs.fchownSync,
	fdatasync:  gracefulFs.fdatasyncSync,
	fstat:      gracefulFs.fstatSync,
	fsync:      gracefulFs.fsyncSync,
	ftruncate:  gracefulFs.ftruncateSync,
	futimes:    gracefulFs.futimesSync,
	lchmod:     gracefulFs.lchmodSync,
	lchown:     gracefulFs.lchownSync,
	link:       gracefulFs.linkSync,
	lstat:      gracefulFs.lstatSync,
	mkdir:      gracefulFs.mkdirSync,
	mkdtemp:    gracefulFs.mkdtempSync,
	open:       gracefulFs.openSync,
	readdir:    gracefulFs.readdirSync,
	readFile:   gracefulFs.readFileSync,
	readlink:   gracefulFs.readlinkSync,
	read:       gracefulFs.readSync,
	realpath:   gracefulFs.realpathSync,
	rename:     gracefulFs.renameSync,
	rmdir:      gracefulFs.rmdirSync,
	stat:       gracefulFs.statSync,
	symlink:    gracefulFs.symlinkSync,
	truncate:   gracefulFs.truncateSync,
	unlink:     gracefulFs.unlinkSync,
	utimes:     gracefulFs.utimesSync,
	writeFile:  gracefulFs.writeFileSync,
	write:      gracefulFs.writeSync,

	copy:          fsExtra.copySync,
	emptyDir:      fsExtra.emptyDirSync,
	ensureFile:    fsExtra.ensureFileSync,
	ensureDir:     fsExtra.ensureDirSync,
	ensureLink:    fsExtra.ensureLinkSync,
	ensureSymlink: fsExtra.ensureSymlinkSync,
	mkdirp:        fsExtra.mkdirpSync,
	mkdirs:        fsExtra.mkdirsSync,
	move:          fsExtra.moveSync,
	outputFile:    fsExtra.outputFileSync,
	outputJson:    fsExtra.outputJsonSync,
	pathExists:    fsExtra.pathExistsSync,
	readJson:      fsExtra.readJsonSync,
	remove:        fsExtra.removeSync,
	writeJson:     fsExtra.writeJsonSync,

	scandir: (root, type, { recursive = false, fullPath = false, pattern = '**', keepJunk = false } = {}) => {
		ow(root, ow.string.label('root').nonEmpty);
		ow(type, ow.string.label('type').nonEmpty.is(() => { return ['file', 'dir'].includes(type) || `Must be 'file' or 'dir'`; }));
		ow(recursive, ow.boolean.label('recursive'));
		ow(fullPath, ow.boolean.label('fullPath'));
		ow(pattern, ow.string.label('pattern').nonEmpty);
		ow(keepJunk, ow.boolean.label('keepJunk'));

		// Remove trailing slash
		const rootPath = root.replace(/(.*)(\/)$/, '$1');

		return klaw(rootPath, {
			nodir:      false,
			nofile:     type === 'dir',
			depthLimit: recursive ? -1 : type === 'file' ? 0 : 1
		})
			.filter(({ path:curr, stats }) => {
				const file     = curr.split(path.sep).pop();
				const relative = curr.substring(rootPath.length + 1);

				return (
					(type === 'dir' || (type === 'file' && !stats.isDirectory())) &&
					(keepJunk || (!keepJunk && junk.not(file) && !['.gitkeep'].includes(file))) &&
					minimatch(relative, pattern, { dot:true, matchBase:true })
				);
			})
			.map((item) => {
				return fullPath ? item.path : item.path.substring(rootPath.length + 1);
			})
		;
	}
};
