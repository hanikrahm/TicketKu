function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function LeafArrowCirclepath(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9999 54.4024 C 41.0546 54.4024 51.9063 43.5742 51.9063 30.4961 C 51.9063 22.6211 47.9219 15.5430 41.8983 11.1602 C 40.8671 10.3633 39.5780 10.6211 38.9921 11.5820 C 38.4062 12.5664 38.7109 13.6680 39.6483 14.3945 C 44.6405 17.9570 47.8983 23.8398 47.9219 30.4961 C 47.9454 41.5586 39.0390 50.4180 27.9999 50.4180 C 16.9374 50.4180 8.1014 41.5586 8.1014 30.4961 C 8.1014 21.0039 14.6171 13.1055 23.4765 11.0898 L 23.4765 14.4649 C 23.4765 16.1289 24.6249 16.5742 25.8905 15.6602 L 33.3905 10.4102 C 34.4452 9.6836 34.4687 8.5586 33.3905 7.7851 L 25.9140 2.5351 C 24.6249 1.5976 23.4765 2.0430 23.4765 3.7305 L 23.4765 7.0351 C 12.5077 9.1680 4.0937 18.9649 4.0937 30.4961 C 4.0937 43.5742 14.9218 54.4024 27.9999 54.4024 Z M 15.9062 21.8945 C 15.7890 22.9961 15.6952 24.0742 15.6952 25.1289 C 15.6952 33.1211 20.9921 39.3086 27.8358 39.3086 C 30.8358 39.3086 33.6249 38.0195 34.8436 35.8867 C 35.9218 37.2929 36.4609 38.9805 37.3280 41.6055 C 37.4218 41.8398 37.6562 41.9336 37.8671 41.8164 L 38.6874 41.4180 C 39.2968 41.1602 39.5077 40.8320 39.5077 40.1992 C 39.5077 38.4414 37.2812 35.8398 36.1327 34.7851 C 31.3280 30.3086 23.9218 32.9102 22.0936 27.9883 C 22.0468 27.8945 22.0234 27.8476 22.0234 27.7773 C 22.0234 27.5898 22.1874 27.4492 22.3280 27.4492 C 22.4921 27.4492 22.6093 27.5430 22.7265 27.6602 C 26.4062 31.3633 31.5390 28.2227 36.2030 32.6289 C 36.5312 32.9336 37.0234 32.7929 37.0468 32.3945 C 37.0702 32.0195 37.1171 31.5508 37.1171 31.0586 C 37.1171 25.6914 33.3202 23.3945 27.8593 23.3945 C 26.1718 23.3945 24.4374 23.6055 22.7968 23.6055 C 20.4999 23.6055 18.4374 23.1836 17.0312 21.6367 C 16.6562 21.2383 15.9530 21.3320 15.9062 21.8945 Z"
  }));
}

export default LeafArrowCirclepath;