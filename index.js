//--------------------------------------------------------
//-- File System Sync
//--------------------------------------------------------
'use strict';

const del     = require('del');
const fs      = require('fs');
const fsExtra = require('fs-extra');


module.exports = {
	chmod:     fs.chmodSync,
	chown:     fs.chownSync,
	exists:    fs.existsSync,
	readdir:   fs.readdirSync,
	readFile:  fs.readFileSync,
	realpath:  fs.realpathSync,
	stat:      fs.statSync,
	symlink:   fs.symlinkSync,
	writeFile: fs.writeFileSync,

	copy:       fsExtra.copySync,
	ensureDir:  fsExtra.ensureDirSync,
	outputFile: fsExtra.outputFileSync,
	remove:     fsExtra.removeSync,

	del: del.sync,

	move: (src, dest, options) => {
		fsExtra.copySync(src, dest, options);
		fsExtra.removeSync(src);
	}
};
