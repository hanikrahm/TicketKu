"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function BagFillBadgePlus(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 47.3945 10.9610 L 43.6680 10.9610 C 43.5274 6.0391 39.2618 1.8437 33.9649 1.8437 C 28.6446 1.8437 24.3790 6.0391 24.2384 10.9610 L 20.5118 10.9610 C 15.6368 10.9610 13.1524 13.3750 13.1524 18.2266 L 13.1524 27.1328 C 21.4727 27.1328 28.2931 33.9532 28.2931 42.2500 C 28.2931 44.9688 27.5431 47.5234 26.2540 49.7500 L 48.0977 49.7500 C 52.2929 49.7500 54.7538 47.3125 54.7538 42.4844 L 54.7538 18.2266 C 54.7538 13.3984 52.2698 10.9610 47.3945 10.9610 Z M 33.9649 5.4063 C 37.2696 5.4063 39.7774 7.8906 39.8946 10.9610 L 28.0352 10.9610 C 28.1290 7.8906 30.6368 5.4063 33.9649 5.4063 Z M 13.1524 54.1563 C 19.6212 54.1563 25.0587 48.7656 25.0587 42.2500 C 25.0587 35.7344 19.6915 30.3437 13.1524 30.3437 C 6.6368 30.3437 1.2462 35.7344 1.2462 42.2500 C 1.2462 48.8125 6.6368 54.1563 13.1524 54.1563 Z M 13.1758 49.9844 C 12.3555 49.9844 11.6290 49.4219 11.6290 48.5547 L 11.6290 43.6797 L 7.1524 43.6797 C 6.3555 43.6797 5.6993 43.0234 5.6993 42.2500 C 5.6993 41.4766 6.3555 40.8203 7.1524 40.8203 L 11.6290 40.8203 L 11.6290 35.9688 C 11.6290 35.0781 12.3555 34.5156 13.1758 34.5156 C 13.9727 34.5156 14.6993 35.0781 14.6993 35.9688 L 14.6993 40.8203 L 19.1758 40.8203 C 19.9727 40.8203 20.6055 41.4766 20.6055 42.2500 C 20.6055 43.0234 19.9727 43.6797 19.1758 43.6797 L 14.6993 43.6797 L 14.6993 48.5547 C 14.6993 49.4219 13.9727 49.9844 13.1758 49.9844 Z"
  }));
}

var _default = BagFillBadgePlus;
exports["default"] = _default;