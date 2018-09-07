# @absolunet/fsp

[![npm](https://img.shields.io/npm/v/@absolunet/fsp.svg)](https://www.npmjs.com/package/@absolunet/fsp)
[![npm dependencies](https://david-dm.org/absolunet/node-fsp/status.svg)](https://david-dm.org/absolunet/node-fsp)
[![npms](https://badges.npms.io/%40absolunet%2Ffsp.svg)](https://npms.io/search?q=%40absolunet%2Ffsp)
[![Travis CI](https://api.travis-ci.org/absolunet/node-fsp.svg?branch=master)](https://travis-ci.org/absolunet/node-fsp/builds)
[![Code style](https://img.shields.io/badge/code_style-@absolunet/node-659d32.svg)](https://github.com/absolunet/eslint-config-node)

> graceful-fs / fs-extra promise wrapper with goodies


## Install

```sh
$ npm install @absolunet/fsp
```


## Usage

```js
const fsp = require('@absolunet/fsp');

fsp.chmodPattern('/path1/path2/**/*.js', 0o775).then(() => {
	console.log('Yeah!');
});
```


## API

> `fs` is [graceful-fs](https://github.com/isaacs/node-graceful-fs)

> `fse` is [fs-extra](https://github.com/jprichardson/node-fs-extra)


<!-- access -->
### access
Maps [`fs.promises.access`](https://nodejs.org/api/fs.html#fs_fspromises_access_path_mode)


<!-- appendFile -->
### appendFile
Maps [`fs.promises.appendFile`](https://nodejs.org/api/fs.html#fs_fspromises_appendfile_path_data_options)


<!-- chmod -->
### chmod
Maps [`fs.promises.chmod`](https://nodejs.org/api/fs.html#fs_fspromises_chmod_path_mode)


<!-- chmodPattern -->
### chmodPattern(pattern, mode *[, options]*)
Applies [`fs.chmod`](https://nodejs.org/api/fs.html#fs_fs_chmod_path_mode_callback) for matching [`glob`](https://www.npmjs.com/package/glob) pattern file/dir.

#### pattern
*Required*<br>
Type: `String`<br>
glob pattern.

#### mode
*Required*<br>
Type: `Number`<br>
File mode.

#### options
Type: `Object`<br>
glob [options](https://www.npmjs.com/package/glob#options).


<!-- chown -->
### chown
Maps [`fs.promises.chown`](https://nodejs.org/api/fs.html#fs_fspromises_chown_path_uid_gid)


<!-- compressFile -->
### compressFile(source *[, destination]*)
Compresses file using gzip
`Promise` returns destination

#### source
*Required*<br>
Type: `String`<br>
Path of file to compress.

#### destination
Type: `String`<br>
Default: Same as source with a `.gz` added at the end<br>
Path of file when compressed.


<!-- copy -->
### copy
Maps [`fse.copy`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/copy.md)


<!-- copyFile -->
### copyFile
Maps [`fs.promises.copyFile`](https://nodejs.org/api/fs.html#fs_fspromises_copyfile_src_dest_flags)


<!-- decompressFile -->
### decompressFile(source *[, destination]*)
Decompresses file using gzip
`Promise` returns destination

#### source
*Required*<br>
Type: `String`<br>
Path of file to decompress.

#### destination
Type: `String`<br>
Default: Same as source with the `.gz` removed at the end<br>
Path of file when decompressed.


<!-- emptyDir -->
### emptyDir
Maps [`fse.emptyDir`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/emptyDir.md)


<!-- ensureDir -->
### ensureDir
Maps [`fse.ensureDir`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureDir.md)


<!-- ensureFile -->
### ensureFile
Maps [`fse.ensureFile`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureFile.md)


<!-- ensureLink -->
### ensureLink
Maps [`fse.ensureLink`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureLink.md)


<!-- ensureSymlink -->
### ensureSymlink
Maps [`fse.ensureSymlink`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureSymlink.md)


<!-- lchmod -->
### lchmod
Maps [`fs.promises.lchmod`](https://nodejs.org/api/fs.html#fs_fspromises_lchmod_path_mode)


<!-- lchown -->
### lchown
Maps [`fs.promises.lchown`](https://nodejs.org/api/fs.html#fs_fspromises_lchown_path_uid_gid)


<!-- link -->
### link
Maps [`fs.promises.link`](https://nodejs.org/api/fs.html#fs_fspromises_link_existingpath_newpath)


<!-- lstat -->
### lstat
Maps [`fs.promises.lstat`](https://nodejs.org/api/fs.html#fs_fspromises_lstat_path_options)


<!-- mergeFiles -->
### mergeFiles(sources, destination)
Merge multiple files into a single file

#### sources
*Required*<br>
Type: `Array` of `String`<br>
Path of files to merge.

#### destination
*Required*<br>
Type: `String`<br>
Path of merged file. (If it ends with `.gz` it will be compressed using gzip)


<!-- mkdir -->
### mkdir
Maps [`fs.promises.mkdir`](https://nodejs.org/api/fs.html#fs_fspromises_mkdir_path_mode)


<!-- mkdirp -->
### mkdirp
Maps [`fse.mkdirp`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureDir.md)


<!-- mkdirs -->
### mkdirs
Maps [`fse.mkdirs`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureDir.md)


<!-- mkdtemp -->
### mkdtemp
Maps [`fs.promises.mkdtemp`](https://nodejs.org/api/fs.html#fs_fspromises_mkdtemp_prefix_options)


<!-- move -->
### move
Maps [`fse.move`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/move.md)


<!-- open -->
### open
Maps [`fs.promises.open`](https://nodejs.org/api/fs.html#fs_fspromises_open_path_flags_mode)


<!-- outputCompressed -->
### outputCompressed(file, content)
Almost the same as writeCompressed, except that if the directory does not exist, it's created.

#### file
*Required*<br>
Type: `String`<br>
Path of file to write.

#### content
*Required*<br>
Type: `String`<br>
Content to write.


<!-- outputFile -->
### outputFile
Maps [`fse.outputFile`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/outputFile.md)


<!-- outputJson -->
### outputJson(file, object *[, options]*)
Almost the same as writeJson, except that if the directory does not exist, it's created.

#### file
*Required*<br>
Type: `String`<br>
Path of file to write. (If it ends with `.gz` it will be compressed using gzip)

#### object
*Required*<br>
Type: `Object`<br>
Object to write.

#### options.replacer
Type: `Function`<br>
JSON.stringify [replacer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Syntax).

#### options.space
Type: `String` or `Number`<br>
JSON.stringify [space](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Syntax).


<!-- outputXml -->
### outputXml(file, object *[, options]*)
Almost the same as writeXml, except that if the directory does not exist, it's created.

#### file
*Required*<br>
Type: `String`<br>
Path of file to write. (If it ends with `.gz` it will be compressed using gzip)

#### object
*Required*<br>
Type: `Object`<br>
Object to write.

#### options
Type: `Object`<br>
xml2js.Builder().buildObject [options](https://github.com/Leonidas-from-XIV/node-xml2js#options-for-the-builder-class).


<!-- outputYaml -->
### outputYaml(file, object)
Almost the same as writeYaml, except that if the directory does not exist, it's created.

#### file
*Required*<br>
Type: `String`<br>
Path of file to write. (If it ends with `.gz` it will be compressed using gzip)

#### object
*Required*<br>
Type: `Object`<br>
Object to write.


<!-- pathExists -->
### pathExists
Maps [`fse.pathExists`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/pathExists.md)


<!-- readCompressed -->
### readCompressed(file)
Reads and decompresses file using gzip.
`Promise` returns an `String`

#### file
*Required*<br>
Type: `String`<br>
Path of file to read.


<!-- readdir -->
### readdir
Maps [`fs.promises.readdir`](https://nodejs.org/api/fs.html#fs_fspromises_readdir_path_options)


<!-- readFile -->
### readFile
Maps [`fs.promises.readFile`](https://nodejs.org/api/fs.html#fs_fspromises_readfile_path_options)


<!-- readJson -->
### readJson(file *[, reviver]*)
Reads a JSON file and then parses it into an object.<br>
`Promise` returns an `Object`

#### file
*Required*<br>
Type: `String`<br>
Path of file to read. (If it ends with `.gz` it will be decompressed using gzip)

#### reviver
Type: `Function`<br>
JSON.parse [reviver](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#Syntax).


<!-- readlink -->
### readlink
Maps [`fs.promises.readlink`](https://nodejs.org/api/fs.html#fs_fspromises_readlink_path_options)


<!-- readXml -->
### readXml(file *[, options]*)
Reads a XML file and then parses it into an object.<br>
`Promise` returns an `Object`

#### file
*Required*<br>
Type: `String`<br>
Path of file to read. (If it ends with `.gz` it will be decompressed using gzip)

#### options
Type: `Object`<br>
xml2js.parseString [options](https://github.com/Leonidas-from-XIV/node-xml2js#options).


<!-- readYaml -->
### readYaml(file)
Reads a YAML file and then parses it into an object.<br>
`Promise` returns an `Object`

#### file
*Required*<br>
Type: `String`<br>
Path of file to read. (If it ends with `.gz` it will be decompressed using gzip)


<!-- realpath -->
### realpath
Maps [`fs.promises.realpath`](https://nodejs.org/api/fs.html#fs_fspromises_realpath_path_options)


<!-- remove -->
### remove
Maps [`fse.remove`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/remove.md)


<!-- rename -->
### rename
Maps [`fs.promises.rename`](https://nodejs.org/api/fs.html#fs_fspromises_rename_oldpath_newpath)


<!-- rmdir -->
### rmdir
Maps [`fs.promises.rmdir`](https://nodejs.org/api/fs.html#fs_fspromises_rmdir_path)


<!-- stat -->
### stat
Maps [`fs.promises.stat`](https://nodejs.org/api/fs.html#fs_fspromises_stat_path_options)


<!-- symlink -->
### symlink
Maps [`fs.promises.symlink`](https://nodejs.org/api/fs.html#fs_fspromises_symlink_target_path_type)


<!-- truncate -->
### truncate
Maps [`fs.promises.truncate`](https://nodejs.org/api/fs.html#fs_fspromises_truncate_path_len)


<!-- unlink -->
### unlink
Maps [`fs.promises.unlink`](https://nodejs.org/api/fs.html#fs_fspromises_unlink_path)


<!-- utimes -->
### utimes
Maps [`fs.promises.utimes`](https://nodejs.org/api/fs.html#fs_fspromises_utimes_path_atime_mtime)


<!-- writeCompressed -->
### writeCompressed(file, content)
Compresses and writes content to file using gzip.

#### file
*Required*<br>
Type: `String`<br>
Path of file to write.

#### content
*Required*<br>
Type: `String`<br>
Content to write.


<!-- writeFile -->
### writeFile
Maps [`fs.promises.writeFile`](https://nodejs.org/api/fs.html#fs_fspromises_writefile_file_data_options)


<!-- writeJson -->
### writeJson(file, content *[, options]*)
Writes an object to a JSON file.

#### file
*Required*<br>
Type: `String`<br>
Path of file to write. (If it ends with `.gz` it will be compressed using gzip)

#### object
*Required*<br>
Type: `Object`<br>
Object to write.

#### options.replacer
Type: `Function`<br>
JSON.stringify [replacer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Syntax).

#### options.space
Type: `String` or `Number`<br>
JSON.stringify [space](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Syntax).


<!-- writeXml -->
### writeXml(file, content *[, options]*)
Writes an object to a XML file.

#### file
*Required*<br>
Type: `String`<br>
Path of file to write. (If it ends with `.gz` it will be compressed using gzip)

#### object
*Required*<br>
Type: `Object`<br>
Object to write.

#### options
Type: `Object`<br>
xml2js.Builder().buildObject [options](https://github.com/Leonidas-from-XIV/node-xml2js#options-for-the-builder-class).


<!-- writeYaml -->
### writeYaml(file, object)
Writes an object to a YAML file.

#### file
*Required*<br>
Type: `String`<br>
Path of file to write. (If it ends with `.gz` it will be compressed using gzip)

#### object
*Required*<br>
Type: `Object`<br>
Object to write.



## License

MIT © [Absolunet](https://absolunet.com)
