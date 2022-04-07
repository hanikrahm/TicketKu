function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowUpArrowDownSquare(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 13.8554 45.8008 C 11.5117 45.8008 10.1992 44.5586 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4414 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4414 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 44.5586 44.4882 45.8008 42.1679 45.8008 Z M 20.8398 38.7696 C 21.7539 38.7696 22.4101 38.1133 22.4101 37.1758 L 22.4101 25.0352 L 22.2695 21.4258 L 24.4726 24.0508 L 26.2304 26.0898 C 26.4648 26.3945 26.8866 26.5586 27.3554 26.5586 C 28.2226 26.5586 28.9023 25.8789 28.9023 25.0118 C 28.9023 24.5664 28.7382 24.1914 28.4570 23.9102 L 22.1992 17.3242 C 21.8007 16.9023 21.3085 16.6914 20.8398 16.6914 C 20.3710 16.6914 19.9257 16.8789 19.5039 17.3242 L 13.1992 23.9102 C 12.9179 24.1914 12.7773 24.5664 12.7773 25.0118 C 12.7773 25.8789 13.4570 26.5586 14.3241 26.5586 C 14.7695 26.5586 15.1679 26.3945 15.4492 26.0898 L 17.2304 24.0508 L 19.3866 21.4727 L 19.2460 25.0352 L 19.2460 37.1758 C 19.2460 38.1133 19.9023 38.7696 20.8398 38.7696 Z M 35.1835 38.7696 C 35.6757 38.7696 36.1679 38.5820 36.5663 38.1367 L 42.8241 31.5742 C 43.1054 31.2930 43.2695 30.8945 43.2695 30.4727 C 43.2695 29.5820 42.5663 28.9258 41.6992 28.9258 C 41.2539 28.9258 40.8320 29.0664 40.5742 29.3945 L 38.8398 31.4102 L 36.6132 34.0352 L 36.7773 30.4258 L 36.7773 18.2852 C 36.7773 17.3711 36.1210 16.6914 35.1835 16.6914 C 34.2695 16.6914 33.5898 17.3711 33.5898 18.2852 L 33.5898 30.4258 L 33.7539 34.0118 L 31.5976 31.4102 L 29.7929 29.3945 C 29.5351 29.0664 29.1366 28.9258 28.6679 28.9258 C 27.8007 28.9258 27.1444 29.5820 27.1444 30.4727 C 27.1444 30.8945 27.2851 31.2930 27.5663 31.5742 L 33.8476 38.1367 C 34.2695 38.6055 34.7382 38.7696 35.1835 38.7696 Z"
  }));
}

export default ArrowUpArrowDownSquare;