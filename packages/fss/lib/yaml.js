//--------------------------------------------------------
//-- YAML
//--------------------------------------------------------
'use strict';

const ow    = require('ow');
const yaml  = require('js-yaml');
const utils = require('./helpers/utils');


const write = (file, object) => {
	utils.writeMaybeCompressedFile(file, yaml.safeDump(object));
};






class FssYaml {

	read(file) {
		ow(file, ow.string.label('file').nonEmpty);

		return yaml.safeLoad(utils.readMaybeCompressedFile(file));
	}


	write(file, object) {
		ow(file,   ow.string.label('file').nonEmpty);
		ow(object, ow.object.label('object'));

		write(file, object);
	}


	output(file, object) {
		ow(file,   ow.string.label('file').nonEmpty);
		ow(object, ow.object.label('object'));

		utils.ensureContainingFolder(file);
		write(file, object);
	}

}


module.exports = new FssYaml();
