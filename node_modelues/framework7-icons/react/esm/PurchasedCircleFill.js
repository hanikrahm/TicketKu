function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function PurchasedCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 16.7733 35.5703 C 16.7733 34.75 17.4296 34.0937 18.2030 34.0937 C 18.6718 34.0937 19.0468 34.2344 19.3749 34.6094 L 20.6640 35.8984 L 22.4687 37.9609 L 22.3280 33.8594 L 22.3280 22.5156 C 22.3280 17.1016 25.6327 13.6328 30.7421 13.6328 C 35.6874 13.6328 39.0624 17.1016 39.0624 22.1641 C 39.0624 27.1797 35.8046 30.4844 30.9062 30.4844 C 29.9218 30.4844 29.0312 30.2266 28.5155 29.7344 C 28.2343 29.4531 28.0702 29.0781 28.0702 28.6328 C 28.0702 27.8828 28.6562 27.3203 29.4530 27.3203 C 29.8983 27.3203 30.2733 27.4844 30.9999 27.4844 C 33.9530 27.4844 36.0155 25.3281 36.0390 22.1641 C 36.0624 18.9063 33.9296 16.7266 30.7421 16.7266 C 27.3436 16.7266 25.4452 18.8828 25.4452 22.7968 L 25.4452 33.8359 L 25.3280 37.9609 L 27.1327 35.8750 L 28.4218 34.5859 C 28.7265 34.2344 29.1014 34.0937 29.5936 34.0937 C 30.3671 34.0937 30.9999 34.75 30.9999 35.5703 C 30.9999 35.9219 30.8358 36.2968 30.5312 36.6484 L 25.5858 41.5703 C 25.0234 42.0859 24.4843 42.3672 23.8983 42.3672 C 23.3593 42.3672 22.7968 42.0859 22.2109 41.5703 L 17.2655 36.6719 C 16.9843 36.3437 16.7733 35.9219 16.7733 35.5703 Z"
  }));
}

export default PurchasedCircleFill;