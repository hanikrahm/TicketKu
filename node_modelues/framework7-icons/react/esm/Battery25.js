function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Battery25(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 9.4633 42.0000 L 40.8481 42.0000 C 43.8786 42.0000 46.4304 41.7165 48.2379 39.9089 C 50.0457 38.1013 50.2935 35.5848 50.2935 32.5545 L 50.2935 23.4633 C 50.2935 20.4329 50.0457 17.8987 48.2379 16.1089 C 46.4127 14.3013 43.8786 14.0000 40.8481 14.0000 L 9.4101 14.0000 C 6.4329 14.0000 3.8810 14.3013 2.0734 16.1089 C .2658 17.9164 0 20.4329 0 23.4101 L 0 32.5545 C 0 35.5848 .2658 38.1190 2.0734 39.9089 C 3.8810 41.7165 6.4329 42.0000 9.4633 42.0000 Z M 8.9671 39.1468 C 7.1418 39.1468 5.2279 38.8987 4.1646 37.8355 C 3.0835 36.7544 2.8532 34.8759 2.8532 33.0506 L 2.8532 23.0202 C 2.8532 21.1595 3.0835 19.2456 4.1468 18.1823 C 5.2279 17.1013 7.1595 16.8532 9.0203 16.8532 L 41.3442 16.8532 C 43.1520 16.8532 45.0836 17.1190 46.1470 18.1823 C 47.2278 19.2633 47.4405 21.1418 47.4405 22.9671 L 47.4405 33.0506 C 47.4405 34.8759 47.2100 36.7544 46.1470 37.8355 C 45.0836 38.9165 43.1520 39.1468 41.3442 39.1468 Z M 8.6126 36.7367 L 13.2734 36.7367 C 14.5848 36.7367 15.3114 36.5595 15.8785 36.0101 C 16.4456 35.4430 16.6051 34.6988 16.6051 33.4051 L 16.6051 22.6127 C 16.6051 21.3013 16.4456 20.5747 15.8785 20.0076 C 15.3114 19.4405 14.5848 19.2810 13.2734 19.2810 L 8.6126 19.2810 C 7.3013 19.2810 6.5747 19.4405 6.0076 20.0076 C 5.4405 20.5747 5.2810 21.3013 5.2810 22.6127 L 5.2810 33.4051 C 5.2810 34.6988 5.4405 35.4430 6.0076 36.0101 C 6.5747 36.5595 7.3013 36.7367 8.6126 36.7367 Z M 52.7216 32.4835 C 54.1214 32.3949 56 30.6051 56 27.8937 C 56 25.2000 54.1214 23.4101 52.7216 23.3215 Z"
  }));
}

export default Battery25;