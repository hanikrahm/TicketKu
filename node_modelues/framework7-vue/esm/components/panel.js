function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { renderSlot as _renderSlot, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode } from "vue";
var _hoisted_1 = {
  key: 0,
  class: "panel-resize-handler"
};

function render(_ctx, _cache) {
  return _openBlock(), _createBlock("div", {
    ref: "elRef",
    class: _ctx.classes
  }, [_renderSlot(_ctx.$slots, "default"), _ctx.resizable ? (_openBlock(), _createBlock("div", _hoisted_1)) : _createCommentVNode("", true)], 2);
}

import { computed, ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { classNames, noUndefinedProps } from '../shared/utils';
import { colorClasses, colorProps } from '../shared/mixins';
import { f7ready, f7 } from '../shared/f7';
export default {
  name: 'f7-panel',
  render: render,
  props: _extends({
    side: String,
    effect: String,
    cover: Boolean,
    reveal: Boolean,
    push: Boolean,
    left: Boolean,
    right: Boolean,
    opened: Boolean,
    resizable: Boolean,
    backdrop: {
      type: Boolean,
      default: true
    },
    backdropEl: {
      type: String,
      default: undefined
    },
    containerEl: {
      type: String,
      default: undefined
    },
    visibleBreakpoint: {
      type: Number,
      default: undefined
    },
    collapsedBreakpoint: {
      type: Number,
      default: undefined
    },
    swipe: Boolean,
    swipeNoFollow: Boolean,
    swipeOnlyClose: Boolean,
    swipeActiveArea: {
      type: Number,
      default: 0
    },
    swipeThreshold: {
      type: Number,
      default: 0
    }
  }, colorProps),
  emits: ['panel:open', 'panel:opened', 'panel:close', 'panel:closed', 'click', 'panel:backdropclick', 'panel:swipe', 'panel:swipeopen', 'panel:breakpoint', 'panel:collapsedbreakpoint', 'panel:resize', 'update:opened'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var f7Panel = null;
    var elRef = ref(null);
    var isOpened = false;
    var isClosing = false;
    var isCollapsed = false;
    var isBreakpoint = false;

    var onOpen = function onOpen(event) {
      isOpened = true;
      isClosing = false;
      emit('panel:open', event);
      emit('update:opened', true);
    };

    var onOpened = function onOpened(event) {
      emit('panel:opened', event);
    };

    var onClose = function onClose(event) {
      isOpened = false;
      isClosing = true;
      emit('panel:close', event);
    };

    var onClosed = function onClosed(event) {
      isClosing = false;
      emit('panel:closed', event);
      emit('update:opened', false);
    };

    var onBackdropClick = function onBackdropClick(event) {
      emit('click', event);
      emit('panel:backdropclick', event);
    };

    var onSwipe = function onSwipe(event) {
      emit('panel:swipe', event);
    };

    var onSwipeOpen = function onSwipeOpen(event) {
      emit('panel:swipeopen', event);
    };

    var onBreakpoint = function onBreakpoint(event) {
      isBreakpoint = true;
      isCollapsed = false;
      emit('panel:breakpoint', event);
    };

    var onCollapsedBreakpoint = function onCollapsedBreakpoint(event) {
      isBreakpoint = false;
      isCollapsed = true;
      emit('panel:collapsedbreakpoint', event);
    };

    var onResize = function onResize() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      emit.apply(void 0, ['panel:resize'].concat(args));
    };

    watch(function () {
      return props.resizable;
    }, function (newValue) {
      if (!f7Panel) return;
      if (newValue) f7Panel.enableResizable();else f7Panel.disableResizable();
    });
    watch(function () {
      return props.opened;
    }, function (newValue) {
      if (!f7Panel) return;

      if (newValue) {
        f7Panel.open();
      } else {
        f7Panel.close();
      }
    });
    onMounted(function () {
      f7ready(function () {
        var $ = f7.$;
        if (!$) return;

        if ($('.panel-backdrop').length === 0) {
          $('<div class="panel-backdrop"></div>').insertBefore(elRef.value);
        }

        var params = noUndefinedProps({
          el: elRef.value,
          resizable: props.resizable,
          backdrop: props.backdrop,
          backdropEl: props.backdropEl,
          containerEl: props.containerEl,
          visibleBreakpoint: props.visibleBreakpoint,
          collapsedBreakpoint: props.collapsedBreakpoint,
          swipe: props.swipe,
          swipeNoFollow: props.swipeNoFollow,
          swipeOnlyClose: props.swipeOnlyClose,
          swipeActiveArea: props.swipeActiveArea,
          swipeThreshold: props.swipeThreshold,
          on: {
            open: onOpen,
            opened: onOpened,
            close: onClose,
            closed: onClosed,
            backdropClick: onBackdropClick,
            swipe: onSwipe,
            swipeOpen: onSwipeOpen,
            collapsedBreakpoint: onCollapsedBreakpoint,
            breakpoint: onBreakpoint,
            resize: onResize
          }
        });
        f7Panel = f7.panel.create(params);

        if (props.opened) {
          f7Panel.open(false);
        }
      });
    });
    onBeforeUnmount(function () {
      if (f7Panel && f7Panel.destroy) {
        f7Panel.destroy();
      }

      f7Panel = null;
    });
    var classes = computed(function () {
      var _classNames;

      var sideComputed = props.side || (props.left ? 'left' : 'right');
      var effectComputed = props.effect || (props.reveal ? 'reveal' : props.push ? 'push' : 'cover'); // eslint-disable-line

      return classNames('panel', (_classNames = {
        'panel-in': isOpened && !isClosing && !isBreakpoint,
        'panel-in-breakpoint': isBreakpoint,
        'panel-in-collapsed': isCollapsed,
        'panel-resizable': props.resizable
      }, _classNames["panel-" + sideComputed] = sideComputed, _classNames["panel-" + effectComputed] = effectComputed, _classNames), colorClasses(props));
    });
    return {
      elRef: elRef,
      classes: classes
    };
  }
};