//--------------------------------------------------------
//-- XML
//--------------------------------------------------------
'use strict';

const ow     = require('ow');
const xml2js = require('xml2js');
const utils  = require('./helpers/utils');


const write = (file, object, options) => {
	return new Promise((resolve, reject) => {
		utils.writeMaybeCompressedFile(file, new xml2js.Builder(options).buildObject(object), resolve, reject);
	});
};






class FspXml {

	read(file, options) {
		ow(file, ow.string.label('file').nonEmpty);
		ow(options, ow.any(ow.undefined.label('options'), ow.object.label('options')));

		return new Promise((resolve, reject) => {
			utils.readMaybeCompressedFile(file).then((data) => {
				xml2js.parseString(data, options, (err, result) => {
					if (err) {
						reject(err);
					}

					resolve(result);
				});
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
			utils.ensureContainingFolder(file, object).then(() => {
				write(file, object, options).then(resolve, reject);
			}, reject);
		});
	}

}


module.exports = new FspXml();
