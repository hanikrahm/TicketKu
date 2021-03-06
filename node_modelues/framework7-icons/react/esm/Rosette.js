function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Rosette(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 40.3633 52.1992 L 40.3633 34.4336 C 44.1836 31.0117 46.5976 26.0430 46.6211 20.5586 C 46.6445 10.2461 38.2070 1.8320 27.9883 1.8320 C 17.7461 1.8320 9.3555 10.2461 9.3555 20.5586 C 9.3555 26.0664 11.7930 31.0586 15.6367 34.5039 L 15.6367 52.1992 C 15.6367 53.5820 16.3867 54.1680 17.3476 54.1680 C 18.1445 54.1680 18.7773 53.6992 19.4102 53.0664 L 27.0273 45.4727 C 27.4258 45.0977 27.7305 44.9570 28.0117 44.9570 C 28.2930 44.9570 28.5742 45.0977 28.9961 45.4727 L 36.6133 53.0664 C 37.2695 53.7227 37.9023 54.1680 38.6758 54.1680 C 39.6602 54.1680 40.3633 53.5820 40.3633 52.1992 Z M 28.0117 35.5117 C 19.6680 35.4883 13.1758 28.8555 13.1758 20.5586 C 13.1758 12.2383 19.6680 5.5586 28.0117 5.5586 C 36.3320 5.5586 42.8242 12.2383 42.8476 20.5586 C 42.8711 28.8555 36.3320 35.5352 28.0117 35.5117 Z"
  }));
}

export default Rosette;