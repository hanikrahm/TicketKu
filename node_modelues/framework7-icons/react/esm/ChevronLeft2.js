function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ChevronLeft2(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 25.3282 47.7226 C 25.7267 48.1211 26.2423 48.3555 26.8516 48.3555 C 28.0704 48.3555 28.9845 47.4414 28.9845 46.2226 C 28.9845 45.6367 28.7501 45.0976 28.3751 44.6992 L 11.3126 28.0117 L 28.3751 11.3242 C 28.7501 10.9258 28.9845 10.3633 28.9845 9.8007 C 28.9845 8.5820 28.0704 7.6445 26.8516 7.6445 C 26.2423 7.6445 25.7267 7.8789 25.3282 8.2773 L 6.7657 26.4414 C 6.3204 26.8164 6.0626 27.4023 6.0626 28.0117 C 6.0626 28.5976 6.3204 29.1367 6.7657 29.5820 Z M 46.2579 47.7226 C 46.6798 48.1211 47.1954 48.3555 47.7813 48.3555 C 49.0000 48.3555 49.9374 47.4414 49.9374 46.2226 C 49.9374 45.6367 49.7032 45.0976 49.3283 44.6992 L 32.2657 28.0117 L 49.3283 11.3242 C 49.7032 10.9258 49.9374 10.3633 49.9374 9.8007 C 49.9374 8.5820 49.0000 7.6445 47.7813 7.6445 C 47.1954 7.6445 46.6798 7.8789 46.2813 8.2773 L 27.6954 26.4414 C 27.2501 26.8164 27.0157 27.4023 27.0157 28.0117 C 27.0157 28.5976 27.2501 29.1367 27.6954 29.5820 Z"
  }));
}

export default ChevronLeft2;