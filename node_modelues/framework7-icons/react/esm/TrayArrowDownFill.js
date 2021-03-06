function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function TrayArrowDownFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 28.0117 34.6093 C 28.4804 34.6093 28.8788 34.4452 29.3710 33.9764 L 37.2695 26.3358 C 37.6210 25.9843 37.8319 25.6093 37.8319 25.0936 C 37.8319 24.1561 37.1054 23.4530 36.1210 23.4530 C 35.6757 23.4530 35.1835 23.6405 34.8554 24.0155 L 31.2929 27.8124 L 29.7226 29.4530 L 29.8632 25.9608 L 29.8632 2.7342 C 29.8632 1.7497 29.0195 .9064 28.0117 .9064 C 27.0039 .9064 26.1366 1.7497 26.1366 2.7342 L 26.1366 25.9608 L 26.2773 29.4764 L 24.7070 27.8124 L 21.1444 24.0155 C 20.8163 23.6405 20.3007 23.4530 19.8554 23.4530 C 18.8710 23.4530 18.1679 24.1561 18.1679 25.0936 C 18.1679 25.6093 18.3788 25.9843 18.7304 26.3358 L 26.6523 33.9764 C 27.1210 34.4452 27.5195 34.6093 28.0117 34.6093 Z M 7.7148 55.0936 L 48.2852 55.0936 C 53.1836 55.0936 55.6446 52.6561 55.6446 47.8280 L 55.6446 34.8905 C 55.6446 32.7812 55.3398 31.7733 54.3088 30.4374 L 46.4334 20.3827 C 43.5976 16.7499 42.4724 16.0233 38.3241 16.0233 L 34.1757 16.0233 L 34.1757 19.3046 L 38.5819 19.3046 C 40.2929 19.3046 41.4179 19.6093 42.7537 21.3202 L 50.8398 31.8202 C 51.7537 33.0155 51.4489 33.4843 50.1601 33.4843 L 35.6992 33.4843 C 34.4101 33.4843 33.7773 34.4686 33.7773 35.5233 L 33.7773 35.5936 C 33.7773 38.4764 31.5273 41.5233 27.9882 41.5233 C 24.4726 41.5233 22.2226 38.4764 22.2226 35.5936 L 22.2226 35.5233 C 22.2226 34.4686 21.5898 33.4843 20.3007 33.4843 L 5.8632 33.4843 C 4.5273 33.4843 4.3163 32.9217 5.1601 31.8202 L 13.1992 21.3905 C 14.5819 19.6327 15.7070 19.3046 17.4179 19.3046 L 21.8476 19.3046 L 21.8476 16.0233 L 17.6757 16.0233 C 13.5273 16.0233 12.4257 16.7499 9.5195 20.4530 L 1.6913 30.4374 C .6601 31.7733 .3554 32.7812 .3554 34.8905 L .3554 47.8280 C .3554 52.6796 2.8398 55.0936 7.7148 55.0936 Z"
  }));
}

export default TrayArrowDownFill;