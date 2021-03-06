function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function RectangleStackBadgeMinus(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 18.4416 6.1183 L 46.8986 6.1183 C 46.7684 4.2894 45.7231 3.3096 43.7201 3.3096 L 21.6205 3.3096 C 19.6173 3.3096 18.5723 4.2894 18.4416 6.1183 Z M 14.1741 12.1494 L 51.1664 12.1494 C 50.8395 10.1681 49.9035 9.0795 47.7262 9.0795 L 17.6143 9.0795 C 15.4370 9.0795 14.5007 10.1681 14.1741 12.1494 Z M 49.1633 15.6766 L 16.1555 15.6766 C 11.5832 15.6766 9.3188 17.9192 9.3188 22.4262 L 9.3188 30.9830 C 9.9067 30.9176 10.4945 30.8741 11.0606 30.8741 C 11.6485 30.8741 12.2364 30.9176 12.8242 30.9830 L 12.8242 22.6004 C 12.8242 20.3360 14.0435 19.1820 16.1990 19.1820 L 49.1196 19.1820 C 51.2533 19.1820 52.4943 20.3360 52.4943 22.6004 L 52.4943 45.3531 C 52.4943 47.6174 51.2533 48.7932 49.1196 48.7932 L 24.4945 48.7932 C 24.1679 50.0342 23.6453 51.2100 22.9704 52.2986 L 49.1633 52.2986 C 53.7138 52.2986 56.0000 50.0342 56.0000 45.5490 L 56.0000 22.4262 C 56.0000 17.9410 53.7138 15.6766 49.1633 15.6766 Z M 11.0606 56 C 17.1352 56 22.1213 51.0140 22.1213 44.9394 C 22.1213 38.8647 17.1352 33.8787 11.0606 33.8787 C 5.0078 33.8787 0 38.8647 0 44.9394 C 0 51.0140 5.0078 56 11.0606 56 Z M 5.4650 46.2675 C 4.7465 46.2675 4.1368 45.6361 4.1368 44.9394 C 4.1368 44.2209 4.7465 43.5895 5.4650 43.5895 L 16.6562 43.5895 C 17.3965 43.5895 18.0062 44.2209 18.0062 44.9394 C 18.0062 45.6361 17.3965 46.2675 16.6562 46.2675 Z"
  }));
}

export default RectangleStackBadgeMinus;