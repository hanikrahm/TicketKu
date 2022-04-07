function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Building2Fill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M34.2394586,45.2844831 L46.4951828,45.2844831 C47.5713796,45.2844831 48.424565,44.9340159 49.054739,44.2330814 C49.684913,43.532147 50,42.5940316 50,41.4187354 L50,14.3160278 C50,13.1407373 49.684913,12.2026249 49.054739,11.5016904 C48.424565,10.800756 47.5713796,10.4502888 46.4951828,10.4502888 L35.2802462,10.4502888 L35.2802462,41.4187354 C35.2802462,42.1409038 35.1917376,42.8241365 35.0147205,43.4684336 C34.8377324,44.1127307 34.5793117,44.7180805 34.2394586,45.2844831 Z M40.1019472,21.1979019 L40.1019472,17.7994428 C40.1019472,17.3038297 40.3497538,17.0560231 40.845367,17.0560231 L44.3710643,17.0560231 C44.8666775,17.0560231 45.114484,17.3038297 45.114484,17.7994428 L45.114484,21.1979019 C45.114484,21.7076671 44.8666775,21.9625497 44.3710643,21.9625497 L40.845367,21.9625497 C40.3497538,21.9625497 40.1019472,21.7076671 40.1019472,21.1979019 Z M40.1019472,29.5666155 L40.1019472,26.1681564 C40.1019472,25.6725433 40.3497538,25.4247367 40.845367,25.4247367 L44.3710643,25.4247367 C44.8666775,25.4247367 45.114484,25.6725433 45.114484,26.1681564 L45.114484,29.5666155 C45.114484,30.0622286 44.8666775,30.3100352 44.3710643,30.3100352 L40.845367,30.3100352 C40.3497538,30.3100352 40.1019472,30.0622286 40.1019472,29.5666155 Z M40.1019472,37.9353168 L40.1019472,34.5368569 C40.1019472,34.0270888 40.3497538,33.7722047 40.845367,33.7722047 L44.3710643,33.7722047 C44.8666775,33.7722047 45.114484,34.0270888 45.114484,34.5368569 L45.114484,37.9353168 C45.114484,38.4309265 44.8666775,38.6787313 44.3710643,38.6787313 L40.845367,38.6787313 C40.3497538,38.6787313 40.1019472,38.4309265 40.1019472,37.9353168 Z M-4.61833182e-16,41.4187354 C-4.61833182e-16,42.5940316 0.315057997,43.532147 0.945173992,44.2330814 C1.57531899,44.9340159 2.43555144,45.2844831 3.52587135,45.2844831 L28.8444239,45.2844831 C29.9347438,45.2844831 30.7949762,44.9340159 31.4251212,44.2330814 C32.0552372,43.532147 32.3702952,42.5940316 32.3702952,41.4187354 L32.3702952,3.86578251 C32.3702952,2.67631097 32.0552372,1.734646 31.4251212,1.0407876 C30.7949762,0.3469292 29.9347438,0 28.8444239,0 L3.52587135,0 C2.43555144,0 1.57531899,0.3469292 0.945173992,1.0407876 C0.315057997,1.734646 -4.61833182e-16,2.67631097 -4.61833182e-16,3.86578251 L-4.61833182e-16,41.4187354 Z M8.83599352,41.8647872 L8.83599352,34.9616632 C8.83599352,34.4660559 8.98467746,34.0731092 9.28204535,33.7828231 C9.57941323,33.49254 9.9688132,33.3473984 10.4502453,33.3473984 L22.1111902,33.3473984 C22.6068033,33.3473984 22.9997558,33.49254 23.2900477,33.7828231 C23.5803395,34.0731092 23.7254854,34.4660559 23.7254854,34.9616632 L23.7254854,41.8647872 L8.83599352,41.8647872 Z M8.13503008,11.4060768 L8.13503008,7.28546969 C8.13503008,6.67658183 8.42532192,6.3721379 9.0059056,6.3721379 L13.2539685,6.3721379 C13.8628564,6.3721379 14.1673003,6.67658183 14.1673003,7.28546969 L14.1673003,11.4060768 C14.1673003,12.0149937 13.8628564,12.3194521 13.2539685,12.3194521 L9.0059056,12.3194521 C8.42532192,12.3194521 8.13503008,12.0149937 8.13503008,11.4060768 Z M18.3941351,11.4060768 L18.3941351,7.28546969 C18.3941351,6.67658183 18.691503,6.3721379 19.2862388,6.3721379 L23.5130736,6.3721379 C24.1219614,6.3721379 24.4264054,6.67658183 24.4264054,7.28546969 L24.4264054,11.4060768 C24.4264054,12.0149937 24.1219614,12.3194521 23.5130736,12.3194521 L19.2862388,12.3194521 C18.691503,12.3194521 18.3941351,12.0149937 18.3941351,11.4060768 Z M8.13503008,20.0721583 L8.13503008,15.9515511 C8.13503008,15.3426633 8.42532192,15.0382193 9.0059056,15.0382193 L13.2539685,15.0382193 C13.8628564,15.0382193 14.1673003,15.3426633 14.1673003,15.9515511 L14.1673003,20.0721583 C14.1673003,20.6810461 13.8628564,20.98549 13.2539685,20.98549 L9.0059056,20.98549 C8.42532192,20.98549 8.13503008,20.6810461 8.13503008,20.0721583 Z M18.3941351,20.0721583 L18.3941351,15.9515511 C18.3941351,15.3426633 18.691503,15.0382193 19.2862388,15.0382193 L23.5130736,15.0382193 C24.1219614,15.0382193 24.4264054,15.3426633 24.4264054,15.9515511 L24.4264054,20.0721583 C24.4264054,20.6810461 24.1219614,20.98549 23.5130736,20.98549 L19.2862388,20.98549 C18.691503,20.98549 18.3941351,20.6810461 18.3941351,20.0721583 Z M8.13503008,28.7382397 L8.13503008,24.6175891 C8.13503008,24.0087012 8.42532192,23.7042573 9.0059056,23.7042573 L13.2539685,23.7042573 C13.8628564,23.7042573 14.1673003,24.0087012 14.1673003,24.6175891 L14.1673003,28.7382397 C14.1673003,29.3471276 13.8628564,29.6515715 13.2539685,29.6515715 L9.0059056,29.6515715 C8.42532192,29.6515715 8.13503008,29.3471276 8.13503008,28.7382397 Z M18.3941351,28.7382397 L18.3941351,24.6175891 C18.3941351,24.0087012 18.691503,23.7042573 19.2862388,23.7042573 L23.5130736,23.7042573 C24.1219614,23.7042573 24.4264054,24.0087012 24.4264054,24.6175891 L24.4264054,28.7382397 C24.4264054,29.3471276 24.1219614,29.6515715 23.5130736,29.6515715 L19.2862388,29.6515715 C18.691503,29.6515715 18.3941351,29.3471276 18.3941351,28.7382397 Z",
    transform: "translate(3 5)"
  }));
}

export default Building2Fill;