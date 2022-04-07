function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function RectangleCompressVertical(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9106 17.9806 C 28.3856 17.9806 28.7475 17.7997 29.2224 17.3700 L 36.7539 10.3587 C 37.1384 10.0194 37.3420 9.6123 37.3420 9.0921 C 37.3420 8.1648 36.6409 7.4863 35.6909 7.4863 C 35.2386 7.4863 34.8089 7.6898 34.4470 8.0291 L 31.5068 10.9693 L 29.5617 13.0049 L 29.7200 9.2052 L 29.7200 1.7415 C 29.7200 .7916 28.8832 0 27.9106 0 C 26.9381 0 26.1239 .7916 26.1239 1.7415 L 26.1239 9.2052 L 26.2596 13.0049 L 24.3145 10.9693 L 21.3743 8.0291 C 21.0350 7.6898 20.5827 7.4863 20.1303 7.4863 C 19.1578 7.4863 18.4793 8.1648 18.4793 9.0921 C 18.4793 9.6123 18.6828 10.0194 19.0899 10.3587 L 26.5989 17.3700 C 27.0738 17.7997 27.4583 17.9806 27.9106 17.9806 Z M 8.8670 35.1923 L 46.9542 35.1923 C 50.7311 35.1923 53.3547 32.6365 53.3547 29.1535 L 53.3547 26.8465 C 53.3547 23.3635 50.7311 20.8078 46.9542 20.8078 L 8.8670 20.8078 C 5.1126 20.8078 2.4664 23.3635 2.4664 26.8465 L 2.4664 29.1535 C 2.4664 32.6365 5.1126 35.1923 8.8670 35.1923 Z M 9.3420 31.7771 C 7.3064 31.7771 6.0625 30.4200 6.0625 28.5880 L 6.0625 27.4120 C 6.0625 25.5800 7.3064 24.2229 9.3420 24.2229 L 46.4794 24.2229 C 48.5147 24.2229 49.7589 25.5800 49.7589 27.4120 L 49.7589 28.5880 C 49.7589 30.4200 48.5147 31.7771 46.4794 31.7771 Z M 27.9106 56.0000 C 28.8832 56.0000 29.7200 55.2084 29.7200 54.2585 L 29.7200 46.7948 L 29.5617 42.9952 L 31.5068 45.0307 L 34.4470 47.9709 C 34.8089 48.3102 35.2386 48.5137 35.6909 48.5137 C 36.6409 48.5137 37.3420 47.8578 37.3420 46.9079 C 37.3420 46.3877 37.1384 46.0032 36.7539 45.6414 L 29.2224 38.6300 C 28.7475 38.2003 28.3856 38.0420 27.9106 38.0420 C 27.4583 38.0420 27.0738 38.2003 26.5989 38.6300 L 19.0899 45.6414 C 18.6828 46.0032 18.4793 46.3877 18.4793 46.9079 C 18.4793 47.8578 19.1578 48.5137 20.1303 48.5137 C 20.5827 48.5137 21.0350 48.3102 21.3743 47.9709 L 24.3145 45.0307 L 26.2596 42.9952 L 26.1239 46.7948 L 26.1239 54.2585 C 26.1239 55.2084 26.9381 56.0000 27.9106 56.0000 Z"
  }));
}

export default RectangleCompressVertical;