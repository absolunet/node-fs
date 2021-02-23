//--------------------------------------------------------
//-- Compression
//--------------------------------------------------------
'use strict';

const gracefulFs      = require('graceful-fs');
const { default: ow } = require('ow');
const zlib            = require('zlib');
const utils           = require('./helpers/utils');


const write = (file, data) => {
	return new Promise((resolve, reject) => {
		utils.writeMaybeCompressedFile(file, data, resolve, reject, { compress: true });
	});
};






class FspCompression {

	read(file) {
		ow(file, ow.string.nonEmpty);

		return new Promise((resolve, reject) => {
			utils.readMaybeCompressedFile(file, { compressed: true }).then((data) => {
				resolve(data);
			}, reject);
		});
	}


	write(file, content) {
		ow(file,    ow.string.nonEmpty);
		ow(content, ow.string.nonEmpty);

		return write(file, content);
	}


	output(file, content) {
		ow(file,    ow.string.nonEmpty);
		ow(content, ow.string.nonEmpty);

		return new Promise((resolve, reject) => {
			utils.ensureContainingFolder(file).then(() => {
				write(file, content).then(resolve, reject);
			}, reject);
		});
	}


	compress(source, destination = `${source}.gz`) {
		ow(source,      ow.string.nonEmpty);
		ow(destination, ow.string.nonEmpty);

		return new Promise((resolve) => {
			gracefulFs.createReadStream(source)
				.pipe(zlib.createGzip({ level: utils.defaultCompressionLevel }))
				.pipe(gracefulFs.createWriteStream(destination))
				.on('close', () => {
					resolve(destination);
				})
			;
		});
	}


	decompress(source, destination = source.replace(/\.gz$/u, '')) {
		ow(source,      ow.string.nonEmpty);
		ow(destination, ow.string.nonEmpty);

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
