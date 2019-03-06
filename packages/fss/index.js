//--------------------------------------------------------
//-- File System Sync
//--------------------------------------------------------
'use strict';

const fsExtra     = require('fs-extra');
const gracefulFs  = require('graceful-fs');
const compression = require('./lib/compression');
const json        = require('./lib/json');
const json5       = require('./lib/json5');
const misc        = require('./lib/misc');
const xml         = require('./lib/xml');
const yaml        = require('./lib/yaml');


class Fss {

	get access()     { return gracefulFs.accessSync; }
	get appendFile() { return gracefulFs.appendFileSync; }
	get chmod()      { return gracefulFs.chmodSync; }
	get chown()      { return gracefulFs.chownSync; }
	get close()      { return gracefulFs.closeSync; }
	get copyFile()   { return gracefulFs.copyFileSync; }
	get exists()     { return gracefulFs.existsSync; }
	get fchmod()     { return gracefulFs.fchmodSync; }
	get fchown()     { return gracefulFs.fchownSync; }
	get fdatasync()  { return gracefulFs.fdatasyncSync; }
	get fstat()      { return gracefulFs.fstatSync; }
	get fsync()      { return gracefulFs.fsyncSync; }
	get ftruncate()  { return gracefulFs.ftruncateSync; }
	get futimes()    { return gracefulFs.futimesSync; }
	get lchmod()     { return gracefulFs.lchmodSync; }
	get lchown()     { return gracefulFs.lchownSync; }
	get link()       { return gracefulFs.linkSync; }
	get lstat()      { return gracefulFs.lstatSync; }
	get mkdir()      { return gracefulFs.mkdirSync; }
	get mkdtemp()    { return gracefulFs.mkdtempSync; }
	get open()       { return gracefulFs.openSync; }
	get readdir()    { return gracefulFs.readdirSync; }
	get readFile()   { return gracefulFs.readFileSync; }
	get readlink()   { return gracefulFs.readlinkSync; }
	get read()       { return gracefulFs.readSync; }
	get realpath()   { return gracefulFs.realpathSync; }
	get rename()     { return gracefulFs.renameSync; }
	get rmdir()      { return gracefulFs.rmdirSync; }
	get stat()       { return gracefulFs.statSync; }
	get symlink()    { return gracefulFs.symlinkSync; }
	get truncate()   { return gracefulFs.truncateSync; }
	get unlink()     { return gracefulFs.unlinkSync; }
	get utimes()     { return gracefulFs.utimesSync; }
	get writeFile()  { return gracefulFs.writeFileSync; }
	get write()      { return gracefulFs.writeSync; }

	get copy()          { return fsExtra.copySync; }
	get emptyDir()      { return fsExtra.emptyDirSync; }
	get ensureFile()    { return fsExtra.ensureFileSync; }
	get ensureDir()     { return fsExtra.ensureDirSync; }
	get ensureLink()    { return fsExtra.ensureLinkSync; }
	get ensureSymlink() { return fsExtra.ensureSymlinkSync; }
	get mkdirp()        { return fsExtra.mkdirpSync; }
	get mkdirs()        { return fsExtra.mkdirsSync; }
	get move()          { return fsExtra.moveSync; }
	get outputFile()    { return fsExtra.outputFileSync; }
	get pathExists()    { return fsExtra.pathExistsSync; }
	get remove()        { return fsExtra.removeSync; }

	get readCompressed()   { return compression.read; }
	get writeCompressed()  { return compression.write; }
	get outputCompressed() { return compression.output; }
	get compressFile()     { return compression.compress; }
	get decompressFile()   { return compression.decompress; }

	get readJson()   { return json.read; }
	get writeJson()  { return json.write; }
	get outputJson() { return json.output; }

	get readJson5()   { return json5.read; }
	get writeJson5()  { return json5.write; }
	get outputJson5() { return json5.output; }

	get readXml()   { return xml.read; }
	get writeXml()  { return xml.write; }
	get outputXml() { return xml.output; }

	get readYaml()   { return yaml.read; }
	get writeYaml()  { return yaml.write; }
	get outputYaml() { return yaml.output; }

	get scandir()        { return misc.scandir; }
	get removeEmptyDir() { return misc.removeEmptyDir; }
	get removePattern()  { return misc.removePattern; }

}


module.exports = new Fss();
