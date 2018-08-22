# @absolunet/fsp

[![npm](https://img.shields.io/npm/v/@absolunet/fsp.svg)](https://www.npmjs.com/package/@absolunet/fsp)
[![npm dependencies](https://david-dm.org/absolunet/node-fsp/status.svg)](https://david-dm.org/absolunet/node-fsp)
[![npms](https://badges.npms.io/%40absolunet%2Ffsp.svg)](https://npms.io/search?q=%40absolunet%2Ffsp)
[![Travis CI](https://api.travis-ci.org/absolunet/node-fsp.svg?branch=master)](https://travis-ci.org/absolunet/node-fsp/builds)
[![Code style](https://img.shields.io/badge/code_style-@absolunet/node-659d32.svg)](https://github.com/absolunet/eslint-config-node)

> graceful-fs / fs-extra promise wrapper


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


## API mapper

> `fs` is [graceful-fs](https://github.com/isaacs/node-graceful-fs)

> `fse` is [fs-extra](https://github.com/jprichardson/node-fs-extra)


### access
Maps [`fs.promises.access`](https://nodejs.org/api/fs.html#fs_fspromises_access_path_mode)

### appendFile
Maps [`fs.promises.appendFile`](https://nodejs.org/api/fs.html#fs_fspromises_appendfile_path_data_options)

### chmod
Maps [`fs.promises.chmod`](https://nodejs.org/api/fs.html#fs_fspromises_chmod_path_mode)

### chown
Maps [`fs.promises.chown`](https://nodejs.org/api/fs.html#fs_fspromises_chown_path_uid_gid)

### copy
Maps [`fse.copy`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/copy.md)

### copyFile
Maps [`fs.promises.copyFile`](https://nodejs.org/api/fs.html#fs_fspromises_copyfile_src_dest_flags)

### emptyDir
Maps [`fse.emptyDir`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/emptyDir.md)

### ensureFile
Maps [`fse.ensureFile`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureFile.md)

### ensureDir
Maps [`fse.ensureDir`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureDir.md)

### ensureLink
Maps [`fse.ensureLink`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureLink.md)

### ensureSymlink
Maps [`fse.ensureSymlink`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureSymlink.md)

### lchmod
Maps [`fs.promises.lchmod`](https://nodejs.org/api/fs.html#fs_fspromises_lchmod_path_mode)

### lchown
Maps [`fs.promises.lchown`](https://nodejs.org/api/fs.html#fs_fspromises_lchown_path_uid_gid)

### link
Maps [`fs.promises.link`](https://nodejs.org/api/fs.html#fs_fspromises_link_existingpath_newpath)

### lstat
Maps [`fs.promises.lstat`](https://nodejs.org/api/fs.html#fs_fspromises_lstat_path_options)

### mkdir
Maps [`fs.promises.mkdir`](https://nodejs.org/api/fs.html#fs_fspromises_mkdir_path_mode)

### mkdirp
Maps [`fse.mkdirp`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureDir.md)

### mkdirs
Maps [`fse.mkdirs`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureDir.md)

### mkdtemp
Maps [`fs.promises.mkdtemp`](https://nodejs.org/api/fs.html#fs_fspromises_mkdtemp_prefix_options)

### move
Maps [`fse.move`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/move.md)

### open
Maps [`fs.promises.open`](https://nodejs.org/api/fs.html#fs_fspromises_open_path_flags_mode)

### outputFile
Maps [`fse.outputFile`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/outputFile.md)

### outputJson
Maps [`fse.outputJson`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/outputJson.md)

### pathExists
Maps [`fse.pathExists`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/pathExists.md)

### readdir
Maps [`fs.promises.readdir`](https://nodejs.org/api/fs.html#fs_fspromises_readdir_path_options)

### readFile
Maps [`fs.promises.readFile`](https://nodejs.org/api/fs.html#fs_fspromises_readfile_path_options)

### readJson
Maps [`fse.readJson`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/readJson.md)

### readlink
Maps [`fs.promises.readlink`](https://nodejs.org/api/fs.html#fs_fspromises_readlink_path_options)

### realpath
Maps [`fs.promises.realpath`](https://nodejs.org/api/fs.html#fs_fspromises_realpath_path_options)

### remove
Maps [`fse.remove`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/remove.md)

### rename
Maps [`fs.promises.rename`](https://nodejs.org/api/fs.html#fs_fspromises_rename_oldpath_newpath)

### rmdir
Maps [`fs.promises.rmdir`](https://nodejs.org/api/fs.html#fs_fspromises_rmdir_path)

### stat
Maps [`fs.promises.stat`](https://nodejs.org/api/fs.html#fs_fspromises_stat_path_options)

### symlink
Maps [`fs.promises.symlink`](https://nodejs.org/api/fs.html#fs_fspromises_symlink_target_path_type)

### truncate
Maps [`fs.promises.truncate`](https://nodejs.org/api/fs.html#fs_fspromises_truncate_path_len)

### unlink
Maps [`fs.promises.unlink`](https://nodejs.org/api/fs.html#fs_fspromises_unlink_path)

### utimes
Maps [`fs.promises.utimes`](https://nodejs.org/api/fs.html#fs_fspromises_utimes_path_atime_mtime)

### writeFile
Maps [`fs.promises.writeFile`](https://nodejs.org/api/fs.html#fs_fspromises_writefile_file_data_options)

### writeJson
Maps [`fse.writeJson`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/writeJson.md)



## API custom

### chmodPattern(pattern, mode, [options])
Applies [`fs.chmod`](https://nodejs.org/api/fs.html#fs_fs_chmod_path_mode_callback) for matching [`glob`](https://www.npmjs.com/package/glob) pattern file/dir.

`Promise` returns nothing.

#### pattern

*Required*
Type: `String`

glob pattern.

#### mode

*Required*
Type: `Number`

File mode.

#### options

Type: `Object`

glob [options](https://www.npmjs.com/package/glob#options).



## License

MIT © [Absolunet](https://absolunet.com)
