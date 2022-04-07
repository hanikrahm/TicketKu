function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function BellSlashFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 16.8672 10.5742 L 48.4375 42.1211 C 48.8359 41.6758 49.0471 41.0664 49.0471 40.4102 C 49.0471 38.0664 46.6797 35.9570 44.6406 33.8711 C 43.0938 32.2539 42.6719 28.9258 42.4844 26.2305 C 42.3203 17.2305 39.9297 11.0195 33.6953 8.7695 C 32.8281 5.7226 30.3906 3.2852 26.9453 3.2852 C 23.4765 3.2852 21.0625 5.7226 20.1719 8.7695 C 18.9297 9.1914 17.8281 9.8008 16.8672 10.5742 Z M 47.9219 50.6992 C 48.6251 51.4023 49.7733 51.4023 50.4765 50.6992 C 51.1797 50.0195 51.1797 48.8477 50.4765 48.1445 L 9.2500 6.9648 C 8.5469 6.2617 7.3750 6.2617 6.6719 6.9648 C 5.9922 7.6445 5.9922 8.8164 6.6719 9.5195 Z M 8.3594 43.2461 L 36.6016 43.2461 L 12.1797 18.8008 C 11.6875 20.9805 11.4297 23.4648 11.3828 26.2305 C 11.1953 28.9258 10.7734 32.2539 9.2265 33.8711 C 7.2109 35.9570 4.8203 38.0664 4.8203 40.4102 C 4.8203 42.0977 6.1562 43.2461 8.3594 43.2461 Z M 26.9453 52.7148 C 30.9062 52.7148 33.7891 49.8555 34.0938 46.4336 L 19.7969 46.4336 C 20.0781 49.8555 22.9609 52.7148 26.9453 52.7148 Z"
  }));
}

export default BellSlashFill;