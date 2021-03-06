function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { resolveComponent as _resolveComponent, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode, renderSlot as _renderSlot } from "vue";
var _hoisted_1 = {
  key: 0,
  class: "ptr-preloader"
};

var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
  class: "ptr-arrow"
}, null, -1);

var _hoisted_3 = {
  key: 3,
  class: "ptr-preloader"
};

var _hoisted_4 = /*#__PURE__*/_createVNode("div", {
  class: "ptr-arrow"
}, null, -1);

function render(_ctx, _cache) {
  var _component_f7_preloader = _resolveComponent("f7-preloader");

  return _openBlock(), _createBlock("div", {
    ref: "elRef",
    class: _ctx.classes,
    "data-ptr-distance": _ctx.ptrDistance || undefined,
    "data-ptr-mousewheel": _ctx.ptrMousewheel || undefined,
    "data-infinite-distance": _ctx.infiniteDistance || undefined
  }, [_ctx.ptr && _ctx.ptrPreloader && !_ctx.ptrBottom ? (_openBlock(), _createBlock("div", _hoisted_1, [_createVNode(_component_f7_preloader), _hoisted_2])) : _createCommentVNode("", true), _ctx.infinite && _ctx.infinitePreloader && _ctx.infiniteTop ? (_openBlock(), _createBlock(_component_f7_preloader, {
    key: 1,
    class: "infinite-scroll-preloader"
  })) : _createCommentVNode("", true), _renderSlot(_ctx.$slots, "default"), _ctx.infinite && _ctx.infinitePreloader && !_ctx.infiniteTop ? (_openBlock(), _createBlock(_component_f7_preloader, {
    key: 2,
    class: "infinite-scroll-preloader"
  })) : _createCommentVNode("", true), _ctx.ptr && _ctx.ptrPreloader && _ctx.ptrBottom ? (_openBlock(), _createBlock("div", _hoisted_3, [_createVNode(_component_f7_preloader), _hoisted_4])) : _createCommentVNode("", true)], 10, ["data-ptr-distance", "data-ptr-mousewheel", "data-infinite-distance"]);
}

import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
import { classNames } from '../shared/utils';
import { colorClasses, colorProps } from '../shared/mixins';
import f7Preloader from './preloader';
import { useTab } from '../shared/use-tab';
import { f7ready, f7 } from '../shared/f7';
export default {
  name: 'f7-page-content',
  render: render,
  components: {
    f7Preloader: f7Preloader
  },
  props: _extends({
    tab: Boolean,
    tabActive: Boolean,
    ptr: Boolean,
    ptrDistance: Number,
    ptrPreloader: {
      type: Boolean,
      default: true
    },
    ptrBottom: Boolean,
    ptrMousewheel: Boolean,
    infinite: Boolean,
    infiniteTop: Boolean,
    infiniteDistance: Number,
    infinitePreloader: {
      type: Boolean,
      default: true
    },
    hideBarsOnScroll: Boolean,
    hideNavbarOnScroll: Boolean,
    hideToolbarOnScroll: Boolean,
    messagesContent: Boolean,
    loginScreen: Boolean
  }, colorProps),
  emits: ['ptr:pullstart', 'ptr:pullmove', 'ptr:pullend', 'ptr:refresh', 'ptr:done', 'infinite', 'ptrPullStart', 'ptrPullMove', 'ptrPullEnd', 'ptrRefresh', 'ptrDone', 'tab:hide', 'tab:show'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var elRef = ref(null);

    var onPtrPullStart = function onPtrPullStart(el) {
      if (elRef.value !== el) return;
      emit('ptr:pullstart');
      emit('ptrPullStart');
    };

    var onPtrPullMove = function onPtrPullMove(el) {
      if (elRef.value !== el) return;
      emit('ptr:pullmove');
      emit('ptrPullMove');
    };

    var onPtrPullEnd = function onPtrPullEnd(el) {
      if (elRef.value !== el) return;
      emit('ptr:pullend');
      emit('ptrPullEnd');
    };

    var onPtrRefresh = function onPtrRefresh(el, done) {
      if (elRef.value !== el) return;
      emit('ptr:refresh', done);
      emit('ptrRefresh', done);
    };

    var onPtrDone = function onPtrDone(el) {
      if (elRef.value !== el) return;
      emit('ptr:done');
      emit('ptrDone');
    };

    var onInfinite = function onInfinite(el) {
      if (elRef.value !== el) return;
      emit('infinite');
    };

    useTab(elRef, emit);
    onMounted(function () {
      f7ready(function () {
        if (props.ptr) {
          f7.on('ptrPullStart', onPtrPullStart);
          f7.on('ptrPullMove', onPtrPullMove);
          f7.on('ptrPullEnd', onPtrPullEnd);
          f7.on('ptrRefresh', onPtrRefresh);
          f7.on('ptrDone', onPtrDone);
        }

        if (props.infinite) {
          f7.on('infinite', onInfinite);
        }
      });
    });
    onBeforeUnmount(function () {
      if (!f7) return;
      f7.off('ptrPullStart', onPtrPullStart);
      f7.off('ptrPullMove', onPtrPullMove);
      f7.off('ptrPullEnd', onPtrPullEnd);
      f7.off('ptrRefresh', onPtrRefresh);
      f7.off('ptrDone', onPtrDone);
      f7.off('infinite', onInfinite);
    });
    var classes = computed(function () {
      return classNames('page-content', {
        tab: props.tab,
        'tab-active': props.tabActive,
        'ptr-content': props.ptr,
        'ptr-bottom': props.ptrBottom,
        'infinite-scroll-content': props.infinite,
        'infinite-scroll-top': props.infiniteTop,
        'hide-bars-on-scroll': props.hideBarsOnScroll,
        'hide-navbar-on-scroll': props.hideNavbarOnScroll,
        'hide-toolbar-on-scroll': props.hideToolbarOnScroll,
        'messages-content': props.messagesContent,
        'login-screen-content': props.loginScreen
      }, colorClasses(props));
    });
    return {
      elRef: elRef,
      classes: classes
    };
  }
};