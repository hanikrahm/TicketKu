function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function MapFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 34.1876 51.4141 L 34.1876 12.2032 L 22.6095 5.1250 C 22.2110 4.8672 21.7422 4.7032 21.2969 4.5859 L 21.2969 44.3360 L 33.1095 50.9453 C 33.4844 51.1563 33.8360 51.2969 34.1876 51.4141 Z M 6.2735 50.7110 C 6.8829 50.7110 7.4688 50.5235 8.2422 50.1016 L 18.0860 44.8047 L 18.0860 5.0078 C 17.6641 5.2188 17.2188 5.4532 16.7735 5.7110 L 5.6641 12.0625 C 4.2579 12.8594 3.6016 13.9844 3.6016 15.5547 L 3.6016 48.0156 C 3.6016 49.7500 4.6095 50.7110 6.2735 50.7110 Z M 37.3985 51.3672 C 37.6329 51.2969 37.8673 51.2032 38.1016 51.0391 L 50.3593 44.0781 C 51.7422 43.3047 52.3984 42.1797 52.3984 40.6094 L 52.3984 8.1016 C 52.3984 6.3672 51.4144 5.4297 49.7267 5.4297 C 49.1406 5.4297 48.5315 5.5938 47.7812 6.0157 L 37.3985 11.7813 Z"
  }));
}

export default MapFill;