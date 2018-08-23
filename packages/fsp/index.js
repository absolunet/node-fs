//--------------------------------------------------------
//-- File System Promise
//--------------------------------------------------------
'use strict';

const async      = require('async');
const fs         = require('fs');
const fsExtra    = require('fs-extra');
const glob       = require('glob');
const gracefulFs = require('graceful-fs');
const yaml       = require('js-yaml');
const ow         = require('ow');
const path       = require('path');


const writeYaml = (file, object) => {
	return new Promise((resolve, reject) => {
		try {
			gracefulFs.writeFile(file, yaml.safeDump(object), (err) => {
				if (!err) {
					resolve();
				} else {
					reject(err);
				}
			});
		} catch (error) {
			reject(error);
		}
	});
};






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


	//-- YAML
	readYaml: (file) => {
		ow(file, ow.string.label('file').nonEmpty);

		return new Promise((resolve, reject) => {
			gracefulFs.readFile(file, 'utf8', (err, data) => {
				if (!err) {
					try {
						resolve(yaml.safeLoad(data));
					} catch (error) {
						reject(error);
					}
				} else {
					reject(err);
				}
			});
		});
	},


	writeYaml: (file, object) => {
		ow(file,   ow.string.label('file').nonEmpty);
		ow(object, ow.object.label('object'));

		return writeYaml(file, object);
	},


	outputYaml: (file, object) => {
		ow(file,   ow.string.label('file').nonEmpty);
		ow(object, ow.object.label('object'));

		return new Promise((resolve, reject) => {
			const dir = path.dirname(file);

			fsExtra.pathExists(dir, (err, exists) => {
				if (!err) {
					if (exists) {
						writeYaml(file, object).then(resolve, reject);
					} else {

						fsExtra.mkdirs(dir, (err2) => {
							if (!err2) {
								writeYaml(file, object).then(resolve, reject);
							} else {
								reject(err2);
							}
						});
					}
				} else {
					reject(err);
				}
			});
		});
	},


	//-- chmodPattern
	chmodPattern: (pattern, mode, options) => {
		ow(pattern, ow.string.label('pattern').nonEmpty);
		ow(mode, ow.number.integer.positive.finite.label('mode'));
		ow(options, ow.any(ow.undefined.label('options'), ow.object.label('options')));

		return new Promise((resolve, reject) => {

			glob(pattern, options, (err, matches) => {
				if (!err) {
					async.every(matches, (match, cb) => {
						fs.chmod(match, mode, cb);
					}, () => {
						resolve();
					});
				} else {
					reject(err);
				}
			});

		});
	}
};
