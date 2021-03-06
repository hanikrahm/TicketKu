function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { renderSlot as _renderSlot, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode } from "vue";
var _hoisted_1 = {
  key: 0,
  className: "toolbar-inner"
};

function render(_ctx, _cache) {
  return _openBlock(), _createBlock("div", {
    ref: "elRef",
    class: _ctx.classes
  }, [_renderSlot(_ctx.$slots, "before-inner"), _ctx.inner ? (_openBlock(), _createBlock("div", _hoisted_1, [_renderSlot(_ctx.$slots, "default")])) : _renderSlot(_ctx.$slots, "default", {
    key: 1
  }), _renderSlot(_ctx.$slots, "after-inner")], 2);
}

import { computed, ref, provide, onMounted, onBeforeUnmount } from 'vue';
import { classNames } from '../shared/utils';
import { colorClasses, colorProps } from '../shared/mixins';
import { f7 } from '../shared/f7';
import { useTheme } from '../shared/use-theme';
export default {
  name: 'f7-toolbar',
  render: render,
  props: _extends({
    tabbar: Boolean,
    labels: Boolean,
    scrollable: Boolean,
    hidden: Boolean,
    noShadow: Boolean,
    noHairline: Boolean,
    noBorder: Boolean,
    position: {
      type: String,
      default: undefined
    },
    topMd: {
      type: Boolean,
      default: undefined
    },
    topIos: {
      type: Boolean,
      default: undefined
    },
    topAurora: {
      type: Boolean,
      default: undefined
    },
    top: {
      type: Boolean,
      default: undefined
    },
    bottomMd: {
      type: Boolean,
      default: undefined
    },
    bottomIos: {
      type: Boolean,
      default: undefined
    },
    bottomAurora: {
      type: Boolean,
      default: undefined
    },
    bottom: {
      type: Boolean,
      default: undefined
    },
    inner: {
      type: Boolean,
      default: true
    }
  }, colorProps),
  emits: ['toolbar:hide', 'toolbar:show'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var elRef = ref(null);
    var theme = useTheme();

    var onHide = function onHide(toolbarEl) {
      if (elRef.value !== toolbarEl) return;
      emit('toolbar:hide');
    };

    var onShow = function onShow(toolbarEl) {
      if (elRef.value !== toolbarEl) return;
      emit('toolbar:show');
    };

    var hide = function hide(animate) {
      if (!f7) return;
      f7.toolbar.hide(elRef.value, animate);
    };

    var show = function show(animate) {
      if (!f7) return;
      f7.toolbar.show(elRef.value, animate);
    };

    onMounted(function () {
      if (props.tabbar && f7 && elRef.value) {
        f7.toolbar.setHighlight(elRef.value);
      }

      f7.on('toolbarShow', onShow);
      f7.on('toolbarHide', onHide);
    });
    onBeforeUnmount(function () {
      f7.off('toolbarShow', onShow);
      f7.off('toolbarHide', onHide);
    });
    var TabbarContext = computed(function () {
      return {
        tabbarHasLabels: props.labels
      };
    });
    provide('TabbarContext', TabbarContext);
    var classes = computed(function () {
      var tabbar = props.tabbar,
          bottomMd = props.bottomMd,
          bottomIos = props.bottomIos,
          bottomAurora = props.bottomAurora,
          bottom = props.bottom,
          position = props.position,
          topMd = props.topMd,
          topIos = props.topIos,
          topAurora = props.topAurora,
          top = props.top,
          labels = props.labels,
          scrollable = props.scrollable,
          hidden = props.hidden,
          noShadow = props.noShadow,
          noHairline = props.noHairline,
          noBorder = props.noBorder;
      return classNames('toolbar', {
        tabbar: tabbar,
        'toolbar-bottom': theme.value && theme.value.md && bottomMd || theme.value && theme.value.ios && bottomIos || theme.value && theme.value.aurora && bottomAurora || bottom || position === 'bottom',
        'toolbar-top': theme.value && theme.value.md && topMd || theme.value && theme.value.ios && topIos || theme.value && theme.value.aurora && topAurora || top || position === 'top',
        'tabbar-labels': labels,
        'tabbar-scrollable': scrollable,
        'toolbar-hidden': hidden,
        'no-shadow': noShadow,
        'no-hairline': noHairline || noBorder
      }, colorClasses(props));
    });
    return {
      classes: classes,
      elRef: elRef,
      hide: hide,
      show: show
    };
  }
};