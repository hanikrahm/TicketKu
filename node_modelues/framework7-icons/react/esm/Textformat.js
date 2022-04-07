function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Textformat(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 3.5430 45.2969 C 4.7149 45.2969 5.3008 44.8281 5.7696 43.5391 L 8.7696 35.2422 L 22.5977 35.2422 L 25.6211 43.5391 C 26.0665 44.8281 26.6758 45.2969 27.8477 45.2969 C 29.1133 45.2969 29.9336 44.5703 29.9336 43.3750 C 29.9336 42.9766 29.8633 42.6250 29.6758 42.1094 L 18.6836 12.8594 C 18.1446 11.4062 17.1836 10.7031 15.6836 10.7031 C 14.2305 10.7031 13.2696 11.4062 12.7540 12.8359 L 1.7383 42.1328 C 1.5508 42.6484 1.4805 43.0000 1.4805 43.3984 C 1.4805 44.5937 2.2540 45.2969 3.5430 45.2969 Z M 9.9180 31.6562 L 15.6133 15.8828 L 15.7540 15.8828 L 21.4258 31.6562 Z M 42.2852 45.2734 C 45.8478 45.2734 49.1992 43.3281 50.6291 40.3281 L 50.6992 40.3281 L 50.6992 43.3750 C 50.6992 44.5234 51.5195 45.2969 52.6211 45.2969 C 53.7462 45.2969 54.5195 44.5234 54.5195 43.2812 L 54.5195 27.7656 C 54.5195 22.7031 50.8163 19.4453 44.9104 19.4453 C 40.5274 19.4453 36.8946 21.3672 35.5352 24.3437 C 35.2774 24.9297 35.1133 25.4922 35.1133 25.9844 C 35.1133 27.0156 35.8633 27.6719 36.8711 27.6719 C 37.6211 27.6719 38.1602 27.4140 38.5352 26.7578 C 39.8008 24.0625 41.7930 22.8203 44.8163 22.8203 C 48.4259 22.8203 50.5585 24.8359 50.5585 28.0937 L 50.5585 30.0625 L 43.0821 30.4844 C 37.1992 30.8125 33.9180 33.5313 33.9180 37.8437 C 33.9180 42.3203 37.3399 45.2734 42.2852 45.2734 Z M 43.2227 42.0156 C 40.0821 42.0156 37.9727 40.3047 37.9727 37.7734 C 37.9727 35.3125 39.9414 33.6719 43.5740 33.4375 L 50.5585 32.9922 L 50.5585 35.4297 C 50.5585 39.1328 47.3008 42.0156 43.2227 42.0156 Z"
  }));
}

export default Textformat;