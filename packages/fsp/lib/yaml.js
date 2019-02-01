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
		ow(file, ow.string.nonEmpty);

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
		ow(file,   ow.string.nonEmpty);
		ow(object, ow.object);

		return write(file, object);
	}


	output(file, object) {
		ow(file,   ow.string.nonEmpty);
		ow(object, ow.object);

		return new Promise((resolve, reject) => {
			utils.ensureContainingFolder(file).then(() => {
				write(file, object).then(resolve, reject);
			}, reject);
		});
	}

}


module.exports = new FspYaml();
