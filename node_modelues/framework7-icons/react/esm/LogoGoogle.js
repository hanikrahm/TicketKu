function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function LogoGoogle(props) {
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
    d: "M23.4582031,7.10542736e-15 C29.6251538,7.10542736e-15 34.8038768,2.19927918 38.8255149,5.80380981 L39.1490547,6.09913281 L32.5286484,12.5632109 C30.834375,10.9731563 27.8630625,9.07044531 23.4582031,9.07044531 C17.2548516,9.07044531 11.9898281,13.1626484 10.0869375,18.8186719 C9.61777344,20.2782734 9.33117187,21.8420938 9.33117187,23.4582031 C9.33117187,25.0741328 9.61777344,26.6381328 10.1129922,28.0977344 C11.9898281,33.7537578 17.2548516,37.8457813 23.4582031,37.8457813 C26.8052646,37.8457813 29.3864428,36.9600894 31.3391695,35.6704289 L31.5903203,35.4999609 L31.8973892,35.2775472 C34.7102401,33.1699305 36.0411434,30.1941064 36.3562806,28.1090297 L36.3861797,27.8891172 L23.4582031,27.8891172 L23.4582031,19.1836172 L45.4828594,19.1836172 C45.8215703,20.6432188 45.9780781,22.0507109 45.9780781,23.9794766 C45.9780781,31.1211563 43.4236406,37.142125 38.9927266,41.2343281 C35.1089609,44.8311328 29.7918281,46.9164063 23.4582031,46.9164063 C14.4267163,46.9164063 6.60760014,41.8144553 2.68593761,34.3456838 L2.50214844,33.98825 L2.27965831,33.5313354 C0.8274589,30.4677758 -8.61533067e-14,27.0576004 -8.61533067e-14,23.4582031 C-8.61533067e-14,19.8588058 0.8274589,16.4484674 2.27965831,13.3848924 L2.50214844,12.9279766 L2.68593761,12.5705429 C6.60760014,5.10177686 14.4267163,7.10542736e-15 23.4582031,7.10542736e-15 Z",
    transform: "translate(5 5)"
  }));
}

export default LogoGoogle;