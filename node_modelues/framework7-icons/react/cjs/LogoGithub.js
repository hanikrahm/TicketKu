"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function LogoGithub(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M0,25.0007674 C0,36.0462261 7.1625894,45.4157586 17.0969029,48.7215691 C18.3477086,48.9517788 18.8035237,48.1798091 18.8035237,47.5168053 C18.8035237,46.9243992 18.7820375,45.3512999 18.7697597,43.2656005 C11.8158937,44.7757758 10.3486909,39.9137481 10.3486909,39.9137481 C9.21145523,37.0253845 7.57236256,36.2564842 7.57236256,36.2564842 C5.30249547,34.706406 7.74425243,34.7371006 7.74425243,34.7371006 C10.2535376,34.9135946 11.5734062,37.3139139 11.5734062,37.3139139 C13.8033703,41.1338592 17.4253353,40.0303877 18.8495657,39.3904049 C19.0767059,37.7758679 19.7228276,36.6739311 20.4364775,36.0492956 C14.8853556,35.4185211 9.04877375,33.2729672 9.04877375,23.6931766 C9.04877375,20.9644249 10.0233279,18.7313914 11.6225176,16.9848676 C11.3646828,16.3525584 10.5067682,13.8095092 11.8680745,10.3686424 C11.8680745,10.3686424 13.9660518,9.69643022 18.7421345,12.9316431 C20.73575,12.3760705 22.875165,12.0998189 25.0007674,12.0890758 C27.124835,12.0998189 29.2627152,12.3760705 31.2594002,12.9316431 C36.0324135,9.69643022 38.1273213,10.3686424 38.1273213,10.3686424 C39.4916971,13.8095092 38.6337825,16.3525584 38.3774824,16.9848676 C39.9797416,18.7313914 40.9466221,20.9644249 40.9466221,23.6931766 C40.9466221,33.2975229 35.1008318,35.4108475 29.5328279,36.0293441 C30.4291108,36.8013137 31.2287056,38.3268363 31.2287056,40.6596274 C31.2287056,44.0007367 31.198011,46.697259 31.198011,47.5168053 C31.198011,48.185948 31.6492219,48.9640566 32.9169097,48.7200344 C42.8435495,45.4065502 50,36.0431566 50,25.0007674 C50,11.1927929 38.8056724,0 24.9976979,0 C11.1943276,0 0,11.1927929 0,25.0007674 Z",
    transform: "translate(3 3)"
  }));
}

var _default = LogoGithub;
exports["default"] = _default;