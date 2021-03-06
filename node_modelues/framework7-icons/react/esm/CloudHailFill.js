function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function CloudHailFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 12.2618 35.8281 L 41.3477 35.8281 C 48.7772 35.8281 54.5195 30.2266 54.5195 23.0078 C 54.5195 15.7188 48.5195 10.2578 40.5743 10.3281 C 37.5743 4.2812 32.0665 .8125 25.5743 .8125 C 16.9259 .8125 9.6368 7.6094 8.9571 16.3516 C 4.4102 17.5937 1.4805 21.4375 1.4805 26.0312 C 1.4805 31.8437 5.8399 35.8281 12.2618 35.8281 Z M 15.2852 44.6172 L 16.8555 41.8281 C 17.2540 41.1484 17.0665 40.3047 16.3634 39.8828 C 15.6368 39.4844 14.8165 39.7422 14.4181 40.4219 L 12.8243 43.2344 C 12.4493 43.9141 12.6134 44.7344 13.3399 45.1562 C 14.0430 45.5312 14.8868 45.2969 15.2852 44.6172 Z M 25.5040 48.2031 L 29.1602 41.8750 C 29.5586 41.1484 29.3477 40.3281 28.6681 39.9062 C 27.9415 39.5078 27.1212 39.7422 26.7227 40.4453 L 23.0430 46.8437 C 22.6446 47.5 22.8555 48.3203 23.5821 48.7422 C 24.2618 49.1406 25.1055 48.8828 25.5040 48.2031 Z M 39.8477 44.7109 L 41.4181 41.9219 C 41.8165 41.2422 41.6290 40.3984 40.9259 39.9766 C 40.1993 39.5781 39.3790 39.8125 38.9805 40.5156 L 37.3868 43.3281 C 37.0118 44.0078 37.1759 44.8281 37.9024 45.2500 C 38.6055 45.6250 39.4493 45.3906 39.8477 44.7109 Z M 11.1368 51.5781 C 12.5196 51.5781 13.6681 50.4297 13.6681 49.0234 C 13.6681 47.6641 12.5196 46.4922 11.1368 46.4922 C 9.7305 46.4922 8.5821 47.6641 8.5821 49.0234 C 8.5821 50.4297 9.7305 51.5781 11.1368 51.5781 Z M 35.6993 51.6719 C 37.0586 51.6719 38.2305 50.5234 38.2305 49.1172 C 38.2305 47.7578 37.0821 46.5859 35.6993 46.5859 C 34.2930 46.5859 33.1446 47.7578 33.1446 49.1172 C 33.1446 50.5234 34.2930 51.6719 35.6993 51.6719 Z M 21.3555 55.1875 C 22.7383 55.1875 23.8868 54.0156 23.8868 52.6094 C 23.8868 51.25 22.7383 50.0781 21.3555 50.0781 C 19.9727 50.0781 18.8008 51.25 18.8008 52.6094 C 18.8008 54.0156 19.9727 55.1875 21.3555 55.1875 Z"
  }));
}

export default CloudHailFill;