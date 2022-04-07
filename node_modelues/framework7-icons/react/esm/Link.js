function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Link(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.7071 37.6563 L 30.8243 34.4922 C 27.7306 34.2578 25.7150 33.3203 24.1915 31.7968 C 20.0899 27.6953 20.1134 21.8828 24.1681 17.8281 L 31.8087 10.1875 C 35.9103 6.1094 41.6759 6.0859 45.7540 10.1875 C 49.8791 14.2890 49.8321 20.0781 45.7775 24.1328 L 41.1837 28.7265 C 41.8399 30.2265 41.9806 31.9609 41.7462 33.4843 L 48.6134 26.6172 C 54.2385 20.9922 54.2851 13.0468 48.5899 7.3516 C 42.8947 1.6563 34.9493 1.7031 29.3243 7.3281 L 21.3321 15.3437 C 15.7071 20.9687 15.6603 28.9375 21.3556 34.6094 C 22.8321 36.0859 24.7071 37.1406 27.7071 37.6563 Z M 28.2931 18.3437 L 25.1759 21.5078 C 28.2696 21.7656 30.2852 22.6797 31.8087 24.2031 C 35.9103 28.3047 35.8868 34.1172 31.8321 38.1719 L 24.1681 45.8125 C 20.0899 49.8906 14.3009 49.9141 10.2228 45.8359 C 6.1212 41.7109 6.1447 35.9453 10.2228 31.8672 L 14.8165 27.2734 C 14.1603 25.7968 13.9962 24.0390 14.2306 22.5156 L 7.3634 29.3828 C 1.7618 35.0078 1.7149 42.9765 7.3868 48.6484 C 13.0821 54.3437 21.0509 54.2968 26.6525 48.6953 L 34.6681 40.6562 C 40.2931 35.0312 40.3399 27.0625 34.6447 21.3906 C 33.1681 19.9141 31.2931 18.8594 28.2931 18.3437 Z"
  }));
}

export default Link;