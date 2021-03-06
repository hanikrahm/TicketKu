function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toDisplayString as _toDisplayString, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode, renderSlot as _renderSlot } from "vue";
var _hoisted_1 = {
  key: 0,
  class: "subnavbar-inner"
};
var _hoisted_2 = {
  key: 0,
  class: "subnavbar-title"
};

function render(_ctx, _cache) {
  return _openBlock(), _createBlock("div", {
    class: _ctx.classes
  }, [_ctx.inner ? (_openBlock(), _createBlock("div", _hoisted_1, [_ctx.title ? (_openBlock(), _createBlock("div", _hoisted_2, _toDisplayString(_ctx.title), 1)) : _createCommentVNode("", true), _renderSlot(_ctx.$slots, "default")])) : _renderSlot(_ctx.$slots, "default", {
    key: 1
  })], 2);
}

import { computed } from 'vue';
import { classNames } from '../shared/utils';
import { colorClasses, colorProps } from '../shared/mixins';
export default {
  name: 'f7-subnavbar',
  render: render,
  props: _extends({
    sliding: Boolean,
    title: String,
    inner: {
      type: Boolean,
      default: true
    }
  }, colorProps),
  setup: function setup(props) {
    var classes = computed(function () {
      return classNames('subnavbar', {
        sliding: props.sliding
      }, colorClasses(props));
    });
    return {
      classes: classes
    };
  }
};