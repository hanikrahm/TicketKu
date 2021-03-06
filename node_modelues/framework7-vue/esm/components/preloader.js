function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode, createStaticVNode as _createStaticVNode } from "vue";
var _hoisted_1 = {
  key: 0,
  class: "preloader-inner"
};

var _hoisted_2 = /*#__PURE__*/_createVNode("svg", {
  viewBox: "0 0 36 36"
}, [/*#__PURE__*/_createVNode("circle", {
  cx: "18",
  cy: "18",
  r: "16"
})], -1);

var _hoisted_3 = {
  key: 1,
  class: "preloader-inner"
};

var _hoisted_4 = /*#__PURE__*/_createStaticVNode("<span class=\"preloader-inner-line\"></span><span class=\"preloader-inner-line\"></span><span class=\"preloader-inner-line\"></span><span class=\"preloader-inner-line\"></span><span class=\"preloader-inner-line\"></span><span class=\"preloader-inner-line\"></span><span class=\"preloader-inner-line\"></span><span class=\"preloader-inner-line\"></span>", 8);

var _hoisted_12 = {
  key: 2,
  class: "preloader-inner"
};

var _hoisted_13 = /*#__PURE__*/_createVNode("span", {
  class: "preloader-inner-circle"
}, null, -1);

var _hoisted_14 = {
  key: 3,
  class: "preloader-inner"
};

function render(_ctx, _cache) {
  return _openBlock(), _createBlock("div", {
    class: _ctx.classes,
    style: _ctx.style
  }, [_ctx.theme && _ctx.theme.md ? (_openBlock(), _createBlock("span", _hoisted_1, [_hoisted_2])) : _ctx.theme && _ctx.theme.ios ? (_openBlock(), _createBlock("span", _hoisted_3, [_hoisted_4])) : _ctx.theme && _ctx.theme.aurora ? (_openBlock(), _createBlock("span", _hoisted_12, [_hoisted_13])) : !_ctx.theme ? (_openBlock(), _createBlock("span", _hoisted_14)) : _createCommentVNode("", true)], 6);
}

import { computed } from 'vue';
import { classNames } from '../shared/utils';
import { colorClasses, colorProps } from '../shared/mixins';
import { useTheme } from '../shared/use-theme';
export default {
  name: 'f7-preloader',
  render: render,
  props: _extends({
    size: [Number, String]
  }, colorProps),
  setup: function setup(props) {
    var theme = useTheme();
    var classes = computed(function () {
      return classNames('preloader', colorClasses(props));
    });
    var style = computed(function () {
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