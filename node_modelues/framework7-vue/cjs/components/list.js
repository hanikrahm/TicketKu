"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../shared/utils");

var _mixins = require("../shared/mixins");

var _f = require("../shared/f7");

var _useTab = require("../shared/use-tab");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = {
  name: 'f7-list',
  props: _extends({
    inset: Boolean,
    xsmallInset: Boolean,
    smallInset: Boolean,
    mediumInset: Boolean,
    largeInset: Boolean,
    xlargeInset: Boolean,
    mediaList: Boolean,
    sortable: Boolean,
    sortableTapHold: Boolean,
    sortableEnabled: Boolean,
    sortableMoveElements: {
      type: Boolean,
      default: undefined
    },
    sortableOpposite: Boolean,
    accordionList: Boolean,
    accordionOpposite: Boolean,
    contactsList: Boolean,
    simpleList: Boolean,
    linksList: Boolean,
    menuList: Boolean,
    noHairlines: Boolean,
    noHairlinesBetween: Boolean,
    noHairlinesMd: Boolean,
    noHairlinesBetweenMd: Boolean,
    noHairlinesIos: Boolean,
    noHairlinesBetweenIos: Boolean,
    noHairlinesAurora: Boolean,
    noHairlinesBetweenAurora: Boolean,
    // Links Chevron (Arrow) Icon
    noChevron: Boolean,
    chevronCenter: Boolean,
    // Tab
    tab: Boolean,
    tabActive: Boolean,
    // Form
    form: Boolean,
    formStoreData: Boolean,
    inlineLabels: Boolean,
    // Virtual List
    virtualList: Boolean,
    virtualListParams: Object
  }, _mixins.colorProps),
  emits: ['submit', 'sortable:enable', 'sortable:disable', 'sortable:sort', 'sortable:move', 'virtual:itembeforeinsert', 'virtual:beforeclear', 'virtual:itemsbeforeinsert', 'virtual:itemsafterinsert', 'tab:hide', 'tab:show'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var f7VirtualList = null;
    var elRef = (0, _vue.ref)(null);

    var onSubmit = function onSubmit(event) {
      emit('submit', event);
    };

    var onSortableEnable = function onSortableEnable(el) {
      if (elRef.value !== el) return;
      emit('sortable:enable');
    };

    var onSortableDisable = function onSortableDisable(el) {
      if (elRef.value !== el) return;
      emit('sortable:disable');
    };

    var onSortableSort = function onSortableSort(el, sortData, listEl) {
      if (elRef.value !== listEl) return;
      emit('sortable:sort', sortData);
    };

    var onSortableMove = function onSortableMove(el, listEl) {
      if (elRef.value !== listEl) return;
      emit(props, 'sortable:move', el, listEl);
    };

    (0, _useTab.useTab)(elRef, emit);
    (0, _vue.onMounted)(function () {
      (0, _f.f7ready)(function () {
        _f.f7.on('sortableEnable', onSortableEnable);

        _f.f7.on('sortableDisable', onSortableDisable);

        _f.f7.on('sortableSort', onSortableSort);

        _f.f7.on('sortableMove', onSortableMove);

        if (!props.virtualList) return;
        var vlParams = props.virtualListParams || {};
        if (!vlParams.renderItem && !vlParams.renderExternal) return;
        if (vlParams.items) vlParams.items = (0, _vue.toRaw)(vlParams.items);
        f7VirtualList = _f.f7.virtualList.create((0, _utils.extend)({
          el: elRef.value,
          on: {
            itemBeforeInsert: function itemBeforeInsert(itemEl, item) {
              var vl = this;
              emit('virtual:itembeforeinsert', vl, itemEl, item);
            },
            beforeClear: function beforeClear(fragment) {
              var vl = this;
              emit('virtual:beforeclear', vl, fragment);
            },
            itemsBeforeInsert: function itemsBeforeInsert(fragment) {
              var vl = this;
              emit('virtual:itemsbeforeinsert', vl, fragment);
            },
            itemsAfterInsert: function itemsAfterInsert(fragment) {
              var vl = this;
              emit('virtual:itemsafterinsert', vl, fragment);
            }
          }
        }, vlParams));
      });
    });
    (0, _vue.onBeforeUnmount)(function () {
      if (!_f.f7) return;

      _f.f7.off('sortableEnable', onSortableEnable);

      _f.f7.off('sortableDisable', onSortableDisable);

      _f.f7.off('sortableSort', onSortableSort);

      _f.f7.off('sortableMove', onSortableMove);

      if (!(props.virtualList && f7VirtualList)) return;
      if (f7VirtualList.destroy) f7VirtualList.destroy();
      f7VirtualList = null;
    });
    var classes = (0, _vue.computed)(function () {
      return (0, _utils.classNames)('list', {
        inset: props.inset,
        'xsmall-inset': props.xsmallInset,
        'small-inset': props.smallInset,
        'medium-inset': props.mediumInset,
        'large-inset': props.largeInset,
        'xlarge-inset': props.xlargeInset,
        'media-list': props.mediaList,
        'simple-list': props.simpleList,
        'links-list': props.linksList,
        'menu-list': props.menuList,
        sortable: props.sortable,
        'sortable-tap-hold': props.sortableTapHold,
        'sortable-enabled': props.sortableEnabled,
        'sortable-opposite': props.sortableOpposite,
        'accordion-list': props.accordionList,
        'accordion-opposite': props.accordionOpposite,
        'contacts-list': props.contactsList,
        'virtual-list': props.virtualList,
        tab: props.tab,
        'tab-active': props.tabActive,
        'no-hairlines': props.noHairlines,
        'no-hairlines-md': props.noHairlinesMd,
        'no-hairlines-ios': props.noHairlinesIos,
        'no-hairlines-aurora': props.noHairlinesAurora,
        'no-hairlines-between': props.noHairlinesBetween,
        'no-hairlines-between-md': props.noHairlinesBetweenMd,
        'no-hairlines-between-ios': props.noHairlinesBetweenIos,
        'no-hairlines-between-aurora': props.noHairlinesBetweenAurora,
        'form-store-data': props.formStoreData,
        'inline-labels': props.inlineLabels,
        'no-chevron': props.noChevron,
        'chevron-center': props.chevronCenter
      }, (0, _mixins.colorClasses)(props));
    });
    var ListTag = (0, _vue.computed)(function () {
      return props.form ? 'form' : 'div';
    });
    var ListContext = (0, _vue.computed)(function () {
      return {
        listIsMedia: props.mediaList,
        listIsSimple: props.simpleList,
        listIsSortable: props.sortable,
        listIsSortableOpposite: props.sortableOpposite
      };
    });
    (0, _vue.provide)('ListContext', ListContext);
    return function () {
      var slotsList = slots.list,
          slotsDefault = slots.default;
      var rootChildrenBeforeList = [];
      var rootChildrenAfterList = [];
      var ulChildren = slotsList || [];
      var wasUlChild = false;

      if (slotsDefault) {
        slotsDefault().forEach(function (vnode) {
          if (typeof vnode === 'undefined') return;
          var tag = vnode.type && vnode.type.name ? vnode.type.name : vnode.type;

          if (tag && typeof tag === 'symbol') {
            wasUlChild = true;
            ulChildren.push(vnode);
          } else if (!tag || tag && !(tag === 'li' || tag.indexOf('f7-list-item') >= 0 || tag.indexOf('f7-list-button') >= 0 || tag.indexOf('f7-list-input') >= 0)) {
            if (wasUlChild) rootChildrenAfterList.push(vnode);else rootChildrenBeforeList.push(vnode);
          } else if (tag) {
            wasUlChild = true;
            ulChildren.push(vnode);
          }
        });
      }

      return (0, _vue.h)(ListTag.value, {
        ref: elRef,
        class: classes.value,
        'data-sortable-move-elements': typeof props.sortableMoveElements !== 'undefined' ? props.sortableMoveElements.toString() : undefined,
        onSubmit: onSubmit
      }, [slots['before-list'] && slots['before-list'](), rootChildrenBeforeList, ulChildren.length > 0 && (0, _vue.h)('ul', ulChildren), slots['after-list'] && slots['after-list'](), rootChildrenAfterList]);
    };
  }
};
exports.default = _default;