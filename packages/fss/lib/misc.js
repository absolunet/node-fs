//--------------------------------------------------------
//-- Miscellaneous
//--------------------------------------------------------
'use strict';

const deleteEmpty = require('delete-empty');
const junk        = require('junk');
const klaw        = require('klaw-sync');
const minimatch   = require('minimatch');
const ow          = require('ow');
const path        = require('path');
const rimraf      = require('rimraf');


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
			.filter(({ path: curr, stats }) => {
				const file     = curr.split(path.sep).pop();
				const relative = curr.substring(rootPath.length + 1);

				return (
					(type === 'dir' || (type === 'file' && !stats.isDirectory())) &&
					(keepJunk || (!keepJunk && junk.not(file) && !['.gitkeep'].includes(file))) &&
					minimatch(relative, pattern, { dot: true, matchBase: true })
				);
			})
			.map((item) => {
				return fullPath ? item.path : item.path.substring(rootPath.length + 1);
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

}


module.exports = new FssMisc();
