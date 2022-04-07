function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function WifiExclamationmark(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 28.0234 37.5039 C 29.2656 37.5039 30.1093 36.6836 30.1327 35.3945 C 30.2031 26.7695 30.2734 18.0976 30.3437 9.4492 C 30.3437 8.1133 29.2656 7.1992 27.9999 7.1992 C 26.7343 7.1992 25.6562 8.1133 25.6562 9.4492 C 25.7499 18.0976 25.8203 26.7695 25.9140 35.3945 C 25.9374 36.6836 26.7812 37.5039 28.0234 37.5039 Z M 5.4531 26.3711 C 5.8984 26.8164 6.5546 26.7930 6.9765 26.3477 C 11.2890 21.7539 16.7031 18.8711 22.7499 17.8398 L 22.6562 11.0195 C 14.3124 12.3320 6.7656 16.5976 2.2890 21.9179 C 1.9609 22.2930 1.9843 22.8086 2.3593 23.2070 Z M 49.0702 26.3711 C 49.4686 26.7695 50.1017 26.7695 50.5702 26.3008 L 53.6407 23.2070 C 54.0391 22.8086 54.0391 22.2930 53.7108 21.9179 C 49.2343 16.5976 41.6874 12.3320 33.3437 11.0430 L 33.2734 17.8633 C 39.2968 18.9414 44.6640 21.8711 49.0702 26.3711 Z M 14.8281 35.7695 C 15.2968 36.2617 15.9062 36.2148 16.3515 35.6992 C 18.0390 33.8477 20.3359 32.3477 22.8905 31.4570 L 22.7968 24.3555 C 17.9687 25.4336 13.8437 27.9883 11.2656 31.0352 C 10.9140 31.4336 10.9609 31.9023 11.3359 32.3008 Z M 39.6952 35.7695 C 40.1405 36.2383 40.7031 36.2148 41.1952 35.7227 L 44.6640 32.3008 C 45.0390 31.9258 45.0859 31.4336 44.7343 31.0352 C 42.1562 27.9883 38.0312 25.4336 33.2265 24.3555 L 33.1562 31.5039 C 35.7109 32.4179 38.0078 33.9414 39.6952 35.7695 Z M 27.9999 48.8008 C 29.9921 48.8008 31.5624 47.1836 31.5624 45.2148 C 31.5624 43.2227 29.9921 41.6523 27.9999 41.6523 C 26.0312 41.6523 24.4140 43.2227 24.4140 45.2148 C 24.4140 47.1836 26.0312 48.8008 27.9999 48.8008 Z"
  }));
}

export default WifiExclamationmark;