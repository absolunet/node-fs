//--------------------------------------------------------
//-- YAML
//--------------------------------------------------------
'use strict';

const ow    = require('ow');
const yaml  = require('js-yaml');
const utils = require('./helpers/utils');


const write = (file, object) => {
	return new Promise((resolve, reject) => {
		try {
			utils.writeMaybeCompressedFile(file, yaml.safeDump(object), resolve, reject);
		} catch (error) {
			reject(error);
		}
	});
};






class FspYaml {

	read(file) {
		ow(file, ow.string.label('file').nonEmpty);

		return new Promise((resolve, reject) => {
			utils.readMaybeCompressedFile(file).then((data) => {
				try {
					resolve(yaml.safeLoad(data));
				} catch (error) {
					reject(error);
				}
			}, reject);
		});
	}


	write(file, object) {
		ow(file,   ow.string.label('file').nonEmpty);
		ow(object, ow.object.label('object'));

		return write(file, object);
	}


	output(file, object) {
		ow(file,   ow.string.label('file').nonEmpty);
		ow(object, ow.object.label('object'));

		return new Promise((resolve, reject) => {
			utils.ensureContainingFolder(file, object).then(() => {
				write(file, object).then(resolve, reject);
			}, reject);
		});
	}

}


module.exports = new FspYaml();
