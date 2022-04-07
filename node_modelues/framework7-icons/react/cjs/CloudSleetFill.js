"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CloudSleetFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 12.6343 34.0513 L 40.9192 34.0513 C 48.1441 34.0513 53.7282 28.6040 53.7282 21.5840 C 53.7282 14.4957 47.8935 9.1852 40.1671 9.2536 C 37.2497 3.3732 31.8936 0 25.5802 0 C 17.1700 0 10.0816 6.6097 9.4207 15.1111 C 4.9990 16.3191 2.1500 20.0570 2.1500 24.5242 C 2.1500 30.1766 6.3893 34.0513 12.6343 34.0513 Z M 23.3694 45.4701 L 26.4691 40.0456 C 26.8565 39.3618 26.6514 38.5641 25.9905 38.1538 C 25.2839 37.7664 24.4862 37.9943 24.0987 38.6781 L 20.9534 44.1254 C 20.5660 44.7863 20.7711 45.5840 21.4776 45.9943 C 22.1614 46.3590 22.9819 46.1310 23.3694 45.4701 Z M 20.7483 42.7578 L 22.2982 40.0456 C 22.6856 39.3846 22.4805 38.5641 21.7967 38.1538 C 21.1130 37.7664 20.3152 37.9943 19.9278 38.6781 L 18.3551 41.4131 C 17.9905 42.0741 18.1728 42.8718 18.8565 43.2821 C 19.5403 43.6467 20.3608 43.4188 20.7483 42.7578 Z M 36.4292 43.5556 L 38.4121 40.1140 C 38.7996 39.4302 38.5944 38.6097 37.9107 38.1994 C 37.2269 37.8120 36.4064 38.0627 36.0418 38.7236 L 34.0361 42.2336 C 33.6714 42.8718 33.8309 43.6695 34.5375 44.0798 C 35.2212 44.4672 36.0418 44.2393 36.4292 43.5556 Z M 11.3352 52.5128 C 11.7682 52.5128 12.0645 52.1253 12.0417 51.6923 L 11.8822 49.5271 L 13.7056 50.7578 C 14.0247 50.9857 14.5261 50.8946 14.7540 50.5527 C 14.9819 50.2108 14.8452 49.6866 14.4121 49.4815 L 12.4520 48.5242 L 14.4349 47.5442 C 14.8452 47.3390 14.9591 46.8376 14.7768 46.4957 C 14.5717 46.1310 14.0247 46.0627 13.7056 46.2906 L 11.8822 47.5442 L 12.0645 45.3561 C 12.1101 44.9003 11.7682 44.5356 11.3352 44.5356 C 10.8793 44.5356 10.5830 44.9003 10.6059 45.3561 L 10.7654 47.5442 L 8.9192 46.2906 C 8.6001 46.0627 8.0987 46.1083 7.8936 46.4957 C 7.6885 46.8376 7.7796 47.3162 8.2127 47.5442 L 10.1728 48.5242 L 8.2127 49.4815 C 7.7569 49.6866 7.6657 50.1880 7.8480 50.5527 C 8.0531 50.9174 8.6001 50.9857 8.9192 50.7578 L 10.7654 49.5271 L 10.6286 51.6923 C 10.6059 52.1253 10.8793 52.5128 11.3352 52.5128 Z M 35.2212 52.6040 C 35.6543 52.6040 35.9506 52.2165 35.9278 51.7835 L 35.7682 49.6182 L 37.5916 50.8490 C 37.9107 51.0769 38.4121 50.9857 38.6401 50.6439 C 38.8679 50.3020 38.7312 49.7778 38.2981 49.5727 L 36.3380 48.6154 L 38.3210 47.6353 C 38.7312 47.4302 38.8452 46.9288 38.6628 46.5869 C 38.4577 46.2222 37.9107 46.1538 37.5916 46.3818 L 35.7682 47.6353 L 35.9506 45.4473 C 35.9962 44.9914 35.6543 44.6268 35.2212 44.6268 C 34.7654 44.6268 34.4691 44.9914 34.4919 45.4473 L 34.6514 47.6353 L 32.8053 46.3818 C 32.4862 46.1538 31.9847 46.1994 31.7796 46.5869 C 31.5745 46.9288 31.6657 47.4074 32.0987 47.6353 L 34.0588 48.6154 L 32.0987 49.5727 C 31.6429 49.7778 31.5517 50.2792 31.7340 50.6439 C 31.9392 51.0085 32.4862 51.0769 32.8053 50.8490 L 34.6514 49.6182 L 34.5147 51.7835 C 34.4919 52.2165 34.7654 52.6040 35.2212 52.6040 Z M 22.2298 56 C 22.6400 56 22.9363 55.6125 22.9136 55.1795 L 22.7540 53.0142 L 24.5774 54.2450 C 24.8964 54.4729 25.4207 54.3818 25.6486 54.0399 C 25.8537 53.6980 25.7397 53.1738 25.2839 52.9687 L 23.3238 52.0114 L 25.3067 51.0314 C 25.7397 50.8262 25.8309 50.3248 25.6714 49.9829 C 25.4662 49.6182 24.8964 49.5498 24.5774 49.7778 L 22.7540 51.0314 L 22.9363 48.8433 C 22.9819 48.3875 22.6400 48.0228 22.2298 48.0228 C 21.7511 48.0228 21.4776 48.3875 21.5004 48.8433 L 21.6372 51.0314 L 19.7910 49.7778 C 19.4719 49.5498 18.9933 49.5954 18.7654 49.9829 C 18.5603 50.3248 18.6514 50.8034 19.0845 51.0314 L 21.0446 52.0114 L 19.0845 52.9687 C 18.6514 53.1738 18.5375 53.6752 18.7426 54.0399 C 18.9477 54.4045 19.4719 54.4729 19.7910 54.2450 L 21.6372 53.0142 L 21.5232 55.1795 C 21.5004 55.6125 21.7511 56 22.2298 56 Z"
  }));
}

var _default = CloudSleetFill;
exports["default"] = _default;