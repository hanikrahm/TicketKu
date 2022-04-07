function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ForwardEndFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 9.4844 46.3867 C 10.4453 46.3867 11.2422 46.0820 12.1797 45.5195 L 36.0625 31.4805 C 37.3516 30.7071 38.0547 29.8633 38.3125 28.8789 L 38.3125 43.9492 C 38.3125 46.0117 39.3906 47.0898 41.4532 47.0898 L 46.7735 47.0898 C 48.8360 47.0898 49.8906 46.0117 49.8906 43.9492 L 49.8906 12.0273 C 49.8906 9.8945 48.8360 8.9102 46.7735 8.9102 L 41.4532 8.9102 C 39.3906 8.9102 38.3125 9.9883 38.3125 12.0273 L 38.3125 27.0742 C 38.0547 26.1133 37.3516 25.2461 36.0625 24.4961 L 12.1797 10.4336 C 11.2188 9.8711 10.4453 9.5664 9.4844 9.5664 C 7.6563 9.5664 6.1094 10.9727 6.1094 13.5976 L 6.1094 42.3789 C 6.1094 45.0039 7.6563 46.3867 9.4844 46.3867 Z"
  }));
}

export default ForwardEndFill;