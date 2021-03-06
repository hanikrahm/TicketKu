function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function DocCheckmarkFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M18.4216864,0.875 L18.4216864,18.0781 C18.4216864,21.0781 19.8279864,22.5078 22.8279864,22.5078 L22.8279864,22.5078 L39.7966864,22.5078 L39.7966864,43.789 C39.7966864,48.664 37.3826864,51.125 32.5310864,51.125 L32.5310864,51.125 L7.64048644,51.125 C2.81238644,51.125 0.374886438,48.6875 0.374886438,43.789 L0.374886438,43.789 L0.374886438,8.2344 C0.374886438,3.3594 2.81238644,0.875 7.64048644,0.875 L7.64048644,0.875 L18.4216864,0.875 Z M30.5857864,27.7820561 C29.8047379,27.0010076 28.5384079,27.0010076 27.7573593,27.7820561 L27.7573593,27.7820561 L17,38.5394155 L15.5206741,39.8317257 L14.1715729,38.5394155 L10.4142136,34.7820561 C9.63316498,34.0010076 8.36683502,34.0010076 7.58578644,34.7820561 C6.80473785,35.5631047 6.80473785,36.8294347 7.58578644,37.6104833 L7.58578644,37.6104833 L14.1715729,44.1962697 C14.9526215,44.9773183 16.2189514,44.9773183 17,44.1962697 L17,44.1962697 L30.5857864,30.6104833 C31.366835,29.8294347 31.366835,28.5631047 30.5857864,27.7820561 Z M21.6091864,1.1328 C22.5935864,1.2969 23.5779864,1.9766 24.6560864,3.1015 L24.6560864,3.1015 L37.5935864,16.25 C38.6951864,17.3984 39.3748864,18.3359 39.5388864,19.2969 L39.5388864,19.2969 L22.8982864,19.2969 C22.0544864,19.2969 21.6091864,18.875 21.6091864,18.0313 L21.6091864,18.0313 Z",
    transform: "translate(8 2)"
  }));
}

export default DocCheckmarkFill;