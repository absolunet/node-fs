//--------------------------------------------------------
//-- File System Sync
//--------------------------------------------------------
'use strict';

const fs      = require('fs');
const fsExtra = require('fs-extra');


module.exports = {
	exists:    fs.existsSync,
	readdir:   fs.readdirSync,
	readFile:  fs.readFileSync,
	realpath:  fs.realpathSync,
	symlink:   fs.symlinkSync,
	writeFile: fs.writeFileSync,

	copy:      fsExtra.copySync,
	ensureDir: fsExtra.ensureDirSync,
	remove:    fsExtra.removeSync,

	move: (src, dest, options) => {
		fsExtra.copySync(src, dest, options);
		fsExtra.removeSync(src);
	}
};
