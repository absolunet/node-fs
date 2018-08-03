//--------------------------------------------------------
//-- File System Sync
//--------------------------------------------------------
'use strict';

const del       = require('del');
const fs        = require('fs');
const fsExtra   = require('fs-extra');
const junk      = require('junk');
const klaw      = require('klaw-sync');
const minimatch = require('minimatch');
const ow        = require('ow');
const path      = require('path');


module.exports = {
	chmod:     fs.chmodSync,
	chown:     fs.chownSync,
	exists:    fs.existsSync,
	readdir:   fs.readdirSync,
	readFile:  fs.readFileSync,
	realpath:  fs.realpathSync,
	stat:      fs.statSync,
	symlink:   fs.symlinkSync,
	writeFile: fs.writeFileSync,

	copy:       fsExtra.copySync,
	ensureDir:  fsExtra.ensureDirSync,
	outputFile: fsExtra.outputFileSync,
	remove:     fsExtra.removeSync,

	del: del.sync,

	move: (src, dest, options) => {
		ow(src, ow.string.label('src').nonEmpty);
		ow(dest, ow.string.label('dest').nonEmpty);
		ow(options, ow.any(ow.undefined, ow.object.label('options')));

		fsExtra.copySync(src, dest, options);
		fsExtra.removeSync(src);
	},

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
