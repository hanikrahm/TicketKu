function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Purchased(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 10.9961 40.0937 C 10.9961 40.6562 11.2539 41.1719 11.6289 41.5469 L 19.2929 49.1875 C 20.0429 49.9609 20.8867 50.3125 21.7070 50.3125 C 22.5273 50.3125 23.3242 49.9375 24.0742 49.1875 L 31.7617 41.5234 C 32.1602 41.1250 32.3945 40.6094 32.3945 40.0703 C 32.3945 39.0156 31.5508 38.2188 30.6133 38.2188 C 29.9102 38.2188 29.4648 38.4766 29.0898 38.8516 L 27.0742 40.8672 L 23.4648 44.9687 L 23.6992 37.3984 L 23.6992 19.6094 C 23.6992 13.6797 26.9805 9.6953 32.4414 9.6953 C 37.5039 9.6953 41.0429 13.2344 41.0429 18.5547 C 41.0429 23.6875 37.5742 27.2968 32.7929 27.2968 C 31.1289 27.2968 30.7070 26.9453 29.8867 26.9453 C 28.8789 26.9453 28.0586 27.6250 28.0586 28.6797 C 28.0586 29.3828 28.4102 29.9219 28.9492 30.3203 C 29.8398 31.0234 31.3164 31.2812 32.6758 31.2812 C 40.1289 31.2812 45.0039 26.0781 45.0039 18.5547 C 45.0039 10.8203 39.8711 5.6875 32.4414 5.6875 C 24.8242 5.6875 19.6680 10.75 19.6680 19.7734 L 19.6680 37.4219 L 19.9024 44.9687 L 16.3398 40.8906 L 14.3008 38.8750 C 13.9258 38.5 13.4805 38.2422 12.7773 38.2422 C 11.8398 38.2422 10.9961 39.0390 10.9961 40.0937 Z"
  }));
}

export default Purchased;