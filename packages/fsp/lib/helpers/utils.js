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
			const dir = path.dirname(file);

			fsExtra.pathExists(dir, (err, exists) => {
				if (!err) {
					if (exists) {
						resolve();
					} else {

						fsExtra.mkdirs(dir, (err2) => {
							if (!err2) {
								resolve();
							} else {
								reject(err2);
							}
						});
					}
				} else {
					reject(err);
				}
			});
		});
	}


	readMaybeCompressedFile(file, { compressed = false } = {}) {
		return new Promise((resolve, reject) => {
			gracefulFs.readFile(file, (err, rawData) => {
				if (err) {
					reject(err);
				}

				if (file.endsWith('.gz') || compressed) {
					zlib.gunzip(rawData, (err2, data) => {
						if (err2) {
							reject(err2);
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
			zlib.gzip(data, { level:compressionLevel }, (err, gzData) => {
				if (err) {
					reject(err);
				}

				gracefulFs.writeFile(file, gzData, (err2) => {
					if (!err2) {
						resolve();
					} else {
						reject(err2);
					}
				});
			});
		} else {
			gracefulFs.writeFile(file, data, (err) => {
				if (!err) {
					resolve();
				} else {
					reject(err);
				}
			});
		}
	}

}


module.exports = new FspHelpersUtils();
