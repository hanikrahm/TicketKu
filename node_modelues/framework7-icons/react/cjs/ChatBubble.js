"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ChatBubble(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M17.5035668,40.5296937 C19.0024662,40.0159063 20.530255,39.9036804 22.1150875,40.242095 C23.3913721,40.4234251 24.6878688,40.5153676 26,40.5153676 C38.462083,40.5153676 48.2812121,32.2755588 48.2812121,22.5377685 C48.2812121,12.8019501 38.4617239,4.56240733 26,4.56240733 C13.5368558,4.56240733 3.71878789,12.8012343 3.71878789,22.5377685 C3.71878789,27.5645198 6.32376869,32.3237361 10.8918817,35.7272859 C11.006387,35.811306 11.2685741,35.9959543 11.5565666,36.1954672 C11.6839828,36.2837375 11.8060878,36.367737 11.8989137,36.4310247 C11.8796069,36.4178214 11.9540395,36.4678495 11.851738,36.407108 L12.042003,36.5200778 L12.2201977,36.6512631 C14.0421606,37.9925748 14.911757,39.7895096 15.034093,41.7494472 C16.0115023,41.2059428 16.9508283,40.7191594 17.5035668,40.5296937 Z M0.17,22.559188 C0.17,10.5904526 11.7325761,0.885839053 26,0.885839053 C40.2652635,0.885839053 51.83,10.5904526 51.83,22.559188 C51.83,34.5300838 40.2652635,44.2346974 26,44.2346974 C24.4509778,44.2346974 22.9365222,44.120195 21.4631148,43.9019924 C21.4609543,43.9019924 21.4566335,43.899832 21.4544731,43.899832 C17.9653923,43.0680697 16.4876639,46.9481868 8.53731265,48.9595393 C6.90403396,49.3743402 6.7074356,48.9616997 7.95831967,47.6352009 C10.2224415,45.2392934 12.4044672,41.3332512 10.1360246,39.6632454 C10.0668911,39.6221974 9.19192037,39.0194398 8.85921546,38.7753121 C3.5294555,34.8044573 0.17,29.0080463 0.17,22.559188 Z",
    transform: "translate(2 3)"
  }));
}

var _default = ChatBubble;
exports["default"] = _default;