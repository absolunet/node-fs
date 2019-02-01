//--------------------------------------------------------
//-- JSON5
//--------------------------------------------------------
'use strict';

const ow    = require('ow');
const utils = require('./helpers/utils');
const JSON5 = require('json5');


const write = (file, object, { replacer, space } = {}) => {
	utils.writeMaybeCompressedFile(file, JSON5.stringify(object, replacer, space));
};






class FssJson5 {

	read(file, reviver) {
		ow(file, ow.string.label('file').nonEmpty);
		ow(reviver, ow.any(ow.undefined.label('options'), ow.function.label('options')));

		return JSON5.parse(utils.readMaybeCompressedFile(file).replace(/^\uFEFF/u, ''), reviver);
	}


	write(file, object, options) {
		ow(file,   ow.string.label('file').nonEmpty);
		ow(object, ow.object.label('object'));
		ow(options, ow.any(ow.undefined.label('options'), ow.object.label('options')));

		write(file, object, options);
	}


	output(file, object, options) {
		ow(file,   ow.string.label('file').nonEmpty);
		ow(object, ow.object.label('object'));
		ow(options, ow.any(ow.undefined.label('options'), ow.object.label('options')));

		utils.ensureContainingFolder(file);
		write(file, object, options);
	}

}


module.exports = new FssJson5();
