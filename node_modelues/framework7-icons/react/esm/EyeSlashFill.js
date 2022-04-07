function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function EyeSlashFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 43.9492 47.3227 C 44.2544 47.6280 44.6821 47.7909 45.0686 47.7909 C 45.8832 47.7909 46.6361 47.0580 46.6361 46.2234 C 46.6361 45.8163 46.4735 45.4092 46.1679 45.1038 L 12.1120 11.0682 C 11.8066 10.7629 11.3995 10.6204 10.9924 10.6204 C 10.1781 10.6204 9.4250 11.3532 9.4250 12.1674 C 9.4250 12.5949 9.5675 13.0020 9.8728 13.2870 Z M 45.8628 41.5619 C 52.2546 37.4295 56.0000 32.0555 56.0000 29.6738 C 56.0000 25.5415 44.7025 12.3710 28.0102 12.3710 C 24.5497 12.3710 21.3130 12.9613 18.3410 13.9384 L 23.6540 19.2311 C 24.9771 18.6611 26.4428 18.3354 28.0102 18.3354 C 34.3207 18.3354 39.3892 23.3226 39.3892 29.6738 C 39.3892 31.2209 39.0636 32.7069 38.4324 34.0097 Z M 28.0102 46.9766 C 31.7761 46.9766 35.2774 46.3049 38.4124 45.2056 L 33.0179 39.8112 C 31.5318 40.5848 29.8219 41.0122 28.0102 41.0122 C 21.6591 41.0122 16.6310 35.8621 16.6107 29.6738 C 16.6107 27.8418 17.0382 26.1115 17.8117 24.5848 L 10.7278 17.4600 C 4.0102 21.5924 0 27.2310 0 29.6738 C 0 33.7858 11.5013 46.9766 28.0102 46.9766 Z M 34.4835 29.2463 C 34.4835 25.6840 31.6133 22.7934 28.0102 22.7934 C 27.7456 22.7934 27.4809 22.8137 27.2367 22.8341 L 34.4428 30.0402 C 34.4632 29.7960 34.4835 29.5110 34.4835 29.2463 Z M 21.5166 29.2056 C 21.5166 32.7883 24.4682 35.6789 28.0306 35.6789 C 28.3156 35.6789 28.5802 35.6586 28.8652 35.6382 L 21.5573 28.3303 C 21.5369 28.6153 21.5166 28.9206 21.5166 29.2056 Z"
  }));
}

export default EyeSlashFill;