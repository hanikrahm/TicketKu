function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowUpBinFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 4.1056 17.0898 L 51.8944 17.0898 C 54.5430 17.0898 55.8788 15.5196 55.8788 12.8945 L 55.8788 10.6211 C 55.8788 7.9961 54.5430 6.4258 51.8944 6.4258 L 4.1056 6.4258 C 1.5977 6.4258 .1212 7.9961 .1212 10.6211 L .1212 12.8945 C .1212 15.5196 1.4571 17.0898 4.1056 17.0898 Z M 15.7071 49.5742 L 40.2930 49.5742 C 44.9104 49.5742 46.7617 47.1367 47.4414 42.5899 L 50.7932 20.2774 L 5.2305 20.2774 L 8.5587 42.5899 C 9.2618 47.1602 11.0899 49.5742 15.7071 49.5742 Z M 28.0118 44.4414 C 26.8634 44.4414 25.9024 43.5274 25.9024 42.4024 L 25.9024 34.0586 L 26.0665 30.0039 L 24.0743 32.0898 L 21.4961 34.6914 C 21.1212 35.0898 20.5352 35.3008 20.0430 35.3008 C 18.9180 35.3008 18.1212 34.5274 18.1212 33.4492 C 18.1212 32.8164 18.3321 32.3945 18.8008 31.9727 L 26.4883 24.8711 C 27.0274 24.3555 27.4727 24.1680 28.0118 24.1680 C 28.5508 24.1680 28.9727 24.3555 29.5352 24.8711 L 37.2227 31.9727 C 37.6446 32.3945 37.9024 32.8164 37.9024 33.4492 C 37.9024 34.5274 37.0587 35.3008 35.9336 35.3008 C 35.4415 35.3008 34.9024 35.0898 34.5040 34.6914 L 31.9493 32.0898 L 29.9336 30.0039 L 30.0977 34.0586 L 30.0977 42.4024 C 30.0977 43.5274 29.1368 44.4414 28.0118 44.4414 Z"
  }));
}

export default ArrowUpBinFill;