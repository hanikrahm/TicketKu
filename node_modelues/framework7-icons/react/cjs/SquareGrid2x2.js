"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SquareGrid2x2(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 10.9023 26.0664 L 21.5898 26.0664 C 24.5663 26.0664 26.0663 24.5664 26.0663 21.4727 L 26.0663 10.9961 C 26.0663 7.9023 24.5663 6.4258 21.5898 6.4258 L 10.9023 6.4258 C 7.9257 6.4258 6.4257 7.9023 6.4257 10.9961 L 6.4257 21.4727 C 6.4257 24.5664 7.9257 26.0664 10.9023 26.0664 Z M 34.4335 26.0664 L 45.0976 26.0664 C 48.0976 26.0664 49.5743 24.5664 49.5743 21.4727 L 49.5743 10.9961 C 49.5743 7.9023 48.0976 6.4258 45.0976 6.4258 L 34.4335 6.4258 C 31.4570 6.4258 29.9570 7.9023 29.9570 10.9961 L 29.9570 21.4727 C 29.9570 24.5664 31.4570 26.0664 34.4335 26.0664 Z M 10.9492 22.7617 C 10.1288 22.7617 9.7304 22.3398 9.7304 21.4727 L 9.7304 10.9961 C 9.7304 10.1523 10.1288 9.7305 10.9492 9.7305 L 21.5195 9.7305 C 22.3398 9.7305 22.7617 10.1523 22.7617 10.9961 L 22.7617 21.4727 C 22.7617 22.3398 22.3398 22.7617 21.5195 22.7617 Z M 34.4804 22.7617 C 33.6601 22.7617 33.2617 22.3398 33.2617 21.4727 L 33.2617 10.9961 C 33.2617 10.1523 33.6601 9.7305 34.4804 9.7305 L 45.0742 9.7305 C 45.8710 9.7305 46.2695 10.1523 46.2695 10.9961 L 46.2695 21.4727 C 46.2695 22.3398 45.8710 22.7617 45.0742 22.7617 Z M 10.9023 49.5742 L 21.5898 49.5742 C 24.5663 49.5742 26.0663 48.0977 26.0663 45.0039 L 26.0663 34.5039 C 26.0663 31.4336 24.5663 29.9336 21.5898 29.9336 L 10.9023 29.9336 C 7.9257 29.9336 6.4257 31.4336 6.4257 34.5039 L 6.4257 45.0039 C 6.4257 48.0977 7.9257 49.5742 10.9023 49.5742 Z M 34.4335 49.5742 L 45.0976 49.5742 C 48.0976 49.5742 49.5743 48.0977 49.5743 45.0039 L 49.5743 34.5039 C 49.5743 31.4336 48.0976 29.9336 45.0976 29.9336 L 34.4335 29.9336 C 31.4570 29.9336 29.9570 31.4336 29.9570 34.5039 L 29.9570 45.0039 C 29.9570 48.0977 31.4570 49.5742 34.4335 49.5742 Z M 10.9492 46.2695 C 10.1288 46.2695 9.7304 45.8477 9.7304 45.0039 L 9.7304 34.5274 C 9.7304 33.6602 10.1288 33.2383 10.9492 33.2383 L 21.5195 33.2383 C 22.3398 33.2383 22.7617 33.6602 22.7617 34.5274 L 22.7617 45.0039 C 22.7617 45.8477 22.3398 46.2695 21.5195 46.2695 Z M 34.4804 46.2695 C 33.6601 46.2695 33.2617 45.8477 33.2617 45.0039 L 33.2617 34.5274 C 33.2617 33.6602 33.6601 33.2383 34.4804 33.2383 L 45.0742 33.2383 C 45.8710 33.2383 46.2695 33.6602 46.2695 34.5274 L 46.2695 45.0039 C 46.2695 45.8477 45.8710 46.2695 45.0742 46.2695 Z"
  }));
}

var _default = SquareGrid2x2;
exports["default"] = _default;