function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function PhotoFillOnRectangleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 7.6883 23.1104 C 7.6883 17.1164 10.8653 13.9818 16.9016 13.9818 L 45.4100 13.9818 L 45.4100 13.4523 C 45.4100 9.0892 43.1861 6.8865 38.7803 6.8865 L 6.6505 6.8865 C 2.2239 6.8865 0 9.0892 0 13.4523 L 0 35.7548 C 0 40.1179 2.2239 42.2994 6.6505 42.2994 L 7.6883 42.2994 Z M 17.2405 52.5082 L 49.3495 52.5082 C 53.7548 52.5082 56 50.3055 56 45.9424 L 56 23.4281 C 56 19.0861 53.7548 16.8834 49.3495 16.8834 L 17.2405 16.8834 C 12.7927 16.8834 10.5900 19.0650 10.5900 23.4281 L 10.5900 45.9424 C 10.5900 50.3055 12.7927 52.5082 17.2405 52.5082 Z M 25.3524 34.4628 C 22.6414 34.4628 20.4387 32.2601 20.4387 29.5491 C 20.4387 26.8592 22.6414 24.6353 25.3524 24.6353 C 28.0423 24.6353 30.2450 26.8592 30.2450 29.5491 C 30.2450 32.2601 28.0423 34.4628 25.3524 34.4628 Z M 16.9863 49.0982 C 15.0801 49.0982 14.0000 48.0180 14.0000 46.0906 L 14.0000 44.3539 L 17.6853 40.9863 C 19.5703 39.2918 20.6505 38.1270 22.1331 38.1270 C 23.6580 38.1270 24.8865 39.3342 26.8139 41.0074 L 28.8048 42.7866 L 35.7518 36.5385 C 38.0603 34.4416 39.6067 33.0226 41.4493 33.0226 C 43.3132 33.0226 44.9017 34.3993 47.1677 36.5385 L 52.5897 41.6852 L 52.5897 46.0906 C 52.5897 48.0180 51.4884 49.0982 49.5824 49.0982 Z"
  }));
}

export default PhotoFillOnRectangleFill;