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
  name: 'f7-login-screen',
  render: render,
  props: _extends({
    opened: Boolean,
    animate: {
      type: Boolean,
      default: undefined
    },
    containerEl: {
      type: [String, Object],
      default: undefined
    }
  }, colorProps),
  emits: ['loginscreen:open', 'loginscreen:opened', 'loginscreen:close', 'loginscreen:closed', 'update:opened'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var f7LoginScreen = ref(null); // eslint-disable-next-line

    var isOpened = props.opened;
    var isClosing = false;
    var elRef = ref(null);

    var onOpen = function onOpen(instance) {
      isOpened = true;
      isClosing = false;
      emit('loginscreen:open', instance);
      emit('update:opened', true);
    };

    var onOpened = function onOpened(instance) {
      emit('loginscreen:opened', instance);
    };

    var onClose = function onClose(instance) {
      isOpened = false;
      isClosing = true;
      emit('loginscreen:close', instance);
    };

    var onClosed = function onClosed(instance) {
      isClosing = false;
      emit('loginscreen:closed', instance);
      emit('update:opened', false);
    };

    watch(function () {
      return props.opened;
    }, function (value) {
      if (!f7LoginScreen.value) return;

      if (value) {
        f7LoginScreen.value.open();
      } else {
        f7LoginScreen.value.close();
      }
    });
    onMounted(function () {
      if (!elRef.value) return;
      f7ready(function () {
        var loginScreenParams = {
          el: elRef.value,
          on: {
            open: onOpen,
            opened: onOpened,
            close: onClose,
            closed: onClosed
          }
        };

        if (typeof props.animate !== 'undefined') {
          loginScreenParams.animate = props.animate;
        }

        if (typeof props.containerEl !== 'undefined') {
          loginScreenParams.containerEl = props.containerEl;
        }

        f7LoginScreen.value = f7.loginScreen.create(loginScreenParams);

        if (props.opened) {
          f7LoginScreen.value.open(false);
        }
      });
    });
    onBeforeUnmount(function () {
      if (f7LoginScreen.value) {
        f7LoginScreen.value.destroy();
      }

      f7LoginScreen.value = null;
    });
    var classes = computed(function () {
      return classNames('login-screen', modalStateClasses({
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