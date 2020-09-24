"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = registerCSSInterfaceNamespace;

var _globalCache = _interopRequireDefault(require("global-cache"));

var _constants = require("./constants");

/**
 * Register a namespace to use for constructing unique class names.
 *
 * CSSInterfaceNamespace {String} The namespace to be used. e.g. Name of the project
 */
function registerCSSInterfaceNamespace(CSSInterfaceNamespace) {
  var sharedState = _globalCache["default"].get(_constants.GLOBAL_CACHE_KEY);

  if (!sharedState) {
    _globalCache["default"].set(_constants.GLOBAL_CACHE_KEY, {
      namespace: CSSInterfaceNamespace
    });
  } else {
    sharedState.namespace = CSSInterfaceNamespace;
  }
}