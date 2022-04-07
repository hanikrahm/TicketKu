function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowshapeTurnUpRight(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 30.3437 49.5039 C 31.4921 49.5039 32.3827 48.9883 33.5780 47.9805 L 52.0700 30.5195 C 52.9374 29.6524 53.2657 28.7851 53.2657 28.0117 C 53.2657 27.2148 52.9374 26.3477 52.0700 25.4805 L 33.5780 8.1836 C 32.2421 7.0820 31.5390 6.4961 30.3905 6.4961 C 28.7734 6.4961 27.6015 7.8086 27.6015 9.3789 L 27.6015 18.2383 L 26.9218 18.2383 C 10.0702 18.2383 2.7343 29.0429 2.7343 46.3633 C 2.7343 48.3789 3.8827 49.5039 5.1249 49.5039 C 6.1327 49.5039 7.2109 49.2695 8.0078 47.7695 C 12.1093 40.1055 17.8515 37.8086 26.9218 37.8086 L 27.6015 37.8086 L 27.6015 46.7617 C 27.6015 48.3320 28.7734 49.5039 30.3437 49.5039 Z M 31.7030 44.4648 C 31.4921 44.4648 31.3749 44.3242 31.3749 44.1133 L 31.3749 35.0429 C 31.3749 34.5039 31.1405 34.2695 30.6015 34.2695 L 27.4374 34.2695 C 16.3280 34.2695 9.1327 38.0898 6.4609 44.0195 C 6.3905 44.1836 6.3202 44.2539 6.2265 44.2539 C 6.1327 44.2539 6.0624 44.1602 6.0624 43.9961 C 6.5312 32.9336 11.3593 21.7773 27.4374 21.7773 L 30.6015 21.7773 C 31.1405 21.7773 31.3749 21.5429 31.3749 21.0039 L 31.3749 11.6992 C 31.3749 11.5117 31.5156 11.3711 31.7030 11.3711 C 31.8671 11.3711 31.9843 11.4648 32.1015 11.5586 L 48.7892 27.5664 C 48.9764 27.7305 49.0470 27.8711 49.0470 28.0117 C 49.0470 28.1524 48.9764 28.2695 48.7892 28.4570 L 32.1015 44.2539 C 31.9609 44.3945 31.8437 44.4648 31.7030 44.4648 Z"
  }));
}

export default ArrowshapeTurnUpRight;