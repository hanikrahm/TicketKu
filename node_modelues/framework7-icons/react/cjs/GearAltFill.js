"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function GearAltFill(props) {
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
    d: "M18.7917819,47.4333262 C16.3366849,46.8900976 14.0228998,45.970889 11.9139205,44.7391942 L12.0377719,42.3143528 C12.2066839,39.007289 9.65396742,36.4637608 6.35564535,36.6322262 L3.67513117,36.7691365 C2.41991367,34.7753833 1.4499386,32.5839645 0.822478633,30.2521549 L2.92622342,28.3528693 C5.38410946,26.1338609 5.3776124,22.5302717 2.92622342,20.3171289 L0.682944646,18.2918704 C1.23975257,16.0094974 2.12293759,13.8550207 3.28024752,11.8806926 L6.35564535,12.0377719 C9.66270916,12.2066839 12.2062374,9.65396742 12.0377719,6.35564535 L11.8806926,3.28024752 C13.8550207,2.12293759 16.0094974,1.23975257 18.2918704,0.682944646 L20.3171289,2.92622342 C22.5361373,5.38410946 26.1397265,5.3776124 28.3528693,2.92622342 L30.2521549,0.822478633 C32.5839645,1.4499386 34.7753833,2.41991367 36.7691418,3.67513451 L36.6322262,6.35564535 C36.4633143,9.66270916 39.0160307,12.2062374 42.3143528,12.0377719 L44.7391942,11.9139205 C45.970889,14.0228998 46.8900976,16.3366849 47.4333262,18.7917819 L45.7437747,20.3171289 C43.2858887,22.5361373 43.2923858,26.1397265 45.7437747,28.3528693 L47.3039836,29.7614443 C46.6873969,32.2638048 45.6782881,34.6116668 44.3457025,36.735985 L42.3143528,36.6322262 C39.007289,36.4633143 36.4637608,39.0160307 36.6322262,42.3143528 L36.7359799,44.3457057 C34.6116668,45.6782881 32.2638048,46.6873969 29.7614443,47.3039836 L28.3528693,45.7437747 C26.1338609,43.2858887 22.5302717,43.2923858 20.3171289,45.7437747 L18.7917819,47.4333262 Z M24,34 C29.5228475,34 34,29.5228475 34,24 C34,18.4771525 29.5228475,14 24,14 C18.4771525,14 14,18.4771525 14,24 C14,29.5228475 18.4771525,34 24,34 Z",
    transform: "translate(4 4)"
  }));
}

var _default = GearAltFill;
exports["default"] = _default;