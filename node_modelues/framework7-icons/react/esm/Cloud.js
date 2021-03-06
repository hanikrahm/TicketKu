function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Cloud(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 12.2617 45.7539 L 41.3476 45.7539 C 49.0352 45.7539 54.7539 39.9180 54.7539 32.6758 C 54.7539 25.2227 48.6603 19.7617 40.7148 19.7617 C 37.7851 13.9727 32.3476 10.2461 25.5742 10.2461 C 16.7617 10.2461 9.4960 17.1367 8.7226 25.8555 C 4.4804 27.0742 1.2461 30.7773 1.2461 35.7227 C 1.2461 41.2539 5.2773 45.7539 12.2617 45.7539 Z M 12.2148 41.9805 C 7.4101 41.9805 4.9960 39.3086 4.9960 35.8398 C 4.9960 33.0039 6.6367 30.4961 10.6211 29.4180 C 11.9101 29.0898 12.3789 28.4805 12.4960 27.1445 C 13.0351 19.5039 18.7773 13.9961 25.5742 13.9961 C 30.8476 13.9961 34.9960 16.8789 37.5273 22.0820 C 38.0664 23.2070 38.7695 23.6055 40.1523 23.6055 C 47.0898 23.6055 51.0037 27.8008 51.0037 32.7929 C 51.0037 37.9024 46.9256 41.9805 41.5820 41.9805 Z"
  }));
}

export default Cloud;