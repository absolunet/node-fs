//--------------------------------------------------------
//-- JSON
//--------------------------------------------------------
'use strict';

const { default: ow } = require('ow');
const utils           = require('./helpers/utils');


const write = (file, object, { replacer, space } = {}) => {
	return new Promise((resolve, reject) => {
		utils.writeMaybeCompressedFile(file, `${JSON.stringify(object, replacer, space)}\n`, resolve, reject);
	});
};






class FspJson {

	read(file, reviver) {
		ow(file,    ow.string.nonEmpty);
		ow(reviver, ow.optional.function);

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
		ow(file,    ow.string.nonEmpty);
		ow(object,  ow.object);
		ow(options, ow.optional.object);

		return write(file, object, options);
	}


	output(file, object, options) {
		ow(file,    ow.string.nonEmpty);
		ow(object,  ow.object);
		ow(options, ow.optional.object);

		return new Promise((resolve, reject) => {
			utils.ensureContainingFolder(file).then(() => {
				write(file, object, options).then(resolve, reject);
			}, reject);
		});
	}

}


module.exports = new FspJson();
