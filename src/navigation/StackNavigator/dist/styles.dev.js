"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNative = require("react-native");

var _constants = require("../../constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _Dimensions$get = _reactNative.Dimensions.get('window'),
    width = _Dimensions$get.width,
    height = _Dimensions$get.height;

var _default = _reactNative.StyleSheet.create({
  // backicon: {
  //   width: width * 0.08,
  //   height: height * 0.02,
  //   tintColor: COLORS.white,
  //   marginLeft: width * 0.03,
  //   padding: width * 0.01,
  // },
  search: {
    width: width * 0.05,
    height: height * 0.025,
    resizeMode: 'stretch',
    tintColor: _constants.COLORS.white,
    marginRight: width * 0.07
  },
  headerTitle: _objectSpread({}, _constants.FONTS.fiveHundred, {
    color: _constants.COLORS.white,
    fontSize: 18
  }),
  logo: {
    width: width * 0.12,
    height: height * 0.06,
    resizeMode: 'contain'
  }
});

exports["default"] = _default;