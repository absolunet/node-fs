# @absolunet/fsp

[![NPM version](https://img.shields.io/npm/v/@absolunet/fsp.svg)](https://www.npmjs.com/package/@absolunet/fsp)
[![Travis build](https://api.travis-ci.org/absolunet/node-fsp.svg?branch=master)](https://travis-ci.org/absolunet/node-fsp/builds)
[![Dependencies](https://david-dm.org/absolunet/node-fsp/status.svg)](https://david-dm.org/absolunet/node-fsp)
[![Dev dependencies](https://david-dm.org/absolunet/node-fsp/dev-status.svg)](https://david-dm.org/absolunet/node-fsp?type=dev)

> fs / fs-extra promise wrapper


## Install

```sh
$ npm install @absolunet/fsp
```


## Usage

```js
const fsp = require('@absolunet/fsp');

fsp.chmodPattern('/path1/path2/**/*.js', '775').then(() => {
	console.log('Yeah!');
});
```


## API

### chmodPattern(pattern, mode, [options])
Applies [`fs.chmod`](https://nodejs.org/api/fs.html#fs_fs_chmod_path_mode_callback) for matching [`glob`](https://www.npmjs.com/package/glob) pattern file/dir.

Returns a `Promise`.

#### pattern

*Required*  
Type: `string`  

glob pattern.

#### mode

*Required*  
Type: `string`  

File mode.

#### options

Type: `Object`  

glob [options](https://www.npmjs.com/package/glob#options).



## License

MIT © [Absolunet](https://absolunet.com)
