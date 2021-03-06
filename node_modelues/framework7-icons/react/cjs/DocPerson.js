"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DocPerson(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M8.0547,0.875 L19.1875,0.875 C21.7378111,0.875 23.179816,1.24443539 24.8736613,2.90420892 L25.0703,3.1015 L38.0078,16.25 C39.5595241,17.8404552 40.0517781,19.0136699 40.1753935,21.0846502 L40.1990172,21.6218597 L40.1990172,21.6218597 L40.2096796,22.2010421 L40.2096796,22.2010421 L40.2109,43.789 C40.2109,48.5665 37.8924944,51.0255944 33.2334711,51.1220472 L32.9453,51.125 L8.0547,51.125 C3.323162,51.125 0.88755624,48.784025 0.792024625,44.079957 L0.7891,43.789 L0.7891,8.2344 C0.7891,3.4569 3.130075,0.97533224 7.7678831,0.87798053 L8.0547,0.875 Z M18.6718,4.6484 L8.2656,4.6484 C5.90672903,4.6484 4.64537107,5.89959667 4.56644774,8.08323938 L4.5625,8.3047 L4.5625,43.7187 C4.5625,45.9868935 5.74776535,47.2672411 8.01216668,47.3474839 L8.2422,47.3515 L32.7578,47.3515 C35.116671,47.3515 36.3561143,46.14432 36.4336237,43.9422187 L36.4375,43.7187 L36.4375,22.6718 L23.0781,22.6718 C20.2548371,22.6718 18.7586623,21.3005481 18.6754713,18.5150505 L18.6718,18.2656 L18.6718,4.6484 Z M20.5050523,36.6022841 C25.7475841,36.6022841 29.0165773,40.2052455 29.0165773,42.8164069 C29.0165773,43.668309 28.4980281,44.1220445 27.0623886,44.1598893 L26.8608977,44.1624705 L14.14925,44.1624705 C12.5501409,44.1624705 11.9834227,43.7070319 11.9834227,42.8164069 C11.9834227,40.2052455 15.2524159,36.6022841 20.5050523,36.6022841 Z M20.5050523,25.9653932 C22.6709227,25.9653932 24.5533477,27.8174614 24.5533477,30.3173 C24.5533477,32.8474955 22.6810273,34.7906773 20.5050523,34.7906773 C18.339225,34.7906773 16.4567568,32.8474955 16.4567568,30.3375523 C16.4567568,27.857966 18.339225,25.9653932 20.5050523,25.9653932 Z M22.2109,5.375 L22.2109,17.8203 C22.2109,18.7026529 22.5430799,19.086736 23.344251,19.1288691 L23.5,19.1328 L35.7109,19.1328 L22.2109,5.375 Z",
    transform: "translate(8 2)"
  }));
}

var _default = DocPerson;
exports["default"] = _default;