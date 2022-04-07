function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function PhoneFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 18.1562 37.7617 C 24.9297 44.5352 33.1797 49.7617 39.9062 49.7617 C 42.9297 49.7617 45.5781 48.7070 47.7109 46.3633 C 48.9528 44.9805 49.7266 43.3633 49.7266 41.7695 C 49.7266 40.5977 49.2812 39.4727 48.1562 38.6758 L 40.9843 33.5664 C 39.8828 32.8164 38.9687 32.4414 38.1250 32.4414 C 37.0468 32.4414 36.1093 33.0508 35.0312 34.1055 L 33.3671 35.7461 C 33.1093 36.0039 32.7812 36.1211 32.4765 36.1211 C 32.1015 36.1211 31.7734 35.9805 31.5156 35.8633 C 30.0859 35.0898 27.6015 32.9571 25.2812 30.6602 C 22.9843 28.3633 20.8515 25.8789 20.1015 24.4258 C 19.9609 24.1680 19.8437 23.8398 19.8437 23.4883 C 19.8437 23.1836 19.9375 22.8789 20.1953 22.6211 L 21.8359 20.9102 C 22.8906 19.8320 23.4999 18.8945 23.4999 17.8164 C 23.4999 16.9727 23.1250 16.0586 22.3515 14.9571 L 17.3124 7.8555 C 16.4921 6.7305 15.3437 6.2383 14.0781 6.2383 C 12.5312 6.2383 10.9140 6.9414 9.5546 8.2774 C 7.2812 10.4571 6.2734 13.1524 6.2734 16.1289 C 6.2734 22.8555 11.4062 31.0117 18.1562 37.7617 Z"
  }));
}

export default PhoneFill;