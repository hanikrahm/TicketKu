function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Hourglass(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 16.5156 49.5742 L 39.2734 49.5742 C 41.6640 49.5742 43.0937 48.2617 43.0937 45.7305 L 43.0937 45.1211 C 43.1172 38.6523 36.2266 33.4023 33.2031 30.5430 C 32.3593 29.7461 31.9140 29.0196 31.9140 27.9649 C 31.9140 26.9102 32.3593 26.2071 33.2031 25.3867 C 36.2031 22.4805 43.0937 17.5586 43.0937 10.8320 L 43.0937 10.2696 C 43.0937 7.7383 41.6640 6.4258 39.2734 6.4258 L 16.5156 6.4258 C 14.1718 6.4258 12.8828 7.7383 12.8828 10.0586 L 12.8828 10.8320 C 12.8828 17.5586 19.7734 22.4805 22.7969 25.3867 C 23.6406 26.2071 24.0859 26.9102 24.0859 27.9649 C 24.0859 29.0196 23.6406 29.7461 22.7969 30.5430 C 19.7734 33.4023 12.8828 38.6523 12.8828 45.1211 L 12.8828 45.9414 C 12.8828 48.2617 14.1718 49.5742 16.5156 49.5742 Z M 18.9531 46.3633 C 17.8281 46.3633 17.4766 45.1211 18.5781 44.3008 L 26.5937 38.3242 C 26.8515 38.1133 26.9922 37.9727 26.9922 37.6211 L 26.9922 26.3477 C 26.9922 25.0820 26.7344 24.4492 25.8437 23.6992 C 24.5078 22.5742 21.9766 20.7930 20.8281 19.1758 C 20.3593 18.5196 20.4062 17.9805 20.9922 17.9805 L 34.9844 17.9805 C 35.5703 17.9805 35.6172 18.5196 35.1484 19.1758 C 34.0000 20.7930 31.4922 22.5742 30.1328 23.6992 C 29.2422 24.4492 28.9844 25.0820 28.9844 26.3477 L 28.9844 37.6211 C 28.9844 37.9727 29.125 38.1133 29.3828 38.3242 L 37.4218 44.3008 C 38.5234 45.1211 38.1484 46.3633 37.0469 46.3633 Z"
  }));
}

export default Hourglass;