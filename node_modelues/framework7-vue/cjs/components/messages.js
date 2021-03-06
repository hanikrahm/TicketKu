"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../shared/utils");

var _mixins = require("../shared/mixins");

var _f = require("../shared/f7");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function render(_ctx, _cache) {
  return (0, _vue.openBlock)(), (0, _vue.createBlock)("div", {
    ref: "elRef",
    class: _ctx.classes
  }, [(0, _vue.renderSlot)(_ctx.$slots, "default")], 2);
}

var _default2 = {
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
  }, _mixins.colorProps),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var f7Messages = null;
    var childrenBeforeUpdated = null;
    var elRef = (0, _vue.ref)(null);
    (0, _vue.onMounted)(function () {
      if (!props.init) return;
      (0, _f.f7ready)(function () {
        f7Messages = _f.f7.messages.create((0, _utils.noUndefinedProps)({
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
    (0, _vue.onBeforeUpdate)(function () {
      if (!props.init || !elRef.value) return;
      var children = elRef.value.children;
      if (!children) return;
      childrenBeforeUpdated = children.length;

      for (var i = 0; i < children.length; i += 1) {
        children[i].classList.add('message-appeared');
      }

      var childrenAfterUpdate = (0, _utils.getChildren)(slots);

      if (f7Messages && props.scrollMessages && childrenBeforeUpdated !== childrenAfterUpdate) {
        f7Messages.setScrollData();
      }
    });
    (0, _vue.onUpdated)(function () {
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
    (0, _vue.onBeforeUnmount)(function () {
      if (f7Messages && f7Messages.destroy) f7Messages.destroy();
      f7Messages = null;
    });
    (0, _vue.watch)(function () {
      return props.typing;
    }, function (newValue) {
      if (!f7Messages) return;
      if (newValue) f7Messages.showTyping();else f7Messages.hideTyping();
    });
    var classes = (0, _vue.computed)(function () {
      return (0, _utils.classNames)('messages', (0, _mixins.colorClasses)(props));
    });
    return {
      elRef: elRef,
      classes: classes
    };
  }
};
exports.default = _default2;