function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toDisplayString as _toDisplayString, renderSlot as _renderSlot, createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode } from "vue";

function render(_ctx, _cache) {
  var _component_f7_card_header = _resolveComponent("f7-card-header");

  var _component_f7_card_content = _resolveComponent("f7-card-content");

  var _component_f7_card_footer = _resolveComponent("f7-card-footer");

  return _openBlock(), _createBlock("div", {
    ref: "elRef",
    class: _ctx.classes,
    "data-animate": typeof _ctx.animate === 'undefined' ? _ctx.animate : _ctx.animate.toString(),
    "data-hide-navbar-on-open": typeof _ctx.hideNavbarOnOpen === 'undefined' ? _ctx.hideNavbarOnOpen : _ctx.hideNavbarOnOpen.toString(),
    "data-hide-toolbar-on-open": typeof _ctx.hideToolbarOnOpen === 'undefined' ? _ctx.hideToolbarOnOpen : _ctx.hideToolbarOnOpen.toString(),
    "data-hide-statusbar-on-open": typeof _ctx.hideStatusbarOnOpen === 'undefined' ? _ctx.hideStatusbarOnOpen : _ctx.hideStatusbarOnOpen.toString(),
    "data-scrollable-el": _ctx.scrollableEl,
    "data-swipe-to-close": typeof _ctx.swipeToClose === 'undefined' ? _ctx.swipeToClose : _ctx.swipeToClose.toString(),
    "data-close-by-backdrop-click": typeof _ctx.closeByBackdropClick === 'undefined' ? _ctx.closeByBackdropClick : _ctx.closeByBackdropClick.toString(),
    "data-backdrop": typeof _ctx.backdrop === 'undefined' ? _ctx.backdrop : _ctx.backdrop.toString(),
    "data-backdrop-el": _ctx.backdropEl
  }, [_ctx.hasHeader ? (_openBlock(), _createBlock(_component_f7_card_header, {
    key: 0
  }, {
    default: _withCtx(function () {
      return [_createTextVNode(_toDisplayString(_ctx.title) + " ", 1), _renderSlot(_ctx.$slots, "header")];
    }),
    _: 3
  })) : _createCommentVNode("", true), _ctx.hasContent ? (_openBlock(), _createBlock(_component_f7_card_content, {
    key: 1,
    padding: _ctx.padding
  }, {
    default: _withCtx(function () {
      return [_createTextVNode(_toDisplayString(_ctx.content) + " ", 1), _renderSlot(_ctx.$slots, "content")];
    }),
    _: 3
  }, 8, ["padding"])) : _createCommentVNode("", true), _ctx.hasFooter ? (_openBlock(), _createBlock(_component_f7_card_footer, {
    key: 2
  }, {
    default: _withCtx(function () {
      return [_createTextVNode(_toDisplayString(_ctx.footer) + " ", 1), _renderSlot(_ctx.$slots, "footer")];
    }),
    _: 3
  })) : _createCommentVNode("", true), _renderSlot(_ctx.$slots, "default")], 10, ["data-animate", "data-hide-navbar-on-open", "data-hide-toolbar-on-open", "data-hide-statusbar-on-open", "data-scrollable-el", "data-swipe-to-close", "data-close-by-backdrop-click", "data-backdrop", "data-backdrop-el"]);
}

import { computed, ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { classNames } from '../shared/utils';
import { colorClasses, colorProps } from '../shared/mixins';
import { f7, f7ready } from '../shared/f7';
import f7CardHeader from './card-header';
import f7CardContent from './card-content';
import f7CardFooter from './card-footer';
export default {
  name: 'f7-card',
  render: render,
  components: {
    f7CardHeader: f7CardHeader,
    f7CardContent: f7CardContent,
    f7CardFooter: f7CardFooter
  },
  props: _extends({
    title: [String, Number],
    content: [String, Number],
    footer: [String, Number],
    outline: Boolean,
    expandable: Boolean,
    expandableAnimateWidth: Boolean,
    expandableOpened: Boolean,
    animate: {
      type: Boolean,
      default: undefined
    },
    hideNavbarOnOpen: {
      type: Boolean,
      default: undefined
    },
    hideToolbarOnOpen: {
      type: Boolean,
      default: undefined
    },
    hideStatusbarOnOpen: {
      type: Boolean,
      default: undefined
    },
    scrollableEl: {
      type: String,
      default: undefined
    },
    swipeToClose: {
      type: Boolean,
      default: undefined
    },
    closeByBackdropClick: {
      type: Boolean,
      default: undefined
    },
    backdrop: {
      type: Boolean,
      default: undefined
    },
    backdropEl: {
      type: String,
      default: undefined
    },
    noShadow: Boolean,
    noBorder: Boolean,
    padding: {
      type: Boolean,
      default: true
    }
  }, colorProps),
  emits: ['card:beforeopen', 'card:open', 'card:opened', 'card:close', 'card:closed', 'update:expandableOpened'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var elRef = ref(null);

    var open = function open() {
      if (!elRef.value) return;
      f7.card.open(elRef.value);
    };

    var close = function close() {
      if (!elRef.value) return;
      f7.card.close(elRef.value);
    };

    var onBeforeOpen = function onBeforeOpen(el, prevent) {
      if (elRef.value !== el) return;
      emit('card:beforeopen', el, prevent);
    };

    var onOpen = function onOpen(el) {
      if (elRef.value !== el) return;
      emit('card:open', el);
      emit('update:expandableOpened', true);
    };

    var onOpened = function onOpened(el, pageEl) {
      if (elRef.value !== el) return;
      emit('card:opened', el, pageEl);
    };

    var onClose = function onClose(el) {
      if (elRef.value !== el) return;
      emit('card:close', el);
    };

    var onClosed = function onClosed(el, pageEl) {
      if (elRef.value !== el) return;
      emit('card:closed', el, pageEl);
      emit('update:expandableOpened', false);
    };

    onMounted(function () {
      if (!props.expandable || !elRef.value) return;
      f7ready(function () {
        if (props.expandable && props.expandableOpened) {
          f7.card.open(elRef.value, false);
        }

        f7.on('cardBeforeOpen', onBeforeOpen);
        f7.on('cardOpen', onOpen);
        f7.on('cardOpened', onOpened);
        f7.on('cardClose', onClose);
        f7.on('cardClosed', onClosed);
      });
    });
    onBeforeUnmount(function () {
      f7.off('cardBeforeOpen', onBeforeOpen);
      f7.off('cardOpen', onOpen);
      f7.off('cardOpened', onOpened);
      f7.off('cardClose', onClose);
      f7.off('cardClosed', onClosed);
    });
    watch(function () {
      return props.expandableOpened;
    }, function (value) {
      if (value) {
        open();
      } else {
        close();
      }
    });
    var hasHeader = computed(function () {
      return props.title || slots.header;
    });
    var hasContent = computed(function () {
      return props.content || slots.content;
    });
    var hasFooter = computed(function () {
      return props.footer || slots.footer;
    });
    var classes = computed(function () {
      return classNames('card', {
        'card-outline': props.outline,
        'card-expandable': props.expandable,
        'card-expandable-animate-width': props.expandableAnimateWidth,
        'no-shadow': props.noShadow,
        'no-border': props.noBorder
      }, colorClasses(props));
    });
    return {
      elRef: elRef,
      classes: classes,
      hasHeader: hasHeader,
      hasContent: hasContent,
      hasFooter: hasFooter
    };
  }
};