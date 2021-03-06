function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function XmarkOctagon(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 20.8867 50.7109 L 35.1132 50.7109 C 38.0898 50.7109 39.5195 49.7500 41.0429 48.0859 L 49.6679 38.5234 C 51.2149 36.8125 51.6133 35.6875 51.6133 33.3671 L 51.6133 22.6562 C 51.6133 20.3125 51.2149 19.2109 49.6679 17.5000 L 41.0429 7.9375 C 39.5195 6.2734 38.0898 5.2891 35.1132 5.2891 L 20.8867 5.2891 C 17.9101 5.2891 16.5039 6.2734 14.9570 7.9375 L 6.3320 17.5000 C 4.7851 19.2109 4.3867 20.3125 4.3867 22.6562 L 4.3867 33.3671 C 4.3867 35.6875 4.7851 36.8125 6.3320 38.5234 L 14.9570 48.0859 C 16.5039 49.7500 17.9101 50.7109 20.8867 50.7109 Z M 22.1523 46.9609 C 19.8086 46.9609 19.1523 46.4453 17.8398 45.0390 L 9.8711 36.2500 C 8.9335 35.2187 8.7226 34.6328 8.7226 32.9218 L 8.7226 23.1015 C 8.7226 21.3906 8.9335 20.8047 9.8711 19.7734 L 17.8398 10.9844 C 19.1523 9.5547 19.8086 9.0625 22.1523 9.0625 L 33.8476 9.0625 C 36.1913 9.0625 36.8476 9.5547 38.1601 10.9844 L 46.1523 19.7734 C 47.0663 20.8047 47.2775 21.3906 47.2775 23.1015 L 47.2775 32.9218 C 47.2775 34.6328 47.0663 35.2187 46.1523 36.2500 L 38.1601 45.0390 C 36.8476 46.4453 36.1913 46.9609 33.8476 46.9609 Z M 19.9960 37.9140 C 20.5117 37.9140 20.9804 37.7031 21.3320 37.3281 L 27.9882 30.6718 L 34.6445 37.3281 C 34.9960 37.6797 35.4413 37.9140 35.9804 37.9140 C 37.0351 37.9140 37.8789 37.0469 37.8789 36.0156 C 37.8789 35.4766 37.6679 35.0547 37.2929 34.6797 L 30.6367 28.0234 L 37.3164 21.3203 C 37.7148 20.9218 37.9023 20.5234 37.9023 20.0078 C 37.9023 18.9531 37.0586 18.1328 36.0039 18.1328 C 35.5117 18.1328 35.1132 18.3203 34.7148 18.7187 L 27.9882 25.3984 L 21.2851 18.7422 C 20.9335 18.3671 20.5117 18.1797 19.9960 18.1797 C 18.9413 18.1797 18.0976 18.9766 18.0976 20.0312 C 18.0976 20.5469 18.3086 20.9922 18.6835 21.3437 L 25.3398 28.0234 L 18.6835 34.7031 C 18.3086 35.0547 18.0976 35.5000 18.0976 36.0156 C 18.0976 37.0469 18.9413 37.9140 19.9960 37.9140 Z"
  }));
}

export default XmarkOctagon;