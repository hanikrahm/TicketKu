function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { renderSlot as _renderSlot, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode, resolveDynamicComponent as _resolveDynamicComponent, withCtx as _withCtx } from "vue";
var _hoisted_1 = {
  key: 0,
  class: "segmented-highlight"
};

function render(_ctx, _cache) {
  return _openBlock(), _createBlock(_resolveDynamicComponent(_ctx.tag), {
    class: _ctx.classes
  }, {
    default: _withCtx(function () {
      return [_renderSlot(_ctx.$slots, "default"), _ctx.strong || _ctx.strongIos || _ctx.strongMd || _ctx.strongAurora ? (_openBlock(), _createBlock("span", _hoisted_1)) : _createCommentVNode("", true)];
    }),
    _: 3
  }, 8, ["class"]);
}

import { computed } from 'vue';
import { classNames } from '../shared/utils';
import { colorClasses, colorProps } from '../shared/mixins';
export default {
  name: 'f7-segmented',
  render: render,
  props: _extends({
    raised: Boolean,
    raisedIos: Boolean,
    raisedMd: Boolean,
    raisedAurora: Boolean,
    round: Boolean,
    roundIos: Boolean,
    roundMd: Boolean,
    roundAurora: Boolean,
    strong: Boolean,
    strongIos: Boolean,
    strongMd: Boolean,
    strongAurora: Boolean,
    tag: {
      type: String,
      default: 'div'
    }
  }, colorProps),
  setup: function setup(props) {
    var classes = computed(function () {
      return classNames({
        segmented: true,
        'segmented-raised': props.raised,
        'segmented-raised-ios': props.raisedIos,
        'segmented-raised-aurora': props.raisedAurora,
        'segmented-raised-md': props.raisedMd,
        'segmented-round': props.round,
        'segmented-round-ios': props.roundIos,
        'segmented-round-aurora': props.roundAurora,
        'segmented-round-md': props.roundMd,
        'segmented-strong': props.strong,
        'segmented-strong-ios': props.strongIos,
        'segmented-strong-md': props.strongMd,
        'segmented-strong-aurora': props.strongAurora
      }, colorClasses(props));
    });
    return {
      classes: classes
    };
  }
};