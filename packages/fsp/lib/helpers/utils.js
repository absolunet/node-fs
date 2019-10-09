//--------------------------------------------------------
//-- Helpers - Utils
//--------------------------------------------------------
'use strict';

const fsExtra    = require('fs-extra');
const gracefulFs = require('graceful-fs');
const path       = require('path');
const zlib       = require('zlib');


class FspHelpersUtils {

	get defaultCompressionLevel() {
		return zlib.constants.Z_BEST_COMPRESSION;
	}


	ensureContainingFolder(file) {
		return new Promise((resolve, reject) => {
			const directory = path.dirname(file);

			fsExtra.pathExists(directory, (error, exists) => {
				if (error) {
					reject(error);

					return;
				}

				if (exists) {
					resolve();

					return;
				}

				fsExtra.mkdirs(directory, (error2) => {
					if (!error2) {
						resolve();
					} else {
						reject(error2);
					}
				});
			});
		});
	}


	readMaybeCompressedFile(file, { compressed = false } = {}) {
		return new Promise((resolve, reject) => {
			gracefulFs.readFile(file, (error, rawData) => {
				if (error) {
					reject(error);

					return;
				}

				if (file.endsWith('.gz') || compressed) {
					zlib.gunzip(rawData, (error2, data) => {
						if (error2) {
							reject(error2);
						}

						resolve(data.toString('utf8'));
					});
				} else {
					resolve(rawData.toString('utf8'));
				}
			});
		});
	}


	writeMaybeCompressedFile(file, data, resolve, reject, { compress = false, compressionLevel = this.defaultCompressionLevel } = {}) {
		if (file.endsWith('.gz') || compress) {
			zlib.gzip(data, { level: compressionLevel }, (error, gzData) => {
				if (error) {
					reject(error);

					return;
				}

				gracefulFs.writeFile(file, gzData, (error2) => {
					if (!error2) {
						resolve();
					} else {
						reject(error2);
					}
				});
			});
		} else {
			gracefulFs.writeFile(file, data, (error) => {
				if (!error) {
					resolve();
				} else {
					reject(error);
				}
			});
		}
	}

}


module.exports = new FspHelpersUtils();
