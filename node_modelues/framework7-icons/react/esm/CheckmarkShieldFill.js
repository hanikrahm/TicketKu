function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function CheckmarkShieldFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9883 51.2969 C 28.3633 51.2969 28.9492 51.1562 29.5586 50.8516 C 42.6602 43.4688 47.1836 40.3750 47.1836 31.9609 L 47.1836 14.2891 C 47.1836 11.8750 46.1289 11.1016 44.1836 10.2813 C 41.4414 9.1562 32.6524 5.9922 29.9336 5.0313 C 29.3008 4.8438 28.6680 4.7031 27.9883 4.7031 C 27.3320 4.7031 26.6992 4.8438 26.0664 5.0313 C 23.3476 6.0156 14.5586 9.1797 11.8164 10.2813 C 9.8711 11.0781 8.8164 11.8750 8.8164 14.2891 L 8.8164 31.9609 C 8.8164 40.3750 13.3633 43.4453 26.4414 50.8516 C 27.0508 51.1562 27.6133 51.2969 27.9883 51.2969 Z M 24.8008 39.3906 C 24.0039 39.3906 23.3711 39.0391 22.7148 38.2422 L 15.9649 29.8984 C 15.6133 29.4531 15.4024 28.8906 15.4024 28.375 C 15.4024 27.2734 16.2461 26.4297 17.3008 26.4297 C 17.9570 26.4297 18.5429 26.6875 19.1055 27.4141 L 24.7070 34.6562 L 35.5820 17.1953 C 36.0508 16.4687 36.6602 16.1172 37.2695 16.1172 C 38.3008 16.1172 39.2851 16.7969 39.2851 17.9219 C 39.2851 18.4375 39.0039 19.0000 38.6992 19.4687 L 26.7695 38.2422 C 26.2773 39.0156 25.5976 39.3906 24.8008 39.3906 Z"
  }));
}

export default CheckmarkShieldFill;