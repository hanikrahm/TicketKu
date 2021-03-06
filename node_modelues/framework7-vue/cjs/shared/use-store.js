"use strict";

exports.__esModule = true;
exports.useStore = void 0;

var _vue = require("vue");

var _f = require("./f7");

var useStore = function useStore() {
  // (store, getter)
  var store = arguments.length <= 0 ? undefined : arguments[0];
  var getter = arguments.length <= 1 ? undefined : arguments[1];

  if (arguments.length === 1) {
    // (getter)
    store = _f.f7.store;
    getter = arguments.length <= 0 ? undefined : arguments[0];
  } // eslint-disable-next-line


  var obj = store._gettersPlain[getter];
  var valueRef = (0, _vue.ref)(obj.value);

  var callback = function callback(v) {
    valueRef.value = v;
  };

  obj.onUpdated(callback);
  (0, _vue.onBeforeUnmount)(function () {
    // eslint-disable-next-line
    store.__removeCallback(callback);
  });
  return valueRef;
};

exports.useStore = useStore;