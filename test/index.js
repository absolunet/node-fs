//--------------------------------------------------------
//-- Tests
//--------------------------------------------------------
'use strict';

const tester = require('@absolunet/tester');

tester.npmPackage.validateMulti();

tester.npmPackage.multiPackagesPaths.forEach((path) => {
	tester.npmPackage.validateSub({ cwd: path, group: path.split('/').pop() });
});
