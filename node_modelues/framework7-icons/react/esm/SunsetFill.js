function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function SunsetFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 28.0108 24.2218 C 28.4041 24.2218 28.7319 24.0689 29.1907 23.6538 L 36.0077 17.2956 C 36.3791 16.9460 36.5321 16.5964 36.5321 16.1376 C 36.5321 15.2855 35.9203 14.6737 35.0463 14.6737 C 34.6093 14.6737 34.1942 14.8703 33.8665 15.1762 L 31.1353 17.9292 L 29.5185 19.8083 L 29.7806 16.5090 L 29.7806 8.3155 C 29.7806 7.2449 28.9722 6.3928 28.0108 6.3928 C 27.0495 6.3928 26.2192 7.2449 26.2192 8.3155 L 26.2192 16.5090 L 26.4814 19.8083 L 25.0830 18.1477 L 22.1334 15.1762 C 21.8275 14.8703 21.3905 14.6737 20.9754 14.6737 C 20.1014 14.6737 19.4896 15.2855 19.4896 16.1376 C 19.4896 16.5964 19.6426 16.9460 20.0140 17.2956 L 26.8310 23.6538 C 27.2898 24.0689 27.5957 24.2218 28.0108 24.2218 Z M 39.2631 30.2085 C 39.9625 30.8859 41.1206 30.8859 41.9287 30.0993 L 45.7305 26.2975 C 46.5390 25.4891 46.5171 24.3529 45.8182 23.6756 C 45.1626 22.9764 44.0046 22.9546 43.1960 23.7630 L 39.3942 27.5648 C 38.6078 28.3732 38.5859 29.5531 39.2631 30.2085 Z M 14.0928 30.0993 C 14.9013 30.8859 16.0592 30.9077 16.7366 30.2085 C 17.4139 29.5312 17.4139 28.3732 16.6055 27.5648 L 12.8037 23.7630 C 11.9953 22.9546 10.8810 22.9983 10.1818 23.6756 C 9.4826 24.3311 9.4826 25.4891 10.2910 26.2975 Z M 1.9009 51.9924 L 54.0991 51.9924 C 55.1476 51.9924 56.0000 51.2058 56.0000 50.2226 C 56.0000 49.2612 55.1476 48.4746 54.0991 48.4746 L 37.4716 48.4746 C 38.9574 46.5082 39.8533 44.0829 39.8533 41.4610 C 39.8533 34.9936 34.4783 29.5968 28.0108 29.5968 C 21.5434 29.5968 16.1685 34.9936 16.1685 41.4610 C 16.1685 44.0829 17.0643 46.5082 18.5282 48.4746 L 1.9009 48.4746 C .8740 48.4746 0 49.2612 0 50.2226 C 0 51.2058 .8740 51.9924 1.9009 51.9924 Z M 4.7413 42.7064 L 10.1162 42.7064 C 11.2524 42.7064 12.1045 41.8980 12.0827 40.9366 C 12.0608 39.9534 11.2524 39.1449 10.1162 39.1449 L 4.7413 39.1449 C 3.6051 39.1449 2.7967 39.9534 2.7967 40.9366 C 2.7967 41.8980 3.6051 42.7064 4.7413 42.7064 Z M 45.9054 42.7064 L 51.2805 42.7064 C 52.3947 42.7064 53.2248 41.8980 53.2248 40.9366 C 53.2248 39.9534 52.3947 39.1449 51.2805 39.1449 L 45.9054 39.1449 C 44.7693 39.1449 43.9173 39.9534 43.9392 40.9366 C 43.9607 41.8980 44.7693 42.7064 45.9054 42.7064 Z"
  }));
}

export default SunsetFill;