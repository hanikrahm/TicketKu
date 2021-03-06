function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function SortDown(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M9.17157297,0 C10.2761425,0 11.171573,0.89543051 11.171573,2 L11.171573,29.1994952 L14.9568544,25.4142138 C15.737903,24.6331652 17.004233,24.6331652 17.7852816,25.4142138 C18.5663301,26.1952624 18.5663301,27.4615924 17.7852816,28.242641 L10.7142137,35.3137089 L10.5928614,35.4255831 L10.5928614,35.4255831 L10.4648903,35.5256135 C10.1161902,35.8215126 9.66472559,36 9.17157297,36 C8.65800181,36 8.18964228,35.8064263 7.83547568,35.4882596 L7.65685433,35.3137089 L0.585786444,28.242641 C-0.195262148,27.4615924 -0.195262148,26.1952624 0.585786444,25.4142138 C1.36683504,24.6331652 2.63316501,24.6331652 3.4142136,25.4142138 L7.17157295,29.1715732 L7.17157295,2 C7.17157295,0.89543051 8.06700346,0 9.17157297,0 Z M25,18 C26.1045695,18 27,18.8954305 27,20 C27,21.1045695 26.1045695,22 25,22 L17,22 C15.8954305,22 15,21.1045695 15,20 C15,18.8954305 15.8954305,18 17,18 L25,18 Z M33,10 C34.1045695,10 35,10.8954305 35,12 C35,13.1045695 34.1045695,14 33,14 L17,14 C15.8954305,14 15,13.1045695 15,12 C15,10.8954305 15.8954305,10 17,10 L33,10 Z M41,2 C42.1045695,2 43,2.8954305 43,4 C43,5.1045695 42.1045695,6 41,6 L17,6 C15.8954305,6 15,5.1045695 15,4 C15,2.8954305 15.8954305,2 17,2 L41,2 Z",
    transform: "translate(6 10)"
  }));
}

export default SortDown;