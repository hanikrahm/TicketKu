function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function GamecontrollerAltFill(props) {
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
    d: "M26,4.19774169 C32.1246521,4.15319844 40.5436115,-3.72780341 45.8036054,2.73567487 C51.0635992,9.19915314 53.0019674,26.086104 49.6166782,33.4829125 C48.4190056,36.09981 40.9112338,36.09981 36.2709234,26.5399879 L15.7290766,26.5399879 C11.0887662,36.09981 3.58099442,36.09981 2.38332183,33.4829125 C-1.00196739,26.086104 1.28965372,8.76507605 6.19639462,2.73567487 C11.1031355,-3.29372632 20.0255806,4.15429105 26,4.19774169 Z M15,12 L15,9.5 C15,8.67157288 14.3284271,8 13.5,8 C12.6715729,8 12,8.67157288 12,9.5 L12,12 L9.5,12 C8.67157288,12 8,12.6715729 8,13.5 C8,14.3284271 8.67157288,15 9.5,15 L12,15 L12,17.5 C12,18.3284271 12.6715729,19 13.5,19 C14.3284271,19 15,18.3284271 15,17.5 L15,15 L17.5,15 C18.3284271,15 19,14.3284271 19,13.5 C19,12.6715729 18.3284271,12 17.5,12 L15,12 Z M38,12 C39.1045695,12 40,11.1045695 40,10 C40,8.8954305 39.1045695,8 38,8 C36.8954305,8 36,8.8954305 36,10 C36,11.1045695 36.8954305,12 38,12 Z M42,16 C43.1045695,16 44,15.1045695 44,14 C44,12.8954305 43.1045695,12 42,12 C40.8954305,12 40,12.8954305 40,14 C40,15.1045695 40.8954305,16 42,16 Z M34,16 C35.1045695,16 36,15.1045695 36,14 C36,12.8954305 35.1045695,12 34,12 C32.8954305,12 32,12.8954305 32,14 C32,15.1045695 32.8954305,16 34,16 Z M38,20 C39.1045695,20 40,19.1045695 40,18 C40,16.8954305 39.1045695,16 38,16 C36.8954305,16 36,16.8954305 36,18 C36,19.1045695 36.8954305,20 38,20 Z",
    transform: "translate(2 10)"
  }));
}

export default GamecontrollerAltFill;