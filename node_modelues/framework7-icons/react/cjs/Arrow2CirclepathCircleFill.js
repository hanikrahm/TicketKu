"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Arrow2CirclepathCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0547 51.9063 28 C 51.9063 14.9219 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9219 4.0937 28 C 4.0937 41.0547 14.9218 51.9063 27.9999 51.9063 Z M 19.5155 20.4766 C 18.6952 19.6094 18.9530 18.3906 20.0780 17.5235 C 22.1171 15.8359 25.0468 14.8047 27.9765 14.8047 C 34.9140 14.8047 40.3514 19.6797 41.1952 26.5937 L 42.7890 26.5937 C 43.7265 26.5937 43.9843 27.5078 43.3983 28.2110 L 40.2109 32.2422 C 39.6014 33.0156 38.7577 32.9453 38.1718 32.2422 L 34.9374 28.2110 C 34.3749 27.5313 34.6327 26.5937 35.5702 26.5937 L 37.7265 26.5937 C 37.0234 22.0469 32.9218 18.5078 27.9765 18.5078 C 25.7030 18.5078 24.0155 19.2110 22.3280 20.5235 C 21.3905 21.2266 20.3124 21.3672 19.5155 20.4766 Z M 12.4374 27.6484 L 15.6249 23.6172 C 16.2343 22.8437 17.0780 22.9141 17.6640 23.6172 L 20.9218 27.6484 C 21.4843 28.3281 21.2030 29.2891 20.2890 29.2891 L 18.2733 29.2891 C 18.9765 33.8125 23.0546 37.3750 28.0234 37.3750 C 30.2968 37.3750 31.9843 36.6484 33.6718 35.3359 C 34.5858 34.6563 35.6640 34.4922 36.4843 35.3828 C 37.2812 36.25 37.0234 37.4688 35.9218 38.3594 C 33.8827 40.0469 30.9296 41.0547 28.0234 41.0547 C 21.0624 41.0547 15.6249 36.1797 14.7812 29.2891 L 13.0468 29.2891 C 12.1093 29.2891 11.8749 28.3516 12.4374 27.6484 Z"
  }));
}

var _default = Arrow2CirclepathCircleFill;
exports["default"] = _default;