function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ExclamationmarkOctagonFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 20.8867 50.7109 L 35.1132 50.7109 C 38.0898 50.7109 39.5195 49.7500 41.0429 48.0859 L 49.6679 38.5234 C 51.2149 36.8125 51.6133 35.6875 51.6133 33.3671 L 51.6133 22.6562 C 51.6133 20.3125 51.2149 19.2109 49.6679 17.5000 L 41.0429 7.9375 C 39.5195 6.2734 38.0898 5.2891 35.1132 5.2891 L 20.8867 5.2891 C 17.9101 5.2891 16.5039 6.2734 14.9570 7.9375 L 6.3320 17.5000 C 4.7851 19.2109 4.3867 20.3125 4.3867 22.6562 L 4.3867 33.3671 C 4.3867 35.6875 4.7851 36.8125 6.3320 38.5234 L 14.9570 48.0859 C 16.5039 49.7500 17.9101 50.7109 20.8867 50.7109 Z M 28.0117 31.4218 C 26.7695 31.4218 26.0898 30.6953 26.0429 29.4531 L 25.7148 17.8750 C 25.6679 16.5859 26.6289 15.6718 27.9882 15.6718 C 29.3008 15.6718 30.3086 16.6093 30.2617 17.8984 L 29.9335 29.4531 C 29.8867 30.7187 29.1835 31.4218 28.0117 31.4218 Z M 28.0117 40.0469 C 26.6523 40.0469 25.3632 38.9687 25.3632 37.5156 C 25.3632 36.0625 26.6289 34.9844 28.0117 34.9844 C 29.3711 34.9844 30.6367 36.0391 30.6367 37.5156 C 30.6367 38.9922 29.3476 40.0469 28.0117 40.0469 Z"
  }));
}

export default ExclamationmarkOctagonFill;