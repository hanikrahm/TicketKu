"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function LogoTwitter(props) {
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
    d: "M15.724,40.6279381 C34.592,40.6279381 44.912,24.9959381 44.912,11.4399381 C44.912,10.9959381 44.912,10.5539381 44.882,10.1139381 C46.8896627,8.66175977 48.6227109,6.86369685 50,4.80393806 C48.1277581,5.63354161 46.1416586,6.17759536 44.108,6.41793806 C46.249488,5.13590218 47.852247,3.11948203 48.618,0.743938063 C46.604315,1.93884869 44.4012922,2.7809621 42.104,3.23393806 C38.9241655,-0.14727338 33.8714387,-0.974836769 29.7790985,1.21529792 C25.6867584,3.40543261 23.57255,8.06858952 24.622,12.5899381 C16.3737915,12.1764371 8.68895156,8.28058461 3.48,1.87193806 C0.757245513,6.55922752 2.14797577,12.555657 6.656,15.5659381 C5.0234824,15.5175532 3.42655874,15.0771644 2,14.2819381 L2,14.4119381 C2.00133627,19.295124 5.44350298,23.5010084 10.23,24.4679381 C8.71973919,24.8798182 7.13516117,24.9400267 5.598,24.6439381 C6.94189586,28.8227837 10.7931491,31.6855058 15.182,31.7679381 C11.5494701,34.6228019 7.06211902,36.1725935 2.442,36.1679381 C1.62580714,36.1663712 0.810408131,36.116953 0,36.0199381 C4.6912719,39.0304912 10.1498268,40.6273719 15.724,40.6199381",
    transform: "translate(3 7)"
  }));
}

var _default = LogoTwitter;
exports["default"] = _default;