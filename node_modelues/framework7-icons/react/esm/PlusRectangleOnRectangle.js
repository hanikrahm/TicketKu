function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function PlusRectangleOnRectangle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 6.6505 42.2994 L 10.5900 42.2994 L 10.5900 45.9424 C 10.5900 50.3055 12.7927 52.5082 17.2405 52.5082 L 49.3495 52.5082 C 53.7548 52.5082 56 50.3055 56 45.9424 L 56 23.4281 C 56 19.0861 53.7548 16.8834 49.3495 16.8834 L 45.4100 16.8834 L 45.4100 13.4523 C 45.4100 9.0892 43.1861 6.8865 38.7803 6.8865 L 6.6505 6.8865 C 2.2239 6.8865 0 9.0892 0 13.4523 L 0 35.7548 C 0 40.1179 2.2239 42.2994 6.6505 42.2994 Z M 6.7141 38.8894 C 4.5961 38.8894 3.4100 37.7669 3.4100 35.5642 L 3.4100 13.6429 C 3.4100 11.4402 4.5961 10.2964 6.7141 10.2964 L 38.7170 10.2964 C 40.8138 10.2964 41.9998 11.4402 41.9998 13.6429 L 41.9998 16.8834 L 17.2405 16.8834 C 12.7927 16.8834 10.5900 19.0650 10.5900 23.4281 L 10.5900 38.8894 Z M 17.2829 49.0982 C 15.1649 49.0982 14.0000 47.9545 14.0000 45.7518 L 14.0000 23.6187 C 14.0000 21.4160 15.1649 20.2934 17.2829 20.2934 L 49.2857 20.2934 C 51.3826 20.2934 52.5897 21.4160 52.5897 23.6187 L 52.5897 45.7518 C 52.5897 47.9545 51.3826 49.0982 49.2857 49.0982 Z M 33.2949 44.8410 C 34.4175 44.8410 35.0952 44.0785 35.0952 42.8501 L 35.0952 36.6656 L 41.5552 36.6656 C 42.7411 36.6656 43.5674 36.0513 43.5674 34.9288 C 43.5674 33.7851 42.7836 33.1285 41.5552 33.1285 L 35.0952 33.1285 L 35.0952 26.5627 C 35.0952 25.3131 34.4175 24.5506 33.2949 24.5506 C 32.1512 24.5506 31.5370 25.3554 31.5370 26.5627 L 31.5370 33.1285 L 25.0983 33.1285 C 23.8486 33.1285 23.0650 33.7851 23.0650 34.9288 C 23.0650 36.0513 23.9122 36.6656 25.0983 36.6656 L 31.5370 36.6656 L 31.5370 42.8501 C 31.5370 44.0362 32.1512 44.8410 33.2949 44.8410 Z"
  }));
}

export default PlusRectangleOnRectangle;