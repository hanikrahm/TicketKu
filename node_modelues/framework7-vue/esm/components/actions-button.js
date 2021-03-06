function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { renderSlot as _renderSlot, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode, createVNode as _createVNode } from "vue";
var _hoisted_1 = {
  key: 0,
  class: "actions-button-media"
};
var _hoisted_2 = {
  class: "actions-button-text"
};

function render(_ctx, _cache) {
  return _openBlock(), _createBlock("div", {
    ref: "elRef",
    class: _ctx.classes,
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.onClick && _ctx.onClick.apply(_ctx, arguments);
    })
  }, [_ctx.hasMedia ? (_openBlock(), _createBlock("div", _hoisted_1, [_renderSlot(_ctx.$slots, "media")])) : _createCommentVNode("", true), _createVNode("div", _hoisted_2, [_renderSlot(_ctx.$slots, "default")])], 2);
}

import { computed, ref } from 'vue';
import { classNames } from '../shared/utils';
import { colorClasses, colorProps } from '../shared/mixins';
import { f7 } from '../shared/f7';
export default {
  name: 'f7-actions-button',
  render: render,
  props: _extends({
    bold: Boolean,
    close: {
      type: Boolean,
      default: true
    }
  }, colorProps),
  emits: ['click'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        emit = _ref.emit;
    var elRef = ref(null);

    var onClick = function onClick(e) {
      if (elRef.value && props.close && f7) {
        f7.actions.close(f7.$(elRef.value).parents('.actions-modal'));
      }

      emit('click', e);
    };

    var hasMedia = computed(function () {
      return slots && !!slots.media;
    });
    var classes = computed(function () {
      return classNames({
        'actions-button': true,
        'actions-button-bold': props.bold
      }, colorClasses(props));
    });
    return {
      classes: classes,
      elRef: elRef,
      hasMedia: hasMedia,
      onClick: onClick
    };
  }
};