function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function MoonZzzFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 38.5235 11.1251 L 33.1797 11.1251 L 33.1797 10.9844 L 38.6407 3.7892 C 39.1329 3.1565 39.3204 2.7581 39.3204 2.3361 C 39.3204 1.6094 38.7578 1.1640 37.9844 1.1640 L 30.4610 1.1640 C 29.7578 1.1640 29.2188 1.6329 29.2188 2.3597 C 29.2188 3.1329 29.7578 3.5782 30.4610 3.5782 L 35.5000 3.5782 L 35.5000 3.7188 L 29.9688 10.8907 C 29.4766 11.5235 29.2891 11.8751 29.2891 12.3673 C 29.2891 13.0470 29.8282 13.5392 30.6016 13.5392 L 38.5235 13.5392 C 39.2266 13.5392 39.7422 13.0938 39.7422 12.3204 C 39.7422 11.5938 39.2266 11.1251 38.5235 11.1251 Z M 49.4924 20.0782 L 45.7188 20.0782 L 45.7188 19.9844 L 49.6095 14.8985 C 50.0545 14.3126 50.2422 13.9376 50.2422 13.5157 C 50.2422 12.8360 49.7031 12.4141 48.9766 12.4141 L 43.2344 12.4141 C 42.5782 12.4141 42.0860 12.8595 42.0860 13.5392 C 42.0860 14.2892 42.5782 14.7110 43.2344 14.7110 L 46.6329 14.7110 L 46.6329 14.8048 L 42.7657 19.8907 C 42.3204 20.4532 42.1563 20.8048 42.1563 21.2970 C 42.1563 21.9297 42.6485 22.3985 43.3751 22.3985 L 49.4924 22.3985 C 50.1721 22.3985 50.6406 21.9532 50.6406 21.2501 C 50.6406 20.5470 50.1721 20.0782 49.4924 20.0782 Z M 25.9844 54.8360 C 34.5157 54.8360 41.4531 50.5001 44.5938 43.0001 C 44.9922 42.0626 44.9219 41.2892 44.4531 40.8204 C 44.1016 40.4454 43.3751 40.3985 42.6251 40.7032 C 40.6797 41.4766 38.4297 41.8048 35.9922 41.8048 C 25.4922 41.8048 18.6251 35.1485 18.6251 25.0235 C 18.6251 22.2579 19.1641 19.1876 19.8907 17.7579 C 20.3360 16.8438 20.3360 16.0704 19.9610 15.6017 C 19.5391 15.0860 18.7657 14.9923 17.7578 15.3438 C 10.2813 18.0860 5.3594 25.9141 5.3594 34.6095 C 5.3594 46.2344 14.1251 54.8360 25.9844 54.8360 Z M 39.1563 28.0938 L 35.9453 28.0938 L 35.9453 28.0001 L 39.2500 23.6173 C 39.6719 23.0313 39.8594 22.7032 39.8594 22.3048 C 39.8594 21.6485 39.3438 21.2501 38.6641 21.2501 L 33.6016 21.2501 C 32.9688 21.2501 32.5000 21.6719 32.5000 22.3282 C 32.5000 23.0313 32.9688 23.4297 33.6016 23.4297 L 36.4141 23.4297 L 36.4141 23.5235 L 33.1563 27.8829 C 32.7344 28.4454 32.5704 28.7735 32.5704 29.2188 C 32.5704 29.8282 33.0391 30.2970 33.7188 30.2970 L 39.1563 30.2970 C 39.7891 30.2970 40.2344 29.8517 40.2344 29.1719 C 40.2344 28.5392 39.7891 28.0938 39.1563 28.0938 Z"
  }));
}

export default MoonZzzFill;