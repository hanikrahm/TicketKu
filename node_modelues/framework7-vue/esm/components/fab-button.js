function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { renderSlot as _renderSlot, toDisplayString as _toDisplayString, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode } from "vue";
var _hoisted_1 = {
  key: 0,
  class: "fab-label"
};

function render(_ctx, _cache) {
  return _openBlock(), _createBlock("a", {
    ref: "elRef",
    class: _ctx.classes,
    target: _ctx.target,
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.onClick && _ctx.onClick.apply(_ctx, arguments);
    })
  }, [_renderSlot(_ctx.$slots, "default"), _ctx.label ? (_openBlock(), _createBlock("span", _hoisted_1, _toDisplayString(_ctx.label), 1)) : _createCommentVNode("", true)], 10, ["target"]);
}

import { computed, ref } from 'vue';
import { classNames } from '../shared/utils';
import { colorClasses, colorProps } from '../shared/mixins';
import { useTooltip } from '../shared/use-tooltip';
export default {
  name: 'f7-fab-button',
  render: render,
  props: _extends({
    fabClose: Boolean,
    label: String,
    target: String,
    tooltip: String,
    tooltipTrigger: String
  }, colorProps),
  emits: ['click'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var elRef = ref(null);

    var onClick = function onClick(e) {
      emit('click', e);
    };

    useTooltip(elRef, props);
    var classes = computed(function () {
      return classNames({
        'fab-close': props.fabClose,
        'fab-label-button': props.label
      }, colorClasses(props));
    });
    return {
      classes: classes,
      onClick: onClick,
      elRef: elRef
    };
  }
};