function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function View3d(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 11.6782 45.1150 C 18.7127 45.1150 23.7702 41.0000 23.7702 35.3908 C 23.7702 30.8391 20.5058 27.8506 15.2644 27.5057 L 15.2644 27.4137 C 19.6323 26.6782 22.3449 23.7586 22.3449 19.6666 C 22.3449 14.7011 17.8391 11.1148 11.5862 11.1148 C 6.8506 11.1148 3.0115 13.1838 1.3793 16.6091 C .9655 17.4597 .7586 18.2413 .7586 19.1379 C .7586 20.2183 1.4942 20.9310 2.5517 20.9310 C 3.6092 20.9310 4.0690 20.5402 4.4138 19.4597 C 5.4023 16.4482 7.9311 14.7240 11.4483 14.7240 C 15.5403 14.7240 18.1840 16.8850 18.1840 20.2183 C 18.1840 23.6436 15.3794 25.9195 11.2414 25.9195 L 8.7127 25.9195 C 7.6322 25.9195 6.9195 26.5862 6.9195 27.6436 C 6.9195 28.6781 7.6322 29.3678 8.7127 29.3678 L 11.2874 29.3678 C 16.3909 29.3678 19.4253 31.5287 19.4253 35.3678 C 19.4253 38.9081 16.2759 41.4138 11.7242 41.4138 C 7.7471 41.4138 4.8966 39.6437 3.8621 36.6092 C 3.5173 35.6207 2.9425 35.1839 1.9770 35.1839 C .7816 35.1839 0 35.9196 0 37.1150 C 0 37.9196 .2069 38.6552 .6437 39.4598 C 2.5517 43.0920 6.5517 45.1150 11.6782 45.1150 Z M 30.3220 44.5403 L 39.7473 44.5403 C 50.0462 44.5403 56.0000 38.4023 56.0000 28.0345 C 56.0000 17.6666 50.0462 11.6666 39.7473 11.6666 L 30.3220 11.6666 C 29.0576 11.6666 28.2530 12.4942 28.2530 13.7815 L 28.2530 42.4023 C 28.2530 43.7127 29.0576 44.5403 30.3220 44.5403 Z M 32.4139 40.7701 L 32.4139 15.3907 L 39.4714 15.3907 C 47.3565 15.3907 51.7472 19.9885 51.7472 28.0574 C 51.7472 36.1724 47.3565 40.7701 39.4714 40.7701 Z"
  }));
}

export default View3d;