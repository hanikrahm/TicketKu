function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { renderSlot as _renderSlot, openBlock as _openBlock, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createBlock("div", {
    ref: "elRef",
    class: _ctx.classes
  }, [_renderSlot(_ctx.$slots, "default")], 2);
}

import { computed, ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { classNames } from '../shared/utils';
import { colorClasses, colorProps } from '../shared/mixins';
import { f7ready, f7 } from '../shared/f7';
import { modalStateClasses } from '../shared/modal-state-classes';
export default {
  name: 'f7-popup',
  render: render,
  props: _extends({
    tabletFullscreen: Boolean,
    opened: Boolean,
    animate: {
      type: Boolean,
      default: undefined
    },
    backdrop: {
      type: Boolean,
      default: undefined
    },
    backdropEl: {
      type: [String, Object],
      default: undefined
    },
    closeByBackdropClick: {
      type: Boolean,
      default: undefined
    },
    closeOnEscape: {
      type: Boolean,
      default: undefined
    },
    swipeToClose: {
      type: [Boolean, String],
      default: false
    },
    swipeHandler: {
      type: [String, Object],
      default: undefined
    },
    push: Boolean,
    containerEl: {
      type: [String, Object],
      default: undefined
    }
  }, colorProps),
  emits: ['popup:swipestart', 'popup:swipemove', 'popup:swipeend', 'popup:swipeclose', 'popup:open', 'popup:opened', 'popup:close', 'popup:closed', 'update:opened'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var f7Popup = ref(null); // eslint-disable-next-line

    var isOpened = props.opened;
    var isClosing = false;
    var elRef = ref(null);

    var onSwipeStart = function onSwipeStart(instance) {
      emit('popup:swipestart', instance);
    };

    var onSwipeMove = function onSwipeMove(instance) {
      emit('popup:swipemove', instance);
    };

    var onSwipeEnd = function onSwipeEnd(instance) {
      emit('popup:swipeend', instance);
    };

    var onSwipeClose = function onSwipeClose(instance) {
      emit('popup:swipeclose', instance);
    };

    var onOpen = function onOpen(instance) {
      isOpened = true;
      isClosing = false;
      emit('popup:open', instance);
      emit('update:opened', true);
    };

    var onOpened = function onOpened(instance) {
      emit('popup:opened', instance);
    };

    var onClose = function onClose(instance) {
      isOpened = false;
      isClosing = true;
      emit('popup:close', instance);
    };

    var onClosed = function onClosed(instance) {
      isClosing = false;
      emit('popup:closed', instance);
      emit('update:opened', false);
    };

    watch(function () {
      return props.opened;
    }, function (value) {
      if (!f7Popup.value) return;

      if (value) {
        f7Popup.value.open();
      } else {
        f7Popup.value.close();
      }
    });
    onMounted(function () {
      if (!elRef.value) return;
      var popupParams = {
        el: elRef.value,
        on: {
          swipeStart: onSwipeStart,
          swipeMove: onSwipeMove,
          swipeEnd: onSwipeEnd,
          swipeClose: onSwipeClose,
          open: onOpen,
          opened: onOpened,
          close: onClose,
          closed: onClosed
        }
      };
      var closeByBackdropClick = props.closeByBackdropClick,
          closeOnEscape = props.closeOnEscape,
          animate = props.animate,
          backdrop = props.backdrop,
          backdropEl = props.backdropEl,
          swipeToClose = props.swipeToClose,
          swipeHandler = props.swipeHandler,
          containerEl = props.containerEl;
      if (typeof closeByBackdropClick !== 'undefined') popupParams.closeByBackdropClick = closeByBackdropClick;
      if (typeof closeOnEscape !== 'undefined') popupParams.closeOnEscape = closeOnEscape;
      if (typeof animate !== 'undefined') popupParams.animate = animate;
      if (typeof backdrop !== 'undefined') popupParams.backdrop = backdrop;
      if (typeof backdropEl !== 'undefined') popupParams.backdropEl = backdropEl;
      if (typeof swipeToClose !== 'undefined') popupParams.swipeToClose = swipeToClose;
      if (typeof swipeHandler !== 'undefined') popupParams.swipeHandler = swipeHandler;
      if (typeof containerEl !== 'undefined') popupParams.containerEl = containerEl;
      f7ready(function () {
        f7Popup.value = f7.popup.create(popupParams);

        if (props.opened) {
          f7Popup.value.open(false);
        }
      });
    });
    onBeforeUnmount(function () {
      if (f7Popup.value) {
        f7Popup.value.destroy();
      }

      f7Popup.value = null;
    });
    var classes = computed(function () {
      return classNames('popup', {
        'popup-tablet-fullscreen': props.tabletFullscreen,
        'popup-push': props.push
      }, modalStateClasses({
        isOpened: isOpened,
        isClosing: isClosing
      }), colorClasses(props));
    });
    return {
      elRef: elRef,
      classes: classes
    };
  }
};