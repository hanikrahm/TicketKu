"use strict";

exports.__esModule = true;
exports.noUndefinedProps = noUndefinedProps;
exports.isStringProp = isStringProp;
exports.isObject = isObject;
exports.now = now;
exports.extend = extend;
exports.classNames = classNames;
exports.unsetRouterIds = unsetRouterIds;
exports.getRouterId = getRouterId;
exports.getComponentId = getComponentId;
exports.getChildren = getChildren;

var _vue = require("vue");

function noUndefinedProps(obj) {
  var o = {};
  Object.keys(obj).forEach(function (key) {
    if (typeof obj[key] !== 'undefined') o[key] = obj[key];
  });
  return o;
}

function isStringProp(val) {
  return typeof val === 'string' && val !== '';
}

function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
}

function now() {
  return Date.now();
}

function extend() {
  var deep = true;
  var to;
  var from;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (typeof args[0] === 'boolean') {
    deep = args[0];
    to = args[1];
    args.splice(0, 2);
    from = args;
  } else {
    to = args[0];
    args.splice(0, 1);
    from = args;
  }

  for (var i = 0; i < from.length; i += 1) {
    var nextSource = args[i];

    if (nextSource !== undefined && nextSource !== null) {
      var keysArray = Object.keys(Object(nextSource));

      for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        var nextKey = keysArray[nextIndex];
        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

        if (desc !== undefined && desc.enumerable) {
          if (!deep) {
            to[nextKey] = nextSource[nextKey];
          } else if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            extend(to[nextKey], nextSource[nextKey]);
          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            to[nextKey] = {};
            extend(to[nextKey], nextSource[nextKey]);
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }

  return to;
}

function classNames() {
  var classes = [];

  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  args.forEach(function (arg) {
    if (typeof arg === 'object' && arg.constructor === Object) {
      Object.keys(arg).forEach(function (key) {
        if (arg[key]) classes.push(key);
      });
    } else if (arg) classes.push(arg);
  });
  var uniqueClasses = [];
  classes.forEach(function (c) {
    if (uniqueClasses.indexOf(c) < 0) uniqueClasses.push(c);
  });
  return uniqueClasses.join(' ');
}

var routerIdCounter = 0;
var routerComponentIdCounter = 0;

function unsetRouterIds() {
  routerIdCounter = 0;
  routerComponentIdCounter = 0;
}

function getRouterId() {
  routerIdCounter += 1;
  return now() + "_" + routerIdCounter;
}

function getComponentId() {
  routerComponentIdCounter += 1;
  return now() + "_" + routerComponentIdCounter;
}

function getChildren(slots, slotName) {
  if (slotName === void 0) {
    slotName = 'default';
  }

  var result = [];

  var getElementsChildren = function getElementsChildren(els) {
    if (!Array.isArray(els)) {
      return;
    }

    els.forEach(function (vnode) {
      var isFragment = vnode.type === _vue.Fragment;

      if (isFragment && vnode.children) {
        getElementsChildren(vnode.children);
      } else if (vnode.type && vnode.type !== _vue.Comment) {
        result.push(vnode);
      }
    });
  };

  if (slots[slotName]) getElementsChildren(slots[slotName]());
  return result;
}