function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function SquareStack3dDownRight(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 7.3280 43.5039 C 7.7733 43.5039 8.2421 43.3633 8.7108 43.0352 L 8.7108 17.9570 C 8.7108 17.1133 8.8749 16.7852 9.6249 16.3867 L 31.3515 3.8711 C 31.4218 2.3242 30.4374 1.3633 29.1015 1.3633 C 28.4921 1.3633 27.8358 1.5274 27.1327 1.9492 L 7.4921 13.2461 C 5.1952 14.5820 4.9140 15.0039 4.9140 17.6758 L 4.9140 40.1055 C 4.9140 42.1211 5.8749 43.5039 7.3280 43.5039 Z M 16.7030 48.9180 C 17.1249 48.9180 17.5936 48.7773 18.0858 48.4492 L 18.0858 23.3711 C 18.0858 22.4570 18.2030 22.2226 18.9764 21.8008 L 40.7030 9.2617 C 40.7733 7.7383 39.8124 6.7539 38.4530 6.7539 C 37.8671 6.7539 37.1874 6.9414 36.5077 7.3164 L 16.8202 18.6367 C 14.5233 19.9492 14.2655 20.4414 14.2655 23.0664 L 14.2655 45.5195 C 14.2655 47.5352 15.2733 48.9180 16.7030 48.9180 Z M 26.7343 54.6367 C 27.5546 54.6367 28.5389 54.3086 29.7108 53.6523 L 48.0860 43.1055 C 50.2422 41.8633 51.0860 40.5742 51.0860 37.9492 L 51.0390 16.7148 C 51.0390 13.9023 50.0310 12.4726 48.2732 12.4726 C 47.5000 12.4726 46.5155 12.7774 45.4140 13.4101 L 26.9921 24.0274 C 24.7889 25.3164 24.0155 26.6289 24.0155 29.1836 L 24.0155 50.4179 C 24.0155 53.1367 24.9764 54.6367 26.7343 54.6367 Z M 27.9999 50.0664 C 27.8827 50.0430 27.8358 49.9726 27.8358 49.8086 L 27.9999 29.2539 C 27.9999 28.3633 28.2577 27.8945 29.0546 27.4492 L 46.7968 17.0195 C 46.8671 16.9726 46.9374 16.9726 47.0310 16.9961 C 47.1251 17.0195 47.1952 17.0899 47.1952 17.2539 L 47.1251 37.8789 C 47.1251 38.6523 46.8436 39.2383 46.0702 39.7070 L 28.2343 50.0430 C 28.1405 50.0899 28.0702 50.0899 27.9999 50.0664 Z"
  }));
}

export default SquareStack3dDownRight;