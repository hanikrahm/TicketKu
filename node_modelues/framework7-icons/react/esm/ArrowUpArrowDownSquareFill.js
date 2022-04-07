function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowUpArrowDownSquareFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 20.6992 39.8477 C 19.6679 39.8477 18.9648 39.1445 18.9648 38.1133 L 18.9648 24.7774 L 19.1054 20.8633 L 16.7617 23.6992 L 14.8163 25.9258 C 14.4882 26.2539 14.0898 26.4414 13.5742 26.4414 C 12.6132 26.4414 11.8866 25.6914 11.8866 24.7305 C 11.8866 24.2383 12.0273 23.8398 12.3320 23.5118 L 19.2460 16.2930 C 19.6913 15.8008 20.2070 15.6133 20.6992 15.6133 C 21.2382 15.6133 21.7773 15.8008 22.2226 16.2930 L 29.0663 23.5118 C 29.3944 23.8398 29.5585 24.2383 29.5585 24.7305 C 29.5585 25.6914 28.8085 26.4414 27.8476 26.4414 C 27.3554 26.4414 26.8866 26.2539 26.6288 25.9258 L 24.7304 23.6992 L 22.2929 20.8164 L 22.4570 24.7774 L 22.4570 38.1133 C 22.4570 39.1445 21.7304 39.8477 20.6992 39.8477 Z M 36.4960 39.8477 C 35.9804 39.8477 35.4648 39.6836 34.9960 39.1914 L 28.1288 31.9727 C 27.8007 31.6445 27.6601 31.2227 27.6601 30.7539 C 27.6601 29.7930 28.3632 29.0196 29.3476 29.0196 C 29.8398 29.0196 30.2617 29.2305 30.5663 29.5352 L 32.5117 31.7617 L 34.9023 34.6211 L 34.7148 30.6836 L 34.7148 17.3711 C 34.7148 16.3164 35.4648 15.6133 36.4960 15.6133 C 37.5039 15.6133 38.2304 16.3164 38.2304 17.3711 L 38.2304 30.6836 L 38.0663 34.6445 L 40.4804 31.7617 L 42.3788 29.5352 C 42.6366 29.2305 43.1054 29.0196 43.6210 29.0196 C 44.5820 29.0196 45.3085 29.7930 45.3085 30.7539 C 45.3085 31.2227 45.1679 31.6211 44.8398 31.9727 L 37.9960 39.1914 C 37.5507 39.6602 37.0117 39.8477 36.4960 39.8477 Z"
  }));
}

export default ArrowUpArrowDownSquareFill;