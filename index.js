'use strict'
require("babel-core/register");
require("babel-polyfill");
const Transform = require('./lib/Transform');

const t = new Transform();

module.exports = t;
