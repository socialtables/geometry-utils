// From http://stackoverflow.com/questions/16282330/find-centerpoint-of-polygon-in-javascript
var exports = module.exports = {};
exports.Shape = require("./lib/shape");
exports.Arc = require("./lib/arc");
exports.Vector = require("./lib/vector");
exports.Point = require("./lib/vector"); // A Vector does all a Point does and more
exports.Utils = require("./lib/utils");