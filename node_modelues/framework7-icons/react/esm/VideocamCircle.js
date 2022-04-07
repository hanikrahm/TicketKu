function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function VideocamCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M24,0 C37.254834,0 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 C10.745166,48 0,37.254834 0,24 C0,10.745166 10.745166,0 24,0 Z M24,4 C12.954305,4 4,12.954305 4,24 C4,35.045695 12.954305,44 24,44 C35.045695,44 44,35.045695 44,24 C44,12.954305 35.045695,4 24,4 Z M26.7693683,14 L26.9771819,14.0049461 C29.1806455,14.1100632 30.948463,15.8778807 31.0535801,18.0813443 L31.0585262,18.2891579 L31.0585262,29.318421 L31.0535801,29.5262345 C30.948463,31.7296981 29.1806455,33.4975157 26.9771819,33.6026327 L26.7693683,33.6075788 L13.2891579,33.6075788 L13.0813443,33.6026327 C10.8778807,33.4975157 9.11006316,31.7296981 9.00494609,29.5262345 L9,29.318421 L9,18.2891579 L9.00494609,18.0813443 C9.11006316,15.8778807 10.8778807,14.1100632 13.0813443,14.0049461 L13.2891579,14 L26.7693683,14 Z M37.0086053,15.8332854 L37.1663563,15.8394421 C38.1032041,15.9128617 38.8579005,16.6346028 38.9820681,17.5562881 L38.9968476,17.7116768 L39,17.8246801 L39,29.8707838 L38.9923015,30.045754 C38.9565077,30.4516446 38.7968303,30.8383726 38.5327903,31.1523895 C37.8890607,31.9179627 36.7917481,32.0771051 35.9651081,31.5672001 L35.8221877,31.470259 L35.7269996,31.3949688 L32.2839999,28.4998045 L32.2839999,19.2407382 L35.7152708,16.3104348 L35.8590296,16.1985982 C36.1061477,16.0238886 36.3894046,15.9081409 36.6868844,15.8594406 L36.8669037,15.8383308 L37.0086053,15.8332854 Z",
    transform: "translate(4 4)"
  }));
}

export default VideocamCircle;