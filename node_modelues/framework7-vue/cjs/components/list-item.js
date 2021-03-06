"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../shared/utils");

var _mixins = require("../shared/mixins");

var _useRouteProps = require("../shared/use-route-props");

var _useSmartSelect = require("../shared/use-smart-select");

var _useTooltip = require("../shared/use-tooltip");

var _f = require("../shared/f7");

var _badge = _interopRequireDefault(require("./badge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ListItemContent = function ListItemContent(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      props = _ref.props,
      slots = _ref.slots,
      inputElRef = _ref.inputElRef,
      onChange = _ref.onChange,
      onClick = _ref.onClick,
      isMediaComputed = _ref.isMediaComputed,
      isSortableComputed = _ref.isSortableComputed,
      isSortableOppositeComputed = _ref.isSortableOppositeComputed,
      itemContentClasses = _ref.itemContentClasses;

  var radio = props.radio,
      checkbox = props.checkbox,
      value = props.value,
      name = props.name,
      readonly = props.readonly,
      disabled = props.disabled,
      checked = props.checked,
      required = props.required,
      media = props.media,
      header = props.header,
      footer = props.footer,
      title = props.title,
      subtitle = props.subtitle,
      text = props.text,
      after = props.after,
      badge = props.badge,
      badgeColor = props.badgeColor,
      swipeout = props.swipeout,
      sortable = props.sortable,
      accordionItem = props.accordionItem;
  var titleEl;
  var afterWrapEl;
  var afterEl;
  var badgeEl;
  var innerEl;
  var titleRowEl;
  var subtitleEl;
  var textEl;
  var mediaEl;
  var inputEl;
  var inputIconEl;
  var headerEl;
  var footerEl; // Input

  if (radio || checkbox) {
    inputEl = (0, _vue.h)('input', {
      ref: inputElRef,
      value: value,
      name: name,
      checked: checked,
      readonly: readonly,
      disabled: disabled,
      required: required,
      type: radio ? 'radio' : 'checkbox',
      onChange: onChange
    });
    inputIconEl = (0, _vue.h)('i', {
      class: "icon icon-" + (radio ? 'radio' : 'checkbox')
    });
  } // Media


  if (media || slots.media) {
    var mediaImgEl;

    if (media) {
      mediaImgEl = (0, _vue.h)('img', {
        src: media
      });
    }

    mediaEl = (0, _vue.h)('div', {
      class: 'item-media'
    }, [mediaImgEl, slots.media && slots.media()]);
  } // Inner Elements


  if (header || slots.header) {
    headerEl = (0, _vue.h)('div', {
      class: 'item-header'
    }, [header, slots.header && slots.header()]);
  }

  if (footer || slots.footer) {
    footerEl = (0, _vue.h)('div', {
      class: 'item-footer'
    }, [footer, slots.footer && slots.footer()]);
  }

  if (title || slots.title || !isMediaComputed.value && headerEl || !isMediaComputed.value && footerEl) {
    titleEl = (0, _vue.h)('div', {
      class: 'item-title'
    }, [!isMediaComputed.value && headerEl, title, slots.title && slots.title(), !isMediaComputed.value && footerEl]);
  }

  if (subtitle || slots.subtitle) {
    subtitleEl = (0, _vue.h)('div', {
      class: 'item-subtitle'
    }, [subtitle, slots.subtitle && slots.subtitle()]);
  }

  if (text || slots.text) {
    textEl = (0, _vue.h)('div', {
      class: 'item-text'
    }, [text, slots.text && slots.text()]);
  }

  if (after || badge || slots.after) {
    if (after) {
      afterEl = (0, _vue.h)('span', [after]);
    }

    if (badge) {
      badgeEl = (0, _vue.h)(_badge.default, {
        color: badgeColor
      }, function () {
        return badge;
      });
    }

    afterWrapEl = (0, _vue.h)('div', {
      class: 'item-after'
    }, [slots['after-start'] && slots['after-start'](), afterEl, badgeEl, slots.after && slots.after(), slots['after-end'] && slots['after-end']()]);
  }

  if (isMediaComputed.value) {
    titleRowEl = (0, _vue.h)('div', {
      class: 'item-title-row'
    }, [slots['before-title'] && slots['before-title'](), titleEl, slots['after-title'] && slots['after-title'](), afterWrapEl]);
    innerEl = (0, _vue.h)('div', {
      class: 'item-inner'
    }, [slots['inner-start'] && slots['inner-start'], headerEl, titleRowEl, subtitleEl, textEl, swipeout || accordionItem ? null : slots.default && slots.default(), slots.inner && slots.inner(), footerEl, slots['inner-end'] && slots['inner-end']]);
  } else {
    innerEl = (0, _vue.h)('div', {
      class: 'item-inner'
    }, [slots['inner-start'] && slots['inner-start'](), slots['before-title'] && slots['before-title'](), titleEl, slots['after-title'] && slots['after-title'](), afterWrapEl, swipeout || accordionItem ? null : slots.default && slots.default(), slots.inner && slots.inner(), slots['inner-end'] && slots['inner-end']()]);
  }

  var ItemContentTag = checkbox || radio ? 'label' : 'div';
  return (0, _vue.h)(ItemContentTag, {
    class: itemContentClasses.value,
    onClick: onClick
  }, [isSortableComputed.value && sortable !== false && isSortableOppositeComputed.value && (0, _vue.h)('div', {
    class: 'sortable-handler'
  }), slots['content-start'] && slots['content-start'](), inputEl, inputIconEl, mediaEl, innerEl, slots.content && slots.content(), slots['content-end'] && slots['content-end']()]);
};

var _default = {
  name: 'f7-list-item',
  props: _extends({
    title: [String, Number],
    text: [String, Number],
    media: String,
    subtitle: [String, Number],
    header: [String, Number],
    footer: [String, Number],
    // Tooltip
    tooltip: String,
    tooltipTrigger: String,
    // Link Props
    link: [Boolean, String],
    target: String,
    tabLink: [Boolean, String],
    tabLinkActive: Boolean,
    selected: Boolean,
    after: [String, Number],
    badge: [String, Number],
    badgeColor: String,
    mediaItem: Boolean,
    mediaList: Boolean,
    divider: Boolean,
    groupTitle: Boolean,
    swipeout: Boolean,
    swipeoutOpened: Boolean,
    sortable: {
      type: Boolean,
      default: undefined
    },
    sortableOpposite: {
      type: Boolean,
      default: undefined
    },
    accordionItem: Boolean,
    accordionItemOpened: Boolean,
    // Smart Select
    smartSelect: Boolean,
    smartSelectParams: Object,
    // Links Chevron (Arrow) Icon
    noChevron: Boolean,
    chevronCenter: Boolean,
    // Inputs
    checkbox: Boolean,
    radio: Boolean,
    radioIcon: String,
    checked: Boolean,
    indeterminate: Boolean,
    name: String,
    value: {
      type: [String, Number, Array],
      default: undefined
    },
    readonly: Boolean,
    required: Boolean,
    disabled: Boolean,
    virtualListIndex: Number
  }, _mixins.colorProps, _mixins.actionsProps, _mixins.routerProps),
  emits: ['click', 'swipeout', 'swipeout:overswipeenter', 'swipeout:overswipeexit', 'swipeout:deleted', 'swipeout:delete', 'swipeout:close', 'swipeout:closed', 'swipeout:open', 'swipeout:opened', 'accordion:beforeclose', 'accordion:close', 'accordion:closed', 'accordion:beforeopen', 'accordion:open', 'accordion:opened', 'change', 'update:checked'],
  setup: function setup(props, _ref2) {
    var slots = _ref2.slots,
        emit = _ref2.emit;
    var ListContext = (0, _vue.inject)('ListContext', {
      value: {
        listIsMedia: false,
        listIsSortable: false,
        listIsSortableOpposite: false,
        listIsSimple: false
      }
    });
    var listIsMedia = (0, _vue.computed)(function () {
      return ListContext.value.listIsMedia || false;
    });
    var listIsSortable = (0, _vue.computed)(function () {
      return ListContext.value.listIsSortable || false;
    });
    var listIsSortableOpposite = (0, _vue.computed)(function () {
      return ListContext.value.listIsSortableOpposite || false;
    });
    var listIsSimple = (0, _vue.computed)(function () {
      return ListContext.value.listIsSimple || false;
    });
    var elRef = (0, _vue.ref)(null);
    var linkElRef = (0, _vue.ref)(null);
    var inputElRef = (0, _vue.ref)(null);

    var onClick = function onClick(event) {
      if (event.target.tagName.toLowerCase() !== 'input') {
        emit('click', event);
      }
    };

    var onSwipeoutOverswipeEnter = function onSwipeoutOverswipeEnter(el) {
      if (elRef.value !== el) return;
      emit('swipeout:overswipeenter');
    };

    var onSwipeoutOverswipeExit = function onSwipeoutOverswipeExit(el) {
      if (elRef.value !== el) return;
      emit('swipeout:overswipeexit');
    };

    var onSwipeoutDeleted = function onSwipeoutDeleted(el) {
      if (elRef.value !== el) return;
      emit('swipeout:deleted');
    };

    var onSwipeoutDelete = function onSwipeoutDelete(el) {
      if (elRef.value !== el) return;
      emit('swipeout:delete');
    };

    var onSwipeoutClose = function onSwipeoutClose(el) {
      if (elRef.value !== el) return;
      emit('swipeout:close');
    };

    var onSwipeoutClosed = function onSwipeoutClosed(el) {
      if (elRef.value !== el) return;
      emit('swipeout:closed');
    };

    var onSwipeoutOpen = function onSwipeoutOpen(el) {
      if (elRef.value !== el) return;
      emit('swipeout:open');
    };

    var onSwipeoutOpened = function onSwipeoutOpened(el) {
      if (elRef.value !== el) return;
      emit('swipeout:opened');
    };

    var onSwipeout = function onSwipeout(el, progress) {
      if (elRef.value !== el) return;
      emit('swipeout', progress);
    };

    var onAccBeforeClose = function onAccBeforeClose(el, prevent) {
      if (elRef.value !== el) return;
      emit('accordion:beforeclose', prevent);
    };

    var onAccClose = function onAccClose(el) {
      if (elRef.value !== el) return;
      emit('accordion:close');
    };

    var onAccClosed = function onAccClosed(el) {
      if (elRef.value !== el) return;
      emit('accordion:closed');
    };

    var onAccBeforeOpen = function onAccBeforeOpen(el, prevent) {
      if (elRef.value !== el) return;
      emit('accordion:beforeopen', prevent);
    };

    var onAccOpen = function onAccOpen(el) {
      if (elRef.value !== el) return;
      emit('accordion:open');
    };

    var onAccOpened = function onAccOpened(el) {
      if (elRef.value !== el) return;
      emit('accordion:opened');
    };

    var onChange = function onChange(event) {
      emit('change', event);
      emit('update:checked', event.target.checked);
    };

    (0, _useTooltip.useTooltip)(elRef, props);
    (0, _useRouteProps.useRouteProps)(linkElRef, props);
    (0, _useSmartSelect.useSmartSelect)(props, function () {}, function () {
      return elRef.value.querySelector('a.smart-select');
    });
    (0, _vue.watch)(function () {
      return props.swipeoutOpened;
    }, function (newValue) {
      if (!props.swipeout || !elRef.value || !_f.f7) return;

      if (newValue) {
        _f.f7.swipeout.open(elRef.value);
      } else {
        _f.f7.swipeout.close(elRef.value);
      }
    });
    (0, _vue.onMounted)(function () {
      (0, _f.f7ready)(function () {
        if (props.swipeout) {
          _f.f7.on('swipeoutOpen', onSwipeoutOpen);

          _f.f7.on('swipeoutOpened', onSwipeoutOpened);

          _f.f7.on('swipeoutClose', onSwipeoutClose);

          _f.f7.on('swipeoutClosed', onSwipeoutClosed);

          _f.f7.on('swipeoutDelete', onSwipeoutDelete);

          _f.f7.on('swipeoutDeleted', onSwipeoutDeleted);

          _f.f7.on('swipeoutOverswipeEnter', onSwipeoutOverswipeEnter);

          _f.f7.on('swipeoutOverswipeExit', onSwipeoutOverswipeExit);

          _f.f7.on('swipeout', onSwipeout);
        }

        if (props.accordionItem) {
          _f.f7.on('accordionBeforeOpen', onAccBeforeOpen);

          _f.f7.on('accordionOpen', onAccOpen);

          _f.f7.on('accordionOpened', onAccOpened);

          _f.f7.on('accordionBeforeClose', onAccBeforeClose);

          _f.f7.on('accordionClose', onAccClose);

          _f.f7.on('accordionClosed', onAccClosed);
        }

        if (props.swipeout && props.swipeoutOpened) {
          _f.f7.swipeout.open(elRef.value);
        }
      });

      if (props.checkbox && inputElRef.value) {
        inputElRef.value.indeterminate = !!props.indeterminate;
      }
    });
    (0, _vue.onBeforeUnmount)(function () {
      if (!_f.f7) return;

      _f.f7.off('swipeoutOpen', onSwipeoutOpen);

      _f.f7.off('swipeoutOpened', onSwipeoutOpened);

      _f.f7.off('swipeoutClose', onSwipeoutClose);

      _f.f7.off('swipeoutClosed', onSwipeoutClosed);

      _f.f7.off('swipeoutDelete', onSwipeoutDelete);

      _f.f7.off('swipeoutDeleted', onSwipeoutDeleted);

      _f.f7.off('swipeoutOverswipeEnter', onSwipeoutOverswipeEnter);

      _f.f7.off('swipeoutOverswipeExit', onSwipeoutOverswipeExit);

      _f.f7.off('swipeout', onSwipeout);

      _f.f7.off('accordionBeforeOpen', onAccBeforeOpen);

      _f.f7.off('accordionOpen', onAccOpen);

      _f.f7.off('accordionOpened', onAccOpened);

      _f.f7.off('accordionBeforeClose', onAccBeforeClose);

      _f.f7.off('accordionClose', onAccClose);

      _f.f7.off('accordionClosed', onAccClosed);
    });
    (0, _vue.watch)(function () {
      return props.indeterminate;
    }, function (newValue) {
      if (inputElRef.value) {
        inputElRef.value.indeterminate = !!newValue;
      }
    });
    var isMediaComputed = (0, _vue.computed)(function () {
      return props.mediaItem || props.mediaList || listIsMedia.value;
    });
    var isSortableComputed = (0, _vue.computed)(function () {
      return props.sortable === true || props.sortable === false ? props.sortable : listIsSortable.value;
    });
    var isSortableOppositeComputed = (0, _vue.computed)(function () {
      return isSortableComputed.value && (props.sortableOpposite || listIsSortableOpposite.value);
    });
    var linkAttrs = (0, _vue.computed)(function () {
      return _extends({
        href: props.link === true ? '' : props.link || props.href,
        target: props.target,
        'data-tab': (0, _utils.isStringProp)(props.tabLink) && props.tabLink || undefined
      }, (0, _mixins.routerAttrs)(props), (0, _mixins.actionsAttrs)(props));
    });
    var linkClasses = (0, _vue.computed)(function () {
      return (0, _utils.classNames)({
        'item-link': true,
        'smart-select': props.smartSelect,
        'tab-link': props.tabLink || props.tabLink === '',
        'tab-link-active': props.tabLinkActive,
        'item-selected': props.selected
      }, (0, _mixins.routerClasses)(props), (0, _mixins.actionsClasses)(props));
    });
    var itemContentClasses = (0, _vue.computed)(function () {
      return (0, _utils.classNames)('item-content', {
        'item-checkbox': props.checkbox,
        'item-radio': props.radio,
        'item-radio-icon-start': props.radio && props.radioIcon === 'start',
        'item-radio-icon-end': props.radio && props.radioIcon === 'end'
      }, (0, _mixins.colorClasses)(props));
    });
    var liClasses = (0, _vue.computed)(function () {
      return (0, _utils.classNames)({
        'item-divider': props.divider,
        'list-group-title': props.groupTitle,
        'media-item': isMediaComputed.value,
        swipeout: props.swipeout,
        'accordion-item': props.accordionItem,
        'accordion-item-opened': props.accordionItemOpened,
        disabled: props.disabled && !(props.radio || props.checkbox),
        'no-chevron': props.noChevron,
        'chevron-center': props.chevronCenter,
        'disallow-sorting': props.sortable === false
      }, (0, _mixins.colorClasses)(props));
    });
    return function () {
      var linkEl;
      var itemContentEl;

      if (!listIsSimple.value) {
        // Item Content
        itemContentEl = ListItemContent({
          props: props,
          slots: slots,
          inputElRef: inputElRef,
          onChange: onChange,
          onClick: props.link || props.href || props.accordionItem || props.smartSelect ? undefined : onClick,
          isMediaComputed: isMediaComputed,
          isSortableComputed: isSortableComputed,
          isSortableOppositeComputed: isSortableOppositeComputed,
          itemContentClasses: itemContentClasses
        }); // Link

        if (props.link || props.href || props.accordionItem || props.smartSelect) {
          linkEl = (0, _vue.h)('a', _extends({
            ref: linkElRef,
            class: linkClasses.value
          }, linkAttrs.value, {
            onClick: onClick
          }), [itemContentEl]);
        }
      }

      if (props.divider || props.groupTitle) {
        return (0, _vue.h)('li', {
          ref: elRef,
          class: liClasses.value,
          'data-virtual-list-index': props.virtualListIndex,
          onClick: onClick
        }, [props.title, slots.default && slots.default()]);
      }

      if (listIsSimple.value) {
        return (0, _vue.h)('li', {
          ref: elRef,
          class: liClasses.value,
          onClick: onClick,
          'data-virtual-list-index': props.virtualListIndex
        }, [props.title, slots.default && slots.default()]);
      }

      var linkItemEl = props.link || props.href || props.smartSelect || props.accordionItem ? linkEl : itemContentEl;
      return (0, _vue.h)('li', {
        ref: elRef,
        class: liClasses.value,
        'data-virtual-list-index': props.virtualListIndex
      }, [slots['root-start'] && slots['root-start'](), props.swipeout ? (0, _vue.h)('div', {
        class: 'swipeout-content'
      }, [linkItemEl]) : linkItemEl, isSortableComputed.value && props.sortable !== false && !isSortableOppositeComputed.value && (0, _vue.h)('div', {
        class: 'sortable-handler'
      }), (props.swipeout || props.accordionItem) && slots.default(), slots.root && slots.root(), slots['root-end'] && slots['root-end']()]);
    };
  }
};
exports.default = _default;