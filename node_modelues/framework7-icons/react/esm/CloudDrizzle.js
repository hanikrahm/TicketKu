function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function CloudDrizzle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 12.2617 36.5078 L 41.3476 36.5078 C 49.0352 36.5078 54.7539 30.6719 54.7539 23.4297 C 54.7539 15.9766 48.6603 10.5156 40.7148 10.5156 C 37.7851 4.7266 32.3476 1.0000 25.5742 1.0000 C 16.7617 1.0000 9.4960 7.8906 8.7226 16.6094 C 4.4804 17.8281 1.2461 21.5312 1.2461 26.4766 C 1.2461 32.0078 5.2773 36.5078 12.2617 36.5078 Z M 12.2148 32.7344 C 7.4101 32.7344 4.9960 30.0625 4.9960 26.5937 C 4.9960 23.7578 6.6367 21.2266 10.6211 20.1719 C 11.9101 19.8437 12.3789 19.2344 12.4960 17.8984 C 13.0351 10.2578 18.7773 4.7500 25.5742 4.7500 C 30.8476 4.7500 34.9960 7.6328 37.5273 12.8359 C 38.0664 13.9609 38.7695 14.3594 40.1523 14.3594 C 47.0898 14.3594 51.0037 18.5547 51.0037 23.5469 C 51.0037 28.6563 46.9256 32.7344 41.5820 32.7344 Z M 31.2929 47.4297 L 34.3398 42.1562 C 34.7617 41.4297 34.5273 40.6094 33.8242 40.2109 C 33.1211 39.7891 32.3242 40.0234 31.9023 40.75 L 28.8086 46.0703 C 28.4336 46.75 28.6211 47.5703 29.3476 47.9922 C 30.0507 48.3672 30.8945 48.1328 31.2929 47.4297 Z M 12.6367 47.4531 L 15.6836 42.1797 C 16.1054 41.4531 15.8945 40.6328 15.1914 40.2344 C 14.4648 39.8125 13.6679 40.0469 13.2460 40.7734 L 10.1758 46.0937 C 9.7773 46.7734 9.9882 47.5937 10.6914 47.9922 C 11.3945 48.3906 12.2382 48.1563 12.6367 47.4531 Z M 38.6054 54.0390 L 41.6523 48.7422 C 42.0976 48.0390 41.8633 47.2188 41.1601 46.7969 C 40.4570 46.3984 39.6601 46.6328 39.2148 47.3359 L 36.1445 52.6797 C 35.7460 53.3359 35.9570 54.1563 36.6836 54.5781 C 37.3633 54.9766 38.2070 54.7422 38.6054 54.0390 Z M 19.9726 54.0625 L 23.0195 48.7656 C 23.4414 48.0625 23.2070 47.2422 22.5273 46.8203 C 21.8007 46.4219 21.0038 46.6562 20.5820 47.3594 L 17.5117 52.7031 C 17.1133 53.3594 17.3007 54.1797 18.0273 54.6016 C 18.7304 55 19.5742 54.7656 19.9726 54.0625 Z"
  }));
}

export default CloudDrizzle;