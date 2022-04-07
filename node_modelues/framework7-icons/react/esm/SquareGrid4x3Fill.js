function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function SquareGrid4x3Fill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 5.0078 17.9571 L 8.8984 17.9571 C 10.3750 17.9571 10.9141 17.4180 10.9141 15.9414 L 10.9141 12.0508 C 10.9141 10.5742 10.3750 10.0351 8.8984 10.0351 L 5.0078 10.0351 C 3.5078 10.0351 2.9688 10.5742 2.9688 12.0508 L 2.9688 15.9414 C 2.9688 17.4180 3.5078 17.9571 5.0078 17.9571 Z M 19 17.9571 L 22.8906 17.9571 C 24.3672 17.9571 24.9063 17.4180 24.9063 15.9414 L 24.9063 12.0508 C 24.9063 10.5742 24.3672 10.0351 22.8906 10.0351 L 19 10.0351 C 17.5234 10.0351 16.9844 10.5742 16.9844 12.0508 L 16.9844 15.9414 C 16.9844 17.4180 17.5234 17.9571 19 17.9571 Z M 32.9922 17.9571 L 36.8828 17.9571 C 38.3828 17.9571 38.9219 17.4180 38.9219 15.9414 L 38.9219 12.0508 C 38.9219 10.5742 38.3828 10.0351 36.8828 10.0351 L 32.9922 10.0351 C 31.5156 10.0351 30.9766 10.5742 30.9766 12.0508 L 30.9766 15.9414 C 30.9766 17.4180 31.5156 17.9571 32.9922 17.9571 Z M 47.0077 17.9571 L 50.8986 17.9571 C 52.3751 17.9571 52.9141 17.4180 52.9141 15.9414 L 52.9141 12.0508 C 52.9141 10.5742 52.3751 10.0351 50.8986 10.0351 L 47.0077 10.0351 C 45.5077 10.0351 44.9688 10.5742 44.9688 12.0508 L 44.9688 15.9414 C 44.9688 17.4180 45.5077 17.9571 47.0077 17.9571 Z M 5.1250 31.9727 L 9.0156 31.9727 C 10.4922 31.9727 11.0312 31.4336 11.0312 29.9336 L 11.0312 26.0430 C 11.0312 24.5664 10.4922 24.0273 9.0156 24.0273 L 5.1250 24.0273 C 3.6250 24.0273 3.0859 24.5664 3.0859 26.0430 L 3.0859 29.9336 C 3.0859 31.4336 3.6250 31.9727 5.1250 31.9727 Z M 19.1172 31.9727 L 23.0078 31.9727 C 24.4844 31.9727 25.0234 31.4336 25.0234 29.9336 L 25.0234 26.0430 C 25.0234 24.5664 24.4844 24.0273 23.0078 24.0273 L 19.1172 24.0273 C 17.6406 24.0273 17.1016 24.5664 17.1016 26.0430 L 17.1016 29.9336 C 17.1016 31.4336 17.6406 31.9727 19.1172 31.9727 Z M 33.1094 31.9727 L 37.0000 31.9727 C 38.5000 31.9727 39.0391 31.4336 39.0391 29.9336 L 39.0391 26.0430 C 39.0391 24.5664 38.5000 24.0273 37.0000 24.0273 L 33.1094 24.0273 C 31.6328 24.0273 31.0937 24.5664 31.0937 26.0430 L 31.0937 29.9336 C 31.0937 31.4336 31.6328 31.9727 33.1094 31.9727 Z M 47.1248 31.9727 L 51.0157 31.9727 C 52.4922 31.9727 53.0312 31.4336 53.0312 29.9336 L 53.0312 26.0430 C 53.0312 24.5664 52.4922 24.0273 51.0157 24.0273 L 47.1248 24.0273 C 45.6248 24.0273 45.0858 24.5664 45.0858 26.0430 L 45.0858 29.9336 C 45.0858 31.4336 45.6248 31.9727 47.1248 31.9727 Z M 5.1250 45.9649 L 9.0156 45.9649 C 10.4922 45.9649 11.0312 45.4258 11.0312 43.9492 L 11.0312 40.0586 C 11.0312 38.5586 10.4922 38.0195 9.0156 38.0195 L 5.1250 38.0195 C 3.6250 38.0195 3.0859 38.5586 3.0859 40.0586 L 3.0859 43.9492 C 3.0859 45.4258 3.6250 45.9649 5.1250 45.9649 Z M 19.1172 45.9649 L 23.0078 45.9649 C 24.4844 45.9649 25.0234 45.4258 25.0234 43.9492 L 25.0234 40.0586 C 25.0234 38.5586 24.4844 38.0195 23.0078 38.0195 L 19.1172 38.0195 C 17.6406 38.0195 17.1016 38.5586 17.1016 40.0586 L 17.1016 43.9492 C 17.1016 45.4258 17.6406 45.9649 19.1172 45.9649 Z M 33.1094 45.9649 L 37.0000 45.9649 C 38.5000 45.9649 39.0391 45.4258 39.0391 43.9492 L 39.0391 40.0586 C 39.0391 38.5586 38.5000 38.0195 37.0000 38.0195 L 33.1094 38.0195 C 31.6328 38.0195 31.0937 38.5586 31.0937 40.0586 L 31.0937 43.9492 C 31.0937 45.4258 31.6328 45.9649 33.1094 45.9649 Z M 47.1248 45.9649 L 51.0157 45.9649 C 52.4922 45.9649 53.0312 45.4258 53.0312 43.9492 L 53.0312 40.0586 C 53.0312 38.5586 52.4922 38.0195 51.0157 38.0195 L 47.1248 38.0195 C 45.6248 38.0195 45.0858 38.5586 45.0858 40.0586 L 45.0858 43.9492 C 45.0858 45.4258 45.6248 45.9649 47.1248 45.9649 Z"
  }));
}

export default SquareGrid4x3Fill;