function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Speaker1(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 33.1446 49.5039 C 34.7384 49.5039 35.8868 48.3320 35.8868 46.7617 L 35.8868 9.3789 C 35.8868 7.8086 34.7384 6.4961 33.0977 6.4961 C 31.9493 6.4961 31.1993 7.0586 29.9337 8.1836 L 18.9181 17.9570 C 18.7774 18.0977 18.5665 18.1680 18.3321 18.1680 L 11.3712 18.1680 C 8.0430 18.1680 6.4024 19.8320 6.4024 23.3711 L 6.4024 32.6992 C 6.4024 36.2383 8.0430 37.9024 11.3712 37.9024 L 18.3321 37.9024 C 18.5665 37.9024 18.7774 37.9726 18.9181 38.1133 L 29.9337 47.9805 C 31.0821 49.0117 31.9962 49.5039 33.1446 49.5039 Z M 31.7852 44.5586 C 31.6681 44.5586 31.5274 44.4883 31.3868 44.3477 L 21.0040 34.9961 C 20.4415 34.4805 19.9728 34.3633 19.3399 34.3633 L 11.5352 34.3633 C 10.6212 34.3633 10.1759 33.9414 10.1759 33.0039 L 10.1759 23.0664 C 10.1759 22.1524 10.6212 21.7070 11.5352 21.7070 L 19.3399 21.7070 C 19.9728 21.7070 20.4181 21.6133 21.0040 21.0742 L 31.3868 11.6524 C 31.5040 11.5586 31.6446 11.4648 31.7852 11.4648 C 31.9962 11.4648 32.1134 11.6055 32.1134 11.7929 L 32.1134 44.2070 C 32.1134 44.4180 31.9962 44.5586 31.7852 44.5586 Z M 44.0430 38.3945 C 44.8399 38.9570 45.9884 38.7695 46.6681 37.8555 C 48.4960 35.3945 49.5976 31.7851 49.5976 28.1055 C 49.5976 24.4258 48.4729 20.8398 46.6681 18.3320 C 45.9884 17.4180 44.8634 17.2305 44.0430 17.7929 C 43.0118 18.4726 42.8946 19.6680 43.6446 20.6992 C 45.004 22.5273 45.8243 25.3164 45.8243 28.1055 C 45.8243 30.8945 44.9571 33.6836 43.6212 35.5351 C 42.9181 36.5429 43.0352 37.6914 44.0430 38.3945 Z"
  }));
}

export default Speaker1;