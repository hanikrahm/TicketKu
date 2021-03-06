function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function PauseRectangleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 7.7148 49.5742 L 48.2852 49.5742 C 53.1836 49.5742 55.6446 47.1367 55.6446 42.3086 L 55.6446 13.6914 C 55.6446 8.8633 53.1836 6.4258 48.2852 6.4258 L 7.7148 6.4258 C 2.8398 6.4258 .3554 8.8398 .3554 13.6914 L .3554 42.3086 C .3554 47.1602 2.8398 49.5742 7.7148 49.5742 Z M 21.4960 37.6211 C 20.0195 37.6211 19.1523 36.5898 19.1523 35.2071 L 19.1523 20.9102 C 19.1523 19.5274 20.0195 18.4961 21.4960 18.4961 L 22.9960 18.4961 C 24.3554 18.4961 25.2460 19.5274 25.2460 20.9102 L 25.2460 35.2071 C 25.2460 36.5898 24.3554 37.6211 22.9960 37.6211 Z M 33.1210 37.6211 C 31.6444 37.6211 30.7538 36.5898 30.7538 35.2071 L 30.7538 20.9102 C 30.7538 19.5274 31.6444 18.4961 33.1210 18.4961 L 34.6210 18.4961 C 35.9804 18.4961 36.8241 19.5274 36.8241 20.9102 L 36.8241 35.2071 C 36.8241 36.5898 35.9804 37.6211 34.6210 37.6211 Z"
  }));
}

export default PauseRectangleFill;