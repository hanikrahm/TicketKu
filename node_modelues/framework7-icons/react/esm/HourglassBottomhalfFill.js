function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function HourglassBottomhalfFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 16.5156 49.5742 L 39.2734 49.5742 C 41.6640 49.5742 43.0937 48.2617 43.0937 45.7305 L 43.0937 45.1211 C 43.1172 38.6523 36.2266 33.4023 33.2031 30.5430 C 32.3593 29.7461 31.9140 29.0196 31.9140 27.9649 C 31.9140 26.9102 32.3593 26.2071 33.2031 25.3867 C 36.2031 22.4805 43.0937 17.5586 43.0937 10.8320 L 43.0937 10.2696 C 43.0937 7.7383 41.6640 6.4258 39.2734 6.4258 L 16.5156 6.4258 C 14.1718 6.4258 12.8828 7.7383 12.8828 10.0586 L 12.8828 10.8320 C 12.8828 17.5586 19.7734 22.4805 22.7969 25.3867 C 23.6406 26.2071 24.0859 26.9102 24.0859 27.9649 C 24.0859 29.0196 23.6406 29.7461 22.7969 30.5430 C 19.7734 33.4023 12.8828 38.6523 12.8828 45.1211 L 12.8828 45.9414 C 12.8828 48.2617 14.1718 49.5742 16.5156 49.5742 Z M 17.3828 13.4336 L 38.6172 13.4336 C 39.5078 13.4336 39.6484 14.1367 39.1328 15.0977 C 37.0234 18.8945 29.9218 24.9883 28.0000 24.9883 C 26.0781 24.9883 18.9766 18.9414 16.8672 15.0977 C 16.3515 14.1367 16.4922 13.4336 17.3828 13.4336 Z"
  }));
}

export default HourglassBottomhalfFill;