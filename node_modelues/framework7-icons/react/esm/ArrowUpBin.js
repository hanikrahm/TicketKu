function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowUpBin(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 15.7566 49.5476 L 40.2434 49.5476 C 44.8420 49.5476 46.8962 47.4001 47.5731 42.8248 L 51.0511 19.4118 L 51.5645 19.4118 C 54.4358 19.4118 56 17.6144 56 14.7665 L 56 11.2183 C 56 8.3705 54.4358 6.5731 51.5645 6.5731 L 4.4352 6.5731 C 1.7040 6.5731 0 8.3705 0 11.2183 L 0 14.7665 C 0 17.6144 1.5640 19.4118 4.4352 19.4118 L 4.9721 19.4118 L 8.4268 42.8248 C 9.1271 47.4234 11.1579 49.5476 15.7566 49.5476 Z M 5.3922 15.8870 C 4.2251 15.8870 3.7582 15.3968 3.7582 14.2296 L 3.7582 11.7553 C 3.7582 10.5881 4.2251 10.0979 5.3922 10.0979 L 50.6308 10.0979 C 51.7983 10.0979 52.2419 10.5881 52.2419 11.7553 L 52.2419 14.2296 C 52.2419 15.3968 51.7983 15.8870 50.6308 15.8870 Z M 15.8032 46.0228 C 13.7024 46.0228 12.5118 45.0891 12.1617 42.7782 L 8.6836 19.4118 L 47.3164 19.4118 L 43.8380 42.7782 C 43.5115 45.0891 42.2743 46.0228 40.1967 46.0228 Z M 29.8557 40.4905 L 29.8557 31.7836 L 29.7157 27.8853 L 31.7232 29.9628 L 34.2909 32.5539 C 34.6177 32.9041 35.0845 33.0908 35.5514 33.0908 C 36.5318 33.0908 37.2555 32.4139 37.2555 31.4568 C 37.2555 30.8966 37.0454 30.4997 36.6485 30.1496 L 29.3655 23.3801 C 28.8753 22.9366 28.4785 22.7498 28.0116 22.7498 C 27.5214 22.7498 27.1479 22.9366 26.6344 23.3801 L 19.3514 30.1496 C 18.9545 30.4997 18.7445 30.8966 18.7445 31.4568 C 18.7445 32.4139 19.4681 33.0908 20.4485 33.0908 C 20.8920 33.0908 21.3822 32.9041 21.7324 32.5539 L 24.3001 29.9628 L 26.3076 27.8853 L 26.1442 31.7836 L 26.1442 40.4905 C 26.1442 41.4709 27.0079 42.2879 28.0116 42.2879 C 29.0154 42.2879 29.8557 41.4709 29.8557 40.4905 Z"
  }));
}

export default ArrowUpBin;