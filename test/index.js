//--------------------------------------------------------
//-- Tests
//--------------------------------------------------------
'use strict';

const lint = require('mocha-eslint');

lint(['index.js'], { strict:true });
