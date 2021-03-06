function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function DevicePhoneLandscape(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M48,0 C50.209139,0 52,1.790861 52,4 L52,24 C52,26.209139 50.209139,28 48,28 L4,28 C1.790861,28 0,26.209139 0,24 L0,4 C0,1.790861 1.790861,0 4,0 L48,0 Z M47,4 L8,4 C7.44771525,4 7,4.44771525 7,5 L7,23 C7,23.5522847 7.44771525,24 8,24 L47,24 C47.5522847,24 48,23.5522847 48,23 L48,5 C48,4.44771525 47.5522847,4 47,4 Z M31,20 C31.5522847,20 32,20.4477153 32,21 C32,21.5522847 31.5522847,22 31,22 L21,22 C20.4477153,22 20,21.5522847 20,21 C20,20.4477153 20.4477153,20 21,20 L31,20 Z M3.5,17 C3.22385763,17 3,17.2238576 3,17.5 C3,17.7761424 3.22385763,18 3.5,18 C3.77614237,18 4,17.7761424 4,17.5 C4,17.2238576 3.77614237,17 3.5,17 Z M3.5,10 C3.22385763,10 3,10.2238576 3,10.5 L3,15.5 C3,15.7761424 3.22385763,16 3.5,16 C3.77614237,16 4,15.7761424 4,15.5 L4,10.5 C4,10.2238576 3.77614237,10 3.5,10 Z",
    transform: "translate(2 14)"
  }));
}

export default DevicePhoneLandscape;