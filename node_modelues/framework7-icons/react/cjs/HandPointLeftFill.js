"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function HandPointLeftFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 51.9647 31.1875 C 51.9647 23.6406 48.4027 17.9688 38.5118 14.2422 L 26.6525 9.7656 C 24.9181 9.1094 23.5118 9.9063 23.0431 11.1016 C 22.5509 12.3437 22.9962 13.7734 24.5900 14.4766 L 33.7071 18.4844 C 34.3165 18.7656 34.5509 19.0469 34.5509 19.4453 C 34.5509 19.8203 34.2228 20.1953 33.6134 20.1953 L 6.9181 20.1953 C 5.1837 20.1953 4.0353 21.2969 4.0353 22.8672 C 4.0353 24.3203 5.1837 25.4688 6.9181 25.4688 L 24.8947 25.4688 C 25.8556 25.4688 26.3009 25.9375 26.3009 26.5469 C 26.3009 27.1094 25.8556 27.6016 24.8947 27.6016 L 19.5978 27.6016 C 18.8009 27.6016 18.3790 28.0703 18.3790 28.9844 C 18.3790 31.0000 19.6681 32.5937 22.3868 32.5937 L 24.8947 32.5937 C 25.8556 32.5937 26.3009 33.0859 26.3009 33.6953 C 26.3009 34.2578 25.8556 34.7266 24.8947 34.7266 L 22.1993 34.7266 C 21.3790 34.7266 21.0040 35.1485 21.0040 36.1094 C 21.0040 38.1953 22.5743 39.7656 25.0118 39.7656 L 26.3009 39.7656 C 27.2618 39.7656 27.7071 40.2344 27.7071 40.8437 C 27.7071 41.4063 27.2618 41.8984 26.3009 41.8984 L 24.3087 41.8984 C 23.8400 41.8984 23.5587 42.1563 23.5587 42.6719 C 23.5587 44.8984 26.0900 46.8906 30.1915 46.8906 L 34.6915 46.8906 C 45.5196 46.8906 51.9647 41.0781 51.9647 31.1875 Z"
  }));
}

var _default = HandPointLeftFill;
exports["default"] = _default;