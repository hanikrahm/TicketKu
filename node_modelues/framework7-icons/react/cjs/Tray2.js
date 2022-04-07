"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Tray2(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 7.7148 54.9883 L 48.2852 54.9883 C 53.1601 54.9883 55.6446 52.5742 55.6446 47.7461 L 55.6446 35.7461 C 55.6446 34.9258 55.2928 34.1289 54.7072 33.6367 C 55.3163 32.5820 55.6446 31.2461 55.6446 29.6524 L 55.6446 16.7149 C 55.6446 14.5820 55.5040 13.1289 54.3088 12.0039 L 45.9884 4.1524 C 43.4569 1.7617 41.6054 1.0117 38.1601 1.0117 L 17.8398 1.0117 C 14.3944 1.0117 12.5429 1.7617 10.0117 4.1524 L 1.6913 12.0039 C .4960 13.1289 .3554 14.5820 .3554 16.7149 L .3554 29.6524 C .3554 31.2461 .6601 32.5820 1.2929 33.6367 C .7070 34.1289 .3554 34.9258 .3554 35.7461 L .3554 47.7461 C .3554 52.5742 2.8398 54.9883 7.7148 54.9883 Z M 27.9882 22.6211 C 24.6835 22.6211 22.5507 19.7617 22.5507 17.0430 L 22.5507 16.9492 C 22.5507 15.9649 21.9648 15.0508 20.7695 15.0508 L 5.8866 15.0508 C 4.5273 15.0508 4.0819 14.4414 5.1601 13.4336 L 12.8944 6.1445 C 14.3476 4.8086 15.2617 4.2930 17.5117 4.2930 L 38.4882 4.2930 C 40.7382 4.2930 41.6523 4.8086 43.0820 6.1445 L 50.8163 13.4336 C 51.9414 14.4883 51.4489 15.0508 50.1366 15.0508 L 35.2304 15.0508 C 34.0351 15.0508 33.4492 15.9649 33.4492 16.9492 L 33.4492 17.0430 C 33.4492 19.7617 31.3163 22.6211 27.9882 22.6211 Z M 7.7851 33.1445 C 5.4413 33.1445 4.1288 31.8789 4.1288 29.4414 L 4.1288 18.4961 L 18.9882 18.4961 C 19.5741 22.8555 23.2304 26.1133 27.9882 26.1133 C 32.7460 26.1133 36.4257 22.8555 36.9882 18.4961 L 51.8708 18.4961 L 51.8708 29.4414 C 51.8708 31.8789 50.5350 33.1445 48.2147 33.1445 Z M 27.9882 40.7149 C 25.2695 40.7149 23.3476 38.7696 22.7382 36.5898 L 33.2382 36.5898 C 32.6523 38.7696 30.7304 40.7149 27.9882 40.7149 Z M 7.7851 51.2149 C 5.4413 51.2149 4.1288 49.9727 4.1288 47.5352 L 4.1288 36.5898 L 18.9882 36.5898 C 19.5741 40.9492 23.2304 44.2070 27.9882 44.2070 C 32.7460 44.2070 36.4257 40.9492 36.9882 36.5898 L 51.8708 36.5898 L 51.8708 47.5352 C 51.8708 49.9727 50.5350 51.2149 48.2147 51.2149 Z"
  }));
}

var _default = Tray2;
exports["default"] = _default;