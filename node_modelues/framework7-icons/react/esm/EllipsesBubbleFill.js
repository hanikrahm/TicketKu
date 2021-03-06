function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function EllipsesBubbleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 16.0938 52.3164 C 17.0313 52.3164 17.6876 51.8476 18.7891 50.8164 L 27.2735 43.0820 L 43.0938 43.1055 C 50.0783 43.1289 53.8280 39.2383 53.8280 32.3711 L 53.8280 14.4180 C 53.8280 7.5508 50.0783 3.6836 43.0938 3.6836 L 12.9064 3.6836 C 5.9454 3.6836 2.1720 7.5273 2.1720 14.4180 L 2.1720 32.3711 C 2.1720 39.2617 5.9454 43.1055 12.9064 43.0820 L 14.0079 43.0820 L 14.0079 49.9024 C 14.0079 51.3555 14.7813 52.3164 16.0938 52.3164 Z M 19.9376 24.3555 C 19.9376 26.2070 18.2969 27.8242 16.4220 27.8242 C 14.5469 27.8242 12.9532 26.2070 12.9532 24.3555 C 12.9532 22.4805 14.5001 20.8398 16.4220 20.8398 C 18.2969 20.8398 19.9376 22.5039 19.9376 24.3555 Z M 31.6564 24.3555 C 31.6564 26.2070 30.0391 27.8242 28.1642 27.8242 C 26.3126 27.8242 24.6954 26.2070 24.6954 24.3555 C 24.6954 22.4805 26.2657 20.8398 28.1642 20.8398 C 30.0391 20.8398 31.6564 22.5039 31.6564 24.3555 Z M 43.3751 24.3555 C 43.3751 26.2070 41.8048 27.8242 39.9064 27.8242 C 38.0313 27.8242 36.4142 26.2070 36.4142 24.3555 C 36.4142 22.4805 38.0079 20.8398 39.9064 20.8398 C 41.8048 20.8398 43.3751 22.5039 43.3751 24.3555 Z"
  }));
}

export default EllipsesBubbleFill;