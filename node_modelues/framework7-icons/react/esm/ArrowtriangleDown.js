function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowtriangleDown(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 46.6445 11.7109 C 46.6445 9.9766 45.3320 8.8984 43.2695 8.8984 L 12.7305 8.8750 C 10.6914 8.8750 9.3555 9.9531 9.3555 11.6875 C 9.3555 12.6250 9.7773 13.3984 10.2695 14.3828 L 24.8711 44.5000 C 25.8554 46.4922 26.7695 47.1250 28.0117 47.1250 C 29.2305 47.1250 30.1445 46.4922 31.1289 44.5000 L 45.7305 14.3828 C 46.2227 13.4219 46.6445 12.6484 46.6445 11.7109 Z M 42.1680 12.9062 C 42.1680 13.0000 42.1211 13.0937 42.0742 13.2109 L 28.2695 41.8750 C 28.1992 41.9922 28.1289 42.0859 28.0117 42.0859 C 27.8711 42.0859 27.8008 41.9922 27.7305 41.8750 L 13.9258 13.1875 C 13.8789 13.0703 13.8320 12.9766 13.8320 12.8828 C 13.8320 12.7422 13.9258 12.6484 14.0898 12.6484 L 41.9102 12.6719 C 42.0742 12.6719 42.1680 12.7656 42.1680 12.9062 Z"
  }));
}

export default ArrowtriangleDown;