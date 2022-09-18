'use strict';

const privatePackage = require('..');
const assert = require('assert').strict;

assert.strictEqual(privatePackage(), 'Hello from privatePackage');
console.info("privatePackage tests passed");
