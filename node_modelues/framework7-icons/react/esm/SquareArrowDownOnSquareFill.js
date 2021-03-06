function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function SquareArrowDownOnSquareFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 20.6474 12.2267 C 20.7113 11.3960 21.4355 10.6504 22.3514 10.6504 C 23.2461 10.6504 23.9703 11.3960 24.0342 12.2267 L 24.0342 1.6402 C 24.0342 .7455 23.2674 0 22.3514 0 C 21.4355 0 20.6474 .7455 20.6474 1.6402 Z M 24.0982 10.8848 L 24.0982 24.3895 L 23.9703 27.4355 L 25.3123 26.0297 L 28.5287 22.5789 C 28.8482 22.2381 29.2955 22.0464 29.7216 22.0464 C 30.6375 22.0464 31.3404 22.7067 31.3404 23.6014 C 31.3404 24.0700 31.1487 24.4534 30.8079 24.7729 L 23.6295 31.7170 C 23.1822 32.1643 22.7988 32.3134 22.3514 32.3134 C 21.9042 32.3134 21.5207 32.1643 21.0734 31.7170 L 13.8737 24.7729 C 13.5329 24.4534 13.3412 24.0700 13.3412 23.6014 C 13.3412 22.7067 14.0228 22.0464 14.9388 22.0464 C 15.3648 22.0464 15.8547 22.2381 16.1529 22.5789 L 19.3906 26.0297 L 20.7326 27.4355 L 20.6048 24.3895 L 20.6048 10.8848 L 10.1248 10.8848 C 5.6942 10.8848 3.4363 13.0787 3.4363 17.4880 L 3.4363 39.3640 C 3.4363 43.7733 5.6942 45.9673 10.1248 45.9673 L 34.5569 45.9673 C 39.0301 45.9673 41.2453 43.7520 41.2453 39.3640 L 41.2453 17.4880 C 41.2453 13.1000 39.0301 10.8848 34.5569 10.8848 Z M 22.4367 56 L 45.2072 56 C 49.6591 56 51.8743 53.8060 51.8743 49.3967 L 51.8743 26.9882 C 51.8743 22.6002 49.6591 20.3849 45.2072 20.3849 L 44.1424 20.3849 L 44.1424 39.6835 C 44.1424 45.7330 40.9684 48.8855 34.8764 48.8855 L 15.7695 48.8855 L 15.7695 49.3967 C 15.7695 53.7847 18.0061 56 22.4367 56 Z"
  }));
}

export default SquareArrowDownOnSquareFill;