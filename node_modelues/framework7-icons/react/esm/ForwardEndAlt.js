function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ForwardEndAlt(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 2.7616 43.7432 C 3.5480 43.7432 4.2000 43.4939 4.9671 43.0336 L 24.5096 31.5267 C 25.5644 30.9130 26.1398 30.2034 26.3507 29.4171 L 26.3507 40.4446 C 26.3507 42.5925 27.6165 43.7432 29.1124 43.7432 C 29.8987 43.7432 30.5508 43.4939 31.3179 43.0336 L 50.8795 31.5267 C 51.9152 30.9130 52.4906 30.2034 52.7208 29.4171 L 52.7208 42.9185 C 52.7208 43.8199 53.4494 44.5103 54.3508 44.5103 C 55.2522 44.5103 56 43.8199 56 42.9185 L 56 14.4390 C 56 13.5376 55.2522 12.8281 54.3508 12.8281 C 53.4494 12.8281 52.7208 13.5376 52.7208 14.4390 L 52.7208 27.9212 C 52.4906 27.1349 51.9152 26.4253 50.8795 25.8116 L 31.3179 14.3048 C 30.5508 13.8445 29.8987 13.5952 29.1124 13.5952 C 27.6165 13.5952 26.3507 14.7459 26.3507 16.8938 L 26.3507 27.9212 C 26.1398 27.1349 25.5644 26.4253 24.5096 25.8116 L 4.9671 14.3048 C 4.1808 13.8445 3.5480 13.5952 2.7616 13.5952 C 1.2657 13.5952 0 14.7459 0 16.8938 L 0 40.4446 C 0 42.5925 1.2657 43.7432 2.7616 43.7432 Z M 3.6055 40.1952 C 3.3178 40.1952 3.0877 40.0035 3.0877 39.6199 L 3.0877 17.7185 C 3.0877 17.3349 3.3178 17.1431 3.6055 17.1431 C 3.7397 17.1431 3.8740 17.2007 4.0657 17.3157 L 22.3042 28.1322 C 22.5727 28.2856 22.7261 28.4007 22.7261 28.6692 C 22.7261 28.9185 22.5727 29.0528 22.3042 29.2062 L 4.0657 40.0226 C 3.8932 40.1377 3.7397 40.1952 3.6055 40.1952 Z M 29.9562 40.1952 C 29.6686 40.1952 29.4384 40.0035 29.4384 39.6199 L 29.4384 17.7185 C 29.4384 17.3349 29.6686 17.1431 29.9562 17.1431 C 30.0905 17.1431 30.2247 17.2007 30.4165 17.3157 L 48.6548 28.1322 C 48.9235 28.2856 49.0767 28.4007 49.0767 28.6692 C 49.0767 28.9185 48.9235 29.0528 48.6548 29.2062 L 30.4165 40.0226 C 30.2439 40.1377 30.0905 40.1952 29.9562 40.1952 Z"
  }));
}

export default ForwardEndAlt;