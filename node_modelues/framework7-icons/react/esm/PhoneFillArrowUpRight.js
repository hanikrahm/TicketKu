function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function PhoneFillArrowUpRight(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 34.8202 9.1446 L 38.3592 9.1446 L 45.2499 8.7695 L 41.3124 12.3555 L 31.2343 22.4805 C 30.8358 22.8555 30.6718 23.2774 30.6718 23.7695 C 30.6718 24.6836 31.4218 25.3867 32.4296 25.3867 C 32.8983 25.3867 33.2968 25.2461 33.6483 24.8946 L 43.7265 14.7695 L 47.3124 10.8789 L 46.9374 17.7461 L 46.9374 21.2383 C 46.9374 22.1524 47.6171 22.8555 48.5309 22.9024 C 49.4688 22.9492 50.2892 22.1992 50.2892 21.2383 L 50.2892 7.6680 C 50.2892 6.4258 49.6796 5.7930 48.4373 5.7930 L 34.8202 5.7930 C 33.8592 5.7930 33.0858 6.5899 33.1327 7.5508 C 33.1796 8.4648 33.9061 9.1446 34.8202 9.1446 Z M 17.5936 38.2070 C 24.3671 44.9805 32.6171 50.2070 39.3436 50.2070 C 42.3671 50.2070 45.0155 49.1524 47.1483 46.8086 C 48.3903 45.4258 49.1640 43.8086 49.1640 42.2149 C 49.1640 41.0430 48.7186 39.9180 47.5936 39.1211 L 40.4218 34.0117 C 39.3202 33.2617 38.4061 32.8867 37.5624 32.8867 C 36.4843 32.8867 35.5468 33.4961 34.4686 34.5508 L 32.8046 36.1914 C 32.5468 36.4492 32.2186 36.5664 31.9139 36.5664 C 31.5390 36.5664 31.2108 36.4258 30.9530 36.3086 C 29.5233 35.5352 27.0390 33.4024 24.7186 31.1055 C 22.4218 28.8086 20.2890 26.3242 19.5390 24.8711 C 19.3983 24.6133 19.2812 24.2852 19.2812 23.9336 C 19.2812 23.6289 19.3749 23.3242 19.6327 23.0664 L 21.2733 21.3555 C 22.3280 20.2774 22.9374 19.3399 22.9374 18.2617 C 22.9374 17.4180 22.5624 16.5039 21.7890 15.4024 L 16.7499 8.3008 C 15.9296 7.1758 14.7812 6.6836 13.5155 6.6836 C 11.9686 6.6836 10.3514 7.3867 8.9921 8.7227 C 6.7186 10.9024 5.7108 13.5977 5.7108 16.5742 C 5.7108 23.3008 10.8436 31.4570 17.5936 38.2070 Z"
  }));
}

export default PhoneFillArrowUpRight;