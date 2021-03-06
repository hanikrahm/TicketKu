"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function LayersFill(props) {
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
    d: "M37.4,23 L44.2864054,27.3040034 C44.5439437,27.4649648 44.7614427,27.6824639 44.9224042,27.9400021 C45.5078248,28.8766752 45.2230785,30.1105759 44.2864054,30.6959966 L29.3599873,40.0250079 C25.4687439,42.4570351 20.5312561,42.4570351 16.6400127,40.0250079 L1.71359457,30.6959966 C1.45605631,30.5350352 1.23855726,30.3175361 1.07759584,30.0599979 C0.492175181,29.1233248 0.77692151,27.8894241 1.71359457,27.3040034 L8.6,23 L16.6400127,28.0250079 C20.5312561,30.4570351 25.4687439,30.4570351 29.3599873,28.0250079 L37.4,23 Z M29.3599873,1.97499205 L44.2864054,11.3040034 C44.5439437,11.4649648 44.7614427,11.6824639 44.9224042,11.9400021 C45.5078248,12.8766752 45.2230785,14.1105759 44.2864054,14.6959966 L29.3599873,24.0250079 C25.4687439,26.4570351 20.5312561,26.4570351 16.6400127,24.0250079 L1.71359457,14.6959966 C1.45605631,14.5350352 1.23855726,14.3175361 1.07759584,14.0599979 C0.492175181,13.1233248 0.77692151,11.8894241 1.71359457,11.3040034 L16.6400127,1.97499205 C20.5312561,-0.457035086 25.4687439,-0.457035086 29.3599873,1.97499205 Z",
    transform: "translate(5 7)"
  }));
}

var _default = LayersFill;
exports["default"] = _default;