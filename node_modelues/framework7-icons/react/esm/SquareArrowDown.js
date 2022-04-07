function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function SquareArrowDown(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 28.0117 37.8906 C 28.4805 37.8906 28.9023 37.7266 29.3711 37.2578 L 37.2930 29.6172 C 37.6445 29.2656 37.8320 28.8906 37.8320 28.3750 C 37.8320 27.4141 37.1055 26.7344 36.1211 26.7344 C 35.6758 26.7344 35.1836 26.9219 34.8555 27.2969 L 31.3164 31.0703 L 29.7226 32.7344 L 29.8633 29.2422 L 29.8633 4.5156 C 29.8633 3.5313 29.0195 2.7109 28.0117 2.7109 C 27.0039 2.7109 26.1367 3.5313 26.1367 4.5156 L 26.1367 29.2422 L 26.3008 32.7344 L 24.7070 31.0703 L 21.1445 27.2969 C 20.8164 26.9219 20.3242 26.7344 19.8555 26.7344 C 18.8711 26.7344 18.1679 27.4141 18.1679 28.3750 C 18.1679 28.8906 18.3789 29.2656 18.7305 29.6172 L 26.6523 37.2578 C 27.1211 37.7266 27.5195 37.8906 28.0117 37.8906 Z M 14.5586 53.2891 L 41.4414 53.2891 C 46.3633 53.2891 48.8008 50.8516 48.8008 46.0234 L 48.8008 21.8360 C 48.8008 17.0078 46.3633 14.5703 41.4414 14.5703 L 34.6914 14.5703 L 34.6914 18.3438 L 41.3945 18.3438 C 43.6914 18.3438 45.0274 19.6094 45.0274 22.0469 L 45.0274 45.8359 C 45.0274 48.2734 43.6914 49.5156 41.3945 49.5156 L 14.6289 49.5156 C 12.2852 49.5156 10.9726 48.2734 10.9726 45.8359 L 10.9726 22.0469 C 10.9726 19.6094 12.2852 18.3438 14.6289 18.3438 L 21.3320 18.3438 L 21.3320 14.5703 L 14.5586 14.5703 C 9.6836 14.5703 7.1992 17.0078 7.1992 21.8360 L 7.1992 46.0234 C 7.1992 50.8750 9.6836 53.2891 14.5586 53.2891 Z"
  }));
}

export default SquareArrowDown;