//--------------------------------------------------------
//-- Compression
//--------------------------------------------------------
'use strict';

const gracefulFs = require('graceful-fs');
const ow         = require('ow');
const zlib       = require('zlib');


class FspCompression {

	compress(source, destination = `${source}.gz`) {
		ow(source, ow.string.label('source').nonEmpty);
		ow(destination, ow.string.label('destination').nonEmpty);

		return new Promise((resolve) => {
			gracefulFs.createReadStream(source)
				.pipe(zlib.createGzip())
				.pipe(gracefulFs.createWriteStream(destination))
				.on('close', () => {
					resolve(destination);
				})
			;
		});
	}


	decompress(source, destination = source.replace(/.gz$/, '')) {
		ow(source, ow.string.label('source').nonEmpty);
		ow(destination, ow.string.label('destination').nonEmpty);

		return new Promise((resolve) => {
			gracefulFs.createReadStream(source)
				.pipe(zlib.createGunzip())
				.pipe(gracefulFs.createWriteStream(destination))
				.on('close', () => {
					resolve(destination);
				})
			;
		});
	}

}


module.exports = new FspCompression();
