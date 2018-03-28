'use strict'
require("babel-core/register");
require("babel-polyfill");
import Transform from './lib/Transform';

const t = new Transform();

export default t;
