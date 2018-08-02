# @absolunet/fss

[![npm](https://img.shields.io/npm/v/@absolunet/fss.svg)](https://www.npmjs.com/package/@absolunet/fss)
[![npm dependencies](https://david-dm.org/absolunet/node-fss/status.svg)](https://david-dm.org/absolunet/node-fss)
[![npms](https://badges.npms.io/%40absolunet%2Ffss.svg)](https://npms.io/search?q=%40absolunet%2Ffss)
[![Travis CI](https://api.travis-ci.org/absolunet/node-fss.svg?branch=master)](https://travis-ci.org/absolunet/node-fss/builds)
[![Code style](https://img.shields.io/badge/code_style-@absolunet/node-659d32.svg)](https://github.com/absolunet/eslint-config-node)

> fs / fs-extra / del sync wrapper


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

### chmod(path)
Maps [`fs.chmodSync`](https://nodejs.org/api/fs.html#fs_fs_chmodsync_path_mode).

### chown(path)
Maps [`fs.chownSync`](https://nodejs.org/api/fs.html#fs_fs_chownsync_path_uid_gid).

### copy(src, dest, [options])
Maps [`fsExtra.copySync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/copy-sync.md).

### del(patterns, [options])
Maps [`del.sync`](https://github.com/sindresorhus/del#delsyncpatterns-options).

### ensureDir(dir)
Maps [`fsExtra.ensureDirSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureDir-sync.md).

### exists(path)
Maps [`fs.existsSync`](https://nodejs.org/api/fs.html#fs_fs_existssync_path).



### move(src, dest, [options])
Simulate a [`mv(1)`](http://man7.org/linux/man-pages/man1/mv.1.html) via a [`fsExtra.copySync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/copy-sync.md) and a [`fsExtra.removeSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/remove-sync.md).

#### src
*Required*<br>
Type: `String`<br>
Path of dir/file to move.

#### dest
*Required*<br>
Type: `String`<br>
Path of destination.

#### options
Type: `Object`<br>
`fsExtra.copySync` options.


<br>


### outputFile(file, data, [options])
Maps [`fsExtra.outputFileSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/outputFile-sync.md).

### readdir(path[, options])
Maps [`fs.readdirSync`](https://nodejs.org/api/fs.html#fs_fs_readdirsync_path_options).

### readFile(path[, options])
Maps [`fs.readFileSync`](https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options).

### realpath(path[, options])
Maps [`fs.realpathSync`](https://nodejs.org/api/fs.html#fs_fs_realpathsync_path_options).

### remove(path)
Maps [`fsExtra.removeSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/remove-sync.md).



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


<br>


### stat(path)
Maps [`fs.statSync`](https://nodejs.org/api/fs.html#fs_fs_statsync_path).

### symlink(target, path[, type])
Maps [`fs.symlinkSync`](https://nodejs.org/api/fs.html#fs_fs_symlinksync_target_path_type).

### writeFile(file, data[, options])
Maps [`fs.writeFileSync`](https://nodejs.org/api/fs.html#fs_fs_writefilesync_file_data_options).



## License

MIT © [Absolunet](https://absolunet.com)
