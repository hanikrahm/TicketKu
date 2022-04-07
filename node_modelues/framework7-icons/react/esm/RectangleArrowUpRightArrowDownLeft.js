function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function RectangleArrowUpRightArrowDownLeft(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 12.1211 26.2656 L 15.6601 26.2656 L 15.6601 9.1797 C 15.6367 7.2812 16.7383 6.1328 18.8242 6.1328 L 37.1523 6.1328 C 39.2383 6.1328 40.3633 7.2812 40.3633 9.1797 L 40.3633 11.0078 L 43.8789 11.0078 L 43.8789 8.6875 C 43.8789 5.1719 41.4414 2.7110 37.6211 2.7110 L 18.3555 2.7110 C 14.5352 2.7110 12.0977 5.1719 12.0977 8.6875 Z M 34.6211 13.8906 C 33.6836 13.8906 33.1679 14.6406 33.1679 15.3906 C 33.1679 16.1406 33.6836 16.9141 34.6914 16.9141 L 38.3477 16.9141 L 41.1601 16.75 L 38.4648 19.2812 L 34.7852 22.9141 C 34.4336 23.2890 34.2930 23.6875 34.2930 24.0625 C 34.2930 25 35.1367 25.8437 36.0742 25.8437 C 36.4492 25.8437 36.8477 25.7031 37.1992 25.3516 L 40.8320 21.6953 L 43.3398 19 L 43.1992 21.7656 L 43.1992 25.5156 C 43.1992 26.5469 43.9726 27.0625 44.7461 27.0625 C 45.4726 27.0625 46.2226 26.5703 46.2226 25.5859 L 46.2226 15.8359 C 46.2226 14.5703 45.5195 13.8906 44.3008 13.8906 Z M 11.7226 42.1094 L 21.3789 42.1094 C 22.3633 42.1094 22.8555 41.3359 22.8555 40.5859 C 22.8555 39.8125 22.3633 39.0625 21.3086 39.0625 L 17.6523 39.0625 L 14.8633 39.2266 L 17.5586 36.6953 L 21.2148 33.0625 C 21.5898 32.7110 21.7305 32.3125 21.7305 31.9141 C 21.7305 30.9766 20.8633 30.1563 19.9258 30.1563 C 19.5508 30.1563 19.1758 30.2734 18.8242 30.6250 L 15.1679 34.3047 L 12.6601 36.9766 L 12.8242 34.2110 L 12.8242 30.4610 C 12.8242 29.4297 12.0508 28.9141 11.2774 28.9141 C 10.5274 28.9141 9.7774 29.4063 9.7774 30.3906 L 9.7774 40.1406 C 9.7774 41.4063 10.4805 42.1094 11.7226 42.1094 Z M 18.3789 53.2890 L 37.6445 53.2890 C 41.4648 53.2890 43.9023 50.8047 43.9023 47.2891 L 43.9023 29.7110 L 40.3867 29.7110 L 40.3867 46.7969 C 40.3867 48.7188 39.2617 49.8672 37.1758 49.8672 L 18.8477 49.8672 C 16.7617 49.8672 15.6601 48.7188 15.6601 46.7969 L 15.6601 44.9688 L 12.1211 44.9688 L 12.1211 47.2891 C 12.1211 50.8047 14.5586 53.2890 18.3789 53.2890 Z"
  }));
}

export default RectangleArrowUpRightArrowDownLeft;