function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { renderSlot as _renderSlot, openBlock as _openBlock, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createBlock("div", {
    ref: "elRef",
    class: _ctx.classes
  }, [_renderSlot(_ctx.$slots, "default")], 2);
}

import { computed, ref, onMounted, onBeforeUnmount, onBeforeUpdate, onUpdated, watch } from 'vue';
import { classNames, getChildren, noUndefinedProps } from '../shared/utils';
import { colorClasses, colorProps } from '../shared/mixins';
import { f7ready, f7 } from '../shared/f7';
export default {
  name: 'f7-messages',
  render: render,
  props: _extends({
    autoLayout: {
      type: Boolean,
      default: false
    },
    messages: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    newMessagesFirst: {
      type: Boolean,
      default: false
    },
    scrollMessages: {
      type: Boolean,
      default: true
    },
    scrollMessagesOnEdge: {
      type: Boolean,
      default: true
    },
    typing: {
      type: Boolean,
      default: false
    },
    firstMessageRule: Function,
    lastMessageRule: Function,
    tailMessageRule: Function,
    sameNameMessageRule: Function,
    sameHeaderMessageRule: Function,
    sameFooterMessageRule: Function,
    sameAvatarMessageRule: Function,
    customClassMessageRule: Function,
    renderMessage: Function,
    init: {
      type: Boolean,
      default: true
    }
  }, colorProps),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var f7Messages = null;
    var childrenBeforeUpdated = null;
    var elRef = ref(null);
    onMounted(function () {
      if (!props.init) return;
      f7ready(function () {
        f7Messages = f7.messages.create(noUndefinedProps({
          el: elRef.value,
          autoLayout: props.autoLayout,
          messages: props.messages,
          newMessagesFirst: props.newMessagesFirst,
          scrollMessages: props.scrollMessages,
          scrollMessagesOnEdge: props.scrollMessagesOnEdge,
          firstMessageRule: props.firstMessageRule,
          lastMessageRule: props.lastMessageRule,
          tailMessageRule: props.tailMessageRule,
          sameNameMessageRule: props.sameNameMessageRule,
          sameHeaderMessageRule: props.sameHeaderMessageRule,
          sameFooterMessageRule: props.sameFooterMessageRule,
          sameAvatarMessageRule: props.sameAvatarMessageRule,
          customClassMessageRule: props.customClassMessageRule,
          renderMessage: props.renderMessage
        }));

        if (f7Messages && props.typing) {
          f7Messages.showTyping();
        }
      });
    });
    onBeforeUpdate(function () {
      if (!props.init || !elRef.value) return;
      var children = elRef.value.children;
      if (!children) return;
      childrenBeforeUpdated = children.length;

      for (var i = 0; i < children.length; i += 1) {
        children[i].classList.add('message-appeared');
      }

      var childrenAfterUpdate = getChildren(slots);

      if (f7Messages && props.scrollMessages && childrenBeforeUpdated !== childrenAfterUpdate) {
        f7Messages.setScrollData();
      }
    });
    onUpdated(function () {
      if (!props.init) return;
      if (!elRef.value) return;
      var children = elRef.value.children;
      if (!children) return;
      var childerAftterUpdated = children.length;

      for (var i = 0; i < children.length; i += 1) {
        if (!children[i].classList.contains('message-appeared')) {
          children[i].classList.add('message-appear-from-bottom');
        }
      }

      if (f7Messages && f7Messages.layout && props.autoLayout) {
        f7Messages.layout();
      }

      if (childerAftterUpdated !== childrenBeforeUpdated && f7Messages && f7Messages.scroll && f7Messages.scrollData && props.scrollMessages) {
        f7Messages.scrollWithEdgeCheck(true);
      }
    });
    onBeforeUnmount(function () {
      if (f7Messages && f7Messages.destroy) f7Messages.destroy();
      f7Messages = null;
    });
    watch(function () {
      return props.typing;
    }, function (newValue) {
      if (!f7Messages) return;
      if (newValue) f7Messages.showTyping();else f7Messages.hideTyping();
    });
    var classes = computed(function () {
      return classNames('messages', colorClasses(props));
    });
    return {
      elRef: elRef,
      classes: classes
    };
  }
};