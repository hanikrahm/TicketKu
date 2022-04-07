function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Speaker3Fill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 48.1605 48.9342 C 48.8765 49.4181 49.8252 49.2245 50.3865 48.4309 C 53.9286 43.3593 56.0000 36.8360 56.0000 29.9255 C 56.0000 23.0151 53.9096 16.4724 50.3865 11.4008 C 49.8252 10.6072 48.8765 10.4136 48.1605 10.9169 C 47.4248 11.4202 47.3086 12.3880 47.8700 13.2010 C 50.9863 17.7887 52.9221 23.6732 52.9221 29.9255 C 52.9221 36.1779 51.0446 42.1398 47.8700 46.6500 C 47.3086 47.4437 47.4248 48.4115 48.1605 48.9342 Z M 21.6412 47.5985 C 22.9575 47.5985 23.9060 46.6307 23.9060 45.3338 L 23.9060 14.4592 C 23.9060 13.1623 22.9575 12.0783 21.6025 12.0783 C 20.6540 12.0783 20.0152 12.5042 18.9893 13.4720 L 10.4528 21.5439 C 10.3173 21.6601 10.1431 21.7181 9.9495 21.7181 L 4.2005 21.7181 C 1.4711 21.7181 0 23.2086 0 26.1122 L 0 33.6227 C 0 36.5263 1.4711 38.0168 4.2005 38.0168 L 9.9495 38.0168 C 10.1431 38.0168 10.3173 38.0748 10.4528 38.1910 L 18.9893 46.3403 C 19.9184 47.2114 20.6927 47.5985 21.6412 47.5985 Z M 40.3595 43.6497 C 41.1143 44.1530 42.0436 43.9594 42.5855 43.1851 C 45.1405 39.6234 46.6117 34.8809 46.6117 29.9255 C 46.6117 24.9508 45.1599 20.2083 42.5855 16.6466 C 42.0242 15.8917 41.1143 15.6981 40.3595 16.2014 C 39.6238 16.7047 39.5076 17.6532 40.0884 18.4855 C 42.1982 21.5826 43.4953 25.6476 43.4953 29.9255 C 43.4953 34.2034 42.2370 38.3072 40.0690 41.3656 C 39.5270 42.1979 39.6238 43.1464 40.3595 43.6497 Z M 32.6360 38.4233 C 33.2941 38.8878 34.2426 38.7330 34.8039 37.9781 C 36.3139 35.9456 37.2238 32.9646 37.2238 29.9255 C 37.2238 26.8865 36.2945 23.9249 34.8039 21.8536 C 34.2426 21.0987 33.3135 20.9439 32.6360 21.4084 C 31.7843 21.9698 31.6875 22.9570 32.3069 23.8087 C 33.4296 25.3185 34.1071 27.6221 34.1071 29.9255 C 34.1071 32.2290 33.3909 34.5325 32.2876 36.0617 C 31.7068 36.8941 31.8037 37.8426 32.6360 38.4233 Z"
  }));
}

export default Speaker3Fill;