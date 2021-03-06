function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { renderSlot as _renderSlot, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode, resolveComponent as _resolveComponent, toDisplayString as _toDisplayString, createTextVNode as _createTextVNode, createVNode as _createVNode, resolveDynamicComponent as _resolveDynamicComponent, mergeProps as _mergeProps, withCtx as _withCtx } from "vue";
var _hoisted_1 = {
  key: 0,
  className: "treeview-toggle"
};
var _hoisted_2 = {
  className: "treeview-item-content"
};
var _hoisted_3 = {
  className: "treeview-item-label"
};
var _hoisted_4 = {
  key: 0,
  className: "treeview-item-children"
};

function render(_ctx, _cache) {
  var _component_f7_use_icon = _resolveComponent("f7-use-icon");

  return _openBlock(), _createBlock("div", {
    ref: "elRef",
    class: _ctx.classes
  }, [(_openBlock(), _createBlock(_resolveDynamicComponent(_ctx.itemRootTag), _mergeProps({
    class: _ctx.itemRootClasses
  }, _ctx.itemRootAttrs, {
    onClick: _ctx.onClick
  }), {
    default: _withCtx(function () {
      return [_renderSlot(_ctx.$slots, "root-start"), _ctx.needToggle ? (_openBlock(), _createBlock("div", _hoisted_1)) : _createCommentVNode("", true), _createVNode("div", _hoisted_2, [_renderSlot(_ctx.$slots, "content-start"), _ctx.icon ? (_openBlock(), _createBlock(_component_f7_use_icon, {
        key: 0,
        icon: _ctx.icon
      }, null, 8, ["icon"])) : _createCommentVNode("", true), _renderSlot(_ctx.$slots, "media"), _createVNode("div", _hoisted_3, [_renderSlot(_ctx.$slots, "label-start"), _createTextVNode(" " + _toDisplayString(_ctx.label) + " ", 1), _renderSlot(_ctx.$slots, "label")]), _renderSlot(_ctx.$slots, "content"), _renderSlot(_ctx.$slots, "content-end")]), _renderSlot(_ctx.$slots, "root"), _renderSlot(_ctx.$slots, "root-end")];
    }),
    _: 3
  }, 16, ["class", "onClick"])), _ctx.hasChildren ? (_openBlock(), _createBlock("div", _hoisted_4, [_renderSlot(_ctx.$slots, "children-start"), _renderSlot(_ctx.$slots, "default"), _renderSlot(_ctx.$slots, "children")])) : _createCommentVNode("", true)], 2);
}

import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
import { classNames } from '../shared/utils';
import { colorClasses, colorProps, actionsAttrs, actionsProps, actionsClasses, routerAttrs, routerProps, routerClasses, iconProps } from '../shared/mixins';
import { useIcon } from '../shared/use-icon';
import { f7ready, f7 } from '../shared/f7';
import f7UseIcon from './use-icon';
export default {
  name: 'f7-treeview-item',
  render: render,
  components: {
    f7UseIcon: f7UseIcon
  },
  props: _extends({
    toggle: {
      type: Boolean,
      default: undefined
    },
    itemToggle: Boolean,
    selectable: Boolean,
    selected: Boolean,
    opened: Boolean,
    label: String,
    loadChildren: Boolean,
    link: {
      type: [Boolean, String],
      default: undefined
    }
  }, colorProps, actionsProps, iconProps, routerProps),
  emits: ['click', 'treeview:open', 'treeview:close', 'treeview:loadchildren'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        emit = _ref.emit;
    var elRef = ref(null);
    var hasChildren = computed(function () {
      return slots.default || slots.children || slots['children-start'];
    });
    var needToggle = computed(function () {
      return typeof props.toggle === 'undefined' ? hasChildren.value : props.toggle;
    });
    var icon = computed(function () {
      return useIcon(props);
    });

    var onClick = function onClick(event) {
      emit('click', event);
    };

    var onOpen = function onOpen(el) {
      if (elRef.value !== el) return;
      emit('treeview:open', el);
    };

    var onClose = function onClose(el) {
      if (elRef.value !== el) return;
      emit('treeview:close', el);
    };

    var onLoadChildren = function onLoadChildren(el, done) {
      if (elRef.value !== el) return;
      emit('treeview:loadchildren', el, done);
    };

    var attachEvents = function attachEvents() {
      if (!elRef.value) return;
      f7ready(function () {
        f7.on('treeviewOpen', onOpen);
        f7.on('treeviewClose', onClose);
        f7.on('treeviewLoadChildren', onLoadChildren);
      });
    };

    var detachEvents = function detachEvents() {
      if (!f7) return;
      f7.off('treeviewOpen', onOpen);
      f7.off('treeviewClose', onClose);
      f7.off('treeviewLoadChildren', onLoadChildren);
    };

    onMounted(function () {
      return attachEvents();
    });
    onBeforeUnmount(function () {
      return detachEvents();
    });
    var classes = computed(function () {
      return classNames('treeview-item', {
        'treeview-item-opened': props.opened,
        'treeview-load-children': props.loadChildren
      }, colorClasses(props));
    });
    var itemRootClasses = computed(function () {
      return classNames('treeview-item-root', {
        'treeview-item-selectable': props.selectable,
        'treeview-item-selected': props.selected,
        'treeview-item-toggle': props.itemToggle
      }, routerClasses(props), actionsClasses(props));
    });
    var itemRootTag = computed(function () {
      return props.link || props.link === '' ? 'a' : 'div';
    });
    var itemRootAttrs = computed(function () {
      var href = props.link;
      if (props.link === true) href = '#';
      if (props.link === false) href = undefined; // no href attribute

      return _extends({
        href: href
      }, routerAttrs(props), actionsAttrs(props));
    });
    return {
      itemRootTag: itemRootTag,
      itemRootAttrs: itemRootAttrs,
      itemRootClasses: itemRootClasses,
      classes: classes,
      icon: icon,
      onClick: onClick,
      hasChildren: hasChildren,
      needToggle: needToggle,
      elRef: elRef
    };
  }
};