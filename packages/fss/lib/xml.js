//--------------------------------------------------------
//-- XML
//--------------------------------------------------------
'use strict';

const ow           = require('ow');
const xml2js       = require('xml2js');
const xml2jsParser = require('xml2js-parser');
const utils        = require('./helpers/utils');


const write = (file, object, options) => {
	utils.writeMaybeCompressedFile(file, `${new xml2js.Builder(options).buildObject(object)}\n`);
};






class FssXml {

	read(file, options) {
		ow(file,    ow.string.nonEmpty);
		ow(options, ow.optional.object);

		return xml2jsParser.parseStringSync(utils.readMaybeCompressedFile(file), options);
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

		utils.ensureContainingFolder(file);
		write(file, object, options);
	}

}


module.exports = new FssXml();
