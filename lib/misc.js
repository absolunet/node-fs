//--------------------------------------------------------
//-- Miscellaneous
//--------------------------------------------------------
'use strict';

const junk      = require('junk');
const klaw      = require('klaw-sync');
const minimatch = require('minimatch');
const ow        = require('ow');
const path      = require('path');


class FssMisc {

	//-- scandir
	scandir(root, type, { recursive = false, fullPath = false, pattern = '**', keepJunk = false } = {}) {
		ow(root,      ow.string.label('root').nonEmpty);
		ow(type,      ow.string.label('type').nonEmpty.is(() => { return ['file', 'dir'].includes(type) || `Must be 'file' or 'dir'`; }));
		ow(recursive, ow.boolean.label('recursive'));
		ow(fullPath,  ow.boolean.label('fullPath'));
		ow(pattern,   ow.string.label('pattern').nonEmpty);
		ow(keepJunk,  ow.boolean.label('keepJunk'));

		// Remove trailing slash
		const rootPath = root.replace(/(.*)(\/)$/, '$1');

		return klaw(rootPath, {
			nodir:      false,
			nofile:     type === 'dir',
			depthLimit: recursive ? -1 : type === 'file' ? 0 : 1
		})
			.filter(({ path:curr, stats }) => {
				const file     = curr.split(path.sep).pop();
				const relative = curr.substring(rootPath.length + 1);

				return (
					(type === 'dir' || (type === 'file' && !stats.isDirectory())) &&
					(keepJunk || (!keepJunk && junk.not(file) && !['.gitkeep'].includes(file))) &&
					minimatch(relative, pattern, { dot:true, matchBase:true })
				);
			})
			.map((item) => {
				return fullPath ? item.path : item.path.substring(rootPath.length + 1);
			})
		;
	}

}


module.exports = new FssMisc();
