"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ShippingboxFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M24.8850824,50 C24.9616941,49.9846902 25.0382902,49.9578824 25.1148706,49.9195765 C25.1914824,49.881302 25.2680784,49.8391843 25.3446588,49.7932235 L43.3363765,39.5450494 C44.4086902,38.9323059 45.2243765,38.2314792 45.7834353,37.4425694 C46.3424941,36.6536565 46.6220235,35.4243294 46.6220235,33.7545882 L46.6220235,15.8547765 C46.6220235,15.1501176 46.5608471,14.5680157 46.4384941,14.1084706 L24.8850824,26.4246588 L24.8850824,50 Z M21.7371294,50 L21.7371294,26.4246588 L0.183811765,14.1084706 C0.0612705882,14.5680157 0,15.1501176 0,15.8547765 L0,33.7545882 C0,35.4243294 0.283388235,36.6536565 0.850164706,37.4425694 C1.41697255,38.2314792 2.22886275,38.9323059 3.28583529,39.5450494 L21.3005176,49.7932235 C21.3771294,49.8391843 21.449898,49.881302 21.5188235,49.9195765 C21.587749,49.9578824 21.6605176,49.9846902 21.7371294,50 Z M23.3225882,23.6672941 L33.1341647,18.1066353 L11.3740706,5.67557647 L2.94117647,10.4779765 C2.42032941,10.7690196 1.99140392,11.0677333 1.6544,11.3741176 L23.3225882,23.6672941 Z M36.3280941,16.2913882 L44.9679059,11.3741176 C44.6309647,11.0677333 44.2096314,10.7690196 43.7039059,10.4779765 L27.4816,1.24084706 C26.0569725,0.413615686 24.6706353,0 23.3225882,0 C21.9592314,0 20.5652392,0.413615686 19.1406118,1.24084706 L14.4760941,3.88329412 L36.3280941,16.2913882 Z",
    transform: "translate(5 3)"
  }));
}

var _default = ShippingboxFill;
exports["default"] = _default;