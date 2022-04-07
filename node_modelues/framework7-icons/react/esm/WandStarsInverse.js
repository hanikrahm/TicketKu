function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function WandStarsInverse(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 21.8712 15.5664 C 22.1524 15.5664 22.2930 15.4024 22.3399 15.1445 C 23.1368 11.3945 23.0899 11.2539 27.0040 10.4570 C 27.2852 10.4102 27.4493 10.2461 27.4493 9.9883 C 27.4493 9.7070 27.2852 9.5429 27.0040 9.4961 C 23.0899 8.6992 23.1368 8.5586 22.3399 4.8320 C 22.2930 4.5742 22.1524 4.3867 21.8712 4.3867 C 21.5899 4.3867 21.4493 4.5742 21.3790 4.8320 C 20.6055 8.5586 20.6524 8.6992 16.7149 9.4961 C 16.4571 9.5429 16.2696 9.7070 16.2696 9.9883 C 16.2696 10.2461 16.4571 10.4102 16.7149 10.4570 C 20.6524 11.2539 20.6055 11.3945 21.3790 15.1445 C 21.4493 15.4024 21.5899 15.5664 21.8712 15.5664 Z M 41.2306 23.8398 C 41.5587 23.8398 41.7462 23.6289 41.7930 23.3242 C 42.6134 18.8711 42.6368 18.5898 47.3475 17.7695 C 47.6523 17.7227 47.8866 17.5117 47.8866 17.1836 C 47.8866 16.8555 47.6523 16.6680 47.3475 16.5976 C 42.6368 15.8008 42.6134 15.5195 41.7930 11.0664 C 41.7462 10.7617 41.5587 10.5273 41.2306 10.5273 C 40.9024 10.5273 40.6915 10.7617 40.6446 11.0664 C 39.8477 15.5195 39.8243 15.8008 35.1134 16.5976 C 34.7852 16.6680 34.5743 16.8555 34.5743 17.1836 C 34.5743 17.5117 34.7852 17.7227 35.1134 17.7695 C 39.8243 18.5898 39.8477 18.8711 40.6446 23.3242 C 40.6915 23.6289 40.9024 23.8398 41.2306 23.8398 Z M 9.0274 30.5664 C 9.3555 30.5664 9.5430 30.3320 9.5899 30.0273 C 10.4102 25.5742 10.4337 25.2929 15.1446 24.4961 C 15.4493 24.4258 15.6837 24.2383 15.6837 23.9102 C 15.6837 23.5820 15.4493 23.3711 15.1446 23.3242 C 10.4337 22.5039 10.4102 22.2227 9.5899 17.7695 C 9.5430 17.4649 9.3555 17.2539 9.0274 17.2539 C 8.6993 17.2539 8.4884 17.4649 8.4415 17.7695 C 7.6212 22.2227 7.6212 22.5039 2.9102 23.3242 C 2.5821 23.3711 2.3712 23.5820 2.3712 23.9102 C 2.3712 24.2383 2.5821 24.4258 2.9102 24.4961 C 7.6212 25.2929 7.6212 25.5742 8.4415 30.0273 C 8.4884 30.3320 8.6993 30.5664 9.0274 30.5664 Z M 49.0587 50.6055 C 50.0432 51.6133 51.7304 51.6133 52.6679 50.6055 C 53.6058 49.5508 53.6288 47.9805 52.6679 46.9961 L 30.3790 24.6367 C 29.3946 23.6524 27.7071 23.6524 26.7696 24.6367 C 25.8087 25.6914 25.8087 27.2851 26.7696 28.2695 Z M 20.1602 50.9805 C 20.5821 50.9805 20.8868 50.6758 20.9337 50.2305 C 21.7071 43.9727 22.0118 43.8086 28.3634 42.7773 C 28.8790 42.6836 29.1837 42.4492 29.1837 41.9805 C 29.1837 41.5352 28.8790 41.2539 28.4571 41.1836 C 22.0587 39.9649 21.7071 39.9883 20.9337 33.7305 C 20.8868 33.2851 20.5821 32.9805 20.1602 32.9805 C 19.7149 32.9805 19.4102 33.2851 19.3634 33.7070 C 18.5430 40.0586 18.3087 40.2695 11.8399 41.1836 C 11.4181 41.2305 11.1134 41.5352 11.1134 41.9805 C 11.1134 42.4258 11.4181 42.6836 11.8399 42.7773 C 18.3087 44.0195 18.5196 44.0195 19.3634 50.2773 C 19.4102 50.6758 19.7149 50.9805 20.1602 50.9805 Z M 49.9026 48.9883 L 35.4415 34.5039 L 36.5899 33.3789 L 51.0507 47.8633 C 51.4727 48.2617 51.5663 48.7305 51.1914 49.1523 C 50.7695 49.5039 50.3245 49.4336 49.9026 48.9883 Z"
  }));
}

export default WandStarsInverse;