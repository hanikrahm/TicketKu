function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function EnvelopeOpen(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 9.4843 54.8476 L 46.5157 54.8476 C 51.4141 54.8476 53.8751 52.4102 53.8751 47.5820 L 53.8751 24.2617 C 53.8751 20.8867 53.1719 19.3867 50.9452 17.6289 L 32.8515 3.3789 C 31.1405 2.0195 29.7343 1.1524 27.9999 1.1524 C 26.2890 1.1524 24.8593 2.0195 23.1718 3.3789 L 5.0780 17.6289 C 2.8515 19.3867 2.1249 20.8867 2.1249 24.2617 L 2.1249 47.5820 C 2.1249 52.4336 4.6093 54.8476 9.4843 54.8476 Z M 32.9218 32.3711 C 31.2812 30.7305 29.6874 30.0742 28.0468 30.0742 C 26.3827 30.0742 24.8124 30.7305 23.1718 32.3711 L 21.6484 33.8711 L 7.6093 19.9961 L 25.1874 6.2852 C 26.3358 5.3945 26.9921 4.9024 27.9999 4.9024 C 29.0312 4.9024 29.6640 5.3945 30.8124 6.2852 L 48.4376 20.0430 L 34.4452 33.8711 Z M 5.7109 47.5820 L 5.7109 23.6289 C 5.7109 23.3945 5.7343 23.1836 5.7343 22.9961 L 19.1874 36.2852 L 5.9921 49.2461 C 5.8046 48.7774 5.7109 48.2149 5.7109 47.5820 Z M 50.2890 23.6289 L 50.2890 47.5820 C 50.2890 48.1914 50.2184 48.7305 50.0548 49.1992 L 36.9062 36.2852 L 50.2655 23.0664 C 50.2890 23.2305 50.2890 23.4180 50.2890 23.6289 Z M 9.3671 51.2617 C 9.2031 51.2617 9.0390 51.2617 8.8749 51.2383 L 25.2109 35.1367 C 26.2187 34.1289 27.1093 33.6836 28.0468 33.6836 C 28.9843 33.6836 29.8749 34.1289 30.8827 35.1367 L 47.2184 51.2383 C 47.0312 51.2617 46.8436 51.2617 46.6564 51.2617 Z"
  }));
}

export default EnvelopeOpen;