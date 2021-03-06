function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function CheckmarkAltCircleFill(props) {
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
    d: "M24,48 C10.745166,48 0,37.254834 0,24 C0,10.745166 10.745166,0 24,0 C37.254834,0 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 Z M34.7878169,15.9306741 C34.1183467,15.2612039 33.0329211,15.2612039 32.3634508,15.9306741 L21.4285714,26.8655535 C20.7591012,27.5350237 19.6736755,27.5350237 19.0042053,26.8655535 L15.7836116,23.6449598 C15.1141414,22.9754896 14.0287157,22.9754896 13.3592455,23.6449598 C12.6897753,24.31443 12.6897753,25.3998557 13.3592455,26.0693259 L19.0042053,31.7142857 C19.6736755,32.3837559 20.7591012,32.3837559 21.4285714,31.7142857 L34.7878169,18.3550402 C35.4572872,17.68557 35.4572872,16.6001443 34.7878169,15.9306741 Z",
    transform: "translate(4 4)"
  }));
}

export default CheckmarkAltCircleFill;