function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function GraphSquare(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M39.8007,26.9716904 L37.7131187,34.5161703 C36.9451793,37.2914887 33.9641596,37.6608692 32.5166916,35.1853133 L25.1080387,22.514543 L18.6374479,32.5194194 C17.2531711,34.6597988 14.4997784,34.6728635 13.1014056,32.5384937 L10.1470188,28.0291426 L8.79436566,29.4162759 C7.64381863,30.5961512 5.80391987,31.0733558 4.1992,30.6885156 L4.1992,36.1211 C4.1992,38.5586 5.5117,39.8008 7.8554,39.8008 L36.1679,39.8008 C38.4882,39.8008 39.8007,38.5586 39.8007,36.1211 L39.8007,26.9716904 L39.8007,26.9716904 Z M39.8007,11.9725648 L39.8007,7.8789 C39.8007,5.4414 38.4882,4.1992 36.1679,4.1992 L7.8554,4.1992 C5.5117,4.1992 4.1992,5.4414 4.1992,7.8789 L4.1992,26.3509293 L5.05993065,26.7747254 C5.27246432,26.8793701 5.76371157,26.794777 5.93056963,26.6236656 L7.62744397,24.8835367 C9.29127211,23.1772963 11.9170554,23.4318443 13.2234321,25.4257982 L15.8594374,29.4491961 L22.4267124,19.2948258 C23.8366173,17.1148202 26.6198574,17.1754993 27.9310535,19.417994 L34.5895061,30.8057219 L39.8007,11.9725648 Z M7.7851,43.5742 C2.9101,43.5742 0.4257,41.1602 0.4257,36.3086 L0.4257,7.6914 C0.4257,2.8398 2.9101,0.4258 7.7851,0.4258 L36.2382,0.4258 C41.1366,0.4258 43.5743,2.8633 43.5743,7.6914 L43.5743,36.3086 C43.5743,41.1367 41.1366,43.5742 36.2382,43.5742 L7.7851,43.5742 Z",
    transform: "translate(6 6)"
  }));
}

export default GraphSquare;