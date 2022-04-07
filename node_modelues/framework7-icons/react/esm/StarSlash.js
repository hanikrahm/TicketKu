function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function StarSlash(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 40.3985 33.6133 L 52.2578 25.0820 C 53.7112 24.0508 54.2968 22.9727 53.9219 21.8008 C 53.5470 20.6758 52.4454 20.1133 50.6406 20.1367 L 35.2891 20.2305 L 30.6251 5.5820 C 30.0626 3.8476 29.2188 2.9805 28.0001 2.9805 C 26.8048 2.9805 25.9610 3.8476 25.3985 5.5820 L 22.2110 15.5195 L 25.0235 18.3086 L 27.8595 8.8633 C 27.9063 8.7227 27.9532 8.6758 28.0001 8.6758 C 28.0704 8.6758 28.1173 8.7227 28.1407 8.8633 L 32.2188 22.4336 C 32.5001 23.3945 33.1329 23.7930 34.0938 23.7695 L 48.2733 23.5117 C 48.4139 23.5117 48.4610 23.5117 48.4845 23.5820 C 48.508 23.6524 48.4610 23.6992 48.3674 23.7695 L 37.8204 31.0586 Z M 48.2733 50.5352 C 48.9765 51.2383 50.1251 51.2383 50.8283 50.5352 C 51.5315 49.8320 51.5315 48.6836 50.8283 47.9805 L 14.2891 11.5586 C 13.5860 10.8555 12.4376 10.8555 11.7110 11.5586 C 11.0079 12.2149 11.0313 13.4102 11.7110 14.1133 Z M 11.9688 52.2930 C 12.9298 53.0195 14.1485 52.7617 15.6016 51.7071 L 28.0001 42.6133 L 40.4220 51.7071 C 41.8751 52.7617 43.0469 52.9961 44.0548 52.2930 C 44.3360 52.0820 44.5469 51.8008 44.8985 51.2617 L 29.1954 39.0039 C 28.4454 38.4180 27.5782 38.4180 26.8282 39.0039 L 15.5548 47.6055 C 15.4610 47.6758 15.3907 47.7227 15.3438 47.6524 C 15.2969 47.6055 15.3204 47.5820 15.3438 47.4414 L 20.0079 34.0352 C 20.3126 33.1211 20.1485 32.3945 19.3282 31.8320 L 7.6563 23.7695 C 7.5391 23.6992 7.5157 23.6524 7.5391 23.5820 C 7.5626 23.5117 7.6095 23.5117 7.7501 23.5117 L 17.3595 23.6758 L 13.8438 20.1836 L 5.3829 20.1367 C 3.5782 20.1133 2.4766 20.6758 2.1016 21.8008 C 1.7032 22.9727 2.3126 24.0508 3.7657 25.0820 L 16.2813 34.0820 L 11.3829 48.6602 C 10.7969 50.3711 11.0079 51.5664 11.9688 52.2930 Z"
  }));
}

export default StarSlash;