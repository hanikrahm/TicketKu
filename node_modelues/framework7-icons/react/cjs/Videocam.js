"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Videocam(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M29,0 C32.8659932,0 36,3.13400675 36,7 L36,10.261 L43.5999096,3.77068042 C44.1295012,3.3183501 44.7887131,3.04945248 45.4793999,3.00019625 L45.71066,2.99196205 C47.4436914,2.99196205 48.8599059,4.34841681 48.9555152,6.05753814 L48.96066,6.24196205 L48.96066,25.9014683 C48.96066,26.6666961 48.6906425,27.4073827 48.1981634,27.993077 C47.0857837,29.3160053 45.143496,29.5293645 43.7744003,28.511847 L43.6190513,28.3889718 L36,21.983 L36,25 C36,28.8659932 32.8659932,32 29,32 L7,32 C3.13400675,32 0,28.8659932 0,25 L0,7 C0,3.13400675 3.13400675,0 7,0 L29,0 Z M29,3 L7,3 C4.85780461,3 3.10892112,4.68396847 3.00489531,6.80035966 L3,7 L3,25 C3,27.1421954 4.68396847,28.8910789 6.80035966,28.9951047 L7,29 L29,29 C31.1421954,29 32.8910789,27.3160315 32.9951047,25.1996403 L33,25 L33,7 C33,4.85780461 31.3160315,3.10892112 29.1996403,3.00489531 L29,3 Z M45.71066,5.99196205 C45.6709751,5.99196205 45.6321584,6.00140236 45.5972785,6.01915093 L45.5482946,6.05186346 L36.396837,13.8682298 L36.3596833,13.9076863 C36.3380383,13.9363555 36.3228173,13.9693731 36.315075,14.0044514 L36.3092024,14.0583284 L36.3092024,18.2064969 L36.3151812,18.2608529 C36.3230618,18.2962279 36.3385501,18.3294871 36.3605538,18.3582852 L36.3983094,18.3978433 L45.549767,26.0928148 L45.6063817,26.1287514 C45.7061,26.1745719 45.8279575,26.1504261 45.9020064,26.0623613 C45.9272617,26.0323257 45.9449116,25.9969912 45.953872,25.9593311 L45.96066,25.9014683 L45.96066,6.24196205 L45.9540573,6.18463934 C45.9281468,6.07419546 45.8290067,5.99196205 45.71066,5.99196205 Z",
    transform: "translate(3.5 12)"
  }));
}

var _default = Videocam;
exports["default"] = _default;