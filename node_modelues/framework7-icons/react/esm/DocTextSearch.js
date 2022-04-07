function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function DocTextSearch(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 13.5039 50.9570 L 26.3476 50.9570 C 25.1055 49.9023 24.0508 48.6367 23.2773 47.1836 L 13.7148 47.1836 C 11.3008 47.1836 10.0117 45.9414 10.0117 43.5976 L 10.0117 8.1367 C 10.0117 5.8164 11.2773 4.4805 13.7148 4.4805 L 38.2070 4.4805 C 40.5508 4.4805 41.8867 5.7930 41.8867 8.1367 L 41.8867 28.5742 C 43.3398 29.3476 44.6055 30.3789 45.6602 31.6211 L 45.6602 8.0664 C 45.6602 3.1679 43.2461 .7070 38.3945 .7070 L 13.5039 .7070 C 8.6758 .7070 6.2383 3.1914 6.2383 8.0664 L 6.2383 43.6211 C 6.2383 48.5195 8.6758 50.9570 13.5039 50.9570 Z M 17.0898 14.0430 L 34.8555 14.0430 C 35.6758 14.0430 36.3086 13.3867 36.3086 12.5664 C 36.3086 11.7695 35.6758 11.1601 34.8555 11.1601 L 17.0898 11.1601 C 16.2227 11.1601 15.6133 11.7695 15.6133 12.5664 C 15.6133 13.3867 16.2227 14.0430 17.0898 14.0430 Z M 17.0898 22.2226 L 34.8555 22.2226 C 35.6758 22.2226 36.3086 21.5664 36.3086 20.7461 C 36.3086 19.9492 35.6758 19.3398 34.8555 19.3398 L 17.0898 19.3398 C 16.2227 19.3398 15.6133 19.9492 15.6133 20.7461 C 15.6133 21.5664 16.2227 22.2226 17.0898 22.2226 Z M 35.1367 50.9570 C 37.2461 50.9570 39.2383 50.3476 40.8789 49.2461 L 46.1524 54.5430 C 46.7148 55.0820 47.2305 55.2930 47.8633 55.2930 C 48.9414 55.2930 49.7617 54.4492 49.7617 53.2539 C 49.7617 52.7383 49.5040 52.2226 49.1056 51.8242 L 43.7617 46.4805 C 44.9570 44.7695 45.6602 42.6836 45.6602 40.4336 C 45.6602 34.5976 40.9492 29.8867 35.1367 29.8867 C 29.3242 29.8867 24.5664 34.6445 24.5664 40.4336 C 24.5664 46.2461 29.3242 50.9570 35.1367 50.9570 Z M 35.1367 47.6054 C 31.1524 47.6054 27.9180 44.3945 27.9180 40.4336 C 27.9180 36.5195 31.1524 33.2617 35.1367 33.2617 C 39.0508 33.2617 42.2851 36.5195 42.2851 40.4336 C 42.2851 44.3945 39.0742 47.6054 35.1367 47.6054 Z"
  }));
}

export default DocTextSearch;