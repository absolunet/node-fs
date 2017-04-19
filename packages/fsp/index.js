//--------------------------------------------------------
//-- File System Promise
//--------------------------------------------------------
'use strict';

const fs    = require('fs');
const glob  = require('glob');
const async = require('async');


module.exports = {

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
