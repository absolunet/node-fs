//--------------------------------------------------------
//-- JSON
//--------------------------------------------------------
'use strict';

const ow    = require('ow');
const utils = require('./helpers/utils');


const write = (file, object, { replacer, space } = {}) => {
	utils.writeMaybeCompressedFile(file, JSON.stringify(object, replacer, space));
};






class FssJson {

	read(file, reviver) {
		ow(file, ow.string.label('file').nonEmpty);
		ow(reviver, ow.any(ow.undefined.label('options'), ow.function.label('options')));

		return JSON.parse(utils.readMaybeCompressedFile(file).replace(/^\uFEFF/, ''), reviver);
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


module.exports = new FssJson();
