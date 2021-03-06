function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { renderSlot as _renderSlot, toDisplayString as _toDisplayString, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode, createTextVNode as _createTextVNode } from "vue";
var _hoisted_1 = {
  key: 0,
  class: "subtitle"
};

function render(_ctx, _cache) {
  return _openBlock(), _createBlock("div", {
    class: _ctx.classes
  }, [_renderSlot(_ctx.$slots, "default"), _createTextVNode(" " + _toDisplayString(_ctx.title) + " ", 1), _ctx.subtitle ? (_openBlock(), _createBlock("span", _hoisted_1, _toDisplayString(_ctx.subtitle), 1)) : _createCommentVNode("", true)], 2);
}

import { computed } from 'vue';
import { classNames } from '../shared/utils';
import { colorClasses, colorProps } from '../shared/mixins';
export default {
  name: 'f7-nav-title',
  render: render,
  props: _extends({
    title: String,
    subtitle: String,
    sliding: Boolean
  }, colorProps),
  setup: function setup(props) {
    var classes = computed(function () {
      return classNames('title', {
        sliding: props.sliding
      }, colorClasses(props));
    });
    return {
      classes: classes
    };
  }
};