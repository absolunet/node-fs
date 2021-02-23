//--------------------------------------------------------
//-- Miscellaneous
//--------------------------------------------------------
'use strict';

const deleteEmpty     = require('delete-empty');
const gracefulFs      = require('graceful-fs');
const junk            = require('junk');
const klaw            = require('klaw-sync');
const minimatch       = require('minimatch');
const { default: ow } = require('ow');
const path            = require('path');
const rimraf          = require('rimraf');


class FssMisc {

	scandir(root, type, { recursive = false, fullPath = false, pattern = '**', keepJunk = false } = {}) {
		ow(root,      ow.string.nonEmpty);
		ow(type,      ow.string.nonEmpty.is(() => { return ['file', 'dir'].includes(type) || `Must be 'file' or 'dir'`; }));
		ow(recursive, ow.boolean);
		ow(fullPath,  ow.boolean);
		ow(pattern,   ow.string.nonEmpty);
		ow(keepJunk,  ow.boolean);

		// Remove trailing slash
		const rootPath = root.replace(/\/$/u, '');

		return klaw(rootPath, {
			nodir:      false,
			nofile:     type === 'dir',
			depthLimit: recursive ? -1 : 0
		})
			.filter(({ path: current, stats }) => {
				const file     = current.split(path.sep).pop();
				const relative = current.slice(rootPath.length + 1);

				return (
					(type === 'dir' || (type === 'file' && !stats.isDirectory())) &&
					(keepJunk || (!keepJunk && junk.not(file) && !['.gitkeep'].includes(file))) &&
					minimatch(relative, pattern, { dot: true, matchBase: true })
				);
			})
			.map((item) => {
				return fullPath ? item.path : item.path.slice(rootPath.length + 1);
			})
		;
	}


	// eslint-disable-next-line unicorn/prevent-abbreviations
	removeEmptyDir(directory) {
		ow(directory, ow.string.nonEmpty);

		return deleteEmpty.sync(directory);
	}


	removePattern(pattern) {
		ow(pattern, ow.string.nonEmpty);

		rimraf.sync(pattern);
	}


	existsCase(pathToCheck) {
		ow(pathToCheck, ow.string.nonEmpty);

		let valid = false;
		if (gracefulFs.existsSync(pathToCheck)) {
			valid = gracefulFs.realpathSync(pathToCheck) === gracefulFs.realpathSync.native(pathToCheck);
		}

		return valid;
	}

}


module.exports = new FssMisc();
