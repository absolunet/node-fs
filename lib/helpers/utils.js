//--------------------------------------------------------
//-- Helpers - Utils
//--------------------------------------------------------
'use strict';

const fsExtra    = require('fs-extra');
const gracefulFs = require('graceful-fs');
const path       = require('path');
const zlib       = require('zlib');


class FssHelpersUtils {

	ensureContainingFolder(file) {
		const dir = path.dirname(file);

		if (!gracefulFs.existsSync(dir)) {
			fsExtra.mkdirsSync(dir);
		}
	}


	readMaybeCompressedFile(file, { compressed = false } = {}) {
		const rawData = gracefulFs.readFileSync(file);

		if (file.endsWith('.gz') || compressed) {
			return zlib.gunzipSync(rawData).toString('utf8');
		}

		return rawData.toString('utf8');
	}


	writeMaybeCompressedFile(file, data, { compress = false } = {}) {
		if (file.endsWith('.gz') || compress) {
			gracefulFs.writeFileSync(file, zlib.gzipSync(data));
		} else {
			gracefulFs.writeFileSync(file, data);
		}
	}

}


module.exports = new FssHelpersUtils();
