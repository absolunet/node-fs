# @absolunet/fss

[![npm](https://img.shields.io/npm/v/@absolunet/fss.svg)](https://www.npmjs.com/package/@absolunet/fss)
[![npm dependencies](https://david-dm.org/absolunet/node-fss/status.svg)](https://david-dm.org/absolunet/node-fss)
[![npms](https://badges.npms.io/%40absolunet%2Ffss.svg)](https://npms.io/search?q=%40absolunet%2Ffss)
[![Travis CI](https://api.travis-ci.org/absolunet/node-fss.svg?branch=master)](https://travis-ci.org/absolunet/node-fss/builds)
[![Code style](https://img.shields.io/badge/code_style-@absolunet/node-659d32.svg)](https://github.com/absolunet/eslint-config-node)

> graceful-fs / fs-extra sync wrapper with goodies


## Install

```sh
$ npm install @absolunet/fss
```


## Usage

```js
const fss = require('@absolunet/fss');

fss.move('/path1/path2/path3', '/path4');
```


## API

> `fs` is [graceful-fs](https://github.com/isaacs/node-graceful-fs)

> `fse` is [fs-extra](https://github.com/jprichardson/node-fs-extra)



<!-- access -->
### access
Maps [`fs.accessSync`](https://nodejs.org/api/fs.html#fs_fs_accesssync_path_mode)


<!-- appendFile -->
### appendFile
Maps [`fs.appendFileSync`](https://nodejs.org/api/fs.html#fs_fs_appendfilesync_path_data_options)


<!-- chmod -->
### chmod
Maps [`fs.chmodSync`](https://nodejs.org/api/fs.html#fs_fs_chmodsync_path_mode)


<!-- chown -->
### chown
Maps [`fs.chownSync`](https://nodejs.org/api/fs.html#fs_fs_chownsync_path_uid_gid)


<!-- close -->
### close
Maps [`fs.closeSync`](https://nodejs.org/api/fs.html#fs_fs_closesync_fd)


<!-- compressFile -->
### compressFile(source *[, destination]*)
Compresses file using gzip
Return `String` destination

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
Maps [`fse.copySync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/copy-sync.md)


<!-- copyFile -->
### copyFile
Maps [`fs.copyFileSync`](https://nodejs.org/api/fs.html#fs_fs_copyfilesync_src_dest_flags)


<!-- decompressFile -->
### decompressFile(source *[, destination]*)
Decompresses file using gzip
Return `String` destination

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
Maps [`fse.emptyDirSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/emptyDir-sync.md)


<!-- ensureDir -->
### ensureDir
Maps [`fse.ensureDirSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureDir-sync.md)


<!-- ensureFile -->
### ensureFile
Maps [`fse.ensureFileSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureFile-sync.md)


<!-- ensureLink -->
### ensureLink
Maps [`fse.ensureLinkSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureLink-sync.md)


<!-- ensureSymlink -->
### ensureSymlink
Maps [`fse.ensureSymlinkSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureSymlink-sync.md)


<!-- exists -->
### exists
Maps [`fs.existsSync`](https://nodejs.org/api/fs.html#fs_fs_existssync_path)


<!-- fchmod -->
### fchmod
Maps [`fs.fchmodSync`](https://nodejs.org/api/fs.html#fs_fs_fchmodsync_fd_mode)


<!-- fchown -->
### fchown
Maps [`fs.fchownSync`](https://nodejs.org/api/fs.html#fs_fs_fchownsync_fd_uid_gid)


<!-- fdatasync -->
### fdatasync
Maps [`fs.fdatasyncSync`](https://nodejs.org/api/fs.html#fs_fs_fdatasyncsync_fd)


<!-- fstat -->
### fstat
Maps [`fs.fstatSync`](https://nodejs.org/api/fs.html#fs_fs_fstatsync_fd_options)


<!-- fsync -->
### fsync
Maps [`fs.fsyncSync`](https://nodejs.org/api/fs.html#fs_fs_fsyncsync_fd)


<!-- ftruncate -->
### ftruncate
Maps [`fs.ftruncateSync`](https://nodejs.org/api/fs.html#fs_fs_ftruncatesync_fd_len)


<!-- futimes -->
### futimes
Maps [`fs.futimesSync`](https://nodejs.org/api/fs.html#fs_fs_futimessync_fd_atime_mtime)


<!-- lchmod -->
### lchmod
Maps [`fs.lchmodSync`](https://nodejs.org/api/fs.html#fs_fs_lchmodsync_path_mode)


<!-- lchown -->
### lchown
Maps [`fs.lchownSync`](https://nodejs.org/api/fs.html#fs_fs_lchownsync_path_uid_gid)


<!-- link -->
### link
Maps [`fs.linkSync`](https://nodejs.org/api/fs.html#fs_fs_linksync_existingpath_newpath)


<!-- lstat -->
### lstat
Maps [`fs.lstatSync`](https://nodejs.org/api/fs.html#fs_fs_lstatsync_path_options)


<!-- mkdir -->
### mkdir
Maps [`fs.mkdirSync`](https://nodejs.org/api/fs.html#fs_fs_mkdirsync_path_mode)


<!-- mkdirp -->
### mkdirp
Maps [`fse.mkdirpSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureDir-sync.md)


<!-- mkdirs -->
### mkdirs
Maps [`fse.mkdirsSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureDir-sync.md)


<!-- mkdtemp -->
### mkdtemp
Maps [`fs.mkdtempSync`](https://nodejs.org/api/fs.html#fs_fs_mkdtempsync_prefix_options)


<!-- move -->
### move
Maps [`fse.moveSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/move-sync.md)


<!-- open -->
### open
Maps [`fs.openSync`](https://nodejs.org/api/fs.html#fs_fs_opensync_path_flags_mode)


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
Maps [`fse.outputFileSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/outputFile-sync.md)


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
Maps [`fse.pathExistsSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/pathExists-sync.md)


<!-- read -->
### read
Maps [`fs.readSync`](https://nodejs.org/api/fs.html#fs_fs_readsync_fd_buffer_offset_length_position)


<!-- readCompressed -->
### readCompressed(file)
Reads and decompresses file using gzip.<br>
Return `String`

#### file
*Required*<br>
Type: `String`<br>
Path of file to read.


<!-- readdir -->
### readdir
Maps [`fs.readdirSync`](https://nodejs.org/api/fs.html#fs_fs_readdirsync_path_options)


<!-- readFile -->
### readFile
Maps [`fs.readFileSync`](https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options)


<!-- readJson -->
### readJson(file *[, reviver]*)
Reads a JSON file and then parses it into an object.<br>
Return `Object`

#### file
*Required*<br>
Type: `String`<br>
Path of file to read. (If it ends with `.gz` it will be decompressed using gzip)

#### reviver
Type: `Function`<br>
JSON.parse [reviver](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#Syntax).


<!-- readlink -->
### readlink
Maps [`fs.readlinkSync`](https://nodejs.org/api/fs.html#fs_fs_readlinksync_path_options)


<!-- readXml -->
### readXml(file *[, options]*)
Reads a XML file and then parses it into an object.<br>
Return `Object`

#### file
*Required*<br>
Type: `String`<br>
Path of file to read. (If it ends with `.gz` it will be decompressed using gzip)

#### options
Type: `Object`<br>
xml2jsParser.parseStringSync [options](https://github.com/vavere/xml2js-parser#options).


<!-- readYaml -->
### readYaml(file)
Reads a YAML file and then parses it into an object.<br>
Return `Object`

#### file
*Required*<br>
Type: `String`<br>
Path of file to read. (If it ends with `.gz` it will be decompressed using gzip)


<!-- realpath -->
### realpath
Maps [`fs.realpathSync`](https://nodejs.org/api/fs.html#fs_fs_realpathsync_path_options)


<!-- realpath.native -->
### realpath.native
Maps [`fs.realpathSync.native`](https://nodejs.org/api/fs.html#fs_fs_realpathsync_native_path_options)


<!-- remove -->
### remove
Maps [`fse.removeSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/remove-sync.md)

<!-- rename -->
### rename
Maps [`fs.renameSync`](https://nodejs.org/api/fs.html#fs_fs_renamesync_oldpath_newpath)


<!-- rmdir -->
### rmdir
Maps [`fs.rmdirSync`](https://nodejs.org/api/fs.html#fs_fs_rmdirsync_path)


<!-- scandir -->
### scandir(root, type, [options])
Uses [klaw-sync](https://github.com/manidlou/node-klaw-sync) to scan directory for files or directories.<br>
Return `Array` of files / directories

#### root
*Required*<br>
Type: `string`<br>
Path of directory to scan.

#### type
*Required*<br>
Type: `string`<br>
Scan for `file` or `dir`

#### options.recursive
Type: `Boolean`<br>
Scan in subdirectories<br>
*Default: false*

#### options.fullPath
Type: `String`<br>
Return full absolute path instead of relative path from scanned directory<br>
*Default: false*

#### options.pattern
Type: `String`<br>
Filter results with [minimatch](https://github.com/isaacs/minimatch) pattern<br>
*Default: '\*\*'*

#### options.keepJunk
Type: `Boolean`<br>
Keep [junk](https://github.com/sindresorhus/junk) files (also filters out `.gitkeep`)<br>
*Default: false*


<!-- stat -->
### stat
Maps [`fs.statSync`](https://nodejs.org/api/fs.html#fs_fs_statsync_path_options)


<!-- symlink -->
### symlink
Maps [`fs.symlinkSync`](https://nodejs.org/api/fs.html#fs_fs_symlinksync_target_path_type)


<!-- truncate -->
### truncate
Maps [`fs.truncateSync`](https://nodejs.org/api/fs.html#fs_fs_truncatesync_path_len)


<!-- unlink -->
### unlink
Maps [`fs.unlinkSync`](https://nodejs.org/api/fs.html#fs_fs_unlinksync_path)


<!-- utimes -->
### utimes
Maps [`fs.utimesSync`](https://nodejs.org/api/fs.html#fs_fs_utimessync_path_atime_mtime)


<!-- write -->
### write
Maps [`fs.writeSync`](https://nodejs.org/api/fs.html#fs_fs_writesync_fd_buffer_offset_length_position)


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
Maps [`fs.writeFileSync`](https://nodejs.org/api/fs.html#fs_fs_writefilesync_file_data_options)


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
