function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function RectangleSplit3x3(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 7.7148 49.5742 L 48.2852 49.5742 C 53.1836 49.5742 55.6446 47.1367 55.6446 42.3086 L 55.6446 13.6914 C 55.6446 8.8633 53.1836 6.4258 48.2852 6.4258 L 7.7148 6.4258 C 2.8398 6.4258 .3554 8.8398 .3554 13.6914 L .3554 42.3086 C .3554 47.1602 2.8398 49.5742 7.7148 49.5742 Z M 4.1288 13.8789 C 4.1288 11.4414 5.4413 10.1992 7.7851 10.1992 L 18.1210 10.1992 L 18.1210 19.8555 L 4.1288 19.8555 Z M 21.6601 19.8555 L 21.6601 10.1992 L 34.2460 10.1992 L 34.2460 19.8555 Z M 37.7851 19.8555 L 37.7851 10.1992 L 48.2147 10.1992 C 50.5350 10.1992 51.8708 11.4414 51.8708 13.8789 L 51.8708 19.8555 Z M 21.8241 32.8398 L 21.8241 23.1602 L 34.4101 23.1602 L 34.4101 32.8398 Z M 37.7851 32.8398 L 37.7851 23.1602 L 51.8708 23.1602 L 51.8708 32.8398 Z M 18.1210 23.1602 L 18.1210 32.8398 L 4.1288 32.8398 L 4.1288 23.1602 Z M 48.2147 45.8008 L 37.7851 45.8008 L 37.7851 36.1445 L 51.8708 36.1445 L 51.8708 42.1211 C 51.8708 44.5586 50.5350 45.8008 48.2147 45.8008 Z M 7.7851 45.8008 C 5.4413 45.8008 4.1288 44.5586 4.1288 42.1211 L 4.1288 36.1445 L 18.1210 36.1445 L 18.1210 45.8008 Z M 21.6601 36.1445 L 34.2460 36.1445 L 34.2460 45.8008 L 21.6601 45.8008 Z"
  }));
}

export default RectangleSplit3x3;