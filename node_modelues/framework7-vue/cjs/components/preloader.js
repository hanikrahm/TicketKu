"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../shared/utils");

var _mixins = require("../shared/mixins");

var _useTheme = require("../shared/use-theme");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _hoisted_1 = {
  key: 0,
  class: "preloader-inner"
};

var _hoisted_2 = /*#__PURE__*/(0, _vue.createVNode)("svg", {
  viewBox: "0 0 36 36"
}, [/*#__PURE__*/(0, _vue.createVNode)("circle", {
  cx: "18",
  cy: "18",
  r: "16"
})], -1);

var _hoisted_3 = {
  key: 1,
  class: "preloader-inner"
};

var _hoisted_4 = /*#__PURE__*/(0, _vue.createStaticVNode)("<span class=\"preloader-inner-line\"></span><span class=\"preloader-inner-line\"></span><span class=\"preloader-inner-line\"></span><span class=\"preloader-inner-line\"></span><span class=\"preloader-inner-line\"></span><span class=\"preloader-inner-line\"></span><span class=\"preloader-inner-line\"></span><span class=\"preloader-inner-line\"></span>", 8);

var _hoisted_12 = {
  key: 2,
  class: "preloader-inner"
};

var _hoisted_13 = /*#__PURE__*/(0, _vue.createVNode)("span", {
  class: "preloader-inner-circle"
}, null, -1);

var _hoisted_14 = {
  key: 3,
  class: "preloader-inner"
};

function render(_ctx, _cache) {
  return (0, _vue.openBlock)(), (0, _vue.createBlock)("div", {
    class: _ctx.classes,
    style: _ctx.style
  }, [_ctx.theme && _ctx.theme.md ? ((0, _vue.openBlock)(), (0, _vue.createBlock)("span", _hoisted_1, [_hoisted_2])) : _ctx.theme && _ctx.theme.ios ? ((0, _vue.openBlock)(), (0, _vue.createBlock)("span", _hoisted_3, [_hoisted_4])) : _ctx.theme && _ctx.theme.aurora ? ((0, _vue.openBlock)(), (0, _vue.createBlock)("span", _hoisted_12, [_hoisted_13])) : !_ctx.theme ? ((0, _vue.openBlock)(), (0, _vue.createBlock)("span", _hoisted_14)) : (0, _vue.createCommentVNode)("", true)], 6);
}

var _default = {
  name: 'f7-preloader',
  render: render,
  props: _extends({
    size: [Number, String]
  }, _mixins.colorProps),
  setup: function setup(props) {
    var theme = (0, _useTheme.useTheme)();
    var classes = (0, _vue.computed)(function () {
      return (0, _utils.classNames)('preloader', (0, _mixins.colorClasses)(props));
    });
    var style = (0, _vue.computed)(function () {
      var preloaderStyle = {};
      var sizeComputed = props.size;

      if (sizeComputed && typeof sizeComputed === 'string' && sizeComputed.indexOf('px') >= 0) {
        sizeComputed = sizeComputed.replace('px', '');
      }

      if (sizeComputed) {
        preloaderStyle.width = sizeComputed + "px";
        preloaderStyle.height = sizeComputed + "px";
        preloaderStyle['--f7-preloader-size'] = sizeComputed + "px";
      }

      return preloaderStyle;
    });
    return {
      classes: classes,
      style: style,
      theme: theme
    };
  }
};
exports.default = _default;