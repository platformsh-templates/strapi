"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = registerMaxSpecificity;

var _globalCache = _interopRequireDefault(require("global-cache"));

var _constants = require("./constants");

/**
 * Register max specificity for generating CSS
 *
 * maxSpecificity {Integer} max specificity to use for generating stylesheets,
 *   ie how many _N classes get generated
 */
function registerMaxSpecificity(maxSpecificity) {
  var sharedState = _globalCache["default"].get(_constants.GLOBAL_CACHE_KEY);

  if (!sharedState) {
    _globalCache["default"].set(_constants.GLOBAL_CACHE_KEY, {
      maxSpecificity: maxSpecificity
    });
  } else {
    sharedState.maxSpecificity = maxSpecificity;
  }
}