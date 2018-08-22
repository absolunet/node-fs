//--------------------------------------------------------
//-- File System Promise
//--------------------------------------------------------
'use strict';

const async      = require('async');
const fs         = require('fs');
const fsExtra    = require('fs-extra');
const glob       = require('glob');
const gracefulFs = require('graceful-fs');
const ow         = require('ow');


module.exports = {

	access:     gracefulFs.promises.access,
	appendFile: gracefulFs.promises.appendFile,
	chmod:      gracefulFs.promises.chmod,
	chown:      gracefulFs.promises.chown,
	copyFile:   gracefulFs.promises.copyFile,
	lchmod:     gracefulFs.promises.lchmod,
	lchown:     gracefulFs.promises.lchown,
	link:       gracefulFs.promises.link,
	lstat:      gracefulFs.promises.lstat,
	mkdir:      gracefulFs.promises.mkdir,
	mkdtemp:    gracefulFs.promises.mkdtemp,
	open:       gracefulFs.promises.open,
	readdir:    gracefulFs.promises.readdir,
	readFile:   gracefulFs.promises.readFile,
	readlink:   gracefulFs.promises.readlink,
	realpath:   gracefulFs.promises.realpath,
	rename:     gracefulFs.promises.rename,
	rmdir:      gracefulFs.promises.rmdir,
	stat:       gracefulFs.promises.stat,
	symlink:    gracefulFs.promises.symlink,
	truncate:   gracefulFs.promises.truncate,
	unlink:     gracefulFs.promises.unlink,
	utimes:     gracefulFs.promises.utimes,
	writeFile:  gracefulFs.promises.writeFile,

	copy:          fsExtra.copy,
	emptyDir:      fsExtra.emptyDir,
	ensureFile:    fsExtra.ensureFile,
	ensureDir:     fsExtra.ensureDir,
	ensureLink:    fsExtra.ensureLink,
	ensureSymlink: fsExtra.ensureSymlink,
	mkdirp:        fsExtra.mkdirp,
	mkdirs:        fsExtra.mkdirs,
	move:          fsExtra.move,
	outputFile:    fsExtra.outputFile,
	outputJson:    fsExtra.outputJson,
	pathExists:    fsExtra.pathExists,
	readJson:      fsExtra.readJson,
	remove:        fsExtra.remove,
	writeJson:     fsExtra.writeJson,

	chmodPattern: (pattern, mode, options) => {
		ow(pattern, ow.string.label('pattern').nonEmpty);
		ow(mode, ow.number.integer.positive.finite.label('mode'));
		ow(options, ow.any(ow.undefined.label('options'), ow.object.label('options')));

		return new Promise((resolve) => {

			glob(pattern, options, (err, matches) => {
				if (!err) {
					async.every(matches, (match, cb) => {
						fs.chmod(match, mode, cb);
					}, () => {
						resolve();
					});
				} else {
					throw new Error(err);
				}
			});

		});
	}
};
