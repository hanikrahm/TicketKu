function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function CloudDrizzleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 12.2618 36.1211 L 41.3477 36.1211 C 48.7772 36.1211 54.5195 30.4961 54.5195 23.3008 C 54.5195 16.0117 48.5195 10.5508 40.5743 10.6211 C 37.5743 4.5742 32.0665 1.0820 25.5743 1.0820 C 16.9259 1.0820 9.6368 7.9024 8.9571 16.6445 C 4.4102 17.8867 1.4805 21.7070 1.4805 26.3242 C 1.4805 32.1367 5.8399 36.1211 12.2618 36.1211 Z M 31.5274 47.3476 L 34.5743 42.0742 C 34.9962 41.3477 34.7618 40.5273 34.0586 40.1289 C 33.3555 39.7070 32.5586 39.9414 32.1368 40.6680 L 29.0430 45.9883 C 28.6681 46.6680 28.8555 47.4883 29.5821 47.9102 C 30.2852 48.2851 31.1290 48.0508 31.5274 47.3476 Z M 12.8712 47.3711 L 15.9181 42.0977 C 16.3399 41.3711 16.1290 40.5508 15.4259 40.1523 C 14.6993 39.7305 13.9024 39.9648 13.4805 40.6914 L 10.4102 46.0117 C 10.0118 46.6914 10.2227 47.5117 10.9259 47.9102 C 11.6290 48.3086 12.4727 48.0742 12.8712 47.3711 Z M 38.8399 53.9570 L 41.8868 48.6602 C 42.3321 47.9570 42.0977 47.1367 41.3946 46.7148 C 40.6915 46.3164 39.8946 46.5508 39.4493 47.2539 L 36.3790 52.5976 C 35.9805 53.2539 36.1915 54.0742 36.9181 54.4961 C 37.5977 54.8945 38.4415 54.6602 38.8399 53.9570 Z M 20.2071 53.9805 L 23.2540 48.6836 C 23.6759 47.9805 23.4415 47.1602 22.7618 46.7383 C 22.0352 46.3398 21.2383 46.5742 20.8165 47.2773 L 17.7462 52.6211 C 17.3477 53.2773 17.5352 54.0976 18.2618 54.5195 C 18.9649 54.9180 19.8086 54.6836 20.2071 53.9805 Z"
  }));
}

export default CloudDrizzleFill;