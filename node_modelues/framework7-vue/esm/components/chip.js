function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { resolveComponent as _resolveComponent, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode, toDisplayString as _toDisplayString, renderSlot as _renderSlot, createTextVNode as _createTextVNode } from "vue";
var _hoisted_1 = {
  key: 1,
  class: "chip-label"
};

function render(_ctx, _cache) {
  var _component_f7_use_icon = _resolveComponent("f7-use-icon");

  return _openBlock(), _createBlock("div", {
    ref: "elRef",
    class: _ctx.classes
  }, [_ctx.hasMedia ? (_openBlock(), _createBlock("div", {
    key: 0,
    class: _ctx.mediaClasses
  }, [_ctx.icon ? (_openBlock(), _createBlock(_component_f7_use_icon, {
    key: 0,
    icon: _ctx.icon
  }, null, 8, ["icon"])) : _createCommentVNode("", true), _createTextVNode(" " + _toDisplayString(_ctx.media) + " ", 1), _renderSlot(_ctx.$slots, "media")], 2)) : _createCommentVNode("", true), _ctx.hasLabel ? (_openBlock(), _createBlock("div", _hoisted_1, [_createTextVNode(_toDisplayString(_ctx.text) + " ", 1), _renderSlot(_ctx.$slots, "text"), _renderSlot(_ctx.$slots, "default")])) : _createCommentVNode("", true), _ctx.deleteable ? (_openBlock(), _createBlock("a", {
    key: 2,
    class: "chip-delete",
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.onDeleteClick && _ctx.onDeleteClick.apply(_ctx, arguments);
    })
  })) : _createCommentVNode("", true)], 2);
}

import { ref, computed } from 'vue';
import { classNames } from '../shared/utils';
import { colorClasses, colorProps, iconProps } from '../shared/mixins';
import { useTooltip } from '../shared/use-tooltip';
import { useIcon } from '../shared/use-icon';
import f7UseIcon from './use-icon';
export default {
  name: 'f7-chip',
  render: render,
  components: {
    f7UseIcon: f7UseIcon
  },
  props: _extends({
    media: String,
    text: [String, Number],
    deleteable: Boolean,
    mediaBgColor: String,
    mediaTextColor: String,
    outline: Boolean,
    tooltip: String,
    tooltipTrigger: String
  }, iconProps, colorProps),
  emits: ['delete'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        emit = _ref.emit;
    var elRef = ref(null);

    var onDeleteClick = function onDeleteClick(event) {
      emit('delete', event);
    };

    useTooltip(elRef, props);
    var icon = computed(function () {
      return useIcon(props);
    });
    var mediaClasses = computed(function () {
      return classNames('chip-media', props.mediaTextColor && "text-color-" + props.mediaTextColor, props.mediaBgColor && "bg-color-" + props.mediaBgColor);
    });
    var classes = computed(function () {
      return classNames('chip', {
        'chip-outline': props.outline
      }, colorClasses(props));
    });
    var hasLabel = computed(function () {
      return props.text || slots && (slots.text || slots.default);
    });
    var hasMedia = computed(function () {
      return props.media || icon.value || slots && slots.media;
    });
    return {
      classes: classes,
      icon: icon,
      mediaClasses: mediaClasses,
      elRef: elRef,
      hasLabel: hasLabel,
      hasMedia: hasMedia,
      onDeleteClick: onDeleteClick
    };
  }
};