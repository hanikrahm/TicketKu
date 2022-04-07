function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function CloudRain(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 12.2617 36.4726 L 41.3476 36.4726 C 49.0352 36.4726 54.7539 30.6367 54.7539 23.3945 C 54.7539 15.9414 48.6603 10.4805 40.7148 10.4805 C 37.7851 4.6914 32.3476 .9648 25.5742 .9648 C 16.7617 .9648 9.4960 7.8554 8.7226 16.5742 C 4.4804 17.7930 1.2461 21.4961 1.2461 26.4414 C 1.2461 31.9726 5.2773 36.4726 12.2617 36.4726 Z M 12.2148 32.6992 C 7.4101 32.6992 4.9960 30.0273 4.9960 26.5586 C 4.9960 23.7226 6.6367 21.1914 10.6211 20.1367 C 11.9101 19.8086 12.3789 19.1992 12.4960 17.8632 C 13.0351 10.2226 18.7773 4.7148 25.5742 4.7148 C 30.8476 4.7148 34.9960 7.5976 37.5273 12.8008 C 38.0664 13.9258 38.7695 14.3242 40.1523 14.3242 C 47.0898 14.3242 51.0037 18.5195 51.0037 23.5117 C 51.0037 28.6211 46.9256 32.6992 41.5820 32.6992 Z M 31.2929 47.4179 L 34.3398 42.1445 C 34.7617 41.4179 34.5273 40.5976 33.8242 40.1992 C 33.1211 39.7773 32.3242 40.0117 31.9023 40.7383 L 28.8086 46.0586 C 28.4336 46.7383 28.6211 47.5586 29.3476 47.9805 C 30.0507 48.3554 30.8945 48.1211 31.2929 47.4179 Z M 36.7304 54.1211 L 43.6445 42.1211 C 44.0664 41.4179 43.8554 40.6211 43.1758 40.1992 C 42.5195 39.8008 41.6758 40.0117 41.2304 40.7148 L 34.3633 52.6679 C 33.9648 53.3945 34.1523 54.2148 34.8554 54.6367 C 35.5351 55.0117 36.3320 54.8008 36.7304 54.1211 Z M 12.6367 47.4414 L 15.6836 42.1679 C 16.1054 41.4414 15.8945 40.6211 15.1914 40.2226 C 14.4648 39.8008 13.6679 40.0351 13.2460 40.7617 L 10.1758 46.0820 C 9.7773 46.7617 9.9882 47.5820 10.6914 47.9805 C 11.3945 48.3789 12.2382 48.1445 12.6367 47.4414 Z M 18.0742 54.1445 L 25.0117 42.1445 C 25.4101 41.4414 25.1992 40.6445 24.5429 40.2226 C 23.8633 39.8242 22.9960 40.0351 22.5976 40.7383 L 15.7070 52.6914 C 15.3086 53.4179 15.5195 54.2383 16.2226 54.6601 C 16.9023 55.0352 17.6992 54.8242 18.0742 54.1445 Z"
  }));
}

export default CloudRain;