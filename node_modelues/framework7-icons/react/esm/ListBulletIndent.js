function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ListBulletIndent(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 2.8067 17.5443 C 4.3659 17.5443 5.6134 16.2969 5.6134 14.7599 C 5.6134 13.2007 4.3659 11.9532 2.8067 11.9532 C 1.2697 11.9532 0 13.2007 0 14.7599 C 0 16.2969 1.2697 17.5443 2.8067 17.5443 Z M 12.6523 16.5420 L 43.0805 16.5420 C 44.1051 16.5420 44.8847 15.7623 44.8847 14.7599 C 44.8847 13.7352 44.1051 12.9557 43.0805 12.9557 L 12.6523 12.9557 C 11.6500 12.9557 10.8703 13.7352 10.8703 14.7599 C 10.8703 15.7623 11.6500 16.5420 12.6523 16.5420 Z M 8.3755 31.0209 C 9.9348 31.0209 11.1822 29.7735 11.1822 28.2142 C 11.1822 26.6549 9.9348 25.4075 8.3755 25.4075 C 6.8162 25.4075 5.5688 26.6549 5.5688 28.2142 C 5.5688 29.7735 6.8162 31.0209 8.3755 31.0209 Z M 18.2212 30.0185 L 48.6493 30.0185 C 49.6516 30.0185 50.4535 29.2166 50.4535 28.2142 C 50.4535 27.2118 49.6516 26.4322 48.6493 26.4322 L 18.2212 26.4322 C 17.1965 26.4322 16.4169 27.2118 16.4169 28.2142 C 16.4169 29.2166 17.1965 30.0185 18.2212 30.0185 Z M 13.9443 44.4974 C 15.4813 44.4974 16.7510 43.2277 16.7510 41.6907 C 16.7510 40.1315 15.4813 38.8841 13.9443 38.8841 C 12.3850 38.8841 11.1376 40.1315 11.1376 41.6907 C 11.1376 43.2277 12.3850 44.4974 13.9443 44.4974 Z M 23.7900 43.4728 L 54.2181 43.4728 C 55.2204 43.4728 56 42.6931 56 41.6907 C 56 40.6661 55.2204 39.8864 54.2181 39.8864 L 23.7900 39.8864 C 22.7653 39.8864 21.9857 40.6661 21.9857 41.6907 C 21.9857 42.6931 22.7653 43.4728 23.7900 43.4728 Z"
  }));
}

export default ListBulletIndent;