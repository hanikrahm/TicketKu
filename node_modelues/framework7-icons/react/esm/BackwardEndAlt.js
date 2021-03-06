function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function BackwardEndAlt(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 1.6493 44.5103 C 2.5507 44.5103 3.2795 43.8199 3.2795 42.9185 L 3.2795 29.4171 C 3.2219 29.1678 3.1835 28.9185 3.1835 28.6692 C 3.1835 28.4007 3.2219 28.1514 3.2795 27.9212 L 3.2795 14.4390 C 3.2795 13.5376 2.5507 12.8281 1.6493 12.8281 C .7479 12.8281 0 13.5376 0 14.4390 L 0 42.9185 C 0 43.8199 .7479 44.5103 1.6493 44.5103 Z M 26.8686 43.7432 C 28.3836 43.7432 29.6302 42.5925 29.6302 40.4446 L 29.6302 29.4171 C 29.8603 30.2034 30.4357 30.9130 31.4713 31.5267 L 51.0138 43.0336 C 51.8001 43.4939 52.4521 43.7432 53.2384 43.7432 C 54.7345 43.7432 56 42.5925 56 40.4446 L 56 16.8938 C 56 14.7459 54.7345 13.5952 53.2384 13.5952 C 52.4521 13.5952 51.8001 13.8445 51.0138 14.3048 L 31.4713 25.8116 C 30.4357 26.4253 29.8603 27.1349 29.6302 27.9212 L 29.6302 16.8938 C 29.6302 14.7459 28.3836 13.5952 26.8686 13.5952 C 26.1014 13.5952 25.4494 13.8445 24.6630 14.3048 L 5.1206 25.8116 C 4.0849 26.4253 3.5096 27.1349 3.2795 27.9212 L 3.2795 29.4171 C 3.5096 30.2034 4.0849 30.9130 5.1206 31.5267 L 24.6630 43.0336 C 25.4494 43.4939 26.1014 43.7432 26.8686 43.7432 Z M 26.0439 40.1952 C 25.9096 40.1952 25.7562 40.1377 25.5644 40.0226 L 7.3452 29.2062 C 7.0767 29.0528 6.9233 28.9185 6.9233 28.6692 C 6.9233 28.4007 7.0767 28.2856 7.3452 28.1322 L 25.5644 17.3157 C 25.7562 17.2007 25.9096 17.1431 26.0439 17.1431 C 26.3124 17.1431 26.5617 17.3349 26.5617 17.7185 L 26.5617 39.6199 C 26.5617 40.0035 26.3124 40.1952 26.0439 40.1952 Z M 52.3948 40.1952 C 52.2605 40.1952 52.1069 40.1377 51.9152 40.0226 L 33.6960 29.2062 C 33.4275 29.0528 33.2740 28.9185 33.2740 28.6692 C 33.2740 28.4007 33.4275 28.2856 33.6960 28.1322 L 51.9152 17.3157 C 52.1069 17.2007 52.2605 17.1431 52.3948 17.1431 C 52.6630 17.1431 52.9125 17.3349 52.9125 17.7185 L 52.9125 39.6199 C 52.9125 40.0035 52.6630 40.1952 52.3948 40.1952 Z"
  }));
}

export default BackwardEndAlt;