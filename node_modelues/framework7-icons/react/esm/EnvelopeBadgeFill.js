function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function EnvelopeBadgeFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 46.7086 24.5585 C 51.7992 24.5585 56 20.3579 56 15.2670 C 56 10.1761 51.7992 5.9756 46.7086 5.9756 C 41.5946 5.9756 37.4169 10.1533 37.4169 15.2670 C 37.4169 20.3808 41.5946 24.5585 46.7086 24.5585 Z M 46.7086 21.1113 C 43.4896 21.1113 40.8641 18.4859 40.8641 15.2670 C 40.8641 12.0481 43.4896 9.4228 46.7086 9.4228 C 49.9042 9.4228 52.5528 12.0709 52.5528 15.2670 C 52.5528 18.4631 49.9042 21.1113 46.7086 21.1113 Z M 25.2490 33.8727 C 26.2078 33.8727 27.0753 33.4390 28.0569 32.4345 L 37.2799 23.3257 C 35.4308 21.1569 34.2893 18.3261 34.2893 15.2670 C 34.2893 13.9886 34.4948 12.7330 34.8600 11.5687 L 6.4835 11.5687 C 4.5658 11.5687 3.2189 11.9340 2.4655 12.6873 L 22.4410 32.4345 C 23.4226 33.4161 24.3130 33.8727 25.2490 33.8727 Z M .5707 47.2278 L 16.7109 31.2702 L .5250 15.3127 C .1826 15.9519 0 17.0477 0 18.6229 L 0 43.8262 C 0 45.4471 .2054 46.5886 .5707 47.2278 Z M 49.8818 47.2049 C 50.2240 46.5429 50.4068 45.4243 50.4068 43.8262 L 50.4068 27.0925 C 49.2422 27.4806 47.9868 27.6861 46.7086 27.6861 C 44.1058 27.6861 41.6629 26.8642 39.6770 25.4716 L 33.7871 31.2702 Z M 7.1683 50.9033 L 43.9230 50.9033 C 45.8408 50.9033 47.1649 50.5380 47.9181 49.8075 L 31.4814 33.5075 L 29.9518 35.0370 C 28.3994 36.5438 26.9155 37.2286 25.2490 37.2286 C 23.5824 37.2286 22.0986 36.5438 20.5462 35.0370 L 19.0166 33.5075 L 2.6025 49.7846 C 3.4700 50.5380 4.9995 50.9033 7.1683 50.9033 Z"
  }));
}

export default EnvelopeBadgeFill;