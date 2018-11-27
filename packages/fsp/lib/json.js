//--------------------------------------------------------
//-- JSON
//--------------------------------------------------------
'use strict';

const ow    = require('ow');
const utils = require('./helpers/utils');


const write = (file, object, { replacer, space } = {}) => {
	return new Promise((resolve, reject) => {
		utils.writeMaybeCompressedFile(file, JSON.stringify(object, replacer, space), resolve, reject);
	});
};






class FspJson {

	read(file, reviver) {
		ow(file, ow.string.label('file').nonEmpty);
		ow(reviver, ow.any(ow.undefined.label('options'), ow.function.label('options')));

		return new Promise((resolve, reject) => {
			utils.readMaybeCompressedFile(file).then((data) => {
				try {
					resolve(JSON.parse(data.replace(/^\uFEFF/u, ''), reviver));
				} catch (error) {
					reject(error);
				}
			}, reject);
		});
	}


	write(file, object, options) {
		ow(file,   ow.string.label('file').nonEmpty);
		ow(object, ow.object.label('object'));
		ow(options, ow.any(ow.undefined.label('options'), ow.object.label('options')));

		return write(file, object, options);
	}


	output(file, object, options) {
		ow(file,   ow.string.label('file').nonEmpty);
		ow(object, ow.object.label('object'));
		ow(options, ow.any(ow.undefined.label('options'), ow.object.label('options')));

		return new Promise((resolve, reject) => {
			utils.ensureContainingFolder(file).then(() => {
				write(file, object, options).then(resolve, reject);
			}, reject);
		});
	}

}


module.exports = new FspJson();
