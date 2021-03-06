function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function CloudBoltRainFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 12.2618 35.4531 L 41.3477 35.4531 C 48.7772 35.4531 54.5195 29.8516 54.5195 22.6328 C 54.5195 15.3438 48.5195 9.8828 40.5743 9.9531 C 37.5743 3.9063 32.0665 .4375 25.5743 .4375 C 16.9259 .4375 9.6368 7.2344 8.9571 15.9766 C 4.4102 17.2187 1.4805 21.0625 1.4805 25.6563 C 1.4805 31.4687 5.8399 35.4531 12.2618 35.4531 Z M 23.7930 55.4687 C 24.0040 55.5625 24.2618 55.4922 24.4727 55.2344 L 34.3868 45.2031 C 34.8790 44.6875 34.7149 44.0781 34.0352 44.0781 L 29.3712 44.0781 L 31.5274 40.0000 C 31.8086 39.5078 31.5977 39.1328 31.0821 39.1328 L 26.1837 39.1328 C 25.5274 39.1328 25.3165 39.3672 25.1055 39.8359 L 22.1055 46.6563 C 21.8712 47.1953 22.1290 47.5469 22.7149 47.5469 L 26.6290 47.5469 L 23.6290 54.8125 C 23.4883 55.0938 23.5586 55.375 23.7930 55.4687 Z M 7.3634 47.2891 C 8.0430 47.6641 8.8868 47.4297 9.2852 46.7500 L 12.3555 41.4531 C 12.7774 40.7500 12.5430 39.9297 11.8399 39.5078 C 11.1368 39.1094 10.3399 39.3203 9.8946 40.0469 L 6.8243 45.3906 C 6.4259 46.0469 6.6368 46.8672 7.3634 47.2891 Z M 39.9415 47.2891 C 40.6446 47.6641 41.4883 47.4297 41.8868 46.7500 L 44.9337 41.4531 C 45.3553 40.7500 45.1212 39.9297 44.4181 39.5078 C 43.7149 39.1094 42.9181 39.3203 42.4962 40.0469 L 39.4259 45.3906 C 39.0274 46.0469 39.2149 46.8672 39.9415 47.2891 Z M 11.9102 53.8282 C 12.5899 54.2266 13.4337 53.9922 13.8321 53.2891 L 16.8790 48.0156 C 17.3243 47.2891 17.0899 46.4687 16.3868 46.0703 C 15.6837 45.6484 14.8868 45.8828 14.4415 46.6094 L 11.3712 51.9297 C 10.9727 52.6094 11.1837 53.4297 11.9102 53.8282 Z M 44.4883 53.8282 C 45.1915 54.2266 46.0350 53.9922 46.4339 53.2891 L 49.4804 48.0156 C 49.9023 47.2891 49.6681 46.4687 48.9649 46.0703 C 48.2617 45.6484 47.4649 45.8828 47.0430 46.6094 L 43.9493 51.9297 C 43.5743 52.6094 43.7618 53.4297 44.4883 53.8282 Z"
  }));
}

export default CloudBoltRainFill;