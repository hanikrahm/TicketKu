function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function EyeSlash(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 43.7218 47.2014 C 44.0245 47.5043 44.4489 47.6658 44.8323 47.6658 C 45.6400 47.6658 46.3874 46.9388 46.3874 46.1108 C 46.3874 45.7069 46.2261 45.3030 45.9229 45.0001 L 12.1370 11.2344 C 11.8341 10.9315 11.4303 10.7902 11.0264 10.7902 C 10.2186 10.7902 9.4713 11.5172 9.4713 12.3250 C 9.4713 12.7490 9.6127 13.1530 9.9156 13.4357 Z M 28.0101 12.3855 C 24.4963 12.3855 21.3257 12.9914 18.3571 13.9809 L 21.0026 16.6264 C 23.2442 15.9600 25.5060 15.5763 28.0101 15.5763 C 41.7022 15.5763 52.4659 27.2893 52.4659 29.6925 C 52.4659 31.3283 48.9318 35.7307 43.3380 39.1638 L 45.8220 41.6478 C 52.2037 37.5079 56 32.0754 56 29.6925 C 56 25.5526 44.7313 12.3855 28.0101 12.3855 Z M 28.0101 46.9994 C 31.7664 46.9994 35.1995 46.3330 38.3298 45.2627 L 35.6842 42.6171 C 33.2810 43.3643 30.7364 43.8086 28.0101 43.8086 C 14.3181 43.8086 3.5341 32.5400 3.5341 29.6925 C 3.5341 28.2789 7.2903 23.5735 13.2276 19.9990 L 10.7234 17.4948 C 3.9986 21.6549 0 27.2489 0 29.6925 C 0 33.8122 11.4908 46.9994 28.0101 46.9994 Z M 38.3699 34.1151 C 38.9961 32.7621 39.3394 31.2475 39.3394 29.6925 C 39.3394 23.3715 34.2907 18.3834 28.0101 18.3834 C 26.4148 18.3834 24.9203 18.7267 23.5673 19.3124 Z M 28.0101 41.0016 C 29.7873 41.0016 31.4635 40.5573 32.9579 39.8302 L 17.8320 24.6842 C 17.0646 26.1786 16.6607 27.8750 16.6607 29.6925 C 16.6607 35.8519 21.6892 41.0016 28.0101 41.0016 Z"
  }));
}

export default EyeSlash;