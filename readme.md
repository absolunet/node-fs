# @absolunet/fss

[![NPM version](https://img.shields.io/npm/v/@absolunet/fss.svg)](https://www.npmjs.com/package/@absolunet/fss)
[![Travis build](https://api.travis-ci.org/absolunet/node-fss.svg?branch=master)](https://travis-ci.org/absolunet/node-fss/builds)
[![Dependencies](https://david-dm.org/absolunet/node-fss/status.svg)](https://david-dm.org/absolunet/node-fss)
[![Dev dependencies](https://david-dm.org/absolunet/node-fss/dev-status.svg)](https://david-dm.org/absolunet/node-fss?type=dev)

> fs / fs-extra sync wrapper


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

### ensureDir(dir)
Maps [`fsExtra.ensureDirSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureDir-sync.md).

### exists(path)
Maps [`fs.existsSync`](https://nodejs.org/api/fs.html#fs_fs_existssync_path).



### move(src, dest, [options])
Simulate a [`mv(1)`](http://man7.org/linux/man-pages/man1/mv.1.html) via a [`fsExtra.copySync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/copy-sync.md) and a [`fsExtra.removeSync`](https://github.com/jprichardson/node-fs-extra/blob/master/docs/remove-sync.md).

#### src

*Required*  
Type: `string`  

Path of dir/file to move.

#### dest

*Required*  
Type: `string`  

Path of destination.

#### options

Type: `Object`  

`fsExtra.copySync` options.



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

### symlink(target, path[, type])
Maps [`fs.symlinkSync`](https://nodejs.org/api/fs.html#fs_fs_symlinksync_target_path_type).

### writeFile(file, data[, options])
Maps [`fs.writeFileSync`](https://nodejs.org/api/fs.html#fs_fs_writefilesync_file_data_options).



## License

MIT © [Absolunet](https://absolunet.com)
