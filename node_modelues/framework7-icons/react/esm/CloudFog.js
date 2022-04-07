function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function CloudFog(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 12.2617 37.1055 L 41.3476 37.1055 C 49.0352 37.1055 54.7539 31.2695 54.7539 24.0273 C 54.7539 16.5742 48.6603 11.1133 40.7148 11.1133 C 37.7851 5.3242 32.3476 1.5976 25.5742 1.5976 C 16.7617 1.5976 9.4960 8.4883 8.7226 17.2070 C 4.4804 18.4258 1.2461 22.1289 1.2461 27.0742 C 1.2461 32.6055 5.2773 37.1055 12.2617 37.1055 Z M 12.2148 33.3320 C 7.4101 33.3320 4.9960 30.6602 4.9960 27.1914 C 4.9960 24.3555 6.6367 21.8242 10.6211 20.7695 C 11.9101 20.4414 12.3789 19.8320 12.4960 18.4961 C 13.0351 10.8555 18.7773 5.3476 25.5742 5.3476 C 30.8476 5.3476 34.9960 8.2305 37.5273 13.4336 C 38.0664 14.5586 38.7695 14.9570 40.1523 14.9570 C 47.0898 14.9570 51.0037 19.1524 51.0037 24.1445 C 51.0037 29.2539 46.9256 33.3320 41.5820 33.3320 Z M 43.2460 43.4805 L 12.7538 43.4805 C 11.9336 43.4805 11.2773 44.1133 11.2773 44.9805 C 11.2773 45.8242 11.9336 46.4570 12.7538 46.4570 L 43.2460 46.4570 C 44.0664 46.4570 44.7226 45.8242 44.7226 44.9805 C 44.7226 44.1133 44.0664 43.4805 43.2460 43.4805 Z M 43.2460 51.4492 L 12.7538 51.4492 C 11.9336 51.4492 11.2773 52.0820 11.2773 52.9258 C 11.2773 53.7695 11.9336 54.4024 12.7538 54.4024 L 43.2460 54.4024 C 44.0664 54.4024 44.7226 53.7695 44.7226 52.9258 C 44.7226 52.0820 44.0664 51.4492 43.2460 51.4492 Z"
  }));
}

export default CloudFog;