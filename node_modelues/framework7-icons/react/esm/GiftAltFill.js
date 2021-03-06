function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function GiftAltFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 46.5860 9.4492 C 44.1954 7.0586 40.8204 6.6836 36.8360 6.6836 L 29.5235 6.6836 L 29.5235 18.1914 C 31.1642 14.9805 33.9766 13.0117 37.1173 13.0117 C 40.7266 13.0117 43.4220 15.7305 43.4220 19.3867 C 43.4220 22.5273 41.2423 25.1524 38.0782 26.5586 L 49.3280 26.5586 L 49.3280 19.1758 C 49.3280 15.1680 48.9767 11.8164 46.5860 9.4492 Z M 25.2579 26.1836 L 26.0079 26.1836 L 26.0079 25.4570 C 26.0079 20.7226 22.7969 16.5977 19.0704 16.5977 C 17.2657 16.5977 16.1173 17.7930 16.1173 19.6446 C 16.1173 22.8086 20.3126 26.1836 25.2579 26.1836 Z M 30.7423 26.1836 C 35.6642 26.1836 39.8829 22.8086 39.8829 19.6446 C 39.8829 17.7930 38.7344 16.5977 36.9298 16.5977 C 33.2032 16.5977 29.9923 20.7226 29.9923 25.4570 L 29.9923 26.1836 Z M 6.6720 26.5586 L 17.9220 26.5586 C 14.7579 25.1524 12.5782 22.5273 12.5782 19.3867 C 12.5782 15.7305 15.2735 13.0117 18.8829 13.0117 C 22.0235 13.0117 24.8360 14.9805 26.4766 18.1914 L 26.4766 6.6836 L 19.1173 6.6836 C 15.1798 6.6836 11.8048 7.0586 9.4142 9.4492 C 7.0235 11.8398 6.6720 15.1914 6.6720 19.1055 Z M 41.6876 37.2226 C 42.9766 37.3633 43.7032 38.1602 43.7032 39.4024 C 43.7032 40.4805 42.8360 41.5117 41.4064 41.3242 C 37.5391 40.7383 31.3516 36.2383 29.7110 31.0820 L 29.5235 31.0820 L 29.5235 49.3164 L 36.8360 49.3164 C 40.8204 49.3164 44.1954 48.9414 46.5860 46.5508 C 48.9767 44.1602 49.3280 40.8320 49.3280 36.8242 L 49.3280 29.3477 L 31.9610 29.3477 C 33.4142 32.3477 38.2188 36.8711 41.6876 37.2226 Z M 9.4142 46.5508 C 11.8048 48.9414 15.1798 49.3164 19.1876 49.3164 L 26.4766 49.3164 L 26.4766 31.0820 L 26.2891 31.0820 C 24.6485 36.2383 18.4610 40.7383 14.5938 41.3242 C 13.1642 41.5117 12.2969 40.4805 12.2969 39.4024 C 12.2969 38.1602 13.0001 37.3633 14.3126 37.2226 C 17.7813 36.8711 22.5860 32.3477 24.0391 29.3477 L 6.6720 29.3477 L 6.6720 36.8242 C 6.6720 40.8320 7.0235 44.1602 9.4142 46.5508 Z"
  }));
}

export default GiftAltFill;