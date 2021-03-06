function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function View2d(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 2.0241 44.9686 L 21.3578 44.9686 C 22.5443 44.9686 23.2888 44.2241 23.2888 43.0841 C 23.2888 41.9674 22.5443 41.2229 21.3578 41.2229 L 5.8629 41.2229 L 5.8629 41.1065 L 14.9597 32.2656 C 20.4969 26.8913 22.1255 24.0994 22.1255 20.5165 C 22.1255 15.1888 17.4026 11.1172 11.0977 11.1172 C 6.1421 11.1172 1.9078 13.7928 .4886 17.8875 C .2094 18.6786 .1 19.3300 .1 19.9117 C .1 21.0749 .7910 21.8427 1.9310 21.8427 C 3.0245 21.8427 3.4898 21.3308 3.8388 20.1676 C 4.0250 19.4463 4.2809 18.7949 4.6531 18.1900 C 5.8862 16.1194 8.1895 14.7932 11.0977 14.7932 C 14.8667 14.7932 17.8679 17.4455 17.8679 20.7492 C 17.8679 23.4247 16.7745 25.2394 12.1679 29.7762 L 1.2796 40.5947 C .3025 41.5718 0 42.1535 0 43.0143 C 0 44.2241 .7910 44.9686 2.0241 44.9686 Z M 30.0125 44.9221 L 39.5514 44.9221 C 49.9745 44.9221 56 38.7102 56 28.2174 C 56 17.7247 49.9745 11.6524 39.5514 11.6524 L 30.0125 11.6524 C 28.7329 11.6524 27.9187 12.4899 27.9187 13.7928 L 27.9187 42.7584 C 27.9187 44.0845 28.7329 44.9221 30.0125 44.9221 Z M 32.1297 41.1065 L 32.1297 15.4214 L 39.2489 15.4214 C 47.2523 15.4214 51.6960 20.0745 51.6960 28.2407 C 51.6960 36.4534 47.2523 41.1065 39.2489 41.1065 Z"
  }));
}

export default View2d;