function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Command(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 18.9298 22.5390 L 18.9298 33.4844 L 14.2188 33.4844 C 9.6251 33.4844 5.8516 37.1172 5.8516 41.7578 C 5.8516 46.3984 9.6251 50.1484 14.2188 50.1484 C 18.8360 50.1484 22.5860 46.3984 22.5860 41.7578 L 22.5860 37.0703 L 33.3907 37.0703 L 33.3907 41.7578 C 33.3907 46.3984 37.1641 50.1484 41.7813 50.1484 C 46.3751 50.1484 50.1484 46.3984 50.1484 41.7578 C 50.1484 37.1172 46.3751 33.4844 41.7813 33.4844 L 37.0469 33.4844 L 37.0469 22.5390 L 41.7813 22.5390 C 46.3751 22.5390 50.1484 18.9063 50.1484 14.2656 C 50.1484 9.6250 46.3751 5.8516 41.7813 5.8516 C 37.1641 5.8516 33.3907 9.6250 33.3907 14.2656 L 33.3907 18.9531 L 22.5860 18.9531 L 22.5860 14.2656 C 22.5860 9.6250 18.8360 5.8516 14.2188 5.8516 C 9.6251 5.8516 5.8516 9.6250 5.8516 14.2656 C 5.8516 18.9063 9.6251 22.5390 14.2188 22.5390 Z M 14.2188 19 C 11.6641 19 9.5079 16.8672 9.5079 14.2656 C 9.5079 11.6641 11.6641 9.5078 14.2188 9.5078 C 16.7969 9.5078 18.9298 11.6641 18.9298 14.2656 L 18.9298 19 Z M 41.7813 19 L 37.0469 19 L 37.0469 14.2656 C 37.0469 11.6641 39.2032 9.5078 41.7813 9.5078 C 44.3360 9.5078 46.4922 11.6641 46.4922 14.2656 C 46.4922 16.8672 44.3360 19 41.7813 19 Z M 22.5860 33.5312 L 22.5860 22.4922 L 33.3907 22.4922 L 33.3907 33.5312 Z M 14.2188 37 L 18.9298 37 L 18.9298 41.7344 C 18.9298 44.3359 16.7969 46.4687 14.2188 46.4687 C 11.6641 46.4687 9.5079 44.3359 9.5079 41.7344 C 9.5079 39.1328 11.6641 37 14.2188 37 Z M 41.7813 37 C 44.3360 37 46.4922 39.1328 46.4922 41.7344 C 46.4922 44.3359 44.3360 46.4687 41.7813 46.4687 C 39.2032 46.4687 37.0469 44.3359 37.0469 41.7344 L 37.0469 37 Z"
  }));
}

export default Command;