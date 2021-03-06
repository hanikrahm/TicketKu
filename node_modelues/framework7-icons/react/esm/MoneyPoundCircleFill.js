function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function MoneyPoundCircleFill(props) {
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
    d: "M24,48 C10.745166,48 0,37.254834 0,24 C0,10.745166 10.745166,0 24,0 C37.254834,0 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 Z M20.5019531,32.7053571 L20.5019531,32.6258371 C22.171875,31.8783482 23.1897321,29.922154 23.1897321,27.4252232 C23.1897321,26.6936384 23.1102121,26.0415737 22.9988839,25.437221 L29.9807478,25.437221 L29.9807478,23.1470424 L22.4422433,23.1470424 C22.2195871,22.2564174 22.0287388,21.3180804 22.0287388,20.1570871 C22.0287388,17.5647321 23.921317,15.8311942 27.0703125,15.8311942 C28.9151786,15.8311942 30.4896763,16.1492746 31.4757254,16.578683 L31.4757254,13.6523438 C30.6328125,13.2547433 28.7561384,12.8571429 26.640904,12.8571429 C21.6311384,12.8571429 18.4662388,15.688058 18.4662388,20.125279 C18.4662388,21.1272321 18.6570871,22.1450893 18.8797433,23.1470424 L15.4285714,23.1470424 L15.4285714,25.437221 L19.4363839,25.437221 C19.6113281,26.2006138 19.7385603,26.9162946 19.7385603,27.5683594 C19.7385603,30.1289063 18.3390067,32.3872768 15.4762835,32.8166853 L15.4762835,35.6476004 L32.5890067,35.6476004 L32.5890067,32.7053571 L20.5019531,32.7053571 Z",
    transform: "translate(4 4)"
  }));
}

export default MoneyPoundCircleFill;