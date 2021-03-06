function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function LogoGoogleplus(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M17.8571429,0 C22.5230415,0 26.4483213,1.61550468 29.517381,4.30272566 L29.8214286,4.575 L24.9744898,9.15 C23.6479592,7.9 21.3265306,6.45 17.8571429,6.45 C11.7602041,6.45 6.78571429,11.4 6.78571429,17.5 C6.78571429,23.6 11.7602041,28.55 17.8571429,28.55 C23.8269704,28.55 26.6469021,24.9991751 27.624424,22.3445166 L27.7350012,22.0242377 C27.7519257,21.9717052 27.768105,21.9196216 27.7835504,21.8680245 L27.8675032,21.5645844 C27.9051645,21.4160867 27.9364197,21.272649 27.9615689,21.1352922 L27.9846939,21 L17.8571429,21 L17.8571429,15 L34.7193878,15 C34.872449,15.875 35,16.75 35,17.9 C35,27.9 28.1632653,35 17.8571429,35 C7.98469388,35 -7.10542736e-15,27.175 -7.10542736e-15,17.5 C-7.10542736e-15,7.825 7.98469388,0 17.8571429,0 Z M50.75,10.5 L50.75,15.75 L56,15.75 L56,21 L50.75,21 L50.75,26.25 L45.5,26.25 L45.5,21 L40.25,21 L40.25,15.75 L45.5,15.75 L45.5,10.5 L50.75,10.5 Z",
    transform: "translate(0 10)"
  }));
}

export default LogoGoogleplus;