function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowDownRightSquareFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 36.7070 21.5664 C 37.8320 21.5664 38.5820 22.4102 38.5820 23.6289 L 38.5820 35.7930 C 38.5820 37.3164 37.7617 37.9258 36.4257 37.9258 L 24.1679 37.9258 C 22.9726 37.9258 22.1757 37.1992 22.1757 36.0274 C 22.1757 34.9023 22.9960 34.1289 24.2148 34.1289 L 28.9257 34.1289 L 32.7460 34.5508 L 28.7148 30.8008 L 19.1992 21.2852 C 18.8241 20.9102 18.5898 20.4180 18.5898 19.9023 C 18.5898 18.7305 19.3163 17.9805 20.4648 17.9805 C 21.0976 17.9805 21.5663 18.1914 21.9413 18.5664 L 31.4570 28.0820 L 35.1835 32.0664 L 34.8085 28.0352 L 34.8085 23.5586 C 34.8085 22.3398 35.5351 21.5664 36.7070 21.5664 Z"
  }));
}

export default ArrowDownRightSquareFill;