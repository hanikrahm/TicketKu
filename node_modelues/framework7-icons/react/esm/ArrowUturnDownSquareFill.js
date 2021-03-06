function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowUturnDownSquareFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8399 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1601 8.9101 49.5742 13.7851 49.5742 Z M 32.0429 15.6836 C 37.9492 15.6836 41.6523 19.9961 41.6523 25.7617 L 41.6523 29.1367 C 41.6523 30.2148 41.0195 31.0352 39.9179 31.0352 C 38.7695 31.0352 38.1601 30.2148 38.1601 29.1836 L 38.1601 25.7617 C 38.1601 22.0117 35.7460 19.2930 31.8554 19.2930 C 28.0351 19.2930 25.9492 22.0820 25.9492 25.7383 L 25.9492 33.1211 L 25.8554 36.0508 L 26.9101 34.6211 L 29.8866 31.5039 C 30.2382 31.1289 30.7070 30.9648 31.1523 30.9648 C 32.1835 30.9648 32.9570 31.7148 32.9570 32.6758 C 32.9570 33.2148 32.7929 33.6133 32.4413 33.9414 L 25.6913 40.5508 C 25.3163 40.9258 24.8007 41.2070 24.2148 41.2070 C 23.6523 41.2070 23.1366 40.9258 22.7148 40.5508 L 16.0820 33.9648 C 15.7304 33.6133 15.5429 33.2383 15.5429 32.7226 C 15.5429 31.7148 16.3163 30.9648 17.3007 30.9648 C 17.8163 30.9648 18.2617 31.1992 18.5663 31.5273 L 21.0976 34.1055 L 22.6210 36.0508 L 22.5273 33.1211 L 22.5273 25.7383 C 22.5273 19.9726 26.1132 15.6836 32.0429 15.6836 Z"
  }));
}

export default ArrowUturnDownSquareFill;