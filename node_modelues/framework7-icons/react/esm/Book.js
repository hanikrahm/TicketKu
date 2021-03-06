function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Book(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 28.0118 11.3945 C 26.2071 9.1445 21.7774 7.1523 16.8555 7.1523 C 10.3399 7.1523 5.0899 10.5039 3.8008 13.6445 L 3.8008 46.3867 C 3.8008 48.1680 4.9727 48.8477 6.2383 48.8477 C 7.2696 48.8477 7.8555 48.5430 8.4883 48.0508 C 9.8243 46.9023 12.5196 45.3555 16.8555 45.3555 C 21.1680 45.3555 24.1914 46.8555 25.3633 47.9102 C 25.9727 48.4023 26.7227 48.8477 28.0118 48.8477 C 29.2774 48.8477 30.0040 48.3555 30.6368 47.9102 C 31.8790 46.9258 34.8321 45.3555 39.1446 45.3555 C 43.4805 45.3555 46.1992 46.9258 47.5120 48.0508 C 48.1446 48.5430 48.7307 48.8477 49.7617 48.8477 C 51.0275 48.8477 52.1992 48.1680 52.1992 46.3867 L 52.1992 13.6445 C 50.9104 10.5039 45.6602 7.1523 39.1446 7.1523 C 34.2227 7.1523 29.7930 9.1445 28.0118 11.3945 Z M 7.5743 14.7695 C 8.1133 13.3164 11.5118 10.6914 16.8555 10.6914 C 22.1758 10.6914 25.6446 13.3398 26.1133 14.7695 L 26.1133 44.4180 C 23.8868 42.7539 20.4883 41.8164 16.8555 41.8164 C 13.1992 41.8164 9.8008 42.7539 7.5743 44.5117 Z M 48.4259 14.7695 L 48.4259 44.5117 C 46.1992 42.7539 42.8008 41.8164 39.1446 41.8164 C 35.5118 41.8164 32.1133 42.7539 29.8868 44.4180 L 29.8868 14.7695 C 30.3555 13.3398 33.8243 10.6914 39.1446 10.6914 C 44.4883 10.6914 47.8868 13.3164 48.4259 14.7695 Z"
  }));
}

export default Book;