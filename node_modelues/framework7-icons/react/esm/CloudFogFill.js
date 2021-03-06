function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function CloudFogFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 12.2618 36.7187 L 41.3477 36.7187 C 48.7772 36.7187 54.5195 31.0937 54.5195 23.8984 C 54.5195 16.6094 48.5195 11.1484 40.5743 11.2187 C 37.5743 5.1719 32.0665 1.6797 25.5743 1.6797 C 16.9259 1.6797 9.6368 8.5 8.9571 17.2422 C 4.4102 18.4844 1.4805 22.3047 1.4805 26.9219 C 1.4805 32.7344 5.8399 36.7187 12.2618 36.7187 Z M 43.4805 43.3984 L 12.9883 43.3984 C 12.1681 43.3984 11.5118 44.0312 11.5118 44.8984 C 11.5118 45.7422 12.1681 46.3750 12.9883 46.3750 L 43.4805 46.3750 C 44.3008 46.3750 44.9571 45.7422 44.9571 44.8984 C 44.9571 44.0312 44.3008 43.3984 43.4805 43.3984 Z M 43.4805 51.3672 L 12.9883 51.3672 C 12.1681 51.3672 11.5118 52 11.5118 52.8437 C 11.5118 53.6875 12.1681 54.3203 12.9883 54.3203 L 43.4805 54.3203 C 44.3008 54.3203 44.9571 53.6875 44.9571 52.8437 C 44.9571 52 44.3008 51.3672 43.4805 51.3672 Z"
  }));
}

export default CloudFogFill;