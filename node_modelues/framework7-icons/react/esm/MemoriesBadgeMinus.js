function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function MemoriesBadgeMinus(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 6.6409 32.1938 C 7.1706 32.1938 7.5780 32.0512 8.0873 31.6845 L 13.4041 27.7529 C 13.8523 27.4270 14.0967 26.9381 14.0967 26.4084 C 14.0967 25.4510 13.3430 24.7584 12.4874 24.7584 C 12.1004 24.7584 11.7541 24.8602 11.4485 25.1047 L 8.7188 27.2233 C 9.7374 18.9323 16.7653 12.5561 25.3415 12.5561 C 33.9992 12.5561 41.0476 19.0341 42.0051 27.4270 C 43.0644 27.1010 44.2254 26.8973 45.4069 26.8973 C 44.2050 16.9563 35.5882 9.0931 25.3415 9.0931 C 15.0949 9.0931 6.4576 16.9970 5.2557 26.9788 L 3.0760 23.8824 C 2.7501 23.4139 2.2612 23.1083 1.6704 23.1083 C .7333 23.1083 0 23.7805 0 24.7176 C 0 25.1250 .1222 25.5121 .3667 25.8177 L 4.6446 31.0937 C 5.2964 31.9086 5.8261 32.1938 6.6409 32.1938 Z M 20.1877 36.0032 C 20.1877 36.9199 21.2062 37.3477 22.1026 36.8180 L 33.0214 30.3604 C 33.8159 29.8919 33.7955 28.7714 33.0214 28.3029 L 22.1026 21.8453 C 21.2673 21.3564 20.1877 21.7231 20.1877 22.6602 Z M 45.6514 50.3851 C 51.3349 50.3851 56.0000 45.7405 56.0000 40.0366 C 56.0000 34.3735 51.3349 29.6882 45.6514 29.6882 C 39.9884 29.6882 35.3030 34.3735 35.3030 40.0366 C 35.3030 45.7405 39.9884 50.3851 45.6514 50.3851 Z M 40.4364 41.2793 C 39.7439 41.2793 39.1736 40.6885 39.1736 40.0366 C 39.1736 39.3848 39.7439 38.7940 40.4364 38.7940 L 50.9073 38.7940 C 51.5794 38.7940 52.1497 39.3848 52.1497 40.0366 C 52.1497 40.6885 51.5794 41.2793 50.9073 41.2793 Z M 25.3415 46.1072 C 20.1469 46.1072 15.6449 43.7441 12.5689 40.1792 C 12.1208 39.6700 11.5911 39.4459 11.0818 39.4459 C 10.2466 39.4459 9.4725 40.1181 9.4725 41.0552 C 9.4725 41.5033 9.6762 42.0126 10.1244 42.5626 C 13.6893 46.7998 19.2710 49.5499 25.3415 49.5499 C 28.7028 49.5499 31.8806 48.6943 34.6511 47.2072 C 34.0196 46.2701 33.5511 45.2516 33.1843 44.1516 C 30.8621 45.3942 28.1935 46.1072 25.3415 46.1072 Z"
  }));
}

export default MemoriesBadgeMinus;