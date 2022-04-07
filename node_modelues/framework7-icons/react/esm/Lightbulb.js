function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Lightbulb(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 19.5039 43.1523 L 36.4726 43.1523 C 37.2695 43.1523 37.7617 42.6601 37.7617 41.8633 L 37.7617 38.1133 C 37.7617 32.4414 46.0117 28.7852 46.0117 18.6601 C 46.0117 7.9961 38.7930 .8711 27.9883 .8711 C 17.1836 .8711 9.9883 7.9961 9.9883 18.6601 C 9.9883 28.7852 18.2148 32.4414 18.2148 38.1133 L 18.2148 41.8633 C 18.2148 42.6601 18.7304 43.1523 19.5039 43.1523 Z M 21.7070 38.1601 C 21.7070 31.2695 13.5273 27.5898 13.5273 18.6836 C 13.5273 10.1054 19.3164 4.4101 27.9883 4.4101 C 36.6601 4.4101 42.4726 10.1054 42.4726 18.6836 C 42.4726 27.5898 34.2695 31.2695 34.2695 38.1601 L 34.2695 39.6133 L 21.7070 39.6133 Z M 20.3711 49.4805 L 35.6055 49.4805 C 36.8008 49.4805 37.7617 48.4961 37.7617 47.2773 C 37.7617 46.0586 36.8008 45.0742 35.6055 45.0742 L 20.3711 45.0742 C 19.1758 45.0742 18.2148 46.0586 18.2148 47.2773 C 18.2148 48.4961 19.1758 49.4805 20.3711 49.4805 Z M 27.9883 55.1289 C 31.2226 55.1289 33.4961 53.6523 33.7304 51.3789 L 22.2461 51.3789 C 22.4570 53.6523 24.7304 55.1289 27.9883 55.1289 Z"
  }));
}

export default Lightbulb;