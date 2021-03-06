function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function BubbleRightFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 39.0391 51.9297 C 40.3750 51.9297 41.1250 50.9687 41.1250 49.5156 L 41.1250 42.6953 L 43.7500 42.6953 C 49.1641 42.6953 52.8203 38.9922 52.8203 33.3672 L 52.8203 13.0469 C 52.8203 7.3984 49.1641 4.0703 43.7500 4.0703 L 12.2500 4.0703 C 6.6250 4.0703 3.1797 7.4219 3.1797 13.0469 L 3.1797 33.3672 C 3.1797 38.9688 6.6250 42.6953 12.2500 42.6953 L 27.8828 42.6953 L 36.3438 50.4297 C 37.4453 51.4609 38.1016 51.9297 39.0391 51.9297 Z"
  }));
}

export default BubbleRightFill;