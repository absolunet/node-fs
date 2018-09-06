//--------------------------------------------------------
//-- Miscellaneous
//--------------------------------------------------------
'use strict';

const async       = require('async');
const { forEach } = require('async-foreach');
const fsExtra     = require('fs-extra');
const glob        = require('glob');
const gracefulFs  = require('graceful-fs');
const ow          = require('ow');
const zlib        = require('zlib');


class FspMisc {

	mergeFiles(sources, destination) {
		ow(sources, ow.array.label('source').nonEmpty);
		ow(destination, ow.string.label('destination').nonEmpty);

		return new Promise((resolve) => {

			fsExtra.remove(destination).then(() => {

				forEach(sources, function(file) {
					const done = this.async();

					const readStream  = gracefulFs.createReadStream(file);
					const writeStream = gracefulFs.createWriteStream(destination, { flags:'a' });

					if (destination.endsWith('.gz')) {
						readStream.pipe(zlib.createGzip()).pipe(writeStream);
					} else {
						readStream.pipe(writeStream);
					}

					readStream.on('close', done);

				}, resolve);
			});
		});
	}


	chmodPattern(pattern, mode, options) {
		ow(pattern, ow.string.label('pattern').nonEmpty);
		ow(mode, ow.number.integer.positive.finite.label('mode'));
		ow(options, ow.any(ow.undefined.label('options'), ow.object.label('options')));

		return new Promise((resolve, reject) => {

			glob(pattern, options, (err, matches) => {
				if (!err) {
					async.every(matches, (match, cb) => {
						gracefulFs.chmod(match, mode, cb);
					}, () => {
						resolve();
					});
				} else {
					reject(err);
				}
			});
		});
	}

}


module.exports = new FspMisc();
