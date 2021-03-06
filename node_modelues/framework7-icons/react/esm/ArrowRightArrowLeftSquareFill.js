function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowRightArrowLeftSquareFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 40.7148 19.9492 C 40.7148 20.9805 40.0117 21.7305 38.9804 21.7305 L 25.6444 21.7305 L 21.7070 21.5430 L 24.5663 23.9805 L 26.6054 25.6914 C 26.9335 25.9492 27.1210 26.3945 27.1210 26.9102 C 27.1210 27.8711 26.3710 28.6211 25.4101 28.6211 C 24.9179 28.6211 24.5195 28.4571 24.1679 28.1289 L 17.1601 21.4961 C 16.6913 21.0274 16.4804 20.4883 16.4804 19.9492 C 16.4804 19.4571 16.6679 18.9414 17.1601 18.4961 L 24.1679 11.7930 C 24.5195 11.4883 24.9179 11.3242 25.4101 11.3242 C 26.3710 11.3242 27.1210 12.0742 27.1210 13.0352 C 27.1210 13.5508 26.9335 13.9492 26.6054 14.2539 L 24.5663 16.0118 L 21.7304 18.3789 L 25.6444 18.2149 L 38.9804 18.2149 C 40.0117 18.2149 40.7148 18.9414 40.7148 19.9492 Z M 40.7148 35.7461 C 40.7148 36.2617 40.5273 36.8242 40.0585 37.2461 L 33.0273 43.9024 C 32.6992 44.2305 32.2773 44.3711 31.8085 44.3711 C 30.8476 44.3711 30.0976 43.6445 30.0976 42.6836 C 30.0976 42.1680 30.2851 41.6992 30.6132 41.4414 L 32.6523 39.7305 L 35.5117 37.3164 L 31.5742 37.4805 L 18.2382 37.4805 C 17.2070 37.4805 16.4804 36.7539 16.4804 35.7461 C 16.4804 34.7149 17.2070 33.9649 18.2382 33.9649 L 31.5742 33.9649 L 35.4882 34.1523 L 32.6523 31.7617 L 30.6132 30.0039 C 30.2851 29.7227 30.0976 29.3008 30.0976 28.8086 C 30.0976 27.8242 30.8476 27.1211 31.8085 27.1211 C 32.2773 27.1211 32.6992 27.2383 33.0273 27.5664 L 40.0585 34.2696 C 40.5507 34.7383 40.7148 35.2305 40.7148 35.7461 Z"
  }));
}

export default ArrowRightArrowLeftSquareFill;