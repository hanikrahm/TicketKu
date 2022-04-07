function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ChevronLeftSlashChevronRight(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 21.7661 52.1292 C 22.7207 52.3965 23.6563 51.8619 23.9618 50.8309 L 35.3603 11.7666 C 35.6467 10.7355 35.1694 9.7809 34.2147 9.4945 C 33.2601 9.2272 32.3245 9.7618 32.0190 10.7928 L 20.6396 49.8572 C 20.3532 50.8882 20.8114 51.8428 21.7661 52.1292 Z M 40.7445 45.1985 L 55.1026 32.2343 C 56 31.4324 55.9808 30.1722 55.1026 29.3894 L 40.7445 16.4252 C 39.9617 15.6806 38.8735 15.6997 38.2052 16.4443 C 37.5369 17.1890 37.6515 18.2582 38.4152 18.9646 L 51.5130 30.8023 L 38.4152 42.6591 C 37.6515 43.3655 37.5369 44.4347 38.2052 45.1794 C 38.8735 45.9240 39.9617 45.9240 40.7445 45.1985 Z M 15.2363 45.2176 C 16.0382 45.9431 17.1074 45.9240 17.7756 45.1794 C 18.4439 44.4347 18.3484 43.3846 17.5847 42.6782 L 4.4868 30.8214 L 17.5847 18.9646 C 18.3484 18.2582 18.4439 17.2081 17.7756 16.4443 C 17.1074 15.6997 16.0382 15.6997 15.2363 16.4252 L .8783 29.3894 C 0 30.1913 .1 31.4514 .8783 32.2343 Z"
  }));
}

export default ChevronLeftSlashChevronRight;