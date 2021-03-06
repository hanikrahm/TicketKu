function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function DropFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M17,50 C7.61115925,50 -3.63797881e-12,42.3888407 -3.63797881e-12,33 C-3.63797881e-12,26.0252774 5.12600111,15.432201 15.3780033,1.22077097 C15.5034407,1.0468884 15.656022,0.8943071 15.8299046,0.768869723 C16.7257064,0.122646022 17.9757651,0.324969086 18.621994,1.22076721 C28.873998,15.4321992 34,26.0252768 34,33 C34,42.3888407 26.3888407,50 17,50 Z M16.3088287,40.887119 L16.3088282,40.8871299 C15.5792638,40.8544988 14.958432,41.4131818 14.9142136,42.1421356 C14.9103056,42.2065601 14.9113718,42.27119 14.9174027,42.3354506 C14.9821876,43.0257414 15.5942974,43.5328141 16.2845882,43.4680292 L16.2845862,43.4680079 C19.6925506,43.148165 22.3284845,42.0562918 24.1923882,40.1923882 C26.0562918,38.3284845 27.148165,35.6925506 27.4680292,32.2845882 C27.4740602,32.2203277 27.4751264,32.1556978 27.4712184,32.0912733 C27.4292384,31.3992212 26.8341878,30.8722336 26.1421356,30.9142136 C25.4131818,30.958432 24.8544988,31.5792638 24.8871299,32.3088282 L24.887119,32.3088287 C24.9879262,34.5626711 24.1468735,36.5810485 22.363961,38.363961 C20.5810485,40.1468735 18.5626711,40.9879262 16.3088287,40.887119 Z",
    transform: "translate(11 3)"
  }));
}

export default DropFill;