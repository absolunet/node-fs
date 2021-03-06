//--------------------------------------------------------
//-- YAML
//--------------------------------------------------------
'use strict';

const { default: ow } = require('ow');
const yaml            = require('js-yaml');
const utils           = require('./helpers/utils');


const write = (file, object) => {
	utils.writeMaybeCompressedFile(file, yaml.dump(object));
};






class FssYaml {

	read(file) {
		ow(file, ow.string.nonEmpty);

		return yaml.load(utils.readMaybeCompressedFile(file));
	}


	write(file, object) {
		ow(file,   ow.string.nonEmpty);
		ow(object, ow.object);

		write(file, object);
	}


	output(file, object) {
		ow(file,   ow.string.nonEmpty);
		ow(object, ow.object);

		utils.ensureContainingFolder(file);
		write(file, object);
	}

}


module.exports = new FssYaml();
