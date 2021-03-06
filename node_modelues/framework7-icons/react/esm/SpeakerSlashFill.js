function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function SpeakerSlashFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 39.1796 33.4024 L 39.1796 8.2070 C 39.1796 6.6367 38.0312 5.3242 36.3906 5.3242 C 35.2421 5.3242 34.4687 5.8398 33.2265 7.0117 L 23.6171 16.1055 C 23.4765 16.2461 23.3359 16.3398 23.1718 16.3867 L 22.2343 16.4570 Z M 46.7733 49.9727 C 47.4999 50.6758 48.6484 50.6758 49.3280 49.9727 C 50.0312 49.2461 50.0548 48.1211 49.3280 47.4180 L 9.2030 7.2929 C 8.4999 6.5898 7.3280 6.5898 6.6249 7.2929 C 5.9452 7.9727 5.9452 9.1680 6.6249 9.8476 Z M 36.4374 48.3320 C 37.8202 48.3320 38.7812 47.5117 39.0859 46.1289 L 11.4062 18.4961 C 10.6562 19.3867 10.2343 20.6758 10.2343 22.3164 L 10.2343 31.4102 C 10.2343 34.9258 12.0155 36.7305 15.3202 36.7305 L 22.2812 36.7305 C 22.5155 36.7305 22.7265 36.8008 22.8671 36.9414 L 33.2265 46.8086 C 34.3515 47.8633 35.2890 48.3320 36.4374 48.3320 Z"
  }));
}

export default SpeakerSlashFill;