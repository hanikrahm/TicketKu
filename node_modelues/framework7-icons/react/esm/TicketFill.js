function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function TicketFill(props) {
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
    d: "M-1.63137641e-05,8.27878167 L-1.63137641e-05,4 C-1.63137641e-05,1.790861 1.790861,0 4,0 L46,0 C48.209139,0 50.0000171,1.790861 50.0000171,4 L50.0000171,8.44924833 C50.0000171,9.73351889 49.2320389,10.8933121 48.0496693,11.3946633 C46.2572792,12.1546768 45,13.9305117 45,16 C45,18.0871878 46.2788772,19.8756779 48.0957752,20.6246137 C49.248091,21.0996049 50.0000171,22.2228557 50.0000171,23.4692297 L50.0000171,28 C50.0000171,30.209139 48.209139,32 46,32 L4,32 C1.790861,32 -1.63137641e-05,30.209139 -1.63137641e-05,28 L-1.63137641e-05,23.737278 C-1.63137641e-05,22.3669055 0.803248902,21.1237726 2.05256398,20.5606272 C3.79034591,19.7772988 5,18.0299143 5,16 C5,13.9667184 3.78632936,12.2169047 2.04391157,11.4354826 C0.800260191,10.8777422 -1.63137641e-05,9.64177216 -1.63137641e-05,8.27878167 L-1.63137641e-05,8.27878167 Z M36,11 C37.6568542,11 39,9.65685425 39,8 C39,6.34314575 37.6568542,5 36,5 C34.3431458,5 33,6.34314575 33,8 C33,9.65685425 34.3431458,11 36,11 Z M36,19 C37.6568542,19 39,17.6568542 39,16 C39,14.3431458 37.6568542,13 36,13 C34.3431458,13 33,14.3431458 33,16 C33,17.6568542 34.3431458,19 36,19 Z M36,27 C37.6568542,27 39,25.6568542 39,24 C39,22.3431458 37.6568542,21 36,21 C34.3431458,21 33,22.3431458 33,24 C33,25.6568542 34.3431458,27 36,27 Z",
    transform: "translate(3 12)"
  }));
}

export default TicketFill;