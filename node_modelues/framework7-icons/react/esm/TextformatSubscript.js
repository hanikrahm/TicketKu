function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function TextformatSubscript(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 9.4844 42.3320 C 10.6563 42.3320 11.2188 41.8633 11.6875 40.5742 L 14.6875 32.2774 L 28.5156 32.2774 L 31.5390 40.5742 C 31.9844 41.8633 32.5703 42.3320 33.7422 42.3320 C 35.0078 42.3320 35.8516 41.5820 35.8516 40.4102 C 35.8516 40.0117 35.7812 39.6602 35.5937 39.1445 L 24.6016 9.8945 C 24.0625 8.4414 23.1016 7.7383 21.6016 7.7383 C 20.1484 7.7383 19.1875 8.4414 18.6719 9.8711 L 7.6563 39.1680 C 7.4688 39.6836 7.3984 40.0352 7.3984 40.4336 C 7.3984 41.6055 8.1953 42.3320 9.4844 42.3320 Z M 15.8359 28.6914 L 21.5312 12.9180 L 21.6719 12.9180 L 27.3437 28.6914 Z M 46.8906 48.2617 C 47.9219 48.2617 48.6016 47.5821 48.6016 46.5977 L 48.6016 30.5664 C 48.6016 29.3945 47.8984 28.6914 46.7266 28.6914 C 45.6953 28.6914 45.2031 29.0664 44.5 29.5586 L 40.75 32.1133 C 40.0937 32.5821 39.8359 32.9805 39.8359 33.4961 C 39.8359 34.2695 40.3984 34.8555 41.1250 34.8555 C 41.5937 34.8555 41.8984 34.7148 42.3672 34.3867 L 45.0859 32.5586 L 45.1797 32.5586 L 45.1797 46.5977 C 45.1797 47.5821 45.8594 48.2617 46.8906 48.2617 Z"
  }));
}

export default TextformatSubscript;