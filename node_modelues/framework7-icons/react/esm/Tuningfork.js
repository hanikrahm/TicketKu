function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Tuningfork(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 7.5273 52.7969 C 9.9414 52.7969 11.9336 50.8047 11.9336 48.3906 C 11.9336 48.0625 11.8867 47.7344 11.8164 47.4297 L 19.0820 40.1875 L 28.3164 40.1641 C 29.8164 40.1641 31.4101 39.625 32.5117 38.5469 L 51.8945 19.4219 C 52.8555 18.4844 52.8084 16.9844 51.8945 16.0703 C 51.0041 15.1328 49.4806 15.1328 48.5662 16.0703 L 29.8867 34.7500 C 29.2305 35.4062 28.4101 35.8047 27.4258 35.8047 L 20.9101 35.8047 L 20.5586 35.3828 L 20.5586 28.3516 C 20.5586 27.3906 20.9336 26.5469 21.5898 25.8906 L 39.9883 7.5156 C 40.9258 6.5781 40.9023 5.0781 39.9883 4.1406 C 39.0976 3.2266 37.5742 3.2031 36.6601 4.1640 L 17.5117 23.5703 C 16.3867 24.7422 15.8945 26.2422 15.8945 27.7656 L 15.8710 36.6484 L 8.4648 44.0781 C 8.1601 44.0078 7.8554 43.9844 7.5273 43.9844 C 5.1132 43.9844 3.1445 45.9531 3.1445 48.3906 C 3.1445 50.8047 5.1132 52.7969 7.5273 52.7969 Z"
  }));
}

export default Tuningfork;