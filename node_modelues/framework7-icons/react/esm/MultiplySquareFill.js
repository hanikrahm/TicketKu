function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function MultiplySquareFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 19.6210 38.3711 C 18.5195 38.3711 17.6523 37.4805 17.6523 36.3789 C 17.6523 35.8398 17.8632 35.3711 18.2382 35.0196 L 25.2460 27.9883 L 18.2382 20.9571 C 17.8632 20.6289 17.6523 20.1367 17.6523 19.5977 C 17.6523 18.5196 18.5195 17.6523 19.6210 17.6523 C 20.1601 17.6523 20.6288 17.8633 20.9804 18.2383 L 28.0117 25.2461 L 35.0898 18.2149 C 35.4882 17.7930 35.9335 17.6055 36.4492 17.6055 C 37.5273 17.6055 38.4179 18.4961 38.4179 19.5742 C 38.4179 20.1133 38.2539 20.5586 37.8320 20.9336 L 30.8007 27.9883 L 37.8085 34.9727 C 38.1835 35.3477 38.3944 35.8164 38.3944 36.3789 C 38.3944 37.4805 37.5039 38.3711 36.4257 38.3711 C 35.8632 38.3711 35.3710 38.1367 35.0195 37.7852 L 28.0117 30.7539 L 21.0273 37.7852 C 20.6757 38.1602 20.1601 38.3711 19.6210 38.3711 Z"
  }));
}

export default MultiplySquareFill;