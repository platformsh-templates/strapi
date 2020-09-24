/*
 * Copyright 2020, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = global || self, factory(global.ReactIntl = {}, global.React));
}(this, (function (exports, React) { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    return function () {
      var Super = _getPrototypeOf(Derived),
          result;

      if (_isNativeReflectConstruct()) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var TYPE;

  (function (TYPE) {
    /**
     * Raw text
     */
    TYPE[TYPE["literal"] = 0] = "literal";
    /**
     * Variable w/o any format, e.g `var` in `this is a {var}`
     */

    TYPE[TYPE["argument"] = 1] = "argument";
    /**
     * Variable w/ number format
     */

    TYPE[TYPE["number"] = 2] = "number";
    /**
     * Variable w/ date format
     */

    TYPE[TYPE["date"] = 3] = "date";
    /**
     * Variable w/ time format
     */

    TYPE[TYPE["time"] = 4] = "time";
    /**
     * Variable w/ select format
     */

    TYPE[TYPE["select"] = 5] = "select";
    /**
     * Variable w/ plural format
     */

    TYPE[TYPE["plural"] = 6] = "plural";
    /**
     * Only possible within plural argument.
     * This is the `#` symbol that will be substituted with the count.
     */

    TYPE[TYPE["pound"] = 7] = "pound";
    /**
     * XML-like tag
     */

    TYPE[TYPE["tag"] = 8] = "tag";
  })(TYPE || (TYPE = {}));

  var SKELETON_TYPE;

  (function (SKELETON_TYPE) {
    SKELETON_TYPE[SKELETON_TYPE["number"] = 0] = "number";
    SKELETON_TYPE[SKELETON_TYPE["dateTime"] = 1] = "dateTime";
  })(SKELETON_TYPE || (SKELETON_TYPE = {}));
  /**
   * Type Guards
   */


  function isLiteralElement(el) {
    return el.type === TYPE.literal;
  }
  function isArgumentElement(el) {
    return el.type === TYPE.argument;
  }
  function isNumberElement(el) {
    return el.type === TYPE.number;
  }
  function isDateElement(el) {
    return el.type === TYPE.date;
  }
  function isTimeElement(el) {
    return el.type === TYPE.time;
  }
  function isSelectElement(el) {
    return el.type === TYPE.select;
  }
  function isPluralElement(el) {
    return el.type === TYPE.plural;
  }
  function isPoundElement(el) {
    return el.type === TYPE.pound;
  }
  function isTagElement(el) {
    return el.type === TYPE.tag;
  }
  function isNumberSkeleton(el) {
    return !!(el && _typeof(el) === 'object' && el.type === 0
    /* number */
    );
  }
  function isDateTimeSkeleton(el) {
    return !!(el && _typeof(el) === 'object' && el.type === 1
    /* dateTime */
    );
  }

  // tslint:disable:only-arrow-functions
  // tslint:disable:object-literal-shorthand
  // tslint:disable:trailing-comma
  // tslint:disable:object-literal-sort-keys
  // tslint:disable:one-variable-per-declaration
  // tslint:disable:max-line-length
  // tslint:disable:no-consecutive-blank-lines
  // tslint:disable:align
  var __extends = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    return function (d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();

  var __assign = undefined && undefined.__assign || function () {
    __assign = Object.assign || function (t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
      }

      return t;
    };

    return __assign.apply(this, arguments);
  }; // Generated by PEG.js v. 0.10.0 (ts-pegjs plugin v. 0.2.6 )

  var SyntaxError =
  /** @class */
  function (_super) {
    __extends(SyntaxError, _super);

    function SyntaxError(message, expected, found, location) {
      var _this = _super.call(this) || this;

      _this.message = message;
      _this.expected = expected;
      _this.found = found;
      _this.location = location;
      _this.name = "SyntaxError";

      if (typeof Error.captureStackTrace === "function") {
        Error.captureStackTrace(_this, SyntaxError);
      }

      return _this;
    }

    SyntaxError.buildMessage = function (expected, found) {
      function hex(ch) {
        return ch.charCodeAt(0).toString(16).toUpperCase();
      }

      function literalEscape(s) {
        return s.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function (ch) {
          return "\\x0" + hex(ch);
        }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
          return "\\x" + hex(ch);
        });
      }

      function classEscape(s) {
        return s.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function (ch) {
          return "\\x0" + hex(ch);
        }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
          return "\\x" + hex(ch);
        });
      }

      function describeExpectation(expectation) {
        switch (expectation.type) {
          case "literal":
            return "\"" + literalEscape(expectation.text) + "\"";

          case "class":
            var escapedParts = expectation.parts.map(function (part) {
              return Array.isArray(part) ? classEscape(part[0]) + "-" + classEscape(part[1]) : classEscape(part);
            });
            return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";

          case "any":
            return "any character";

          case "end":
            return "end of input";

          case "other":
            return expectation.description;
        }
      }

      function describeExpected(expected1) {
        var descriptions = expected1.map(describeExpectation);
        var i;
        var j;
        descriptions.sort();

        if (descriptions.length > 0) {
          for (i = 1, j = 1; i < descriptions.length; i++) {
            if (descriptions[i - 1] !== descriptions[i]) {
              descriptions[j] = descriptions[i];
              j++;
            }
          }

          descriptions.length = j;
        }

        switch (descriptions.length) {
          case 1:
            return descriptions[0];

          case 2:
            return descriptions[0] + " or " + descriptions[1];

          default:
            return descriptions.slice(0, -1).join(", ") + ", or " + descriptions[descriptions.length - 1];
        }
      }

      function describeFound(found1) {
        return found1 ? "\"" + literalEscape(found1) + "\"" : "end of input";
      }

      return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
    };

    return SyntaxError;
  }(Error);

  function peg$parse(input, options) {
    options = options !== undefined ? options : {};
    var peg$FAILED = {};
    var peg$startRuleFunctions = {
      start: peg$parsestart
    };
    var peg$startRuleFunction = peg$parsestart;

    var peg$c0 = function peg$c0(parts) {
      return parts.join('');
    };

    var peg$c1 = function peg$c1(messageText) {
      return __assign({
        type: TYPE.literal,
        value: messageText
      }, insertLocation());
    };

    var peg$c2 = "#";
    var peg$c3 = peg$literalExpectation("#", false);

    var peg$c4 = function peg$c4() {
      return __assign({
        type: TYPE.pound
      }, insertLocation());
    };

    var peg$c5 = peg$otherExpectation("tagElement");
    var peg$c6 = "<";
    var peg$c7 = peg$literalExpectation("<", false);
    var peg$c8 = "/>";
    var peg$c9 = peg$literalExpectation("/>", false);

    var peg$c10 = function peg$c10(value) {
      return __assign({
        type: TYPE.literal,
        value: value.join('')
      }, insertLocation());
    };

    var peg$c11 = function peg$c11(open, children, close) {
      if (open !== close) {
        error("Mismatch tag \"" + open + "\" !== \"" + close + "\"", location());
      }

      return __assign({
        type: TYPE.tag,
        value: open,
        children: children
      }, insertLocation());
    };

    var peg$c12 = function peg$c12() {
      messageCtx.push('openingTag');
      return true;
    };

    var peg$c13 = ">";
    var peg$c14 = peg$literalExpectation(">", false);

    var peg$c15 = function peg$c15(tag) {
      messageCtx.pop();
      return true;
    };

    var peg$c16 = function peg$c16(tag) {
      return tag;
    };

    var peg$c17 = "</";
    var peg$c18 = peg$literalExpectation("</", false);

    var peg$c19 = function peg$c19() {
      messageCtx.push('closingTag');
      return true;
    };

    var peg$c20 = peg$otherExpectation("argumentElement");
    var peg$c21 = "{";
    var peg$c22 = peg$literalExpectation("{", false);
    var peg$c23 = "}";
    var peg$c24 = peg$literalExpectation("}", false);

    var peg$c25 = function peg$c25(value) {
      return __assign({
        type: TYPE.argument,
        value: value
      }, insertLocation());
    };

    var peg$c26 = peg$otherExpectation("numberSkeletonId");
    var peg$c27 = /^['\/{}]/;
    var peg$c28 = peg$classExpectation(["'", "/", "{", "}"], false, false);
    var peg$c29 = peg$anyExpectation();
    var peg$c30 = peg$otherExpectation("numberSkeletonTokenOption");
    var peg$c31 = "/";
    var peg$c32 = peg$literalExpectation("/", false);

    var peg$c33 = function peg$c33(option) {
      return option;
    };

    var peg$c34 = peg$otherExpectation("numberSkeletonToken");

    var peg$c35 = function peg$c35(stem, options) {
      return {
        stem: stem,
        options: options
      };
    };

    var peg$c36 = function peg$c36(tokens) {
      return __assign({
        type: 0
        /* number */
        ,
        tokens: tokens
      }, insertLocation());
    };

    var peg$c37 = "::";
    var peg$c38 = peg$literalExpectation("::", false);

    var peg$c39 = function peg$c39(skeleton) {
      return skeleton;
    };

    var peg$c40 = function peg$c40() {
      messageCtx.push('numberArgStyle');
      return true;
    };

    var peg$c41 = function peg$c41(style) {
      messageCtx.pop();
      return style.replace(/\s*$/, '');
    };

    var peg$c42 = ",";
    var peg$c43 = peg$literalExpectation(",", false);
    var peg$c44 = "number";
    var peg$c45 = peg$literalExpectation("number", false);

    var peg$c46 = function peg$c46(value, type, style) {
      return __assign({
        type: type === 'number' ? TYPE.number : type === 'date' ? TYPE.date : TYPE.time,
        style: style && style[2],
        value: value
      }, insertLocation());
    };

    var peg$c47 = "'";
    var peg$c48 = peg$literalExpectation("'", false);
    var peg$c49 = /^[^']/;
    var peg$c50 = peg$classExpectation(["'"], true, false);
    var peg$c51 = /^[^a-zA-Z'{}]/;
    var peg$c52 = peg$classExpectation([["a", "z"], ["A", "Z"], "'", "{", "}"], true, false);
    var peg$c53 = /^[a-zA-Z]/;
    var peg$c54 = peg$classExpectation([["a", "z"], ["A", "Z"]], false, false);

    var peg$c55 = function peg$c55(pattern) {
      return __assign({
        type: 1
        /* dateTime */
        ,
        pattern: pattern
      }, insertLocation());
    };

    var peg$c56 = function peg$c56() {
      messageCtx.push('dateOrTimeArgStyle');
      return true;
    };

    var peg$c57 = "date";
    var peg$c58 = peg$literalExpectation("date", false);
    var peg$c59 = "time";
    var peg$c60 = peg$literalExpectation("time", false);
    var peg$c61 = "plural";
    var peg$c62 = peg$literalExpectation("plural", false);
    var peg$c63 = "selectordinal";
    var peg$c64 = peg$literalExpectation("selectordinal", false);
    var peg$c65 = "offset:";
    var peg$c66 = peg$literalExpectation("offset:", false);

    var peg$c67 = function peg$c67(value, pluralType, offset, options) {
      return __assign({
        type: TYPE.plural,
        pluralType: pluralType === 'plural' ? 'cardinal' : 'ordinal',
        value: value,
        offset: offset ? offset[2] : 0,
        options: options.reduce(function (all, _a) {
          var id = _a.id,
              value = _a.value,
              optionLocation = _a.location;

          if (id in all) {
            error("Duplicate option \"" + id + "\" in plural element: \"" + text() + "\"", location());
          }

          all[id] = {
            value: value,
            location: optionLocation
          };
          return all;
        }, {})
      }, insertLocation());
    };

    var peg$c68 = "select";
    var peg$c69 = peg$literalExpectation("select", false);

    var peg$c70 = function peg$c70(value, options) {
      return __assign({
        type: TYPE.select,
        value: value,
        options: options.reduce(function (all, _a) {
          var id = _a.id,
              value = _a.value,
              optionLocation = _a.location;

          if (id in all) {
            error("Duplicate option \"" + id + "\" in select element: \"" + text() + "\"", location());
          }

          all[id] = {
            value: value,
            location: optionLocation
          };
          return all;
        }, {})
      }, insertLocation());
    };

    var peg$c71 = "=";
    var peg$c72 = peg$literalExpectation("=", false);

    var peg$c73 = function peg$c73(id) {
      messageCtx.push('select');
      return true;
    };

    var peg$c74 = function peg$c74(id, value) {
      messageCtx.pop();
      return __assign({
        id: id,
        value: value
      }, insertLocation());
    };

    var peg$c75 = function peg$c75(id) {
      messageCtx.push('plural');
      return true;
    };

    var peg$c76 = function peg$c76(id, value) {
      messageCtx.pop();
      return __assign({
        id: id,
        value: value
      }, insertLocation());
    };

    var peg$c77 = peg$otherExpectation("whitespace");
    var peg$c78 = /^[\t-\r \x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
    var peg$c79 = peg$classExpectation([["\t", "\r"], " ", "\x85", "\xA0", "\u1680", ["\u2000", "\u200A"], "\u2028", "\u2029", "\u202F", "\u205F", "\u3000"], false, false);
    var peg$c80 = peg$otherExpectation("syntax pattern");
    var peg$c81 = /^[!-\/:-@[-\^`{-~\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u2010-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46]/;
    var peg$c82 = peg$classExpectation([["!", "/"], [":", "@"], ["[", "^"], "`", ["{", "~"], ["\xA1", "\xA7"], "\xA9", "\xAB", "\xAC", "\xAE", "\xB0", "\xB1", "\xB6", "\xBB", "\xBF", "\xD7", "\xF7", ["\u2010", "\u2027"], ["\u2030", "\u203E"], ["\u2041", "\u2053"], ["\u2055", "\u205E"], ["\u2190", "\u245F"], ["\u2500", "\u2775"], ["\u2794", "\u2BFF"], ["\u2E00", "\u2E7F"], ["\u3001", "\u3003"], ["\u3008", "\u3020"], "\u3030", "\uFD3E", "\uFD3F", "\uFE45", "\uFE46"], false, false);
    var peg$c83 = peg$otherExpectation("optional whitespace");
    var peg$c84 = peg$otherExpectation("number");
    var peg$c85 = "-";
    var peg$c86 = peg$literalExpectation("-", false);

    var peg$c87 = function peg$c87(negative, num) {
      return num ? negative ? -num : num : 0;
    };
    var peg$c89 = peg$otherExpectation("double apostrophes");
    var peg$c90 = "''";
    var peg$c91 = peg$literalExpectation("''", false);

    var peg$c92 = function peg$c92() {
      return "'";
    };

    var peg$c93 = function peg$c93(escapedChar, quotedChars) {
      return escapedChar + quotedChars.replace("''", "'");
    };

    var peg$c94 = function peg$c94(x) {
      return x !== '<' && x !== '{' && !(isInPluralOption() && x === '#') && !(isNestedMessageText() && x === '}') && !(isNestedMessageText() && x === '>');
    };

    var peg$c95 = "\n";
    var peg$c96 = peg$literalExpectation("\n", false);

    var peg$c97 = function peg$c97(x) {
      return x === '<' || x === '>' || x === '{' || x === '}' || isInPluralOption() && x === '#';
    };

    var peg$c98 = peg$otherExpectation("argNameOrNumber");
    var peg$c99 = peg$otherExpectation("validTag");
    var peg$c100 = peg$otherExpectation("argNumber");
    var peg$c101 = "0";
    var peg$c102 = peg$literalExpectation("0", false);

    var peg$c103 = function peg$c103() {
      return 0;
    };

    var peg$c104 = /^[1-9]/;
    var peg$c105 = peg$classExpectation([["1", "9"]], false, false);
    var peg$c106 = /^[0-9]/;
    var peg$c107 = peg$classExpectation([["0", "9"]], false, false);

    var peg$c108 = function peg$c108(digits) {
      return parseInt(digits.join(''), 10);
    };

    var peg$c109 = peg$otherExpectation("argName");
    var peg$c110 = peg$otherExpectation("tagName");
    var peg$currPos = 0;
    var peg$savedPos = 0;
    var peg$posDetailsCache = [{
      line: 1,
      column: 1
    }];
    var peg$maxFailPos = 0;
    var peg$maxFailExpected = [];
    var peg$silentFails = 0;
    var peg$result;

    if (options.startRule !== undefined) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$savedPos, peg$currPos);
    }

    function location() {
      return peg$computeLocation(peg$savedPos, peg$currPos);
    }

    function error(message, location1) {
      location1 = location1 !== undefined ? location1 : peg$computeLocation(peg$savedPos, peg$currPos);
      throw peg$buildSimpleError(message, location1);
    }

    function peg$literalExpectation(text1, ignoreCase) {
      return {
        type: "literal",
        text: text1,
        ignoreCase: ignoreCase
      };
    }

    function peg$classExpectation(parts, inverted, ignoreCase) {
      return {
        type: "class",
        parts: parts,
        inverted: inverted,
        ignoreCase: ignoreCase
      };
    }

    function peg$anyExpectation() {
      return {
        type: "any"
      };
    }

    function peg$endExpectation() {
      return {
        type: "end"
      };
    }

    function peg$otherExpectation(description) {
      return {
        type: "other",
        description: description
      };
    }

    function peg$computePosDetails(pos) {
      var details = peg$posDetailsCache[pos];
      var p;

      if (details) {
        return details;
      } else {
        p = pos - 1;

        while (!peg$posDetailsCache[p]) {
          p--;
        }

        details = peg$posDetailsCache[p];
        details = {
          line: details.line,
          column: details.column
        };

        while (p < pos) {
          if (input.charCodeAt(p) === 10) {
            details.line++;
            details.column = 1;
          } else {
            details.column++;
          }

          p++;
        }

        peg$posDetailsCache[pos] = details;
        return details;
      }
    }

    function peg$computeLocation(startPos, endPos) {
      var startPosDetails = peg$computePosDetails(startPos);
      var endPosDetails = peg$computePosDetails(endPos);
      return {
        start: {
          offset: startPos,
          line: startPosDetails.line,
          column: startPosDetails.column
        },
        end: {
          offset: endPos,
          line: endPosDetails.line,
          column: endPosDetails.column
        }
      };
    }

    function peg$fail(expected1) {
      if (peg$currPos < peg$maxFailPos) {
        return;
      }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected1);
    }

    function peg$buildSimpleError(message, location1) {
      return new SyntaxError(message, [], "", location1);
    }

    function peg$buildStructuredError(expected1, found, location1) {
      return new SyntaxError(SyntaxError.buildMessage(expected1, found), expected1, found, location1);
    }

    function peg$parsestart() {
      var s0;
      s0 = peg$parsemessage();
      return s0;
    }

    function peg$parsemessage() {
      var s0, s1;
      s0 = [];
      s1 = peg$parsemessageElement();

      while (s1 !== peg$FAILED) {
        s0.push(s1);
        s1 = peg$parsemessageElement();
      }

      return s0;
    }

    function peg$parsemessageElement() {
      var s0;
      s0 = peg$parseliteralElement();

      if (s0 === peg$FAILED) {
        s0 = peg$parseargumentElement();

        if (s0 === peg$FAILED) {
          s0 = peg$parsesimpleFormatElement();

          if (s0 === peg$FAILED) {
            s0 = peg$parsepluralElement();

            if (s0 === peg$FAILED) {
              s0 = peg$parseselectElement();

              if (s0 === peg$FAILED) {
                s0 = peg$parsetagElement();

                if (s0 === peg$FAILED) {
                  s0 = peg$parsepoundElement();
                }
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parsemessageText() {
      var s0, s1, s2;
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsedoubleApostrophes();

      if (s2 === peg$FAILED) {
        s2 = peg$parsequotedString();

        if (s2 === peg$FAILED) {
          s2 = peg$parseunquotedString();
        }
      }

      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parsedoubleApostrophes();

          if (s2 === peg$FAILED) {
            s2 = peg$parsequotedString();

            if (s2 === peg$FAILED) {
              s2 = peg$parseunquotedString();
            }
          }
        }
      } else {
        s1 = peg$FAILED;
      }

      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c0(s1);
      }

      s0 = s1;
      return s0;
    }

    function peg$parseliteralElement() {
      var s0, s1;
      s0 = peg$currPos;
      s1 = peg$parsemessageText();

      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1);
      }

      s0 = s1;
      return s0;
    }

    function peg$parsepoundElement() {
      var s0, s1;
      s0 = peg$currPos;

      if (input.charCodeAt(peg$currPos) === 35) {
        s1 = peg$c2;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c3);
        }
      }

      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c4();
      }

      s0 = s1;
      return s0;
    }

    function peg$parsetagElement() {
      var s0, s1, s2, s3, s4, s5;
      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$currPos;

      if (input.charCodeAt(peg$currPos) === 60) {
        s2 = peg$c6;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c7);
        }
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$parsevalidTag();

        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();

          if (s4 !== peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c8) {
              s5 = peg$c8;
              peg$currPos += 2;
            } else {
              s5 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c9);
              }
            }

            if (s5 !== peg$FAILED) {
              s2 = [s2, s3, s4, s5];
              s1 = s2;
            } else {
              peg$currPos = s1;
              s1 = peg$FAILED;
            }
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }

      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c10(s1);
      }

      s0 = s1;

      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseopeningTag();

        if (s1 !== peg$FAILED) {
          s2 = peg$parsemessage();

          if (s2 !== peg$FAILED) {
            s3 = peg$parseclosingTag();

            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c11(s1, s2, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }

      peg$silentFails--;

      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c5);
        }
      }

      return s0;
    }

    function peg$parseopeningTag() {
      var s0, s1, s2, s3, s4, s5;
      s0 = peg$currPos;

      if (input.charCodeAt(peg$currPos) === 60) {
        s1 = peg$c6;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c7);
        }
      }

      if (s1 !== peg$FAILED) {
        peg$savedPos = peg$currPos;
        s2 = peg$c12();

        if (s2) {
          s2 = undefined;
        } else {
          s2 = peg$FAILED;
        }

        if (s2 !== peg$FAILED) {
          s3 = peg$parsevalidTag();

          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 62) {
              s4 = peg$c13;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c14);
              }
            }

            if (s4 !== peg$FAILED) {
              peg$savedPos = peg$currPos;
              s5 = peg$c15();

              if (s5) {
                s5 = undefined;
              } else {
                s5 = peg$FAILED;
              }

              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c16(s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseclosingTag() {
      var s0, s1, s2, s3, s4, s5;
      s0 = peg$currPos;

      if (input.substr(peg$currPos, 2) === peg$c17) {
        s1 = peg$c17;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c18);
        }
      }

      if (s1 !== peg$FAILED) {
        peg$savedPos = peg$currPos;
        s2 = peg$c19();

        if (s2) {
          s2 = undefined;
        } else {
          s2 = peg$FAILED;
        }

        if (s2 !== peg$FAILED) {
          s3 = peg$parsevalidTag();

          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 62) {
              s4 = peg$c13;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c14);
              }
            }

            if (s4 !== peg$FAILED) {
              peg$savedPos = peg$currPos;
              s5 = peg$c15();

              if (s5) {
                s5 = undefined;
              } else {
                s5 = peg$FAILED;
              }

              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c16(s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseargumentElement() {
      var s0, s1, s2, s3, s4, s5;
      peg$silentFails++;
      s0 = peg$currPos;

      if (input.charCodeAt(peg$currPos) === 123) {
        s1 = peg$c21;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c22);
        }
      }

      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();

        if (s2 !== peg$FAILED) {
          s3 = peg$parseargNameOrNumber();

          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();

            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 125) {
                s5 = peg$c23;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c24);
                }
              }

              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c25(s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$silentFails--;

      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c20);
        }
      }

      return s0;
    }

    function peg$parsenumberSkeletonId() {
      var s0, s1, s2, s3, s4;
      peg$silentFails++;
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$currPos;
      s3 = peg$currPos;
      peg$silentFails++;
      s4 = peg$parsewhiteSpace();

      if (s4 === peg$FAILED) {
        if (peg$c27.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c28);
          }
        }
      }

      peg$silentFails--;

      if (s4 === peg$FAILED) {
        s3 = undefined;
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }

      if (s3 !== peg$FAILED) {
        if (input.length > peg$currPos) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c29);
          }
        }

        if (s4 !== peg$FAILED) {
          s3 = [s3, s4];
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$currPos;
          s3 = peg$currPos;
          peg$silentFails++;
          s4 = peg$parsewhiteSpace();

          if (s4 === peg$FAILED) {
            if (peg$c27.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c28);
              }
            }
          }

          peg$silentFails--;

          if (s4 === peg$FAILED) {
            s3 = undefined;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }

          if (s3 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c29);
              }
            }

            if (s4 !== peg$FAILED) {
              s3 = [s3, s4];
              s2 = s3;
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        }
      } else {
        s1 = peg$FAILED;
      }

      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }

      peg$silentFails--;

      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c26);
        }
      }

      return s0;
    }

    function peg$parsenumberSkeletonTokenOption() {
      var s0, s1, s2;
      peg$silentFails++;
      s0 = peg$currPos;

      if (input.charCodeAt(peg$currPos) === 47) {
        s1 = peg$c31;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c32);
        }
      }

      if (s1 !== peg$FAILED) {
        s2 = peg$parsenumberSkeletonId();

        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c33(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$silentFails--;

      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c30);
        }
      }

      return s0;
    }

    function peg$parsenumberSkeletonToken() {
      var s0, s1, s2, s3, s4;
      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parse_();

      if (s1 !== peg$FAILED) {
        s2 = peg$parsenumberSkeletonId();

        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parsenumberSkeletonTokenOption();

          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parsenumberSkeletonTokenOption();
          }

          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c35(s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$silentFails--;

      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c34);
        }
      }

      return s0;
    }

    function peg$parsenumberSkeleton() {
      var s0, s1, s2;
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsenumberSkeletonToken();

      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parsenumberSkeletonToken();
        }
      } else {
        s1 = peg$FAILED;
      }

      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c36(s1);
      }

      s0 = s1;
      return s0;
    }

    function peg$parsenumberArgStyle() {
      var s0, s1, s2;
      s0 = peg$currPos;

      if (input.substr(peg$currPos, 2) === peg$c37) {
        s1 = peg$c37;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c38);
        }
      }

      if (s1 !== peg$FAILED) {
        s2 = peg$parsenumberSkeleton();

        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c39(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        peg$savedPos = peg$currPos;
        s1 = peg$c40();

        if (s1) {
          s1 = undefined;
        } else {
          s1 = peg$FAILED;
        }

        if (s1 !== peg$FAILED) {
          s2 = peg$parsemessageText();

          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c41(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }

      return s0;
    }

    function peg$parsenumberFormatElement() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;
      s0 = peg$currPos;

      if (input.charCodeAt(peg$currPos) === 123) {
        s1 = peg$c21;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c22);
        }
      }

      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();

        if (s2 !== peg$FAILED) {
          s3 = peg$parseargNameOrNumber();

          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();

            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 44) {
                s5 = peg$c42;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c43);
                }
              }

              if (s5 !== peg$FAILED) {
                s6 = peg$parse_();

                if (s6 !== peg$FAILED) {
                  if (input.substr(peg$currPos, 6) === peg$c44) {
                    s7 = peg$c44;
                    peg$currPos += 6;
                  } else {
                    s7 = peg$FAILED;

                    if (peg$silentFails === 0) {
                      peg$fail(peg$c45);
                    }
                  }

                  if (s7 !== peg$FAILED) {
                    s8 = peg$parse_();

                    if (s8 !== peg$FAILED) {
                      s9 = peg$currPos;

                      if (input.charCodeAt(peg$currPos) === 44) {
                        s10 = peg$c42;
                        peg$currPos++;
                      } else {
                        s10 = peg$FAILED;

                        if (peg$silentFails === 0) {
                          peg$fail(peg$c43);
                        }
                      }

                      if (s10 !== peg$FAILED) {
                        s11 = peg$parse_();

                        if (s11 !== peg$FAILED) {
                          s12 = peg$parsenumberArgStyle();

                          if (s12 !== peg$FAILED) {
                            s10 = [s10, s11, s12];
                            s9 = s10;
                          } else {
                            peg$currPos = s9;
                            s9 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s9;
                          s9 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s9;
                        s9 = peg$FAILED;
                      }

                      if (s9 === peg$FAILED) {
                        s9 = null;
                      }

                      if (s9 !== peg$FAILED) {
                        s10 = peg$parse_();

                        if (s10 !== peg$FAILED) {
                          if (input.charCodeAt(peg$currPos) === 125) {
                            s11 = peg$c23;
                            peg$currPos++;
                          } else {
                            s11 = peg$FAILED;

                            if (peg$silentFails === 0) {
                              peg$fail(peg$c24);
                            }
                          }

                          if (s11 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c46(s3, s7, s9);
                            s0 = s1;
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsedateTimeSkeletonLiteral() {
      var s0, s1, s2, s3;
      s0 = peg$currPos;

      if (input.charCodeAt(peg$currPos) === 39) {
        s1 = peg$c47;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c48);
        }
      }

      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsedoubleApostrophes();

        if (s3 === peg$FAILED) {
          if (peg$c49.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c50);
            }
          }
        }

        if (s3 !== peg$FAILED) {
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parsedoubleApostrophes();

            if (s3 === peg$FAILED) {
              if (peg$c49.test(input.charAt(peg$currPos))) {
                s3 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s3 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c50);
                }
              }
            }
          }
        } else {
          s2 = peg$FAILED;
        }

        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 39) {
            s3 = peg$c47;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c48);
            }
          }

          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      if (s0 === peg$FAILED) {
        s0 = [];
        s1 = peg$parsedoubleApostrophes();

        if (s1 === peg$FAILED) {
          if (peg$c51.test(input.charAt(peg$currPos))) {
            s1 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s1 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c52);
            }
          }
        }

        if (s1 !== peg$FAILED) {
          while (s1 !== peg$FAILED) {
            s0.push(s1);
            s1 = peg$parsedoubleApostrophes();

            if (s1 === peg$FAILED) {
              if (peg$c51.test(input.charAt(peg$currPos))) {
                s1 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s1 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c52);
                }
              }
            }
          }
        } else {
          s0 = peg$FAILED;
        }
      }

      return s0;
    }

    function peg$parsedateTimeSkeletonPattern() {
      var s0, s1;
      s0 = [];

      if (peg$c53.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c54);
        }
      }

      if (s1 !== peg$FAILED) {
        while (s1 !== peg$FAILED) {
          s0.push(s1);

          if (peg$c53.test(input.charAt(peg$currPos))) {
            s1 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s1 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c54);
            }
          }
        }
      } else {
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsedateTimeSkeleton() {
      var s0, s1, s2, s3;
      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = [];
      s3 = peg$parsedateTimeSkeletonLiteral();

      if (s3 === peg$FAILED) {
        s3 = peg$parsedateTimeSkeletonPattern();
      }

      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsedateTimeSkeletonLiteral();

          if (s3 === peg$FAILED) {
            s3 = peg$parsedateTimeSkeletonPattern();
          }
        }
      } else {
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        s1 = input.substring(s1, peg$currPos);
      } else {
        s1 = s2;
      }

      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c55(s1);
      }

      s0 = s1;
      return s0;
    }

    function peg$parsedateOrTimeArgStyle() {
      var s0, s1, s2;
      s0 = peg$currPos;

      if (input.substr(peg$currPos, 2) === peg$c37) {
        s1 = peg$c37;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c38);
        }
      }

      if (s1 !== peg$FAILED) {
        s2 = peg$parsedateTimeSkeleton();

        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c39(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        peg$savedPos = peg$currPos;
        s1 = peg$c56();

        if (s1) {
          s1 = undefined;
        } else {
          s1 = peg$FAILED;
        }

        if (s1 !== peg$FAILED) {
          s2 = peg$parsemessageText();

          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c41(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }

      return s0;
    }

    function peg$parsedateOrTimeFormatElement() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;
      s0 = peg$currPos;

      if (input.charCodeAt(peg$currPos) === 123) {
        s1 = peg$c21;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c22);
        }
      }

      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();

        if (s2 !== peg$FAILED) {
          s3 = peg$parseargNameOrNumber();

          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();

            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 44) {
                s5 = peg$c42;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c43);
                }
              }

              if (s5 !== peg$FAILED) {
                s6 = peg$parse_();

                if (s6 !== peg$FAILED) {
                  if (input.substr(peg$currPos, 4) === peg$c57) {
                    s7 = peg$c57;
                    peg$currPos += 4;
                  } else {
                    s7 = peg$FAILED;

                    if (peg$silentFails === 0) {
                      peg$fail(peg$c58);
                    }
                  }

                  if (s7 === peg$FAILED) {
                    if (input.substr(peg$currPos, 4) === peg$c59) {
                      s7 = peg$c59;
                      peg$currPos += 4;
                    } else {
                      s7 = peg$FAILED;

                      if (peg$silentFails === 0) {
                        peg$fail(peg$c60);
                      }
                    }
                  }

                  if (s7 !== peg$FAILED) {
                    s8 = peg$parse_();

                    if (s8 !== peg$FAILED) {
                      s9 = peg$currPos;

                      if (input.charCodeAt(peg$currPos) === 44) {
                        s10 = peg$c42;
                        peg$currPos++;
                      } else {
                        s10 = peg$FAILED;

                        if (peg$silentFails === 0) {
                          peg$fail(peg$c43);
                        }
                      }

                      if (s10 !== peg$FAILED) {
                        s11 = peg$parse_();

                        if (s11 !== peg$FAILED) {
                          s12 = peg$parsedateOrTimeArgStyle();

                          if (s12 !== peg$FAILED) {
                            s10 = [s10, s11, s12];
                            s9 = s10;
                          } else {
                            peg$currPos = s9;
                            s9 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s9;
                          s9 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s9;
                        s9 = peg$FAILED;
                      }

                      if (s9 === peg$FAILED) {
                        s9 = null;
                      }

                      if (s9 !== peg$FAILED) {
                        s10 = peg$parse_();

                        if (s10 !== peg$FAILED) {
                          if (input.charCodeAt(peg$currPos) === 125) {
                            s11 = peg$c23;
                            peg$currPos++;
                          } else {
                            s11 = peg$FAILED;

                            if (peg$silentFails === 0) {
                              peg$fail(peg$c24);
                            }
                          }

                          if (s11 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c46(s3, s7, s9);
                            s0 = s1;
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsesimpleFormatElement() {
      var s0;
      s0 = peg$parsenumberFormatElement();

      if (s0 === peg$FAILED) {
        s0 = peg$parsedateOrTimeFormatElement();
      }

      return s0;
    }

    function peg$parsepluralElement() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15;
      s0 = peg$currPos;

      if (input.charCodeAt(peg$currPos) === 123) {
        s1 = peg$c21;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c22);
        }
      }

      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();

        if (s2 !== peg$FAILED) {
          s3 = peg$parseargNameOrNumber();

          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();

            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 44) {
                s5 = peg$c42;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c43);
                }
              }

              if (s5 !== peg$FAILED) {
                s6 = peg$parse_();

                if (s6 !== peg$FAILED) {
                  if (input.substr(peg$currPos, 6) === peg$c61) {
                    s7 = peg$c61;
                    peg$currPos += 6;
                  } else {
                    s7 = peg$FAILED;

                    if (peg$silentFails === 0) {
                      peg$fail(peg$c62);
                    }
                  }

                  if (s7 === peg$FAILED) {
                    if (input.substr(peg$currPos, 13) === peg$c63) {
                      s7 = peg$c63;
                      peg$currPos += 13;
                    } else {
                      s7 = peg$FAILED;

                      if (peg$silentFails === 0) {
                        peg$fail(peg$c64);
                      }
                    }
                  }

                  if (s7 !== peg$FAILED) {
                    s8 = peg$parse_();

                    if (s8 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 44) {
                        s9 = peg$c42;
                        peg$currPos++;
                      } else {
                        s9 = peg$FAILED;

                        if (peg$silentFails === 0) {
                          peg$fail(peg$c43);
                        }
                      }

                      if (s9 !== peg$FAILED) {
                        s10 = peg$parse_();

                        if (s10 !== peg$FAILED) {
                          s11 = peg$currPos;

                          if (input.substr(peg$currPos, 7) === peg$c65) {
                            s12 = peg$c65;
                            peg$currPos += 7;
                          } else {
                            s12 = peg$FAILED;

                            if (peg$silentFails === 0) {
                              peg$fail(peg$c66);
                            }
                          }

                          if (s12 !== peg$FAILED) {
                            s13 = peg$parse_();

                            if (s13 !== peg$FAILED) {
                              s14 = peg$parsenumber();

                              if (s14 !== peg$FAILED) {
                                s12 = [s12, s13, s14];
                                s11 = s12;
                              } else {
                                peg$currPos = s11;
                                s11 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s11;
                              s11 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s11;
                            s11 = peg$FAILED;
                          }

                          if (s11 === peg$FAILED) {
                            s11 = null;
                          }

                          if (s11 !== peg$FAILED) {
                            s12 = peg$parse_();

                            if (s12 !== peg$FAILED) {
                              s13 = [];
                              s14 = peg$parsepluralOption();

                              if (s14 !== peg$FAILED) {
                                while (s14 !== peg$FAILED) {
                                  s13.push(s14);
                                  s14 = peg$parsepluralOption();
                                }
                              } else {
                                s13 = peg$FAILED;
                              }

                              if (s13 !== peg$FAILED) {
                                s14 = peg$parse_();

                                if (s14 !== peg$FAILED) {
                                  if (input.charCodeAt(peg$currPos) === 125) {
                                    s15 = peg$c23;
                                    peg$currPos++;
                                  } else {
                                    s15 = peg$FAILED;

                                    if (peg$silentFails === 0) {
                                      peg$fail(peg$c24);
                                    }
                                  }

                                  if (s15 !== peg$FAILED) {
                                    peg$savedPos = s0;
                                    s1 = peg$c67(s3, s7, s11, s13);
                                    s0 = s1;
                                  } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                  }
                                } else {
                                  peg$currPos = s0;
                                  s0 = peg$FAILED;
                                }
                              } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseselectElement() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13;
      s0 = peg$currPos;

      if (input.charCodeAt(peg$currPos) === 123) {
        s1 = peg$c21;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c22);
        }
      }

      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();

        if (s2 !== peg$FAILED) {
          s3 = peg$parseargNameOrNumber();

          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();

            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 44) {
                s5 = peg$c42;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c43);
                }
              }

              if (s5 !== peg$FAILED) {
                s6 = peg$parse_();

                if (s6 !== peg$FAILED) {
                  if (input.substr(peg$currPos, 6) === peg$c68) {
                    s7 = peg$c68;
                    peg$currPos += 6;
                  } else {
                    s7 = peg$FAILED;

                    if (peg$silentFails === 0) {
                      peg$fail(peg$c69);
                    }
                  }

                  if (s7 !== peg$FAILED) {
                    s8 = peg$parse_();

                    if (s8 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 44) {
                        s9 = peg$c42;
                        peg$currPos++;
                      } else {
                        s9 = peg$FAILED;

                        if (peg$silentFails === 0) {
                          peg$fail(peg$c43);
                        }
                      }

                      if (s9 !== peg$FAILED) {
                        s10 = peg$parse_();

                        if (s10 !== peg$FAILED) {
                          s11 = [];
                          s12 = peg$parseselectOption();

                          if (s12 !== peg$FAILED) {
                            while (s12 !== peg$FAILED) {
                              s11.push(s12);
                              s12 = peg$parseselectOption();
                            }
                          } else {
                            s11 = peg$FAILED;
                          }

                          if (s11 !== peg$FAILED) {
                            s12 = peg$parse_();

                            if (s12 !== peg$FAILED) {
                              if (input.charCodeAt(peg$currPos) === 125) {
                                s13 = peg$c23;
                                peg$currPos++;
                              } else {
                                s13 = peg$FAILED;

                                if (peg$silentFails === 0) {
                                  peg$fail(peg$c24);
                                }
                              }

                              if (s13 !== peg$FAILED) {
                                peg$savedPos = s0;
                                s1 = peg$c70(s3, s11);
                                s0 = s1;
                              } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsepluralRuleSelectValue() {
      var s0, s1, s2, s3;
      s0 = peg$currPos;
      s1 = peg$currPos;

      if (input.charCodeAt(peg$currPos) === 61) {
        s2 = peg$c71;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c72);
        }
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$parsenumber();

        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }

      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }

      if (s0 === peg$FAILED) {
        s0 = peg$parseargName();
      }

      return s0;
    }

    function peg$parseselectOption() {
      var s0, s1, s2, s3, s4, s5, s6, s7;
      s0 = peg$currPos;
      s1 = peg$parse_();

      if (s1 !== peg$FAILED) {
        s2 = peg$parseargName();

        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();

          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 123) {
              s4 = peg$c21;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c22);
              }
            }

            if (s4 !== peg$FAILED) {
              peg$savedPos = peg$currPos;
              s5 = peg$c73();

              if (s5) {
                s5 = undefined;
              } else {
                s5 = peg$FAILED;
              }

              if (s5 !== peg$FAILED) {
                s6 = peg$parsemessage();

                if (s6 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 125) {
                    s7 = peg$c23;
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;

                    if (peg$silentFails === 0) {
                      peg$fail(peg$c24);
                    }
                  }

                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c74(s2, s6);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsepluralOption() {
      var s0, s1, s2, s3, s4, s5, s6, s7;
      s0 = peg$currPos;
      s1 = peg$parse_();

      if (s1 !== peg$FAILED) {
        s2 = peg$parsepluralRuleSelectValue();

        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();

          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 123) {
              s4 = peg$c21;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c22);
              }
            }

            if (s4 !== peg$FAILED) {
              peg$savedPos = peg$currPos;
              s5 = peg$c75();

              if (s5) {
                s5 = undefined;
              } else {
                s5 = peg$FAILED;
              }

              if (s5 !== peg$FAILED) {
                s6 = peg$parsemessage();

                if (s6 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 125) {
                    s7 = peg$c23;
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;

                    if (peg$silentFails === 0) {
                      peg$fail(peg$c24);
                    }
                  }

                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c76(s2, s6);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsewhiteSpace() {
      var s0;
      peg$silentFails++;

      if (peg$c78.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c79);
        }
      }

      peg$silentFails--;

      if (s0 === peg$FAILED) {

        if (peg$silentFails === 0) {
          peg$fail(peg$c77);
        }
      }

      return s0;
    }

    function peg$parsepatternSyntax() {
      var s0;
      peg$silentFails++;

      if (peg$c81.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c82);
        }
      }

      peg$silentFails--;

      if (s0 === peg$FAILED) {

        if (peg$silentFails === 0) {
          peg$fail(peg$c80);
        }
      }

      return s0;
    }

    function peg$parse_() {
      var s0, s1, s2;
      peg$silentFails++;
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsewhiteSpace();

      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsewhiteSpace();
      }

      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }

      peg$silentFails--;

      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c83);
        }
      }

      return s0;
    }

    function peg$parsenumber() {
      var s0, s1, s2;
      peg$silentFails++;
      s0 = peg$currPos;

      if (input.charCodeAt(peg$currPos) === 45) {
        s1 = peg$c85;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c86);
        }
      }

      if (s1 === peg$FAILED) {
        s1 = null;
      }

      if (s1 !== peg$FAILED) {
        s2 = peg$parseargNumber();

        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c87(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$silentFails--;

      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c84);
        }
      }

      return s0;
    }

    function peg$parsedoubleApostrophes() {
      var s0, s1;
      peg$silentFails++;
      s0 = peg$currPos;

      if (input.substr(peg$currPos, 2) === peg$c90) {
        s1 = peg$c90;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c91);
        }
      }

      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c92();
      }

      s0 = s1;
      peg$silentFails--;

      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c89);
        }
      }

      return s0;
    }

    function peg$parsequotedString() {
      var s0, s1, s2, s3, s4, s5;
      s0 = peg$currPos;

      if (input.charCodeAt(peg$currPos) === 39) {
        s1 = peg$c47;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c48);
        }
      }

      if (s1 !== peg$FAILED) {
        s2 = peg$parseescapedChar();

        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          s4 = [];

          if (input.substr(peg$currPos, 2) === peg$c90) {
            s5 = peg$c90;
            peg$currPos += 2;
          } else {
            s5 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c91);
            }
          }

          if (s5 === peg$FAILED) {
            if (peg$c49.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c50);
              }
            }
          }

          while (s5 !== peg$FAILED) {
            s4.push(s5);

            if (input.substr(peg$currPos, 2) === peg$c90) {
              s5 = peg$c90;
              peg$currPos += 2;
            } else {
              s5 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c91);
              }
            }

            if (s5 === peg$FAILED) {
              if (peg$c49.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c50);
                }
              }
            }
          }

          if (s4 !== peg$FAILED) {
            s3 = input.substring(s3, peg$currPos);
          } else {
            s3 = s4;
          }

          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 39) {
              s4 = peg$c47;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c48);
              }
            }

            if (s4 === peg$FAILED) {
              s4 = null;
            }

            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c93(s2, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseunquotedString() {
      var s0, s1, s2, s3;
      s0 = peg$currPos;
      s1 = peg$currPos;

      if (input.length > peg$currPos) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c29);
        }
      }

      if (s2 !== peg$FAILED) {
        peg$savedPos = peg$currPos;
        s3 = peg$c94(s2);

        if (s3) {
          s3 = undefined;
        } else {
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }

      if (s1 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 10) {
          s1 = peg$c95;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c96);
          }
        }
      }

      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }

      return s0;
    }

    function peg$parseescapedChar() {
      var s0, s1, s2, s3;
      s0 = peg$currPos;
      s1 = peg$currPos;

      if (input.length > peg$currPos) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c29);
        }
      }

      if (s2 !== peg$FAILED) {
        peg$savedPos = peg$currPos;
        s3 = peg$c97(s2);

        if (s3) {
          s3 = undefined;
        } else {
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }

      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }

      return s0;
    }

    function peg$parseargNameOrNumber() {
      var s0, s1;
      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parseargNumber();

      if (s1 === peg$FAILED) {
        s1 = peg$parseargName();
      }

      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }

      peg$silentFails--;

      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c98);
        }
      }

      return s0;
    }

    function peg$parsevalidTag() {
      var s0, s1;
      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parseargNumber();

      if (s1 === peg$FAILED) {
        s1 = peg$parsetagName();
      }

      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }

      peg$silentFails--;

      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c99);
        }
      }

      return s0;
    }

    function peg$parseargNumber() {
      var s0, s1, s2, s3, s4;
      peg$silentFails++;
      s0 = peg$currPos;

      if (input.charCodeAt(peg$currPos) === 48) {
        s1 = peg$c101;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c102);
        }
      }

      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c103();
      }

      s0 = s1;

      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$currPos;

        if (peg$c104.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c105);
          }
        }

        if (s2 !== peg$FAILED) {
          s3 = [];

          if (peg$c106.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c107);
            }
          }

          while (s4 !== peg$FAILED) {
            s3.push(s4);

            if (peg$c106.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c107);
              }
            }
          }

          if (s3 !== peg$FAILED) {
            s2 = [s2, s3];
            s1 = s2;
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }

        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c108(s1);
        }

        s0 = s1;
      }

      peg$silentFails--;

      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c100);
        }
      }

      return s0;
    }

    function peg$parseargName() {
      var s0, s1, s2, s3, s4;
      peg$silentFails++;
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$currPos;
      s3 = peg$currPos;
      peg$silentFails++;
      s4 = peg$parsewhiteSpace();

      if (s4 === peg$FAILED) {
        s4 = peg$parsepatternSyntax();
      }

      peg$silentFails--;

      if (s4 === peg$FAILED) {
        s3 = undefined;
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }

      if (s3 !== peg$FAILED) {
        if (input.length > peg$currPos) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c29);
          }
        }

        if (s4 !== peg$FAILED) {
          s3 = [s3, s4];
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$currPos;
          s3 = peg$currPos;
          peg$silentFails++;
          s4 = peg$parsewhiteSpace();

          if (s4 === peg$FAILED) {
            s4 = peg$parsepatternSyntax();
          }

          peg$silentFails--;

          if (s4 === peg$FAILED) {
            s3 = undefined;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }

          if (s3 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c29);
              }
            }

            if (s4 !== peg$FAILED) {
              s3 = [s3, s4];
              s2 = s3;
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        }
      } else {
        s1 = peg$FAILED;
      }

      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }

      peg$silentFails--;

      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c109);
        }
      }

      return s0;
    }

    function peg$parsetagName() {
      var s0, s1, s2, s3, s4;
      peg$silentFails++;
      s0 = peg$currPos;
      s1 = [];

      if (input.charCodeAt(peg$currPos) === 45) {
        s2 = peg$c85;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c86);
        }
      }

      if (s2 === peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parsewhiteSpace();

        if (s4 === peg$FAILED) {
          s4 = peg$parsepatternSyntax();
        }

        peg$silentFails--;

        if (s4 === peg$FAILED) {
          s3 = undefined;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c29);
            }
          }

          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      }

      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);

          if (input.charCodeAt(peg$currPos) === 45) {
            s2 = peg$c85;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c86);
            }
          }

          if (s2 === peg$FAILED) {
            s2 = peg$currPos;
            s3 = peg$currPos;
            peg$silentFails++;
            s4 = peg$parsewhiteSpace();

            if (s4 === peg$FAILED) {
              s4 = peg$parsepatternSyntax();
            }

            peg$silentFails--;

            if (s4 === peg$FAILED) {
              s3 = undefined;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }

            if (s3 !== peg$FAILED) {
              if (input.length > peg$currPos) {
                s4 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s4 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c29);
                }
              }

              if (s4 !== peg$FAILED) {
                s3 = [s3, s4];
                s2 = s3;
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          }
        }
      } else {
        s1 = peg$FAILED;
      }

      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }

      peg$silentFails--;

      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c110);
        }
      }

      return s0;
    }

    var messageCtx = ['root'];

    function isNestedMessageText() {
      return messageCtx.length > 1;
    }

    function isInPluralOption() {
      return messageCtx[messageCtx.length - 1] === 'plural';
    }

    function insertLocation() {
      return options && options.captureLocation ? {
        location: location()
      } : {};
    }

    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail(peg$endExpectation());
      }

      throw peg$buildStructuredError(peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1) : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
    }
  }

  var pegParse = peg$parse;

  var __spreadArrays = undefined && undefined.__spreadArrays || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
      s += arguments[i].length;
    }

    for (var r = Array(s), k = 0, i = 0; i < il; i++) {
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
        r[k] = a[j];
      }
    }

    return r;
  };
  var PLURAL_HASHTAG_REGEX = /(^|[^\\])#/g;
  /**
   * Whether to convert `#` in plural rule options
   * to `{var, number}`
   * @param el AST Element
   * @param pluralStack current plural stack
   */

  function normalizeHashtagInPlural(els) {
    els.forEach(function (el) {
      // If we're encountering a plural el
      if (!isPluralElement(el) && !isSelectElement(el)) {
        return;
      } // Go down the options and search for # in any literal element


      Object.keys(el.options).forEach(function (id) {
        var _a;

        var opt = el.options[id]; // If we got a match, we have to split this
        // and inject a NumberElement in the middle

        var matchingLiteralElIndex = -1;
        var literalEl = undefined;

        for (var i = 0; i < opt.value.length; i++) {
          var el_1 = opt.value[i];

          if (isLiteralElement(el_1) && PLURAL_HASHTAG_REGEX.test(el_1.value)) {
            matchingLiteralElIndex = i;
            literalEl = el_1;
            break;
          }
        }

        if (literalEl) {
          var newValue = literalEl.value.replace(PLURAL_HASHTAG_REGEX, "$1{" + el.value + ", number}");
          var newEls = pegParse(newValue);

          (_a = opt.value).splice.apply(_a, __spreadArrays([matchingLiteralElIndex, 1], newEls));
        }

        normalizeHashtagInPlural(opt.value);
      });
    });
  }

  var __assign$1 = undefined && undefined.__assign || function () {
    __assign$1 = Object.assign || function (t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
      }

      return t;
    };

    return __assign$1.apply(this, arguments);
  };
  /**
   * https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
   * Credit: https://github.com/caridy/intl-datetimeformat-pattern/blob/master/index.js
   * with some tweaks
   */


  var DATE_TIME_REGEX = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
  /**
   * Parse Date time skeleton into Intl.DateTimeFormatOptions
   * Ref: https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
   * @public
   * @param skeleton skeleton string
   */

  function parseDateTimeSkeleton(skeleton) {
    var result = {};
    skeleton.replace(DATE_TIME_REGEX, function (match) {
      var len = match.length;

      switch (match[0]) {
        // Era
        case 'G':
          result.era = len === 4 ? 'long' : len === 5 ? 'narrow' : 'short';
          break;
        // Year

        case 'y':
          result.year = len === 2 ? '2-digit' : 'numeric';
          break;

        case 'Y':
        case 'u':
        case 'U':
        case 'r':
          throw new RangeError('`Y/u/U/r` (year) patterns are not supported, use `y` instead');
        // Quarter

        case 'q':
        case 'Q':
          throw new RangeError('`q/Q` (quarter) patterns are not supported');
        // Month

        case 'M':
        case 'L':
          result.month = ['numeric', '2-digit', 'short', 'long', 'narrow'][len - 1];
          break;
        // Week

        case 'w':
        case 'W':
          throw new RangeError('`w/W` (week) patterns are not supported');

        case 'd':
          result.day = ['numeric', '2-digit'][len - 1];
          break;

        case 'D':
        case 'F':
        case 'g':
          throw new RangeError('`D/F/g` (day) patterns are not supported, use `d` instead');
        // Weekday

        case 'E':
          result.weekday = len === 4 ? 'short' : len === 5 ? 'narrow' : 'short';
          break;

        case 'e':
          if (len < 4) {
            throw new RangeError('`e..eee` (weekday) patterns are not supported');
          }

          result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
          break;

        case 'c':
          if (len < 4) {
            throw new RangeError('`c..ccc` (weekday) patterns are not supported');
          }

          result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
          break;
        // Period

        case 'a':
          // AM, PM
          result.hour12 = true;
          break;

        case 'b': // am, pm, noon, midnight

        case 'B':
          // flexible day periods
          throw new RangeError('`b/B` (period) patterns are not supported, use `a` instead');
        // Hour

        case 'h':
          result.hourCycle = 'h12';
          result.hour = ['numeric', '2-digit'][len - 1];
          break;

        case 'H':
          result.hourCycle = 'h23';
          result.hour = ['numeric', '2-digit'][len - 1];
          break;

        case 'K':
          result.hourCycle = 'h11';
          result.hour = ['numeric', '2-digit'][len - 1];
          break;

        case 'k':
          result.hourCycle = 'h24';
          result.hour = ['numeric', '2-digit'][len - 1];
          break;

        case 'j':
        case 'J':
        case 'C':
          throw new RangeError('`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead');
        // Minute

        case 'm':
          result.minute = ['numeric', '2-digit'][len - 1];
          break;
        // Second

        case 's':
          result.second = ['numeric', '2-digit'][len - 1];
          break;

        case 'S':
        case 'A':
          throw new RangeError('`S/A` (second) pattenrs are not supported, use `s` instead');
        // Zone

        case 'z':
          // 1..3, 4: specific non-location format
          result.timeZoneName = len < 4 ? 'short' : 'long';
          break;

        case 'Z': // 1..3, 4, 5: The ISO8601 varios formats

        case 'O': // 1, 4: miliseconds in day short, long

        case 'v': // 1, 4: generic non-location format

        case 'V': // 1, 2, 3, 4: time zone ID or city

        case 'X': // 1, 2, 3, 4: The ISO8601 varios formats

        case 'x':
          // 1, 2, 3, 4: The ISO8601 varios formats
          throw new RangeError('`Z/O/v/V/X/x` (timeZone) pattenrs are not supported, use `z` instead');
      }

      return '';
    });
    return result;
  }

  function icuUnitToEcma(unit) {
    return unit.replace(/^(.*?)-/, '');
  }

  var FRACTION_PRECISION_REGEX = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
  var SIGNIFICANT_PRECISION_REGEX = /^(@+)?(\+|#+)?$/g;

  function parseSignificantPrecision(str) {
    var result = {};
    str.replace(SIGNIFICANT_PRECISION_REGEX, function (_, g1, g2) {
      // @@@ case
      if (typeof g2 !== 'string') {
        result.minimumSignificantDigits = g1.length;
        result.maximumSignificantDigits = g1.length;
      } // @@@+ case
      else if (g2 === '+') {
          result.minimumSignificantDigits = g1.length;
        } // .### case
        else if (g1[0] === '#') {
            result.maximumSignificantDigits = g1.length;
          } // .@@## or .@@@ case
          else {
              result.minimumSignificantDigits = g1.length;
              result.maximumSignificantDigits = g1.length + (typeof g2 === 'string' ? g2.length : 0);
            }

      return '';
    });
    return result;
  }

  function parseSign(str) {
    switch (str) {
      case 'sign-auto':
        return {
          signDisplay: 'auto'
        };

      case 'sign-accounting':
        return {
          currencySign: 'accounting'
        };

      case 'sign-always':
        return {
          signDisplay: 'always'
        };

      case 'sign-accounting-always':
        return {
          signDisplay: 'always',
          currencySign: 'accounting'
        };

      case 'sign-except-zero':
        return {
          signDisplay: 'exceptZero'
        };

      case 'sign-accounting-except-zero':
        return {
          signDisplay: 'exceptZero',
          currencySign: 'accounting'
        };

      case 'sign-never':
        return {
          signDisplay: 'never'
        };
    }
  }

  function parseNotationOptions(opt) {
    var result = {};
    var signOpts = parseSign(opt);

    if (signOpts) {
      return signOpts;
    }

    return result;
  }
  /**
   * https://github.com/unicode-org/icu/blob/master/docs/userguide/format_parse/numbers/skeletons.md#skeleton-stems-and-options
   */


  function convertNumberSkeletonToNumberFormatOptions(tokens) {
    var result = {};

    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
      var token = tokens_1[_i];

      switch (token.stem) {
        case 'percent':
          result.style = 'percent';
          continue;

        case 'currency':
          result.style = 'currency';
          result.currency = token.options[0];
          continue;

        case 'group-off':
          result.useGrouping = false;
          continue;

        case 'precision-integer':
        case '.':
          result.maximumFractionDigits = 0;
          continue;

        case 'measure-unit':
          result.style = 'unit';
          result.unit = icuUnitToEcma(token.options[0]);
          continue;

        case 'compact-short':
          result.notation = 'compact';
          result.compactDisplay = 'short';
          continue;

        case 'compact-long':
          result.notation = 'compact';
          result.compactDisplay = 'long';
          continue;

        case 'scientific':
          result = __assign$1(__assign$1(__assign$1({}, result), {
            notation: 'scientific'
          }), token.options.reduce(function (all, opt) {
            return __assign$1(__assign$1({}, all), parseNotationOptions(opt));
          }, {}));
          continue;

        case 'engineering':
          result = __assign$1(__assign$1(__assign$1({}, result), {
            notation: 'engineering'
          }), token.options.reduce(function (all, opt) {
            return __assign$1(__assign$1({}, all), parseNotationOptions(opt));
          }, {}));
          continue;

        case 'notation-simple':
          result.notation = 'standard';
          continue;
        // https://github.com/unicode-org/icu/blob/master/icu4c/source/i18n/unicode/unumberformatter.h

        case 'unit-width-narrow':
          result.currencyDisplay = 'narrowSymbol';
          result.unitDisplay = 'narrow';
          continue;

        case 'unit-width-short':
          result.currencyDisplay = 'code';
          result.unitDisplay = 'short';
          continue;

        case 'unit-width-full-name':
          result.currencyDisplay = 'name';
          result.unitDisplay = 'long';
          continue;

        case 'unit-width-iso-code':
          result.currencyDisplay = 'symbol';
          continue;
      } // Precision
      // https://github.com/unicode-org/icu/blob/master/docs/userguide/format_parse/numbers/skeletons.md#fraction-precision
      // precision-integer case


      if (FRACTION_PRECISION_REGEX.test(token.stem)) {
        if (token.options.length > 1) {
          throw new RangeError('Fraction-precision stems only accept a single optional option');
        }

        token.stem.replace(FRACTION_PRECISION_REGEX, function (match, g1, g2, g3, g4, g5) {
          // .000* case (before ICU67 it was .000+)
          if (g2 === '*') {
            result.minimumFractionDigits = g1.length;
          } // .### case
          else if (g3 && g3[0] === '#') {
              result.maximumFractionDigits = g3.length;
            } // .00## case
            else if (g4 && g5) {
                result.minimumFractionDigits = g4.length;
                result.maximumFractionDigits = g4.length + g5.length;
              } else {
                result.minimumFractionDigits = g1.length;
                result.maximumFractionDigits = g1.length;
              }

          return '';
        });

        if (token.options.length) {
          result = __assign$1(__assign$1({}, result), parseSignificantPrecision(token.options[0]));
        }

        continue;
      }

      if (SIGNIFICANT_PRECISION_REGEX.test(token.stem)) {
        result = __assign$1(__assign$1({}, result), parseSignificantPrecision(token.stem));
        continue;
      }

      var signOpts = parseSign(token.stem);

      if (signOpts) {
        result = __assign$1(__assign$1({}, result), signOpts);
      }
    }

    return result;
  }

  function parse(input, opts) {
    var els = pegParse(input, opts);

    if (!opts || opts.normalizeHashtagInPlural !== false) {
      normalizeHashtagInPlural(els);
    }

    return els;
  }

  /*
  Copyright (c) 2014, Yahoo! Inc. All rights reserved.
  Copyrights licensed under the New BSD License.
  See the accompanying LICENSE file for terms.
  */
  var __spreadArrays$1 = undefined && undefined.__spreadArrays || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
      s += arguments[i].length;
    }

    for (var r = Array(s), k = 0, i = 0; i < il; i++) {
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
        r[k] = a[j];
      }
    }

    return r;
  }; // -- Utilities ----------------------------------------------------------------


  function getCacheId(inputs) {
    return JSON.stringify(inputs.map(function (input) {
      return input && _typeof(input) === 'object' ? orderedProps(input) : input;
    }));
  }

  function orderedProps(obj) {
    return Object.keys(obj).sort().map(function (k) {
      var _a;

      return _a = {}, _a[k] = obj[k], _a;
    });
  }

  var memoizeFormatConstructor = function memoizeFormatConstructor(FormatConstructor, cache) {
    if (cache === void 0) {
      cache = {};
    }

    return function () {
      var _a;

      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      var cacheId = getCacheId(args);
      var format = cacheId && cache[cacheId];

      if (!format) {
        format = new ((_a = FormatConstructor).bind.apply(_a, __spreadArrays$1([void 0], args)))();

        if (cacheId) {
          cache[cacheId] = format;
        }
      }

      return format;
    };
  };

  var __extends$1 = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    return function (d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();

  var ErrorCode;

  (function (ErrorCode) {
    // When we have a placeholder but no value to format
    ErrorCode["MISSING_VALUE"] = "MISSING_VALUE"; // When value supplied is invalid

    ErrorCode["INVALID_VALUE"] = "INVALID_VALUE"; // When we need specific Intl API but it's not available

    ErrorCode["MISSING_INTL_API"] = "MISSING_INTL_API";
  })(ErrorCode || (ErrorCode = {}));

  var FormatError =
  /** @class */
  function (_super) {
    __extends$1(FormatError, _super);

    function FormatError(msg, code, originalMessage) {
      var _this = _super.call(this, msg) || this;

      _this.code = code;
      _this.originalMessage = originalMessage;
      return _this;
    }

    FormatError.prototype.toString = function () {
      return "[formatjs Error: " + this.code + "] " + this.message;
    };

    return FormatError;
  }(Error);

  var InvalidValueError =
  /** @class */
  function (_super) {
    __extends$1(InvalidValueError, _super);

    function InvalidValueError(variableId, value, options, originalMessage) {
      return _super.call(this, "Invalid values for \"" + variableId + "\": \"" + value + "\". Options are \"" + Object.keys(options).join('", "') + "\"", "INVALID_VALUE"
      /* INVALID_VALUE */
      , originalMessage) || this;
    }

    return InvalidValueError;
  }(FormatError);

  var InvalidValueTypeError =
  /** @class */
  function (_super) {
    __extends$1(InvalidValueTypeError, _super);

    function InvalidValueTypeError(value, type, originalMessage) {
      return _super.call(this, "Value for \"" + value + "\" must be of type " + type, "INVALID_VALUE"
      /* INVALID_VALUE */
      , originalMessage) || this;
    }

    return InvalidValueTypeError;
  }(FormatError);

  var MissingValueError =
  /** @class */
  function (_super) {
    __extends$1(MissingValueError, _super);

    function MissingValueError(variableId, originalMessage) {
      return _super.call(this, "The intl string context variable \"" + variableId + "\" was not provided to the string \"" + originalMessage + "\"", "MISSING_VALUE"
      /* MISSING_VALUE */
      , originalMessage) || this;
    }

    return MissingValueError;
  }(FormatError);

  var PART_TYPE;

  (function (PART_TYPE) {
    PART_TYPE[PART_TYPE["literal"] = 0] = "literal";
    PART_TYPE[PART_TYPE["object"] = 1] = "object";
  })(PART_TYPE || (PART_TYPE = {}));

  function mergeLiteral(parts) {
    if (parts.length < 2) {
      return parts;
    }

    return parts.reduce(function (all, part) {
      var lastPart = all[all.length - 1];

      if (!lastPart || lastPart.type !== 0
      /* literal */
      || part.type !== 0
      /* literal */
      ) {
          all.push(part);
        } else {
        lastPart.value += part.value;
      }

      return all;
    }, []);
  }

  function isFormatXMLElementFn(el) {
    return typeof el === 'function';
  } // TODO(skeleton): add skeleton support


  function formatToParts(els, locales, formatters, formats, values, currentPluralValue, // For debugging
  originalMessage) {
    // Hot path for straight simple msg translations
    if (els.length === 1 && isLiteralElement(els[0])) {
      return [{
        type: 0
        /* literal */
        ,
        value: els[0].value
      }];
    }

    var result = [];

    for (var _i = 0, els_1 = els; _i < els_1.length; _i++) {
      var el = els_1[_i]; // Exit early for string parts.

      if (isLiteralElement(el)) {
        result.push({
          type: 0
          /* literal */
          ,
          value: el.value
        });
        continue;
      } // TODO: should this part be literal type?
      // Replace `#` in plural rules with the actual numeric value.


      if (isPoundElement(el)) {
        if (typeof currentPluralValue === 'number') {
          result.push({
            type: 0
            /* literal */
            ,
            value: formatters.getNumberFormat(locales).format(currentPluralValue)
          });
        }

        continue;
      }

      var varName = el.value; // Enforce that all required values are provided by the caller.

      if (!(values && varName in values)) {
        throw new MissingValueError(varName, originalMessage);
      }

      var value = values[varName];

      if (isArgumentElement(el)) {
        if (!value || typeof value === 'string' || typeof value === 'number') {
          value = typeof value === 'string' || typeof value === 'number' ? String(value) : '';
        }

        result.push({
          type: typeof value === 'string' ? 0
          /* literal */
          : 1
          /* object */
          ,
          value: value
        });
        continue;
      } // Recursively format plural and select parts' option — which can be a
      // nested pattern structure. The choosing of the option to use is
      // abstracted-by and delegated-to the part helper object.


      if (isDateElement(el)) {
        var style = typeof el.style === 'string' ? formats.date[el.style] : undefined;
        result.push({
          type: 0
          /* literal */
          ,
          value: formatters.getDateTimeFormat(locales, style).format(value)
        });
        continue;
      }

      if (isTimeElement(el)) {
        var style = typeof el.style === 'string' ? formats.time[el.style] : isDateTimeSkeleton(el.style) ? parseDateTimeSkeleton(el.style.pattern) : undefined;
        result.push({
          type: 0
          /* literal */
          ,
          value: formatters.getDateTimeFormat(locales, style).format(value)
        });
        continue;
      }

      if (isNumberElement(el)) {
        var style = typeof el.style === 'string' ? formats.number[el.style] : isNumberSkeleton(el.style) ? convertNumberSkeletonToNumberFormatOptions(el.style.tokens) : undefined;
        result.push({
          type: 0
          /* literal */
          ,
          value: formatters.getNumberFormat(locales, style).format(value)
        });
        continue;
      }

      if (isTagElement(el)) {
        var children = el.children,
            value_1 = el.value;
        var formatFn = values[value_1];

        if (!isFormatXMLElementFn(formatFn)) {
          throw new InvalidValueTypeError(value_1, 'function', originalMessage);
        }

        var parts = formatToParts(children, locales, formatters, formats, values);
        var chunks = formatFn.apply(void 0, parts.map(function (p) {
          return p.value;
        }));

        if (!Array.isArray(chunks)) {
          chunks = [chunks];
        }

        result.push.apply(result, chunks.map(function (c) {
          return {
            type: typeof c === 'string' ? 0
            /* literal */
            : 1
            /* object */
            ,
            value: c
          };
        }));
      }

      if (isSelectElement(el)) {
        var opt = el.options[value] || el.options.other;

        if (!opt) {
          throw new InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
        }

        result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values));
        continue;
      }

      if (isPluralElement(el)) {
        var opt = el.options["=" + value];

        if (!opt) {
          if (!Intl.PluralRules) {
            throw new FormatError("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", "MISSING_INTL_API"
            /* MISSING_INTL_API */
            , originalMessage);
          }

          var rule = formatters.getPluralRules(locales, {
            type: el.pluralType
          }).select(value - (el.offset || 0));
          opt = el.options[rule] || el.options.other;
        }

        if (!opt) {
          throw new InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
        }

        result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values, value - (el.offset || 0)));
        continue;
      }
    }

    return mergeLiteral(result);
  }

  /*
  Copyright (c) 2014, Yahoo! Inc. All rights reserved.
  Copyrights licensed under the New BSD License.
  See the accompanying LICENSE file for terms.
  */
  var __assign$2 = undefined && undefined.__assign || function () {
    __assign$2 = Object.assign || function (t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
      }

      return t;
    };

    return __assign$2.apply(this, arguments);
  };

  function mergeConfig(c1, c2) {
    if (!c2) {
      return c1;
    }

    return __assign$2(__assign$2(__assign$2({}, c1 || {}), c2 || {}), Object.keys(c1).reduce(function (all, k) {
      all[k] = __assign$2(__assign$2({}, c1[k]), c2[k] || {});
      return all;
    }, {}));
  }

  function mergeConfigs(defaultConfig, configs) {
    if (!configs) {
      return defaultConfig;
    }

    return Object.keys(defaultConfig).reduce(function (all, k) {
      all[k] = mergeConfig(defaultConfig[k], configs[k]);
      return all;
    }, __assign$2({}, defaultConfig));
  }

  function createDefaultFormatters(cache) {
    if (cache === void 0) {
      cache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      };
    }

    return {
      getNumberFormat: memoizeFormatConstructor(Intl.NumberFormat, cache.number),
      getDateTimeFormat: memoizeFormatConstructor(Intl.DateTimeFormat, cache.dateTime),
      getPluralRules: memoizeFormatConstructor(Intl.PluralRules, cache.pluralRules)
    };
  }

  var IntlMessageFormat =
  /** @class */
  function () {
    function IntlMessageFormat(message, locales, overrideFormats, opts) {
      var _this = this;

      if (locales === void 0) {
        locales = IntlMessageFormat.defaultLocale;
      }

      this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      };

      this.format = function (values) {
        var parts = _this.formatToParts(values); // Hot path for straight simple msg translations


        if (parts.length === 1) {
          return parts[0].value;
        }

        var result = parts.reduce(function (all, part) {
          if (!all.length || part.type !== 0
          /* literal */
          || typeof all[all.length - 1] !== 'string') {
            all.push(part.value);
          } else {
            all[all.length - 1] += part.value;
          }

          return all;
        }, []);

        if (result.length <= 1) {
          return result[0] || '';
        }

        return result;
      };

      this.formatToParts = function (values) {
        return formatToParts(_this.ast, _this.locales, _this.formatters, _this.formats, values, undefined, _this.message);
      };

      this.resolvedOptions = function () {
        return {
          locale: Intl.NumberFormat.supportedLocalesOf(_this.locales)[0]
        };
      };

      this.getAst = function () {
        return _this.ast;
      };

      if (typeof message === 'string') {
        this.message = message;

        if (!IntlMessageFormat.__parse) {
          throw new TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
        } // Parse string messages into an AST.


        this.ast = IntlMessageFormat.__parse(message, {
          normalizeHashtagInPlural: false
        });
      } else {
        this.ast = message;
      }

      if (!Array.isArray(this.ast)) {
        throw new TypeError('A message must be provided as a String or AST.');
      } // Creates a new object with the specified `formats` merged with the default
      // formats.


      this.formats = mergeConfigs(IntlMessageFormat.formats, overrideFormats); // Defined first because it's used to build the format pattern.

      this.locales = locales;
      this.formatters = opts && opts.formatters || createDefaultFormatters(this.formatterCache);
    }

    Object.defineProperty(IntlMessageFormat, "defaultLocale", {
      get: function get() {
        if (!IntlMessageFormat.memoizedDefaultLocale) {
          IntlMessageFormat.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale;
        }

        return IntlMessageFormat.memoizedDefaultLocale;
      },
      enumerable: true,
      configurable: true
    });
    IntlMessageFormat.memoizedDefaultLocale = null;
    IntlMessageFormat.__parse = parse; // Default format options used as the prototype of the `formats` provided to the
    // constructor. These are used when constructing the internal Intl.NumberFormat
    // and Intl.DateTimeFormat instances.

    IntlMessageFormat.formats = {
      number: {
        currency: {
          style: 'currency'
        },
        percent: {
          style: 'percent'
        }
      },
      date: {
        short: {
          month: 'numeric',
          day: 'numeric',
          year: '2-digit'
        },
        medium: {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        },
        long: {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        },
        full: {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        }
      },
      time: {
        short: {
          hour: 'numeric',
          minute: 'numeric'
        },
        medium: {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric'
        },
        long: {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          timeZoneName: 'short'
        },
        full: {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          timeZoneName: 'short'
        }
      }
    };
    return IntlMessageFormat;
  }();

  /*
  Copyright (c) 2014, Yahoo! Inc. All rights reserved.
  Copyrights licensed under the New BSD License.
  See the accompanying LICENSE file for terms.
  */

  function invariant(condition, message, Err) {
    if (Err === void 0) {
      Err = Error;
    }

    if (!condition) {
      throw new Err(message);
    }
  }

  (function (ReactIntlErrorCode) {
    ReactIntlErrorCode["FORMAT_ERROR"] = "FORMAT_ERROR";
    ReactIntlErrorCode["UNSUPPORTED_FORMATTER"] = "UNSUPPORTED_FORMATTER";
    ReactIntlErrorCode["INVALID_CONFIG"] = "INVALID_CONFIG";
    ReactIntlErrorCode["MISSING_DATA"] = "MISSING_DATA";
    ReactIntlErrorCode["MISSING_TRANSLATION"] = "MISSING_TRANSLATION";
  })(exports.ReactIntlErrorCode || (exports.ReactIntlErrorCode = {}));

  var ReactIntlError = /*#__PURE__*/function (_Error) {
    _inherits(ReactIntlError, _Error);

    var _super = _createSuper(ReactIntlError);

    function ReactIntlError(code, message, descriptor, exception) {
      var _this;

      _classCallCheck(this, ReactIntlError);

      _this = _super.call(this, "[React Intl Error ".concat(code, "] ").concat(message, " ").concat(exception ? "\n".concat(exception.stack) : ''));
      _this.code = code;
      _this.descriptor = descriptor;

      if (typeof Error.captureStackTrace === 'function') {
        Error.captureStackTrace(_assertThisInitialized(_this), ReactIntlError);
      }

      return _this;
    }

    return ReactIntlError;
  }( /*#__PURE__*/_wrapNativeSuper(Error));

  /*
  HTML escaping is the same as React's
  (on purpose.) Therefore, it has the following Copyright and Licensing:

  Copyright 2013-2014, Facebook, Inc.
  All rights reserved.

  This source code is licensed under the BSD-style license found in the LICENSE
  file in the root directory of React's source tree.
  */
  function filterProps(props, whitelist) {
    var defaults = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return whitelist.reduce(function (filtered, name) {
      if (name in props) {
        filtered[name] = props[name];
      } else if (name in defaults) {
        filtered[name] = defaults[name];
      }

      return filtered;
    }, {});
  }
  function invariantIntlContext(intl) {
    invariant(intl, '[React Intl] Could not find required `intl` object. ' + '<IntlProvider> needs to exist in the component ancestry.');
  }
  function defaultErrorHandler(error) {
    {
      console.error(error);
    }
  }
  var DEFAULT_INTL_CONFIG = {
    formats: {},
    messages: {},
    timeZone: undefined,
    textComponent: React.Fragment,
    defaultLocale: 'en',
    defaultFormats: {},
    onError: defaultErrorHandler
  };
  function createIntlCache() {
    return {
      dateTime: {},
      number: {},
      message: {},
      relativeTime: {},
      pluralRules: {},
      list: {},
      displayNames: {}
    };
  }
  /**
   * Create intl formatters and populate cache
   * @param cache explicit cache to prevent leaking memory
   */

  function createFormatters() {
    var cache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : createIntlCache();
    var RelativeTimeFormat = Intl.RelativeTimeFormat;
    var ListFormat = Intl.ListFormat;
    var DisplayNames = Intl.DisplayNames;
    return {
      getDateTimeFormat: memoizeFormatConstructor(Intl.DateTimeFormat, cache.dateTime),
      getNumberFormat: memoizeFormatConstructor(Intl.NumberFormat, cache.number),
      getMessageFormat: memoizeFormatConstructor(IntlMessageFormat, cache.message),
      getRelativeTimeFormat: memoizeFormatConstructor(RelativeTimeFormat, cache.relativeTime),
      getPluralRules: memoizeFormatConstructor(Intl.PluralRules, cache.pluralRules),
      getListFormat: memoizeFormatConstructor(ListFormat, cache.list),
      getDisplayNames: memoizeFormatConstructor(DisplayNames, cache.displayNames)
    };
  }
  function getNamedFormat(formats, type, name, onError) {
    var formatType = formats && formats[type];
    var format;

    if (formatType) {
      format = formatType[name];
    }

    if (format) {
      return format;
    }

    onError(new ReactIntlError("UNSUPPORTED_FORMATTER"
    /* UNSUPPORTED_FORMATTER */
    , "No ".concat(type, " format named: ").concat(name)));
  }

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var reactIs_development = createCommonjsModule(function (module, exports) {

    {
      (function () {

        Object.defineProperty(exports, '__esModule', {
          value: true
        }); // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.

        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

        function isValidElementType(type) {
          return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
        }
        /**
         * Forked from fbjs/warning:
         * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
         *
         * Only change is we use console.warn instead of console.error,
         * and do nothing when 'console' is not supported.
         * This really simplifies the code.
         * ---
         * Similar to invariant but only logs a warning if the condition is not met.
         * This can be used to log issues in development environments in critical
         * paths. Removing the logging code for production environments will keep the
         * same logic and follow the same code paths.
         */


        var lowPriorityWarning = function lowPriorityWarning() {};

        {
          var printWarning = function printWarning(format) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }

            var argIndex = 0;
            var message = 'Warning: ' + format.replace(/%s/g, function () {
              return args[argIndex++];
            });

            if (typeof console !== 'undefined') {
              console.warn(message);
            }

            try {
              // --- Welcome to debugging React ---
              // This error was thrown as a convenience so that you can use this stack
              // to find the callsite that caused this warning to fire.
              throw new Error(message);
            } catch (x) {}
          };

          lowPriorityWarning = function lowPriorityWarning(condition, format) {
            if (format === undefined) {
              throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
            }

            if (!condition) {
              for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                args[_key2 - 2] = arguments[_key2];
              }

              printWarning.apply(undefined, [format].concat(args));
            }
          };
        }
        var lowPriorityWarning$1 = lowPriorityWarning;

        function typeOf(object) {
          if (_typeof(object) === 'object' && object !== null) {
            var $$typeof = object.$$typeof;

            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;

                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;

                  default:
                    var $$typeofType = type && type.$$typeof;

                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;

                      default:
                        return $$typeof;
                    }

                }

              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }

          return undefined;
        } // AsyncMode is deprecated along with isAsyncMode


        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }

        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }

        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }

        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }

        function isElement(object) {
          return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }

        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }

        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }

        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }

        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }

        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }

        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }

        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }

        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }

        exports.typeOf = typeOf;
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isValidElementType = isValidElementType;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
      })();
    }
  });
  unwrapExports(reactIs_development);
  var reactIs_development_1 = reactIs_development.typeOf;
  var reactIs_development_2 = reactIs_development.AsyncMode;
  var reactIs_development_3 = reactIs_development.ConcurrentMode;
  var reactIs_development_4 = reactIs_development.ContextConsumer;
  var reactIs_development_5 = reactIs_development.ContextProvider;
  var reactIs_development_6 = reactIs_development.Element;
  var reactIs_development_7 = reactIs_development.ForwardRef;
  var reactIs_development_8 = reactIs_development.Fragment;
  var reactIs_development_9 = reactIs_development.Lazy;
  var reactIs_development_10 = reactIs_development.Memo;
  var reactIs_development_11 = reactIs_development.Portal;
  var reactIs_development_12 = reactIs_development.Profiler;
  var reactIs_development_13 = reactIs_development.StrictMode;
  var reactIs_development_14 = reactIs_development.Suspense;
  var reactIs_development_15 = reactIs_development.isValidElementType;
  var reactIs_development_16 = reactIs_development.isAsyncMode;
  var reactIs_development_17 = reactIs_development.isConcurrentMode;
  var reactIs_development_18 = reactIs_development.isContextConsumer;
  var reactIs_development_19 = reactIs_development.isContextProvider;
  var reactIs_development_20 = reactIs_development.isElement;
  var reactIs_development_21 = reactIs_development.isForwardRef;
  var reactIs_development_22 = reactIs_development.isFragment;
  var reactIs_development_23 = reactIs_development.isLazy;
  var reactIs_development_24 = reactIs_development.isMemo;
  var reactIs_development_25 = reactIs_development.isPortal;
  var reactIs_development_26 = reactIs_development.isProfiler;
  var reactIs_development_27 = reactIs_development.isStrictMode;
  var reactIs_development_28 = reactIs_development.isSuspense;

  var reactIs = createCommonjsModule(function (module) {

    {
      module.exports = reactIs_development;
    }
  });

  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */


  var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
  };
  var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
  };
  var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  };
  var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  };
  var TYPE_STATICS = {};
  TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
  TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

  function getStatics(component) {
    // React v16.11 and below
    if (reactIs.isMemo(component)) {
      return MEMO_STATICS;
    } // React v16.12 and above


    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
  }

  var defineProperty = Object.defineProperty;
  var getOwnPropertyNames = Object.getOwnPropertyNames;
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var getPrototypeOf = Object.getPrototypeOf;
  var objectPrototype = Object.prototype;

  function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
      // don't hoist over string (html) components
      if (objectPrototype) {
        var inheritedComponent = getPrototypeOf(sourceComponent);

        if (inheritedComponent && inheritedComponent !== objectPrototype) {
          hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
        }
      }

      var keys = getOwnPropertyNames(sourceComponent);

      if (getOwnPropertySymbols) {
        keys = keys.concat(getOwnPropertySymbols(sourceComponent));
      }

      var targetStatics = getStatics(targetComponent);
      var sourceStatics = getStatics(sourceComponent);

      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];

        if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
          var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

          try {
            // Avoid failures from read-only properties
            defineProperty(targetComponent, key, descriptor);
          } catch (e) {}
        }
      }
    }

    return targetComponent;
  }

  var hoistNonReactStatics_cjs = hoistNonReactStatics;

  var hoistNonReactStatics_ = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': hoistNonReactStatics_cjs,
    __moduleExports: hoistNonReactStatics_cjs
  });

  // this is to interop with TypeScript since `invariant`
  // does not export a default
  // https://github.com/rollup/rollup/issues/1267

  var hoistNonReactStatics$1 = hoistNonReactStatics_cjs || hoistNonReactStatics_;

  function getDisplayName(Component) {
    return Component.displayName || Component.name || 'Component';
  } // TODO: We should provide initial value here


  var IntlContext = React.createContext(null);
  var IntlConsumer = IntlContext.Consumer,
      IntlProvider = IntlContext.Provider;
  var Provider = IntlProvider;
  var Context = IntlContext;
  function injectIntl(WrappedComponent, options) {
    var _ref = options || {},
        _ref$intlPropName = _ref.intlPropName,
        intlPropName = _ref$intlPropName === void 0 ? 'intl' : _ref$intlPropName,
        _ref$forwardRef = _ref.forwardRef,
        forwardRef = _ref$forwardRef === void 0 ? false : _ref$forwardRef,
        _ref$enforceContext = _ref.enforceContext,
        enforceContext = _ref$enforceContext === void 0 ? true : _ref$enforceContext;

    var WithIntl = function WithIntl(props) {
      return React.createElement(IntlConsumer, null, function (intl) {
        if (enforceContext) {
          invariantIntlContext(intl);
        }

        var intlProp = _defineProperty({}, intlPropName, intl);

        return React.createElement(WrappedComponent, Object.assign({}, props, intlProp, {
          ref: forwardRef ? props.forwardedRef : null
        }));
      });
    };

    WithIntl.displayName = "injectIntl(".concat(getDisplayName(WrappedComponent), ")");
    WithIntl.WrappedComponent = WrappedComponent;

    if (forwardRef) {
      return hoistNonReactStatics$1(React.forwardRef(function (props, ref) {
        return React.createElement(WithIntl, Object.assign({}, props, {
          forwardedRef: ref
        }));
      }), WrappedComponent);
    }

    return hoistNonReactStatics$1(WithIntl, WrappedComponent);
  }

  var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};

    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }

    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  var DisplayName;

  (function (DisplayName) {
    DisplayName["formatDate"] = "FormattedDate";
    DisplayName["formatTime"] = "FormattedTime";
    DisplayName["formatNumber"] = "FormattedNumber";
    DisplayName["formatList"] = "FormattedList"; // Note that this DisplayName is the locale display name, not to be confused with
    // the name of the enum, which is for React component display name in dev tools.

    DisplayName["formatDisplayName"] = "FormattedDisplayName";
  })(DisplayName || (DisplayName = {}));

  var DisplayNameParts;

  (function (DisplayNameParts) {
    DisplayNameParts["formatDate"] = "FormattedDateParts";
    DisplayNameParts["formatTime"] = "FormattedTimeParts";
    DisplayNameParts["formatNumber"] = "FormattedNumberParts";
    DisplayNameParts["formatList"] = "FormattedListParts";
  })(DisplayNameParts || (DisplayNameParts = {}));

  var FormattedNumberParts = function FormattedNumberParts(props) {
    return React.createElement(Context.Consumer, null, function (intl) {
      invariantIntlContext(intl);

      var value = props.value,
          children = props.children,
          formatProps = __rest(props, ["value", "children"]);

      return children(intl.formatNumberToParts(value, formatProps));
    });
  };
  FormattedNumberParts.displayName = 'FormattedNumberParts';
  function createFormattedDateTimePartsComponent(name) {
    var ComponentParts = function ComponentParts(props) {
      return React.createElement(Context.Consumer, null, function (intl) {
        invariantIntlContext(intl);

        var value = props.value,
            children = props.children,
            formatProps = __rest(props, ["value", "children"]);

        var date = typeof value === 'string' ? new Date(value || 0) : value;
        var formattedParts = name === 'formatDate' ? intl.formatDateToParts(date, formatProps) : intl.formatTimeToParts(date, formatProps);
        return children(formattedParts);
      });
    };

    ComponentParts.displayName = DisplayNameParts[name];
    return ComponentParts;
  }
  function createFormattedComponent(name) {
    var Component = function Component(props) {
      return React.createElement(Context.Consumer, null, function (intl) {
        invariantIntlContext(intl);

        var value = props.value,
            children = props.children,
            formatProps = __rest(props // TODO: fix TS type definition for localeMatcher upstream
        , ["value", "children"]); // TODO: fix TS type definition for localeMatcher upstream


        var formattedValue = intl[name](value, formatProps);

        if (typeof children === 'function') {
          return children(formattedValue);
        }

        var Text = intl.textComponent || React.Fragment;
        return React.createElement(Text, null, formattedValue);
      });
    };

    Component.displayName = DisplayName[name];
    return Component;
  }

  function useIntl() {
    var intl = React.useContext(Context);
    invariantIntlContext(intl);
    return intl;
  }

  var NUMBER_FORMAT_OPTIONS = ['localeMatcher', 'style', 'currency', 'currencyDisplay', 'unit', 'unitDisplay', 'useGrouping', 'minimumIntegerDigits', 'minimumFractionDigits', 'maximumFractionDigits', 'minimumSignificantDigits', 'maximumSignificantDigits', // Unified NumberFormat (Stage 3 as of 10/22/19)
  'compactDisplay', 'currencyDisplay', 'currencySign', 'notation', 'signDisplay', 'unit', 'unitDisplay'];
  function getFormatter(_ref, getNumberFormat) {
    var locale = _ref.locale,
        formats = _ref.formats,
        onError = _ref.onError;
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var format = options.format;
    var defaults = format && getNamedFormat(formats, 'number', format, onError) || {};
    var filteredOptions = filterProps(options, NUMBER_FORMAT_OPTIONS, defaults);
    return getNumberFormat(locale, filteredOptions);
  }
  function formatNumber(config, getNumberFormat, value) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    try {
      return getFormatter(config, getNumberFormat, options).format(value);
    } catch (e) {
      config.onError(new ReactIntlError("FORMAT_ERROR"
      /* FORMAT_ERROR */
      , 'Error formatting number.', e));
    }

    return String(value);
  }
  function formatNumberToParts(config, getNumberFormat, value) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    try {
      return getFormatter(config, getNumberFormat, options).formatToParts(value);
    } catch (e) {
      config.onError(new ReactIntlError("FORMAT_ERROR"
      /* FORMAT_ERROR */
      , 'Error formatting number.', e));
    }

    return [];
  }

  var RELATIVE_TIME_FORMAT_OPTIONS = ['numeric', 'style'];

  function getFormatter$1(_ref, getRelativeTimeFormat) {
    var locale = _ref.locale,
        formats = _ref.formats,
        onError = _ref.onError;
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var format = options.format;
    var defaults = !!format && getNamedFormat(formats, 'relative', format, onError) || {};
    var filteredOptions = filterProps(options, RELATIVE_TIME_FORMAT_OPTIONS, defaults);
    return getRelativeTimeFormat(locale, filteredOptions);
  }

  function formatRelativeTime(config, getRelativeTimeFormat, value, unit) {
    var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

    if (!unit) {
      unit = 'second';
    }

    var RelativeTimeFormat = Intl.RelativeTimeFormat;

    if (!RelativeTimeFormat) {
      config.onError(new FormatError("Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-relativetimeformat\"\n", "MISSING_INTL_API"
      /* MISSING_INTL_API */
      ));
    }

    try {
      return getFormatter$1(config, getRelativeTimeFormat, options).format(value, unit);
    } catch (e) {
      config.onError(new ReactIntlError("FORMAT_ERROR"
      /* FORMAT_ERROR */
      , 'Error formatting relative time.', e));
    }

    return String(value);
  }

  /*
   * Copyright 2015, Yahoo Inc.
   * Copyrights licensed under the New BSD License.
   * See the accompanying LICENSE file for terms.
   */
  var DATE_TIME_FORMAT_OPTIONS = ['localeMatcher', 'formatMatcher', 'timeZone', 'hour12', 'weekday', 'era', 'year', 'month', 'day', 'hour', 'minute', 'second', 'timeZoneName'];
  function getFormatter$2(_ref, type, getDateTimeFormat) {
    var locale = _ref.locale,
        formats = _ref.formats,
        onError = _ref.onError,
        timeZone = _ref.timeZone;
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var format = options.format;
    var defaults = Object.assign(Object.assign({}, timeZone && {
      timeZone: timeZone
    }), format && getNamedFormat(formats, type, format, onError));
    var filteredOptions = filterProps(options, DATE_TIME_FORMAT_OPTIONS, defaults);

    if (type === 'time' && !filteredOptions.hour && !filteredOptions.minute && !filteredOptions.second) {
      // Add default formatting options if hour, minute, or second isn't defined.
      filteredOptions = Object.assign(Object.assign({}, filteredOptions), {
        hour: 'numeric',
        minute: 'numeric'
      });
    }

    return getDateTimeFormat(locale, filteredOptions);
  }
  function formatDate(config, getDateTimeFormat, value) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var date = typeof value === 'string' ? new Date(value || 0) : value;

    try {
      return getFormatter$2(config, 'date', getDateTimeFormat, options).format(date);
    } catch (e) {
      config.onError(new ReactIntlError("FORMAT_ERROR"
      /* FORMAT_ERROR */
      , 'Error formatting date.', e));
    }

    return String(date);
  }
  function formatTime(config, getDateTimeFormat, value) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var date = typeof value === 'string' ? new Date(value || 0) : value;

    try {
      return getFormatter$2(config, 'time', getDateTimeFormat, options).format(date);
    } catch (e) {
      config.onError(new ReactIntlError("FORMAT_ERROR"
      /* FORMAT_ERROR */
      , 'Error formatting time.', e));
    }

    return String(date);
  }
  function formatDateToParts(config, getDateTimeFormat, value) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var date = typeof value === 'string' ? new Date(value || 0) : value;

    try {
      return getFormatter$2(config, 'date', getDateTimeFormat, options).formatToParts(date);
    } catch (e) {
      config.onError(new ReactIntlError("FORMAT_ERROR"
      /* FORMAT_ERROR */
      , 'Error formatting date.', e));
    }

    return [];
  }
  function formatTimeToParts(config, getDateTimeFormat, value) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var date = typeof value === 'string' ? new Date(value || 0) : value;

    try {
      return getFormatter$2(config, 'time', getDateTimeFormat, options).formatToParts(date);
    } catch (e) {
      config.onError(new ReactIntlError("FORMAT_ERROR"
      /* FORMAT_ERROR */
      , 'Error formatting time.', e));
    }

    return [];
  }

  var PLURAL_FORMAT_OPTIONS = ['localeMatcher', 'type'];
  function formatPlural(_ref, getPluralRules, value) {
    var locale = _ref.locale,
        onError = _ref.onError;
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    if (!Intl.PluralRules) {
      onError(new FormatError("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", "MISSING_INTL_API"
      /* MISSING_INTL_API */
      ));
    }

    var filteredOptions = filterProps(options, PLURAL_FORMAT_OPTIONS);

    try {
      return getPluralRules(locale, filteredOptions).select(value);
    } catch (e) {
      onError(new ReactIntlError("FORMAT_ERROR"
      /* FORMAT_ERROR */
      , 'Error formatting plural.', e));
    }

    return 'other';
  }

  function setTimeZoneInOptions(opts, timeZone) {
    return Object.keys(opts).reduce(function (all, k) {
      all[k] = Object.assign({
        timeZone: timeZone
      }, opts[k]);
      return all;
    }, {});
  }

  function deepMergeOptions(opts1, opts2) {
    var keys = Object.keys(Object.assign(Object.assign({}, opts1), opts2));
    return keys.reduce(function (all, k) {
      all[k] = Object.assign(Object.assign({}, opts1[k] || {}), opts2[k] || {});
      return all;
    }, {});
  }

  function deepMergeFormatsAndSetTimeZone(f1, timeZone) {
    if (!timeZone) {
      return f1;
    }

    var mfFormats = IntlMessageFormat.formats;
    return Object.assign(Object.assign(Object.assign({}, mfFormats), f1), {
      date: deepMergeOptions(setTimeZoneInOptions(mfFormats.date, timeZone), setTimeZoneInOptions(f1.date || {}, timeZone)),
      time: deepMergeOptions(setTimeZoneInOptions(mfFormats.time, timeZone), setTimeZoneInOptions(f1.time || {}, timeZone))
    });
  }

  function prepareIntlMessageFormatHtmlOutput(chunks) {
    return React.createElement.apply(React, [React.Fragment, null].concat(_toConsumableArray(chunks)));
  }

  function formatMessage(_ref, state) {
    var locale = _ref.locale,
        formats = _ref.formats,
        messages = _ref.messages,
        defaultLocale = _ref.defaultLocale,
        defaultFormats = _ref.defaultFormats,
        onError = _ref.onError,
        timeZone = _ref.timeZone,
        wrapRichTextChunksInFragment = _ref.wrapRichTextChunksInFragment;
    var messageDescriptor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      id: ''
    };
    var values = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var id = messageDescriptor.id,
        defaultMessage = messageDescriptor.defaultMessage; // `id` is a required field of a Message Descriptor.

    invariant(!!id, '[React Intl] An `id` must be provided to format a message.');
    var message = messages && messages[String(id)];
    formats = deepMergeFormatsAndSetTimeZone(formats, timeZone);
    defaultFormats = deepMergeFormatsAndSetTimeZone(defaultFormats, timeZone);
    var formattedMessageParts = '';

    if (message) {
      try {
        var formatter = state.getMessageFormat(message, locale, formats, {
          formatters: state
        });
        formattedMessageParts = formatter.format(values);
      } catch (e) {
        onError(new ReactIntlError("FORMAT_ERROR"
        /* FORMAT_ERROR */
        , "Error formatting message: \"".concat(id, "\" for locale: \"").concat(locale, "\"") + (defaultMessage ? ', using default message as fallback.' : ''), messageDescriptor, e));
      }
    } else if (!defaultMessage || locale && locale.toLowerCase() !== defaultLocale.toLowerCase()) {
      // This prevents warnings from littering the console in development
      // when no `messages` are passed into the <IntlProvider> for the
      // default locale.
      onError(new ReactIntlError("MISSING_TRANSLATION"
      /* MISSING_TRANSLATION */
      , "Missing message: \"".concat(id, "\" for locale: \"").concat(locale, "\"") + (defaultMessage ? ', using default message as fallback.' : ''), messageDescriptor));
    }

    if (!formattedMessageParts && defaultMessage) {
      try {
        var _formatter = state.getMessageFormat(defaultMessage, defaultLocale, defaultFormats);

        formattedMessageParts = _formatter.format(values);
      } catch (e) {
        onError(new ReactIntlError("FORMAT_ERROR"
        /* FORMAT_ERROR */
        , "Error formatting the default message for: \"".concat(id, "\""), messageDescriptor, e));
      }
    }

    if (!formattedMessageParts) {
      onError(new ReactIntlError("FORMAT_ERROR"
      /* FORMAT_ERROR */
      , "Cannot format message: \"".concat(id, "\", ") + "using message ".concat(message || defaultMessage ? 'source' : 'id', " as fallback."), messageDescriptor));

      if (typeof message === 'string') {
        return message || defaultMessage || String(id);
      }

      return defaultMessage || String(id);
    }

    if (Array.isArray(formattedMessageParts)) {
      if (wrapRichTextChunksInFragment) {
        return prepareIntlMessageFormatHtmlOutput(formattedMessageParts);
      }

      return formattedMessageParts;
    }

    return formattedMessageParts;
  }

  function shallowEqualObjects(objA, objB) {
    if (objA === objB) {
      return true;
    }

    if (!objA || !objB) {
      return false;
    }

    var aKeys = Object.keys(objA);
    var bKeys = Object.keys(objB);
    var len = aKeys.length;

    if (bKeys.length !== len) {
      return false;
    }

    for (var i = 0; i < len; i++) {
      var key = aKeys[i];

      if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) {
        return false;
      }
    }

    return true;
  }

  var objects = shallowEqualObjects;

  var shallowEquals_ = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': objects,
    __moduleExports: objects
  });

  var LIST_FORMAT_OPTIONS = ['localeMatcher', 'type', 'style'];
  var now = Date.now();

  function generateToken(i) {
    return "".concat(now, "_").concat(i, "_").concat(now);
  }

  function formatList(_ref, getListFormat, values) {
    var locale = _ref.locale,
        onError = _ref.onError;
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var ListFormat = Intl.ListFormat;

    if (!ListFormat) {
      onError(new FormatError("Intl.ListFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-listformat\"\n", "MISSING_INTL_API"
      /* MISSING_INTL_API */
      ));
    }

    var filteredOptions = filterProps(options, LIST_FORMAT_OPTIONS);

    try {
      var richValues = {};
      var serializedValues = values.map(function (v, i) {
        if (_typeof(v) === 'object') {
          var id = generateToken(i);
          richValues[id] = v;
          return id;
        }

        return String(v);
      });

      if (!Object.keys(richValues).length) {
        return getListFormat(locale, filteredOptions).format(serializedValues);
      }

      var parts = getListFormat(locale, filteredOptions).formatToParts(serializedValues);
      return parts.reduce(function (all, el) {
        var val = el.value;

        if (richValues[val]) {
          all.push(richValues[val]);
        } else if (typeof all[all.length - 1] === 'string') {
          all[all.length - 1] += val;
        } else {
          all.push(val);
        }

        return all;
      }, []);
    } catch (e) {
      onError(new ReactIntlError("FORMAT_ERROR"
      /* FORMAT_ERROR */
      , 'Error formatting list.', e));
    }

    return values;
  }

  var DISPLAY_NAMES_OPTONS = ['localeMatcher', 'style', 'type', 'fallback'];
  function formatDisplayName(_ref, getDisplayNames, value) {
    var locale = _ref.locale,
        onError = _ref.onError;
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var DisplayNames = Intl.DisplayNames;

    if (!DisplayNames) {
      onError(new FormatError("Intl.DisplayNames is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-displaynames\"\n", "MISSING_INTL_API"
      /* MISSING_INTL_API */
      ));
    }

    var filteredOptions = filterProps(options, DISPLAY_NAMES_OPTONS);

    try {
      return getDisplayNames(locale, filteredOptions).of(value);
    } catch (e) {
      onError(new ReactIntlError("FORMAT_ERROR"
      /* FORMAT_ERROR */
      , 'Error formatting display name.', e));
    }
  }

  var shallowEquals = objects || shallowEquals_;

  function processIntlConfig(config) {
    return {
      locale: config.locale,
      timeZone: config.timeZone,
      formats: config.formats,
      textComponent: config.textComponent,
      messages: config.messages,
      defaultLocale: config.defaultLocale,
      defaultFormats: config.defaultFormats,
      onError: config.onError
    };
  }
  /**
   * Create intl object
   * @param config intl config
   * @param cache cache for formatter instances to prevent memory leak
   */


  function createIntl(config, cache) {
    var formatters = createFormatters(cache);
    var resolvedConfig = Object.assign(Object.assign({}, DEFAULT_INTL_CONFIG), config);
    var locale = resolvedConfig.locale,
        defaultLocale = resolvedConfig.defaultLocale,
        onError = resolvedConfig.onError;

    if (!locale) {
      if (onError) {
        onError(new ReactIntlError("INVALID_CONFIG"
        /* INVALID_CONFIG */
        , "\"locale\" was not configured, using \"".concat(defaultLocale, "\" as fallback. See https://github.com/formatjs/react-intl/blob/master/docs/API.md#intlshape for more details")));
      } // Since there's no registered locale data for `locale`, this will
      // fallback to the `defaultLocale` to make sure things can render.
      // The `messages` are overridden to the `defaultProps` empty object
      // to maintain referential equality across re-renders. It's assumed
      // each <FormattedMessage> contains a `defaultMessage` prop.


      resolvedConfig.locale = resolvedConfig.defaultLocale || 'en';
    } else if (!Intl.NumberFormat.supportedLocalesOf(locale).length && onError) {
      onError(new ReactIntlError("MISSING_DATA"
      /* MISSING_DATA */
      , "Missing locale data for locale: \"".concat(locale, "\" in Intl.NumberFormat. Using default locale: \"").concat(defaultLocale, "\" as fallback. See https://github.com/formatjs/react-intl/blob/master/docs/Getting-Started.md#runtime-requirements for more details")));
    } else if (!Intl.DateTimeFormat.supportedLocalesOf(locale).length && onError) {
      onError(new ReactIntlError("MISSING_DATA"
      /* MISSING_DATA */
      , "Missing locale data for locale: \"".concat(locale, "\" in Intl.DateTimeFormat. Using default locale: \"").concat(defaultLocale, "\" as fallback. See https://github.com/formatjs/react-intl/blob/master/docs/Getting-Started.md#runtime-requirements for more details")));
    }

    return Object.assign(Object.assign({}, resolvedConfig), {
      formatters: formatters,
      formatNumber: formatNumber.bind(null, resolvedConfig, formatters.getNumberFormat),
      formatNumberToParts: formatNumberToParts.bind(null, resolvedConfig, formatters.getNumberFormat),
      formatRelativeTime: formatRelativeTime.bind(null, resolvedConfig, formatters.getRelativeTimeFormat),
      formatDate: formatDate.bind(null, resolvedConfig, formatters.getDateTimeFormat),
      formatDateToParts: formatDateToParts.bind(null, resolvedConfig, formatters.getDateTimeFormat),
      formatTime: formatTime.bind(null, resolvedConfig, formatters.getDateTimeFormat),
      formatTimeToParts: formatTimeToParts.bind(null, resolvedConfig, formatters.getDateTimeFormat),
      formatPlural: formatPlural.bind(null, resolvedConfig, formatters.getPluralRules),
      formatMessage: formatMessage.bind(null, resolvedConfig, formatters),
      formatList: formatList.bind(null, resolvedConfig, formatters.getListFormat),
      formatDisplayName: formatDisplayName.bind(null, resolvedConfig, formatters.getDisplayNames)
    });
  }

  var IntlProvider$1 = /*#__PURE__*/function (_React$PureComponent) {
    _inherits(IntlProvider, _React$PureComponent);

    var _super = _createSuper(IntlProvider);

    function IntlProvider() {
      var _this;

      _classCallCheck(this, IntlProvider);

      _this = _super.apply(this, arguments);
      _this.cache = createIntlCache();
      _this.state = {
        cache: _this.cache,
        intl: createIntl(processIntlConfig(_this.props), _this.cache),
        prevConfig: processIntlConfig(_this.props)
      };
      return _this;
    }

    _createClass(IntlProvider, [{
      key: "render",
      value: function render() {
        invariantIntlContext(this.state.intl);
        return React.createElement(Provider, {
          value: this.state.intl
        }, this.props.children);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, _ref) {
        var prevConfig = _ref.prevConfig,
            cache = _ref.cache;
        var config = processIntlConfig(props);

        if (!shallowEquals(prevConfig, config)) {
          return {
            intl: createIntl(config, cache),
            prevConfig: config
          };
        }

        return null;
      }
    }]);

    return IntlProvider;
  }(React.PureComponent);
  IntlProvider$1.displayName = 'IntlProvider';
  IntlProvider$1.defaultProps = DEFAULT_INTL_CONFIG;

  var MINUTE = 60;
  var HOUR = 60 * 60;
  var DAY = 60 * 60 * 24;

  function selectUnit(seconds) {
    var absValue = Math.abs(seconds);

    if (absValue < MINUTE) {
      return 'second';
    }

    if (absValue < HOUR) {
      return 'minute';
    }

    if (absValue < DAY) {
      return 'hour';
    }

    return 'day';
  }

  function getDurationInSeconds(unit) {
    switch (unit) {
      case 'second':
        return 1;

      case 'minute':
        return MINUTE;

      case 'hour':
        return HOUR;

      default:
        return DAY;
    }
  }

  function valueToSeconds(value, unit) {
    if (!value) {
      return 0;
    }

    switch (unit) {
      case 'second':
        return value;

      case 'minute':
        return value * MINUTE;

      default:
        return value * HOUR;
    }
  }

  var INCREMENTABLE_UNITS = ['second', 'minute', 'hour'];

  function canIncrement() {
    var unit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'second';
    return INCREMENTABLE_UNITS.includes(unit);
  }

  var FormattedRelativeTime = /*#__PURE__*/function (_React$PureComponent) {
    _inherits(FormattedRelativeTime, _React$PureComponent);

    var _super = _createSuper(FormattedRelativeTime);

    function FormattedRelativeTime(props) {
      var _this;

      _classCallCheck(this, FormattedRelativeTime);

      _this = _super.call(this, props); // Public for testing

      _this._updateTimer = null;
      _this.state = {
        prevUnit: _this.props.unit,
        prevValue: _this.props.value,
        currentValueInSeconds: canIncrement(_this.props.unit) ? valueToSeconds(_this.props.value, _this.props.unit) : 0
      };
      invariant(!props.updateIntervalInSeconds || !!(props.updateIntervalInSeconds && canIncrement(props.unit)), 'Cannot schedule update with unit longer than hour');
      return _this;
    }

    _createClass(FormattedRelativeTime, [{
      key: "scheduleNextUpdate",
      value: function scheduleNextUpdate(_ref, _ref2) {
        var _this2 = this;

        var updateIntervalInSeconds = _ref.updateIntervalInSeconds,
            unit = _ref.unit;
        var currentValueInSeconds = _ref2.currentValueInSeconds;
        clearTimeout(this._updateTimer);
        this._updateTimer = null; // If there's no interval and we cannot increment this unit, do nothing

        if (!updateIntervalInSeconds || !canIncrement(unit)) {
          return;
        } // Figure out the next interesting time


        var nextValueInSeconds = currentValueInSeconds - updateIntervalInSeconds;
        var nextUnit = selectUnit(nextValueInSeconds); // We've reached the max auto incrementable unit, don't schedule another update

        if (nextUnit === 'day') {
          return;
        }

        var unitDuration = getDurationInSeconds(nextUnit);
        var remainder = nextValueInSeconds % unitDuration;
        var prevInterestingValueInSeconds = nextValueInSeconds - remainder;
        var nextInterestingValueInSeconds = prevInterestingValueInSeconds >= currentValueInSeconds ? prevInterestingValueInSeconds - unitDuration : prevInterestingValueInSeconds;
        var delayInSeconds = Math.abs(nextInterestingValueInSeconds - currentValueInSeconds);
        this._updateTimer = setTimeout(function () {
          return _this2.setState({
            currentValueInSeconds: nextInterestingValueInSeconds
          });
        }, delayInSeconds * 1e3);
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.scheduleNextUpdate(this.props, this.state);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.scheduleNextUpdate(this.props, this.state);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        clearTimeout(this._updateTimer);
        this._updateTimer = null;
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        return React.createElement(Context.Consumer, null, function (intl) {
          invariantIntlContext(intl);
          var formatRelativeTime = intl.formatRelativeTime,
              Text = intl.textComponent;
          var _this3$props = _this3.props,
              children = _this3$props.children,
              value = _this3$props.value,
              unit = _this3$props.unit,
              updateIntervalInSeconds = _this3$props.updateIntervalInSeconds;
          var currentValueInSeconds = _this3.state.currentValueInSeconds;
          var currentValue = value || 0;
          var currentUnit = unit;

          if (canIncrement(unit) && typeof currentValueInSeconds === 'number' && updateIntervalInSeconds) {
            currentUnit = selectUnit(currentValueInSeconds);
            var unitDuration = getDurationInSeconds(currentUnit);
            currentValue = Math.round(currentValueInSeconds / unitDuration);
          }

          var formattedRelativeTime = formatRelativeTime(currentValue, currentUnit, Object.assign({}, _this3.props));

          if (typeof children === 'function') {
            return children(formattedRelativeTime);
          }

          if (Text) {
            return React.createElement(Text, null, formattedRelativeTime);
          }

          return formattedRelativeTime;
        });
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, state) {
        if (props.unit !== state.prevUnit || props.value !== state.prevValue) {
          return {
            prevValue: props.value,
            prevUnit: props.unit,
            currentValueInSeconds: canIncrement(props.unit) ? valueToSeconds(props.value, props.unit) : 0
          };
        }

        return null;
      }
    }]);

    return FormattedRelativeTime;
  }(React.PureComponent);
  FormattedRelativeTime.displayName = 'FormattedRelativeTime';
  FormattedRelativeTime.defaultProps = {
    value: 0,
    unit: 'second'
  };

  /*
   * Copyright 2015, Yahoo Inc.
   * Copyrights licensed under the New BSD License.
   * See the accompanying LICENSE file for terms.
   */

  var FormattedPlural = function FormattedPlural(props) {
    var value = props.value,
        other = props.other,
        children = props.children,
        _props$intl = props.intl,
        formatPlural = _props$intl.formatPlural,
        Text = _props$intl.textComponent;
    var pluralCategory = formatPlural(value, props);
    var formattedPlural = props[pluralCategory] || other;

    if (typeof children === 'function') {
      return children(formattedPlural);
    }

    if (Text) {
      return React.createElement(Text, null, formattedPlural);
    } // Work around @types/react where React.FC cannot return string


    return formattedPlural;
  };

  FormattedPlural.defaultProps = {
    type: 'cardinal'
  };
  FormattedPlural.displayName = 'FormattedPlural';
  var plural = injectIntl(FormattedPlural);

  /*
   * Copyright 2015, Yahoo Inc.
   * Copyrights licensed under the New BSD License.
   * See the accompanying LICENSE file for terms.
   */
  var __rest$1 = undefined && undefined.__rest || function (s, e) {
    var t = {};

    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }

    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  var shallowEquals$1 = objects || shallowEquals_;

  function defaultFormatMessage(descriptor, values) {
    {
      console.error('[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry. Using default message as fallback.');
    }

    return formatMessage(Object.assign(Object.assign({}, DEFAULT_INTL_CONFIG), {
      locale: 'en'
    }), createFormatters(), descriptor, values);
  }

  var FormattedMessage = /*#__PURE__*/function (_React$Component) {
    _inherits(FormattedMessage, _React$Component);

    var _super = _createSuper(FormattedMessage);

    function FormattedMessage() {
      _classCallCheck(this, FormattedMessage);

      return _super.apply(this, arguments);
    }

    _createClass(FormattedMessage, [{
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps) {
        var _a = this.props,
            values = _a.values,
            otherProps = __rest$1(_a, ["values"]);

        var nextValues = nextProps.values,
            nextOtherProps = __rest$1(nextProps, ["values"]);

        return !shallowEquals$1(nextValues, values) || !shallowEquals$1(otherProps, nextOtherProps);
      }
    }, {
      key: "render",
      value: function render() {
        var _this = this;

        return React.createElement(Context.Consumer, null, function (intl) {
          if (!_this.props.defaultMessage) {
            invariantIntlContext(intl);
          }

          var _ref = intl || {},
              _ref$formatMessage = _ref.formatMessage,
              formatMessage = _ref$formatMessage === void 0 ? defaultFormatMessage : _ref$formatMessage,
              _ref$textComponent = _ref.textComponent,
              Text = _ref$textComponent === void 0 ? React.Fragment : _ref$textComponent;

          var _this$props = _this.props,
              id = _this$props.id,
              description = _this$props.description,
              defaultMessage = _this$props.defaultMessage,
              values = _this$props.values,
              children = _this$props.children,
              _this$props$tagName = _this$props.tagName,
              Component = _this$props$tagName === void 0 ? Text : _this$props$tagName;
          var descriptor = {
            id: id,
            description: description,
            defaultMessage: defaultMessage
          };
          var nodes = formatMessage(descriptor, values);

          if (!Array.isArray(nodes)) {
            nodes = [nodes];
          }

          if (typeof children === 'function') {
            return children.apply(void 0, _toConsumableArray(nodes));
          }

          if (Component) {
            // Needs to use `createElement()` instead of JSX, otherwise React will
            // warn about a missing `key` prop with rich-text message formatting.
            return React.createElement.apply(React, [Component, null].concat(_toConsumableArray(nodes)));
          }

          return nodes;
        });
      }
    }]);

    return FormattedMessage;
  }(React.Component);

  FormattedMessage.displayName = 'FormattedMessage';
  FormattedMessage.defaultProps = {
    values: {}
  };

  function defineMessages(msgs) {
    return msgs;
  }
  function defineMessage(msg) {
    return msg;
  }

  var FormattedDate = createFormattedComponent('formatDate');
  var FormattedTime = createFormattedComponent('formatTime');
  var FormattedNumber = createFormattedComponent('formatNumber');
  var FormattedList = createFormattedComponent('formatList');
  var FormattedDisplayName = createFormattedComponent('formatDisplayName');
  var FormattedDateParts = createFormattedDateTimePartsComponent('formatDate');
  var FormattedTimeParts = createFormattedDateTimePartsComponent('formatTime');

  exports.FormattedDate = FormattedDate;
  exports.FormattedDateParts = FormattedDateParts;
  exports.FormattedDisplayName = FormattedDisplayName;
  exports.FormattedList = FormattedList;
  exports.FormattedMessage = FormattedMessage;
  exports.FormattedNumber = FormattedNumber;
  exports.FormattedNumberParts = FormattedNumberParts;
  exports.FormattedPlural = plural;
  exports.FormattedRelativeTime = FormattedRelativeTime;
  exports.FormattedTime = FormattedTime;
  exports.FormattedTimeParts = FormattedTimeParts;
  exports.IntlContext = Context;
  exports.IntlProvider = IntlProvider$1;
  exports.RawIntlProvider = Provider;
  exports.ReactIntlError = ReactIntlError;
  exports.createIntl = createIntl;
  exports.createIntlCache = createIntlCache;
  exports.defineMessage = defineMessage;
  exports.defineMessages = defineMessages;
  exports.injectIntl = injectIntl;
  exports.useIntl = useIntl;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=react-intl.js.map
