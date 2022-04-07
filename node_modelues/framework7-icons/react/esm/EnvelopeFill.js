function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function EnvelopeFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 28.0468 30.7070 C 29.0312 30.7070 29.9218 30.2617 30.9296 29.2305 L 51.3200 9.0508 C 50.4532 8.2070 48.8360 7.8086 46.5157 7.8086 L 8.7812 7.8086 C 6.8124 7.8086 5.4296 8.1836 4.6562 8.9570 L 25.1640 29.2305 C 26.1718 30.2383 27.0858 30.7070 28.0468 30.7070 Z M 2.7109 44.4180 L 19.2812 28.0352 L 2.6640 11.6523 C 2.3124 12.3086 2.1249 13.4336 2.1249 15.0508 L 2.1249 40.9258 C 2.1249 42.5898 2.3358 43.7617 2.7109 44.4180 Z M 53.3360 44.3945 C 53.6874 43.7148 53.8751 42.5664 53.8751 40.9258 L 53.8751 15.0508 C 53.8751 13.4805 53.7109 12.3555 53.3591 11.7227 L 36.8124 28.0352 Z M 9.4843 48.1914 L 47.2184 48.1914 C 49.1874 48.1914 50.5468 47.8164 51.3200 47.0664 L 34.4452 30.3320 L 32.8749 31.9023 C 31.2812 33.4492 29.7577 34.1523 28.0468 34.1523 C 26.3358 34.1523 24.8124 33.4492 23.2187 31.9023 L 21.6484 30.3320 L 4.7968 47.0430 C 5.6874 47.8164 7.2577 48.1914 9.4843 48.1914 Z"
  }));
}

export default EnvelopeFill;