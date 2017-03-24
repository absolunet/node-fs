//--------------------------------------------------------
//-- File System Sync
//--------------------------------------------------------
'use strict';

const fs  = require('fs');
const fsx = require('fs-extra');


module.exports = () => {
	const fss = {};

	fss.exists    = fs.existsSync;
	fss.readFile  = fs.readFileSync;
	fss.realpath  = fs.realpathSync;
	fss.symlink   = fs.symlinkSync;

	fss.copy      = fsx.copySync;
	fss.ensureDir = fsx.ensureDirSync;
	fss.remove    = fsx.removeSync;

	fss.move = (source, dest, options) => {
		fsx.copySync(source, dest, options);
		fsx.removeSync(source);
	};

	return fss;
};
