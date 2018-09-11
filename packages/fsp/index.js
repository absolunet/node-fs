//--------------------------------------------------------
//-- File System Promise
//--------------------------------------------------------
'use strict';

const fsExtra     = require('fs-extra');
const gracefulFs  = require('graceful-fs');
const compression = require('./lib/compression');
const json        = require('./lib/json');
const misc        = require('./lib/misc');
const xml         = require('./lib/xml');
const yaml        = require('./lib/yaml');


class Fsp {

	get access()     { return gracefulFs.promises.access; }
	get appendFile() { return gracefulFs.promises.appendFile; }
	get chmod()      { return gracefulFs.promises.chmod; }
	get chown()      { return gracefulFs.promises.chown; }
	get copyFile()   { return gracefulFs.promises.copyFile; }
	get lchmod()     { return gracefulFs.promises.lchmod; }
	get lchown()     { return gracefulFs.promises.lchown; }
	get link()       { return gracefulFs.promises.link; }
	get lstat()      { return gracefulFs.promises.lstat; }
	get mkdir()      { return gracefulFs.promises.mkdir; }
	get mkdtemp()    { return gracefulFs.promises.mkdtemp; }
	get open()       { return gracefulFs.promises.open; }
	get readdir()    { return gracefulFs.promises.readdir; }
	get readFile()   { return gracefulFs.promises.readFile; }
	get readlink()   { return gracefulFs.promises.readlink; }
	get realpath()   { return gracefulFs.promises.realpath; }
	get rename()     { return gracefulFs.promises.rename; }
	get rmdir()      { return gracefulFs.promises.rmdir; }
	get stat()       { return gracefulFs.promises.stat; }
	get symlink()    { return gracefulFs.promises.symlink; }
	get truncate()   { return gracefulFs.promises.truncate; }
	get unlink()     { return gracefulFs.promises.unlink; }
	get utimes()     { return gracefulFs.promises.utimes; }
	get writeFile()  { return gracefulFs.promises.writeFile; }

	get copy()          { return fsExtra.copy; }
	get emptyDir()      { return fsExtra.emptyDir; }
	get ensureFile()    { return fsExtra.ensureFile; }
	get ensureDir()     { return fsExtra.ensureDir; }
	get ensureLink()    { return fsExtra.ensureLink; }
	get ensureSymlink() { return fsExtra.ensureSymlink; }
	get mkdirp()        { return fsExtra.mkdirp; }
	get mkdirs()        { return fsExtra.mkdirs; }
	get move()          { return fsExtra.move; }
	get outputFile()    { return fsExtra.outputFile; }
	get pathExists()    { return fsExtra.pathExists; }
	get remove()        { return fsExtra.remove; }

	get readCompressed()   { return compression.read; }
	get writeCompressed()  { return compression.write; }
	get outputCompressed() { return compression.output; }
	get compressFile()     { return compression.compress; }
	get decompressFile()   { return compression.decompress; }

	get readJson()   { return json.read; }
	get writeJson()  { return json.write; }
	get outputJson() { return json.output; }

	get readXml()   { return xml.read; }
	get writeXml()  { return xml.write; }
	get outputXml() { return xml.output; }

	get readYaml()   { return yaml.read; }
	get writeYaml()  { return yaml.write; }
	get outputYaml() { return yaml.output; }

	get mergeFiles()   { return misc.mergeFiles; }
	get chmodPattern() { return misc.chmodPattern; }

}


module.exports = new Fsp();
