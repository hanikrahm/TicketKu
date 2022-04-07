function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Capslock(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 20.7812 37.6211 L 35.2421 37.6211 C 38.5233 37.6211 40.2577 35.6992 40.2577 32.6055 L 40.2577 28.4570 L 49.1404 28.4570 C 51.0859 28.4570 52.6329 27.3086 52.6329 25.5039 C 52.6329 24.4024 52.0703 23.5351 51.0158 22.6211 L 30.9062 4.8789 C 29.9452 4.0351 29.0546 3.4727 27.9999 3.4727 C 26.9687 3.4727 26.0780 4.0351 25.1171 4.8789 L 4.9843 22.6445 C 3.8828 23.6055 3.3671 24.4024 3.3671 25.5039 C 3.3671 27.3086 4.9140 28.4570 6.8828 28.4570 L 15.7421 28.4570 L 15.7421 32.6055 C 15.7421 35.6992 17.4999 37.6211 20.7812 37.6211 Z M 21.1562 34.0820 C 20.2655 34.0820 19.6562 33.4961 19.6562 32.6055 L 19.6562 25.7149 C 19.6562 25.1524 19.4452 24.9180 18.8828 24.9180 L 8.6640 24.9180 C 8.4999 24.9180 8.4296 24.8476 8.4296 24.7305 C 8.4296 24.6367 8.4530 24.5430 8.5702 24.4492 L 27.5077 7.9961 C 27.7187 7.8086 27.8359 7.7383 27.9999 7.7383 C 28.1640 7.7383 28.3046 7.8086 28.4921 7.9961 L 47.4532 24.4492 C 47.5703 24.5430 47.5939 24.6367 47.5939 24.7305 C 47.5939 24.8476 47.4998 24.9180 47.3356 24.9180 L 37.1406 24.9180 C 36.5780 24.9180 36.3671 25.1524 36.3671 25.7149 L 36.3671 32.6055 C 36.3671 33.4727 35.7109 34.0820 34.8671 34.0820 Z M 19.7733 52.5273 L 36.0624 52.5273 C 38.7577 52.5273 40.3046 51.0273 40.3046 48.3086 L 40.3046 44.9336 C 40.3046 42.2148 38.7577 40.6680 36.0624 40.6680 L 19.7733 40.6680 C 17.0546 40.6680 15.5077 42.2383 15.5077 44.9336 L 15.5077 48.3086 C 15.5077 51.0039 17.0546 52.5273 19.7733 52.5273 Z M 20.3124 49.2227 C 19.4921 49.2227 19.0468 48.8008 19.0468 47.9805 L 19.0468 45.2617 C 19.0468 44.4414 19.4921 43.9727 20.3124 43.9727 L 35.5233 43.9727 C 36.3202 43.9727 36.7655 44.4414 36.7655 45.2617 L 36.7655 47.9805 C 36.7655 48.8008 36.3202 49.2227 35.5233 49.2227 Z"
  }));
}

export default Capslock;