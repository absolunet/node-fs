//--------------------------------------------------------
//-- Compression
//--------------------------------------------------------
'use strict';

const gracefulFs      = require('graceful-fs');
const { default: ow } = require('ow');
const utils           = require('./helpers/utils');


const read = (file) => {
	return utils.readMaybeCompressedFile(file, { compressed: true });
};

const write = (file, data) => {
	utils.writeMaybeCompressedFile(file, data, { compress: true });
};






class FssCompression {

	read(file) {
		ow(file, ow.string.nonEmpty);

		return read(file);
	}


	write(file, content) {
		ow(file,    ow.string.nonEmpty);
		ow(content, ow.string.nonEmpty);

		return write(file, content);
	}


	output(file, content) {
		ow(file,    ow.string.nonEmpty);
		ow(content, ow.string.nonEmpty);

		utils.ensureContainingFolder(file);
		write(file, content);
	}


	compress(source, destination = `${source}.gz`) {
		ow(source,      ow.string.nonEmpty);
		ow(destination, ow.string.nonEmpty);

		write(destination, gracefulFs.readFileSync(source));

		return destination;
	}


	decompress(source, destination = source.replace(/\.gz$/u, '')) {
		ow(source,      ow.string.nonEmpty);
		ow(destination, ow.string.nonEmpty);

		gracefulFs.writeFileSync(destination, read(source));

		return destination;
	}

}


module.exports = new FssCompression();
