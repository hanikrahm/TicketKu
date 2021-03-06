function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { resolveComponent as _resolveComponent, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode, renderSlot as _renderSlot } from "vue";

function render(_ctx, _cache) {
  var _component_f7_link = _resolveComponent("f7-link");

  return _openBlock(), _createBlock("div", {
    class: _ctx.classes
  }, [_ctx.backLink ? (_openBlock(), _createBlock(_component_f7_link, {
    key: 0,
    href: _ctx.backLinkUrl || '#',
    back: "",
    icon: "icon-back",
    force: _ctx.backLinkForce || undefined,
    class: !_ctx.text ? 'icon-only' : undefined,
    text: _ctx.text,
    onClick: _ctx.onBackClick
  }, null, 8, ["href", "force", "class", "text", "onClick"])) : _createCommentVNode("", true), _renderSlot(_ctx.$slots, "default")], 2);
}

import { computed } from 'vue';
import { classNames } from '../shared/utils';
import { colorClasses, colorProps } from '../shared/mixins';
import { useTheme } from '../shared/use-theme';
import f7Link from './link';
export default {
  name: 'f7-nav-left',
  render: render,
  components: {
    f7Link: f7Link
  },
  props: _extends({
    backLink: [Boolean, String],
    backLinkUrl: String,
    backLinkForce: Boolean,
    backLinkShowText: {
      type: Boolean,
      default: undefined
    },
    sliding: Boolean
  }, colorProps),
  emits: ['back:click', 'click:back'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;

    var onBackClick = function onBackClick(event) {
      emit('back:click', event);
      emit('click:back', event);
    };

    var theme = useTheme();
    var text = computed(function () {
      var needBackLinkText = props.backLinkShowText;
      if (typeof needBackLinkText === 'undefined') needBackLinkText = !theme.value.md;

      if (props.backLink) {
        return props.backLink !== true && needBackLinkText ? props.backLink : undefined;
      }

      return undefined;
    });
    var classes = computed(function () {
      return classNames('left', {
        sliding: props.sliding
      }, colorClasses(props));
    });
    return {
      classes: classes,
      onBackClick: onBackClick,
      text: text
    };
  }
};