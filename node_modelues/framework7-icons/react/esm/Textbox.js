function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Textbox(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 2.9629 21.9230 C 4.1254 21.9230 4.8091 21.2392 4.8091 20.0540 L 4.8091 14.6523 C 4.8091 12.2820 6.0627 11.0740 8.3419 11.0740 L 47.6810 11.0740 C 49.9375 11.0740 51.2136 12.2820 51.2136 14.6523 L 51.2136 20.0540 C 51.2136 21.2392 51.8975 21.9230 53.0598 21.9230 C 54.2449 21.9230 54.8830 21.2392 54.8830 20.0540 L 54.8830 14.4700 C 54.8830 9.7748 52.5127 7.4044 47.7263 7.4044 L 8.2963 7.4044 C 3.5327 7.4044 1.1396 9.7520 1.1396 14.4700 L 1.1396 20.0540 C 1.1396 21.2392 1.8006 21.9230 2.9629 21.9230 Z M 27.9658 38.2648 C 29.1509 38.2648 29.8119 37.4671 29.8119 36.2135 L 29.8119 21.4443 L 35.4643 21.4443 C 36.3532 21.4443 36.9914 20.8517 36.9914 19.9400 C 36.9914 19.0056 36.3532 18.4586 35.4643 18.4586 L 20.5584 18.4586 C 19.6923 18.4586 19.0313 19.0056 19.0313 19.9400 C 19.0313 20.8517 19.6923 21.4443 20.5584 21.4443 L 26.1652 21.4443 L 26.1652 36.2135 C 26.1652 37.4215 26.8034 38.2648 27.9658 38.2648 Z M 2.9629 30.7663 C 4.6040 30.7663 5.9259 29.4215 5.9259 27.7805 C 5.9259 26.1623 4.6040 24.8404 2.9629 24.8404 C 1.3447 24.8404 0 26.1623 0 27.7805 C 0 29.4215 1.3447 30.7663 2.9629 30.7663 Z M 53.0598 30.7663 C 54.6781 30.7663 56 29.4215 56 27.7805 C 56 26.1623 54.6781 24.8404 53.0598 24.8404 C 51.3961 24.8404 50.0966 26.1395 50.0966 27.7805 C 50.0966 29.4215 51.3961 30.7663 53.0598 30.7663 Z M 8.2963 49.3645 L 47.7263 49.3645 C 52.5127 49.3645 54.8830 46.9942 54.8830 42.2990 L 54.8830 35.5754 C 54.8830 34.3902 54.2220 33.7292 53.0598 33.7292 C 51.8746 33.7292 51.2136 34.3902 51.2136 35.5754 L 51.2136 42.1167 C 51.2136 44.4870 49.9375 45.6950 47.6810 45.6950 L 8.3419 45.6950 C 6.0627 45.6950 4.8091 44.4870 4.8091 42.1167 L 4.8091 35.5754 C 4.8091 34.3902 4.1254 33.7292 2.9629 33.7292 C 1.8006 33.7292 1.1396 34.3902 1.1396 35.5754 L 1.1396 42.2990 C 1.1396 47.0170 3.5327 49.3645 8.2963 49.3645 Z"
  }));
}

export default Textbox;