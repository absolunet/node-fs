//--------------------------------------------------------
//-- File System Promise
//--------------------------------------------------------
'use strict';

const async   = require('async');
const fs      = require('fs');
const fsExtra = require('fs-extra');
const glob    = require('glob');


module.exports = {

	ensureFile: fsExtra.ensureFile,

	chmodPattern: (pattern, mode, options) => {
		return new Promise((resolve) => {

			glob(pattern, options, (err, matches) => {
				if (!err) {
					async.every(matches, (match, cb) => {
						fs.chmod(match, mode, cb);
					}, () => {
						resolve();
					});
				} else {
					throw new Error(err);
				}
			});

		});
	}
};
