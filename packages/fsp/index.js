//--------------------------------------------------------
//-- File System Promise
//--------------------------------------------------------
'use strict';

const fsExtra     = require('fs-extra');
const gracefulFs  = require('graceful-fs');
const compression = require('./lib/compression');
const misc        = require('./lib/misc');
const xml         = require('./lib/xml');
const yaml        = require('./lib/yaml');


module.exports = {

	// Written this way to escape ExperimentalWarning
	access:     () => { return gracefulFs.promises.access; },
	appendFile: () => { return gracefulFs.promises.appendFile; },
	chmod:      () => { return gracefulFs.promises.chmod; },
	chown:      () => { return gracefulFs.promises.chown; },
	copyFile:   () => { return gracefulFs.promises.copyFile; },
	lchmod:     () => { return gracefulFs.promises.lchmod; },
	lchown:     () => { return gracefulFs.promises.lchown; },
	link:       () => { return gracefulFs.promises.link; },
	lstat:      () => { return gracefulFs.promises.lstat; },
	mkdir:      () => { return gracefulFs.promises.mkdir; },
	mkdtemp:    () => { return gracefulFs.promises.mkdtemp; },
	open:       () => { return gracefulFs.promises.open; },
	readdir:    () => { return gracefulFs.promises.readdir; },
	readFile:   () => { return gracefulFs.promises.readFile; },
	readlink:   () => { return gracefulFs.promises.readlink; },
	realpath:   () => { return gracefulFs.promises.realpath; },
	rename:     () => { return gracefulFs.promises.rename; },
	rmdir:      () => { return gracefulFs.promises.rmdir; },
	stat:       () => { return gracefulFs.promises.stat; },
	symlink:    () => { return gracefulFs.promises.symlink; },
	truncate:   () => { return gracefulFs.promises.truncate; },
	unlink:     () => { return gracefulFs.promises.unlink; },
	utimes:     () => { return gracefulFs.promises.utimes; },
	writeFile:  () => { return gracefulFs.promises.writeFile; },

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

	compressFile:   compression.compress,
	decompressFile: compression.decompress,

	readXml:   xml.read,
	writeXml:  xml.write,
	outputXml: xml.output,

	readYaml:   yaml.read,
	writeYaml:  yaml.write,
	outputYaml: yaml.output,

	mergeFiles:   misc.mergeFiles,
	chmodPattern: misc.chmodPattern
};
