"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SortUpCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M24,0 C37.254834,0 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 C10.745166,48 0,37.254834 0,24 C0,10.745166 10.745166,0 24,0 Z M23.7813,30.6953 C22.75,30.6953 22,31.3516 22,32.3359 C22,33.3437 22.75,34 23.7813,34 L39.3516,34 C40.3828,34 41.1094,33.3437 41.1094,32.3359 C41.1094,31.3516 40.3828,30.6953 39.3516,30.6953 L23.7813,30.6953 Z M26.7188,22.9375 C25.6876,22.9375 24.961,23.5937 24.961,24.5781 C24.961,25.5859 25.6876,26.2422 26.7188,26.2422 L39.3516,26.2422 C40.3829,26.2422 41.1094,25.5859 41.1094,24.5781 C41.1094,23.5937 40.3829,22.9375 39.3516,22.9375 L26.7188,22.9375 Z M29.9609,15.1798 C28.9297,15.1798 28.1797,15.836 28.1797,16.8204 C28.1797,17.8282 28.9297,18.4844 29.9609,18.4844 L39.3281,18.4844 C40.3594,18.4844 41.1094,17.8282 41.1094,16.8204 C41.1094,15.836 40.3594,15.1798 39.3281,15.1798 L29.9609,15.1798 Z M16.197284,9.8594 C15.681684,9.8594 15.283184,10.0704 14.814484,10.5157 L6.892584,18.4375 C6.564484,18.7422 6.400384,19.1641 6.400384,19.6563 C6.400384,20.6172 7.150384,21.3438 8.111384,21.3438 C8.626984,21.3438 9.048884,21.1797 9.353584,20.8282 L12.259784,17.8985 L14.626984,15.0626 L14.439484,20.0313 L14.439484,35.2422 C14.439484,36.2735 15.189484,37 16.197284,37 C17.228484,37 17.955084,36.2735 17.955084,35.2422 L17.955084,20.0313 L17.767584,15.086 L20.134784,17.8985 L23.040984,20.8282 C23.345784,21.1563 23.790984,21.3438 24.283184,21.3438 C25.244184,21.3438 25.970684,20.6172 25.970684,19.6563 C25.970684,19.1641 25.830084,18.7422 25.525384,18.4375 L17.556684,10.5157 C17.087884,10.0469 16.712884,9.8594 16.197284,9.8594 Z",
    transform: "translate(4 4)"
  }));
}

var _default = SortUpCircleFill;
exports["default"] = _default;