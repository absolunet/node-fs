//--------------------------------------------------------
//-- JSON5
//--------------------------------------------------------
'use strict';

const JSON5           = require('json5');
const { default: ow } = require('ow');
const utils           = require('./helpers/utils');


const write = (file, object, { replacer, space } = {}) => {
	utils.writeMaybeCompressedFile(file, `${JSON5.stringify(object, replacer, space)}\n`);
};






class FssJson5 {

	read(file, reviver) {
		ow(file,    ow.string.nonEmpty);
		ow(reviver, ow.optional.function);

		return JSON5.parse(utils.readMaybeCompressedFile(file).replace(/^\uFEFF/u, ''), reviver);
	}


	write(file, object, options) {
		ow(file,    ow.string.nonEmpty);
		ow(object,  ow.object);
		ow(options, ow.optional.object);

		write(file, object, options);
	}


	output(file, object, options) {
		ow(file,    ow.string.nonEmpty);
		ow(object,  ow.object);
		ow(options, ow.optional.object);

		utils.ensureContainingFolder(file);
		write(file, object, options);
	}

}


module.exports = new FssJson5();
