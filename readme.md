# @absolunet/fss

[![npm](https://img.shields.io/npm/v/@absolunet/fss.svg)](https://www.npmjs.com/package/@absolunet/fss)
[![npm dependencies](https://david-dm.org/absolunet/node-fss/status.svg)](https://david-dm.org/absolunet/node-fss)
[![npms](https://badges.npms.io/%40absolunet%2Ffss.svg)](https://npms.io/search?q=%40absolunet%2Ffss)
[![Travis CI](https://api.travis-ci.org/absolunet/node-fss.svg?branch=master)](https://travis-ci.org/absolunet/node-fss/builds)
[![Code style](https://img.shields.io/badge/code_style-@absolunet/node-659d32.svg)](https://github.com/absolunet/eslint-config-node)

> graceful-fs / fs-extra sync wrapper


## Install

```sh
$ npm install @absolunet/fss
```


## Usage

```js
const fss = require('@absolunet/fss');

fss.move('/path1/path2/path3', '/path4');
```


## API mapper

> `fs` is [graceful-fs](https://github.com/isaacs/node-graceful-fs)

> `fse` is [fs-extra](https://github.com/jprichardson/node-fs-extra)


### access
Maps [`fs.accessSync`](https://nodejs.org/api/fs.html#fs_fs_accesssync_path_mode)

### appendFile
Maps [`fs.appendFileSync`](https://nodejs.org/api/fs.html#fs_fs_appendfilesync_path_data_options)

### chmod
Maps [`fs.chmodSync`](https://nodejs.org/api/fs.html#fs_fs_chmodsync_path_mode)

### chown
Maps [`fs.chownSync`](https://nodejs.org/api/fs.html#fs_fs_chownsync_path_uid_gid)

### close
Maps [`fs.closeSync`](https://nodejs.org/api/fs.html#fs_fs_closesync_fd)

### copy
Maps [`fse.copySync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/copy-sync.md)

### copyFile
Maps [`fs.copyFileSync`](https://nodejs.org/api/fs.html#fs_fs_copyfilesync_src_dest_flags)

### emptyDir
Maps [`fse.emptyDirSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/emptyDir-sync.md)

### ensureFile
Maps [`fse.ensureFileSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureFile-sync.md)

### ensureDir
Maps [`fse.ensureDirSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureDir-sync.md)

### ensureLink
Maps [`fse.ensureLinkSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureLink-sync.md)

### ensureSymlink
Maps [`fse.ensureSymlinkSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureSymlink-sync.md)

### exists
Maps [`fs.existsSync`](https://nodejs.org/api/fs.html#fs_fs_existssync_path)

### fchmod
Maps [`fs.fchmodSync`](https://nodejs.org/api/fs.html#fs_fs_fchmodsync_fd_mode)

### fchown
Maps [`fs.fchownSync`](https://nodejs.org/api/fs.html#fs_fs_fchownsync_fd_uid_gid)

### fdatasync
Maps [`fs.fdatasyncSync`](https://nodejs.org/api/fs.html#fs_fs_fdatasyncsync_fd)

### fstat
Maps [`fs.fstatSync`](https://nodejs.org/api/fs.html#fs_fs_fstatsync_fd_options)

### fsync
Maps [`fs.fsyncSync`](https://nodejs.org/api/fs.html#fs_fs_fsyncsync_fd)

### ftruncate
Maps [`fs.ftruncateSync`](https://nodejs.org/api/fs.html#fs_fs_ftruncatesync_fd_len)

### futimes
Maps [`fs.futimesSync`](https://nodejs.org/api/fs.html#fs_fs_futimessync_fd_atime_mtime)

### lchmod
Maps [`fs.lchmodSync`](https://nodejs.org/api/fs.html#fs_fs_lchmodsync_path_mode)

### lchown
Maps [`fs.lchownSync`](https://nodejs.org/api/fs.html#fs_fs_lchownsync_path_uid_gid)

### link
Maps [`fs.linkSync`](https://nodejs.org/api/fs.html#fs_fs_linksync_existingpath_newpath)

### lstat
Maps [`fs.lstatSync`](https://nodejs.org/api/fs.html#fs_fs_lstatsync_path_options)

### mkdir
Maps [`fs.mkdirSync`](https://nodejs.org/api/fs.html#fs_fs_mkdirsync_path_mode)

### mkdirp
Maps [`fse.mkdirpSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureDir-sync.md)

### mkdirs
Maps [`fse.mkdirsSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureDir-sync.md)

### mkdtemp
Maps [`fs.mkdtempSync`](https://nodejs.org/api/fs.html#fs_fs_mkdtempsync_prefix_options)

### move
Maps [`fse.moveSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/move-sync.md)

### open
Maps [`fs.openSync`](https://nodejs.org/api/fs.html#fs_fs_opensync_path_flags_mode)

### outputFile
Maps [`fse.outputFileSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/outputFile-sync.md)

### outputJson
Maps [`fse.outputJsonSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/outputJson-sync.md)

### pathExists
Maps [`fse.pathExistsSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/pathExists-sync.md)

### readdir
Maps [`fs.readdirSync`](https://nodejs.org/api/fs.html#fs_fs_readdirsync_path_options)

### readFile
Maps [`fs.readFileSync`](https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options)

### readlink
Maps [`fs.readlinkSync`](https://nodejs.org/api/fs.html#fs_fs_readlinksync_path_options)

### read
Maps [`fs.readSync`](https://nodejs.org/api/fs.html#fs_fs_readsync_fd_buffer_offset_length_position)

### readJson
Maps [`fse.readJsonSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/readJson-sync.md)

### realpath
Maps [`fs.realpathSync`](https://nodejs.org/api/fs.html#fs_fs_realpathsync_path_options)

### realpath.native
Maps [`fs.realpathSync.native`](https://nodejs.org/api/fs.html#fs_fs_realpathsync_native_path_options)

### rename
Maps [`fs.renameSync`](https://nodejs.org/api/fs.html#fs_fs_renamesync_oldpath_newpath)

### remove
Maps [`fse.removeSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/remove-sync.md)

### rmdir
Maps [`fs.rmdirSync`](https://nodejs.org/api/fs.html#fs_fs_rmdirsync_path)

### stat
Maps [`fs.statSync`](https://nodejs.org/api/fs.html#fs_fs_statsync_path_options)

### symlink
Maps [`fs.symlinkSync`](https://nodejs.org/api/fs.html#fs_fs_symlinksync_target_path_type)

### truncate
Maps [`fs.truncateSync`](https://nodejs.org/api/fs.html#fs_fs_truncatesync_path_len)

### unlink
Maps [`fs.unlinkSync`](https://nodejs.org/api/fs.html#fs_fs_unlinksync_path)

### utimes
Maps [`fs.utimesSync`](https://nodejs.org/api/fs.html#fs_fs_utimessync_path_atime_mtime)

### writeFile
Maps [`fs.writeFileSync`](https://nodejs.org/api/fs.html#fs_fs_writefilesync_file_data_options)

### write
Maps [`fs.writeSync`](https://nodejs.org/api/fs.html#fs_fs_writesync_fd_buffer_offset_length_position)

### writeJson
Maps [`fse.writeJsonSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/writeJson-sync.md)



## API custom

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



## License

MIT © [Absolunet](https://absolunet.com)
