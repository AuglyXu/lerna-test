'use strict';

const publicPackage = require('..');
const assert = require('assert').strict;

assert.strictEqual(publicPackage(), 'Hello from publicPackage');
console.info("publicPackage tests passed");
