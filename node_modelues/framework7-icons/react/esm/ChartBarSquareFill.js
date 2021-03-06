function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ChartBarSquareFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M36.2382,0.4258 C41.1366,0.4258 43.5743,2.8633 43.5743,7.6914 L43.5743,7.6914 L43.5743,36.3086 C43.5743,41.1367 41.1366,43.5742 36.2382,43.5742 L36.2382,43.5742 L7.7851,43.5742 C2.9101,43.5742 0.4257,41.1602 0.4257,36.3086 L0.4257,36.3086 L0.4257,7.6914 C0.4257,2.8398 2.9101,0.4258 7.7851,0.4258 L7.7851,0.4258 Z M14,16 L12,16 C10.8954305,16 10,16.8954305 10,18 L10,32 C10,33.1045695 10.8954305,34 12,34 L14,34 C15.1045695,34 16,33.1045695 16,32 L16,18 C16,16.8954305 15.1045695,16 14,16 Z M23,10 L21,10 C19.8954305,10 19,10.8954305 19,12 L19,32 C19,33.1045695 19.8954305,34 21,34 L23,34 C24.1045695,34 25,33.1045695 25,32 L25,12 C25,10.8954305 24.1045695,10 23,10 Z M32,22 L30,22 C28.8954305,22 28,22.8954305 28,24 L28,32 C28,33.1045695 28.8954305,34 30,34 L32,34 C33.1045695,34 34,33.1045695 34,32 L34,24 C34,22.8954305 33.1045695,22 32,22 Z",
    transform: "translate(6 6)"
  }));
}

export default ChartBarSquareFill;