function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function TextBubbleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 16.0938 52.3164 C 17.0313 52.3164 17.6876 51.8476 18.7891 50.8164 L 27.2735 43.0820 L 43.0938 43.1055 C 50.0783 43.1289 53.8280 39.2383 53.8280 32.3711 L 53.8280 14.4180 C 53.8280 7.5508 50.0783 3.6836 43.0938 3.6836 L 12.9064 3.6836 C 5.9454 3.6836 2.1720 7.5273 2.1720 14.4180 L 2.1720 32.3711 C 2.1720 39.2617 5.9454 43.1055 12.9064 43.0820 L 14.0079 43.0820 L 14.0079 49.9024 C 14.0079 51.3555 14.7813 52.3164 16.0938 52.3164 Z M 14.8985 16.8086 C 14.0548 16.8086 13.3985 16.1524 13.3985 15.2851 C 13.3985 14.5117 14.0548 13.8320 14.8985 13.8320 L 41.1251 13.8320 C 41.9454 13.8320 42.6251 14.5117 42.6251 15.2851 C 42.6251 16.1524 41.9454 16.8086 41.1251 16.8086 Z M 14.8985 25.1992 C 14.0548 25.1992 13.3985 24.5429 13.3985 23.6992 C 13.3985 22.9024 14.0548 22.2227 14.8985 22.2227 L 41.1251 22.2227 C 41.9454 22.2227 42.6251 22.9024 42.6251 23.6992 C 42.6251 24.5429 41.9454 25.1992 41.1251 25.1992 Z M 14.8985 33.6133 C 14.0548 33.6133 13.3985 32.9336 13.3985 32.1133 C 13.3985 31.2461 14.0548 30.6133 14.8985 30.6133 L 31.9610 30.6133 C 32.7579 30.6133 33.4376 31.2461 33.4376 32.1133 C 33.4376 32.9336 32.7579 33.6133 31.9610 33.6133 Z"
  }));
}

export default TextBubbleFill;