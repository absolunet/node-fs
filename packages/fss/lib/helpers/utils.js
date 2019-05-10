//--------------------------------------------------------
//-- Helpers - Utils
//--------------------------------------------------------
'use strict';

const fsExtra    = require('fs-extra');
const gracefulFs = require('graceful-fs');
const path       = require('path');
const zlib       = require('zlib');


class FssHelpersUtils {

	get defaultCompressionLevel() {
		return zlib.constants.Z_BEST_COMPRESSION;
	}


	ensureContainingFolder(file) {
		const directory = path.dirname(file);

		if (!gracefulFs.existsSync(directory)) {
			fsExtra.mkdirsSync(directory);
		}
	}


	readMaybeCompressedFile(file, { compressed = false } = {}) {
		const rawData = gracefulFs.readFileSync(file);

		if (file.endsWith('.gz') || compressed) {
			return zlib.gunzipSync(rawData).toString('utf8');
		}

		return rawData.toString('utf8');
	}


	writeMaybeCompressedFile(file, data, { compress = false, compressionLevel = this.defaultCompressionLevel } = {}) {
		if (file.endsWith('.gz') || compress) {
			gracefulFs.writeFileSync(file, zlib.gzipSync(data, { level: compressionLevel }));
		} else {
			gracefulFs.writeFileSync(file, data);
		}
	}

}


module.exports = new FssHelpersUtils();
