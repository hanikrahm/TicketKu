function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function BookmarkFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 12.0156 53.1602 C 13.2344 53.1602 13.8672 52.4805 16.3047 50.1836 L 26.8516 40.0586 C 27.3906 39.5664 27.6719 39.4258 28 39.4258 C 28.3281 39.4258 28.6563 39.5898 29.1484 40.0586 L 41.1250 51.5898 C 42.0625 52.4805 42.7890 53.1602 43.9844 53.1602 C 45.4609 53.1602 46.5859 52.2696 46.5859 50.1367 L 46.5859 10.1758 C 46.5859 5.3008 44.1719 2.8398 39.3203 2.8398 L 16.6797 2.8398 C 11.8516 2.8398 9.4141 5.3008 9.4141 10.1758 L 9.4141 50.1367 C 9.4141 52.2696 10.5625 53.1602 12.0156 53.1602 Z"
  }));
}

export default BookmarkFill;