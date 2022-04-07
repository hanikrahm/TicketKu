function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowLeftSquare(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 13.8554 45.8008 C 11.5117 45.8008 10.1992 44.5586 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4414 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4414 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 44.5586 44.4882 45.8008 42.1679 45.8008 Z M 15.9413 27.9414 C 15.9413 28.4805 16.1757 28.8789 16.6210 29.3242 L 24.5429 37.2461 C 24.8476 37.5508 25.2695 37.7383 25.7617 37.7383 C 26.7226 37.7383 27.4492 36.9883 27.4492 36.0274 C 27.4492 35.5118 27.2617 35.0898 26.9335 34.7852 L 24.0039 31.9023 L 21.1679 29.5118 L 26.1132 29.6992 L 38.3476 29.6992 C 39.3554 29.6992 40.1054 28.9492 40.1054 27.9414 C 40.1054 26.9102 39.3554 26.1836 38.3476 26.1836 L 26.1132 26.1836 L 21.1679 26.3711 L 24.0039 24.0039 L 26.9335 21.0977 C 27.2382 20.7696 27.4492 20.3477 27.4492 19.8320 C 27.4492 18.8945 26.7226 18.1445 25.7617 18.1445 C 25.2695 18.1445 24.8476 18.3086 24.5429 18.6133 L 16.6210 26.5820 C 16.1523 27.0508 15.9413 27.4492 15.9413 27.9414 Z"
  }));
}

export default ArrowLeftSquare;