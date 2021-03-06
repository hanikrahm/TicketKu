function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { renderSlot as _renderSlot, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createBlock("div", {
    class: _ctx.classes
  }, [_renderSlot(_ctx.$slots, "before-inner"), _ctx.inner ? (_openBlock(), _createBlock("div", {
    key: 0,
    class: _ctx.innerClasses
  }, [_renderSlot(_ctx.$slots, "default")], 2)) : _renderSlot(_ctx.$slots, "default", {
    key: 1
  }), _renderSlot(_ctx.$slots, "after-inner")], 2);
}

import { computed } from 'vue';
import { classNames } from '../shared/utils';
import { colorClasses, colorProps } from '../shared/mixins';
export default {
  name: 'f7-appbar',
  render: render,
  props: _extends({
    noShadow: Boolean,
    noHairline: Boolean,
    inner: {
      type: Boolean,
      default: true
    },
    innerClass: String,
    innerClassName: String
  }, colorProps),
  setup: function setup(props) {
    var classes = computed(function () {
      return classNames('appbar', {
        'no-shadow': props.noShadow,
        'no-hairline': props.noHairline
      }, colorClasses(props));
    });
    var innerClasses = computed(function () {
      return classNames('appbar-inner', props.innerClass, props.innerClassName);
    });
    return {
      classes: classes,
      innerClasses: innerClasses
    };
  }
};