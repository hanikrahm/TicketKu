function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function CartBadgeMinus(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 45.4157 28.8504 C 51.2174 28.8504 56 24.1092 56 18.2867 C 56 12.5058 51.2174 7.7230 45.4157 7.7230 C 39.6349 7.7230 34.8519 12.5058 34.8519 18.2867 C 34.8519 24.1092 39.6349 28.8504 45.4157 28.8504 Z M 16.9061 41.8263 L 41.1736 41.8263 C 41.9844 41.8263 42.6914 41.1609 42.6914 40.2668 C 42.6914 39.3726 41.9844 38.7071 41.1736 38.7071 L 17.2596 38.7071 C 16.0743 38.7071 15.3465 37.8753 15.1593 36.6069 L 14.8474 34.4234 L 41.2153 34.4234 C 43.3779 34.4234 44.7709 33.5084 45.5614 31.7201 C 43.7727 31.7201 42.0883 31.3666 40.5288 30.6804 C 40.2171 31.0963 39.8218 31.2834 39.2397 31.2834 L 14.3691 31.3042 L 12.6016 19.2433 L 32.0654 19.2433 C 31.9615 18.2867 32.0238 17.0390 32.1694 16.1033 L 12.1441 16.1033 L 11.7698 13.4624 C 11.5411 11.8611 10.9796 11.0502 8.8586 11.0502 L 1.5388 11.0502 C .7070 11.0502 0 11.7780 0 12.6098 C 0 13.4624 .7070 14.1902 1.5388 14.1902 L 8.5674 14.1902 L 11.8946 37.0228 C 12.3312 39.9756 13.8909 41.8263 16.9061 41.8263 Z M 40.0923 19.5760 C 39.3853 19.5760 38.8027 18.9730 38.8027 18.2867 C 38.8027 17.6213 39.3853 17.0182 40.0923 17.0182 L 50.7805 17.0182 C 51.4670 17.0182 52.0492 17.6213 52.0492 18.2867 C 52.0492 18.9730 51.4670 19.5760 50.7805 19.5760 Z M 18.5489 51.9326 C 20.4204 51.9326 21.9176 50.4561 21.9176 48.5638 C 21.9176 46.6923 20.4204 45.1951 18.5489 45.1951 C 16.6565 45.1951 15.1801 46.6923 15.1801 48.5638 C 15.1801 50.4561 16.6565 51.9326 18.5489 51.9326 Z M 38.0127 51.9326 C 39.8844 51.9326 41.3814 50.4561 41.3814 48.5638 C 41.3814 46.6923 39.8844 45.1951 38.0127 45.1951 C 36.1204 45.1951 34.6024 46.6923 34.6024 48.5638 C 34.6024 50.4561 36.1204 51.9326 38.0127 51.9326 Z"
  }));
}

export default CartBadgeMinus;