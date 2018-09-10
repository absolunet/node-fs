//--------------------------------------------------------
//-- XML
//--------------------------------------------------------
'use strict';

const ow           = require('ow');
const xml2js       = require('xml2js');
const xml2jsParser = require('xml2js-parser');
const utils        = require('./helpers/utils');


const write = (file, object, options) => {
	utils.writeMaybeCompressedFile(file, new xml2js.Builder(options).buildObject(object));
};






class FssXml {

	read(file, options) {
		ow(file, ow.string.label('file').nonEmpty);
		ow(options, ow.any(ow.undefined.label('options'), ow.object.label('options')));

		return xml2jsParser.parseStringSync(utils.readMaybeCompressedFile(file), options);
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

		utils.ensureContainingFolder(file);
		write(file, object, options);
	}

}


module.exports = new FssXml();
