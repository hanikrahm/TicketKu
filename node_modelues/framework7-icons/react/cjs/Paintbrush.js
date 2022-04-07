"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Paintbrush(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 10.3818 24.6783 C 8.4185 26.5960 8.5326 29.1529 10.6329 31.2303 L 15.1074 35.7505 C 12.7788 37.2344 8.2815 39.0607 6.1355 41.2067 C 2.7797 44.5626 2.8025 49.0828 6.2269 52.5300 C 9.6741 55.9543 14.1943 56 17.5502 52.6441 C 19.7189 50.4753 21.5224 45.9780 23.0063 43.6722 L 27.5721 48.1696 C 29.6496 50.2242 32.1836 50.3383 34.1241 48.3979 L 36.5669 45.8867 C 38.1192 44.2886 38.3703 42.3253 37.2518 40.5218 C 38.2562 40.2707 39.1922 39.7000 39.9228 38.9466 L 50.5381 28.2854 C 53.0722 25.7742 53.0039 22.7835 50.3787 20.1582 L 32.0010 1.7807 C 30.3573 .1598 28.1201 0 26.5905 1.5296 C 25.9056 2.2144 25.3805 3.1961 25.1066 4.5202 C 23.8738 10.1818 21.3854 15.4554 18.4633 19.1765 C 17.9611 19.8386 17.6186 20.4778 17.4588 21.1399 C 15.8836 20.5006 14.2399 20.8431 12.8702 22.1900 Z M 36.7267 37.0518 C 35.7678 37.9878 34.8775 37.9193 33.9187 36.9376 L 33.8958 36.9376 L 21.6137 24.6555 L 21.6366 24.6327 C 20.7462 23.7652 20.3353 22.8064 21.6137 20.9572 C 24.2619 17.1447 26.8873 11.9168 28.4397 6.0954 C 28.5310 5.8215 28.6452 5.5932 28.8506 5.3877 C 29.2159 4.9996 29.7181 4.8854 30.2203 5.4105 L 41.3153 16.4827 C 40.7218 20.2951 37.6855 24.0848 35.3569 26.4134 C 35.1286 26.6417 34.8319 26.9613 35.1971 27.3266 C 36.3386 28.4680 43.1873 23.5597 45.9726 21.1627 L 47.5935 22.7607 C 48.6890 23.8565 48.7119 25.0436 47.7305 26.0253 Z M 13.4637 26.8471 L 15.0389 25.2948 C 15.7467 24.6099 16.6826 24.5870 17.4132 25.3404 L 33.4393 41.3893 C 34.1469 42.1427 34.1698 43.0102 33.4621 43.7179 L 31.9553 45.2931 C 31.2248 46.0236 30.3117 46.0008 29.5811 45.2475 L 23.8282 39.5173 C 23.0291 38.6955 22.1160 39.0151 21.2941 40.0881 C 19.6276 42.4623 16.8196 48.4435 15.1531 50.0872 C 13.1898 52.0049 10.5872 52.0505 8.6468 50.1100 C 6.7063 48.1696 6.7291 45.5442 8.6696 43.6038 C 10.3133 41.9601 16.2945 39.1292 18.6916 37.4627 C 19.7418 36.6409 20.0842 35.7277 19.2395 34.9286 L 13.5094 29.2214 C 12.7788 28.5136 12.7560 27.5549 13.4637 26.8471 Z M 10.1763 48.6033 C 10.9297 49.3339 12.0255 49.3339 12.7560 48.6033 C 13.4866 47.8272 13.4637 46.7542 12.7560 46.0236 C 12.0027 45.2931 10.8840 45.2703 10.1763 46.0236 C 9.4915 46.7998 9.4458 47.8500 10.1763 48.6033 Z"
  }));
}

var _default = Paintbrush;
exports["default"] = _default;