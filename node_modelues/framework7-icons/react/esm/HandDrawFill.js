function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function HandDrawFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 2.8281 35.4883 C 3.6484 35.4648 4.2344 34.8320 4.2578 33.9883 C 4.5157 23.7695 9.7891 16.2227 17.7813 13.2695 L 25.5157 34.5742 C 25.7266 35.1601 25.4922 35.5820 25.1172 35.7227 C 24.7657 35.8398 24.3906 35.7227 23.9453 35.2539 L 17.0547 28.0352 C 15.8594 26.7930 14.3594 26.8633 13.3516 27.7539 C 12.3906 28.5976 12.1094 30.1914 13.3281 31.5976 L 21.5781 41.2070 C 28.4688 49.2461 35.0313 50.6289 42.1094 48.0508 C 51.4141 44.6758 54.6719 36.6367 50.9687 26.4648 L 49.4221 22.2461 C 48.0157 18.3555 45.2970 16.6679 43.1875 17.4414 C 42.7188 17.6055 42.5547 17.9570 42.7188 18.4023 L 43.3984 20.2774 C 43.7266 21.1679 43.4219 21.7774 42.9062 21.9648 C 42.3203 22.1758 41.7110 21.9179 41.3828 21.0274 L 40.9375 19.7852 C 40.1172 17.5117 38.1016 16.5508 36.1328 17.2774 C 35.2422 17.6055 34.9844 18.0976 35.2657 18.8711 L 36.1797 21.4023 C 36.5078 22.2930 36.2266 22.9023 35.6875 23.0898 C 35.1250 23.3008 34.5157 23.0430 34.1875 22.1523 L 33.3203 19.7852 C 32.4062 17.2305 30.4610 16.5742 28.5625 17.2539 C 27.7188 17.5586 27.4141 18.1211 27.6719 18.8476 L 29.5000 23.8633 C 29.8047 24.7539 29.5235 25.3398 28.9844 25.5274 C 28.4219 25.7383 27.8125 25.4805 27.4844 24.5898 L 21.3203 7.6679 C 20.7344 6.0508 19.2813 5.3711 17.8984 5.8633 C 16.4219 6.4023 15.7891 7.8320 16.3984 9.4727 L 16.7266 10.4336 C 7.6562 13.8086 1.3281 22.5742 1.3281 33.9414 C 1.3281 34.7852 2.0313 35.5117 2.8281 35.4883 Z"
  }));
}

export default HandDrawFill;