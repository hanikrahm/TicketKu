function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function CloudSunFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 35.9863 17.8166 C 36.8756 17.8166 37.5912 17.0818 37.5912 16.2116 L 37.5912 12.0348 C 37.5912 11.1453 36.8756 10.4298 35.9863 10.4298 C 35.0968 10.4298 34.3813 11.1453 34.3813 12.0348 L 34.3813 16.2116 C 34.3813 17.0818 35.0968 17.8166 35.9863 17.8166 Z M 24.7708 21.5486 C 25.4089 22.1868 26.4531 22.1674 27.0526 21.5486 C 27.6520 20.9299 27.6714 19.9243 27.0526 19.3055 L 24.0746 16.3276 C 23.4365 15.6895 22.4310 15.7088 21.8122 16.3276 C 21.1935 16.9270 21.1935 17.9519 21.8122 18.5901 Z M 44.9201 21.5486 C 45.5196 22.1674 46.5636 22.1868 47.2019 21.5486 L 50.1602 18.5901 C 50.7792 17.9519 50.7598 16.9270 50.1602 16.3276 C 49.5416 15.7088 48.5361 15.6895 47.8982 16.3276 L 44.9201 19.3055 C 44.3011 19.9243 44.3205 20.9299 44.9201 21.5486 Z M 40.9559 38.7586 C 43.7985 36.8443 45.5580 33.8857 45.5580 30.4824 C 45.5580 25.1647 41.3040 20.8912 35.9863 20.8912 C 32.4863 20.8912 29.4504 22.7668 27.8454 25.5707 C 28.6576 26.4022 29.3537 27.3111 29.9338 28.4326 C 36.3149 28.9547 40.4339 32.9188 40.9559 38.7586 Z M 8.0249 49.4134 L 28.9476 49.4134 C 34.4200 49.4134 38.6740 45.2752 38.6740 39.9189 C 38.6740 34.5818 34.3427 30.5597 28.5609 30.5210 C 26.2984 26.2089 22.2763 23.6950 17.5967 23.6950 C 11.3122 23.6950 5.9752 28.5873 5.3951 34.9299 C 2.1077 35.9161 0 38.7006 0 42.1040 C 0 46.4355 3.2680 49.4134 8.0249 49.4134 Z M 50.2185 32.0873 L 54.3953 32.0873 C 55.2654 32.0873 55.9810 31.3719 56 30.4824 C 56 29.5929 55.2654 28.8774 54.3953 28.8774 L 50.2185 28.8774 C 49.3484 28.8774 48.6134 29.5929 48.6134 30.4824 C 48.6134 31.3719 49.3484 32.0873 50.2185 32.0873 Z M 47.8982 44.6758 C 48.5361 45.2946 49.5416 45.2752 50.1602 44.6565 C 50.7598 44.0377 50.7792 43.0128 50.1602 42.4133 L 47.1631 39.4354 C 46.5445 38.8360 45.5386 38.8166 44.9201 39.4354 C 44.3011 40.0542 44.3011 41.0984 44.9201 41.7172 Z"
  }));
}

export default CloudSunFill;