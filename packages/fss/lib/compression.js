//--------------------------------------------------------
//-- Compression
//--------------------------------------------------------
'use strict';

const gracefulFs = require('graceful-fs');
const ow         = require('ow');
const utils      = require('./helpers/utils');


const read = (file) => {
	return utils.readMaybeCompressedFile(file, { compressed:true });
};

const write = (file, data) => {
	utils.writeMaybeCompressedFile(file, data, { compress:true });
};






class FssCompression {

	read(file) {
		ow(file, ow.string.label('file').nonEmpty);

		return read(file);
	}


	write(file, content) {
		ow(file,   ow.string.label('file').nonEmpty);
		ow(content, ow.string.label('content').nonEmpty);

		return write(file, content);
	}


	output(file, content) {
		ow(file,   ow.string.label('file').nonEmpty);
		ow(content, ow.string.label('content').nonEmpty);

		utils.ensureContainingFolder(file);
		write(file, content);
	}


	compress(source, destination = `${source}.gz`) {
		ow(source, ow.string.label('source').nonEmpty);
		ow(destination, ow.string.label('destination').nonEmpty);

		write(destination, gracefulFs.readFileSync(source));

		return destination;
	}


	decompress(source, destination = source.replace(/\.gz$/u, '')) {
		ow(source, ow.string.label('source').nonEmpty);
		ow(destination, ow.string.label('destination').nonEmpty);

		gracefulFs.writeFileSync(destination, read(source));

		return destination;
	}

}


module.exports = new FssCompression();
