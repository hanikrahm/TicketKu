function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function PinSlash(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 47.2561 44.3576 C 47.9779 45.0794 49.1191 45.0794 49.7943 44.3576 C 50.4924 43.6591 50.5158 42.5414 49.7943 41.8196 L 8.6498 .6985 C 7.9512 0 6.7870 0 6.0885 .6985 C 5.4132 1.3738 5.4132 2.5613 6.0885 3.2366 Z M 35.9629 24.2162 L 37.3134 14.4599 C 37.3833 13.9243 37.4531 13.6682 37.9421 13.3189 L 43.5770 9.2441 C 44.8577 8.3127 45.3932 7.1717 45.3932 6.1239 C 45.3932 4.5638 44.1591 3.1900 42.3429 3.1900 L 14.9367 3.1900 L 18.6622 6.9389 L 39.7350 6.9389 C 39.9446 6.9389 40.0843 7.0786 40.0843 7.2882 C 40.0843 7.4511 40.0610 7.5676 39.8980 7.6840 L 34.9384 10.9905 C 34.2398 11.4328 33.8673 12.1081 33.7509 13.0162 L 32.7263 21.0029 Z M 13.1670 37.5119 L 25.6011 37.5119 L 25.6011 49.4803 C 25.6011 53.0195 27.0914 56 27.6502 56 C 28.2323 56 29.7226 53.0195 29.7226 49.4803 L 29.7226 37.5119 L 36.2656 37.5119 L 32.5168 33.7630 L 16.1708 33.7630 C 15.9845 33.7630 15.8448 33.6233 15.8448 33.4137 C 15.8448 33.2740 15.9146 33.1343 16.0311 33.0179 L 22.0153 26.7775 C 22.4111 26.3584 22.7371 25.9626 22.7138 25.4503 C 22.6673 24.8915 22.5508 24.2861 22.4344 23.6807 L 18.7554 19.9784 L 19.1512 22.9588 C 19.2910 23.9135 18.9650 24.2861 18.4993 24.7983 L 11.3741 32.5289 C 10.6988 33.2507 10.3962 33.9493 10.3962 34.9273 C 10.3962 36.4873 11.5371 37.5119 13.1670 37.5119 Z"
  }));
}

export default PinSlash;