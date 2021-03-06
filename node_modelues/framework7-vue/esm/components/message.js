function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { renderSlot as _renderSlot, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode, toDisplayString as _toDisplayString, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
var _hoisted_1 = {
  class: "message-content"
};
var _hoisted_2 = {
  key: 0,
  class: "message-image"
};
var _hoisted_3 = {
  key: 1,
  class: "message-text-header"
};
var _hoisted_4 = {
  key: 0,
  class: "message-typing-indicator"
};

var _hoisted_5 = /*#__PURE__*/_createVNode("div", null, null, -1);

var _hoisted_6 = /*#__PURE__*/_createVNode("div", null, null, -1);

var _hoisted_7 = /*#__PURE__*/_createVNode("div", null, null, -1);

var _hoisted_8 = {
  key: 3,
  class: "message-text-footer"
};

function render(_ctx, _cache) {
  return _openBlock(), _createBlock("div", {
    class: _ctx.classes,
    onClick: _cache[7] || (_cache[7] = function () {
      return _ctx.onClick && _ctx.onClick.apply(_ctx, arguments);
    })
  }, [_renderSlot(_ctx.$slots, "start"), _ctx.hasAvatar ? (_openBlock(), _createBlock("div", {
    key: 0,
    class: "message-avatar",
    style: {
      backgroundImage: _ctx.avatar && "url(" + _ctx.avatar + ")"
    },
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.onAvatarClick && _ctx.onAvatarClick.apply(_ctx, arguments);
    })
  }, [_renderSlot(_ctx.$slots, "avatar")], 4)) : _createCommentVNode("", true), _createVNode("div", _hoisted_1, [_renderSlot(_ctx.$slots, "content-start"), _ctx.hasName ? (_openBlock(), _createBlock("div", {
    key: 0,
    class: "message-name",
    onClick: _cache[2] || (_cache[2] = function () {
      return _ctx.onNameClick && _ctx.onNameClick.apply(_ctx, arguments);
    })
  }, [_createTextVNode(_toDisplayString(_ctx.name) + " ", 1), _renderSlot(_ctx.$slots, "name")])) : _createCommentVNode("", true), _ctx.hasHeader ? (_openBlock(), _createBlock("div", {
    key: 1,
    class: "message-header",
    onClick: _cache[3] || (_cache[3] = function () {
      return _ctx.onHeaderClick && _ctx.onHeaderClick.apply(_ctx, arguments);
    })
  }, [_createTextVNode(_toDisplayString(_ctx.header) + " ", 1), _renderSlot(_ctx.$slots, "header")])) : _createCommentVNode("", true), _createVNode("div", {
    class: "message-bubble",
    onClick: _cache[5] || (_cache[5] = function () {
      return _ctx.onBubbleClick && _ctx.onBubbleClick.apply(_ctx, arguments);
    })
  }, [_renderSlot(_ctx.$slots, "bubble-start"), _ctx.hasImage ? (_openBlock(), _createBlock("div", _hoisted_2, [_renderSlot(_ctx.$slots, "image", {}, function () {
    return [_createVNode("img", {
      src: _ctx.image
    }, null, 8, ["src"])];
  })])) : _createCommentVNode("", true), _ctx.hasTextHeader ? (_openBlock(), _createBlock("div", _hoisted_3, [_createTextVNode(_toDisplayString(_ctx.textHeader) + " ", 1), _renderSlot(_ctx.$slots, "text-header")])) : _createCommentVNode("", true), _ctx.hasText ? (_openBlock(), _createBlock("div", {
    key: 2,
    class: "message-text",
    onClick: _cache[4] || (_cache[4] = function () {
      return _ctx.onTextClick && _ctx.onTextClick.apply(_ctx, arguments);
    })
  }, [_createTextVNode(_toDisplayString(_ctx.text) + " ", 1), _renderSlot(_ctx.$slots, "text"), _ctx.typing ? (_openBlock(), _createBlock("div", _hoisted_4, [_hoisted_5, _hoisted_6, _hoisted_7])) : _createCommentVNode("", true)])) : _createCommentVNode("", true), _ctx.hasTextFooter ? (_openBlock(), _createBlock("div", _hoisted_8, [_createTextVNode(_toDisplayString(_ctx.textFooter) + " ", 1), _renderSlot(_ctx.$slots, "text-footer")])) : _createCommentVNode("", true), _renderSlot(_ctx.$slots, "bubble-end"), _renderSlot(_ctx.$slots, "default")]), _ctx.hasFooter ? (_openBlock(), _createBlock("div", {
    key: 2,
    class: "message-footer",
    onClick: _cache[6] || (_cache[6] = function () {
      return _ctx.onFooterClick && _ctx.onFooterClick.apply(_ctx, arguments);
    })
  }, [_createTextVNode(_toDisplayString(_ctx.footer) + " ", 1), _renderSlot(_ctx.$slots, "footer")])) : _createCommentVNode("", true), _renderSlot(_ctx.$slots, "content-end")]), _renderSlot(_ctx.$slots, "end")], 2);
}

import { computed } from 'vue';
import { classNames } from '../shared/utils';
import { colorClasses, colorProps } from '../shared/mixins';
export default {
  name: 'f7-message',
  render: render,
  props: _extends({
    text: String,
    name: String,
    avatar: String,
    type: {
      type: String,
      default: 'sent'
    },
    image: String,
    header: String,
    footer: String,
    textHeader: String,
    textFooter: String,
    first: Boolean,
    last: Boolean,
    tail: Boolean,
    sameName: Boolean,
    sameHeader: Boolean,
    sameFooter: Boolean,
    sameAvatar: Boolean,
    typing: Boolean
  }, colorProps),
  emits: ['click', 'click:name', 'click:text', 'click:avatar', 'click:header', 'click:footer', 'click:bubble'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;

    var onClick = function onClick(event) {
      emit('click', event);
    };

    var onNameClick = function onNameClick(event) {
      emit('click:name', event);
    };

    var onTextClick = function onTextClick(event) {
      emit('click:text', event);
    };

    var onAvatarClick = function onAvatarClick(event) {
      emit('click:avatar', event);
    };

    var onHeaderClick = function onHeaderClick(event) {
      emit('click:header', event);
    };

    var onFooterClick = function onFooterClick(event) {
      emit('click:footer', event);
    };

    var onBubbleClick = function onBubbleClick(event) {
      emit('click:bubble', event);
    };

    var classes = computed(function () {
      return classNames('message', {
        'message-sent': props.type === 'sent',
        'message-received': props.type === 'received',
        'message-typing': props.typing,
        'message-first': props.first,
        'message-last': props.last,
        'message-tail': props.tail,
        'message-same-name': props.sameName,
        'message-same-header': props.sameHeader,
        'message-same-footer': props.sameFooter,
        'message-same-avatar': props.sameAvatar
      }, colorClasses(props));
    });
    var hasAvatar = computed(function () {
      return slots.avatar || props.avatar;
    });
    var hasName = computed(function () {
      return slots.name || props.name;
    });
    var hasHeader = computed(function () {
      return slots.header || props.header;
    });
    var hasImage = computed(function () {
      return slots.image || props.image;
    });
    var hasTextHeader = computed(function () {
      return slots['text-header'] || props.textHeader;
    });
    var hasText = computed(function () {
      return slots.text || props.text || props.typing;
    });
    var hasTextFooter = computed(function () {
      return slots['text-footer'] || props.textFooter;
    });
    var hasFooter = computed(function () {
      return slots.footer || props.footer;
    });
    return {
      classes: classes,
      onClick: onClick,
      onNameClick: onNameClick,
      onTextClick: onTextClick,
      onAvatarClick: onAvatarClick,
      onHeaderClick: onHeaderClick,
      onFooterClick: onFooterClick,
      onBubbleClick: onBubbleClick,
      hasAvatar: hasAvatar,
      hasName: hasName,
      hasHeader: hasHeader,
      hasImage: hasImage,
      hasTextHeader: hasTextHeader,
      hasText: hasText,
      hasTextFooter: hasTextFooter,
      hasFooter: hasFooter
    };
  }
};