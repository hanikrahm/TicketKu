function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function TextInsert(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 33.8008 11.3594 L 49.8085 11.3594 C 50.8165 11.3594 51.6133 10.5859 51.6133 9.5781 C 51.6133 8.5937 50.8165 7.8203 49.8085 7.8203 L 33.8008 7.8203 C 32.7929 7.8203 32.0195 8.5937 32.0195 9.5781 C 32.0195 10.5859 32.7929 11.3594 33.8008 11.3594 Z M 7.0820 26.9453 C 8.7929 26.9453 9.7773 25.7500 9.7773 23.8515 L 9.7773 19.3750 C 9.7773 18.8594 10.0117 18.5547 10.5742 18.5547 L 16.9492 18.5547 L 16.9492 20.8984 C 16.9492 22.7500 18.8242 23.4531 20.2304 22.3281 L 26.5820 17.2656 C 27.5429 16.4922 27.5429 15.1563 26.5820 14.4063 L 20.2304 9.3203 C 18.7773 8.1250 16.9492 8.8515 16.9492 10.7500 L 16.9492 13.1875 L 10.0586 13.1875 C 6.7539 13.1875 4.3867 15.2266 4.3867 18.5547 L 4.3867 23.8515 C 4.3867 25.7500 5.3711 26.9453 7.0820 26.9453 Z M 33.8008 23.6406 L 49.8085 23.6406 C 50.8165 23.6406 51.6133 22.8672 51.6133 21.8594 C 51.6133 20.8750 50.8165 20.1015 49.8085 20.1015 L 33.8008 20.1015 C 32.7929 20.1015 32.0195 20.8750 32.0195 21.8594 C 32.0195 22.8672 32.7929 23.6406 33.8008 23.6406 Z M 6.1679 35.9219 L 49.8085 35.9219 C 50.8165 35.9219 51.6133 35.1250 51.6133 34.1406 C 51.6133 33.1563 50.8165 32.3828 49.8085 32.3828 L 6.1679 32.3828 C 5.1601 32.3828 4.3867 33.1563 4.3867 34.1406 C 4.3867 35.1250 5.1601 35.9219 6.1679 35.9219 Z M 6.1679 48.1797 L 49.8085 48.1797 C 50.8165 48.1797 51.6133 47.4063 51.6133 46.4219 C 51.6133 45.4375 50.8165 44.6406 49.8085 44.6406 L 6.1679 44.6406 C 5.1601 44.6406 4.3867 45.4375 4.3867 46.4219 C 4.3867 47.4063 5.1601 48.1797 6.1679 48.1797 Z"
  }));
}

export default TextInsert;