function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { computed, ref, onMounted, onBeforeUnmount, h } from 'vue';
import { classNames } from '../shared/utils';
import { colorClasses, colorProps } from '../shared/mixins';
import { f7ready, f7 } from '../shared/f7';
import f7PageContent from './page-content';
export default {
  name: 'f7-page',
  props: _extends({
    name: String,
    stacked: Boolean,
    withSubnavbar: {
      type: Boolean,
      default: undefined
    },
    subnavbar: {
      type: Boolean,
      default: undefined
    },
    withNavbarLarge: {
      type: Boolean,
      default: undefined
    },
    navbarLarge: {
      type: Boolean,
      default: undefined
    },
    noNavbar: Boolean,
    noToolbar: Boolean,
    tabs: Boolean,
    pageContent: {
      type: Boolean,
      default: true
    },
    noSwipeback: Boolean,
    // Page Content Props
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
  emits: ['page:mounted', 'page:init', 'page:reinit', 'page:beforein', 'page:beforeout', 'page:afterout', 'page:afterin', 'page:beforeremove', 'page:beforeunmount', 'page:tabshow', 'page:tabhide', 'ptr:pullstart', 'ptr:pullmove', 'ptr:pullend', 'ptr:refresh', 'ptr:done', 'infinite'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var hasSubnavbar = false;
    var hasNavbarLarge = false;
    var hasNavbarLargeCollapsed = false;
    var hasCardExpandableOpened = false;
    var routerPositionClass = '';
    var routerForceUnstack = false;
    var routerPageRole = null;
    var routerPageRoleDetailRoot = false;
    var routerPageMasterStack = false;
    var elRef = ref(null); // Main Page Events

    var onPageMounted = function onPageMounted(page) {
      if (elRef.value !== page.el) return;
      emit('page:mounted', page);
    };

    var onPageInit = function onPageInit(page) {
      if (elRef.value !== page.el) return;

      if (typeof props.withSubnavbar === 'undefined' && typeof props.subnavbar === 'undefined') {
        if (page.$navbarEl && page.$navbarEl.length && page.$navbarEl.find('.subnavbar').length || page.$el.children('.navbar').find('.subnavbar').length) {
          hasSubnavbar = true;
        }
      }

      if (typeof props.withNavbarLarge === 'undefined' && typeof props.navbarLarge === 'undefined') {
        if (page.$navbarEl && page.$navbarEl.hasClass('navbar-large')) {
          hasNavbarLarge = true;
        }
      }

      emit('page:init', page);
    };

    var onPageReinit = function onPageReinit(page) {
      if (elRef.value !== page.el) return;
      emit('page:reinit', page);
    };

    var onPageBeforeIn = function onPageBeforeIn(page) {
      if (elRef.value !== page.el) return;

      if (!page.swipeBack) {
        if (page.from === 'next') {
          routerPositionClass = 'page-next';
        }

        if (page.from === 'previous') {
          routerPositionClass = 'page-previous';
        }
      }

      emit('page:beforein', page);
    };

    var onPageBeforeOut = function onPageBeforeOut(page) {
      if (elRef.value !== page.el) return;
      emit('page:beforeout', page);
    };

    var onPageAfterOut = function onPageAfterOut(page) {
      if (elRef.value !== page.el) return;

      if (page.to === 'next') {
        routerPositionClass = 'page-next';
      }

      if (page.to === 'previous') {
        routerPositionClass = 'page-previous';
      }

      emit('page:afterout', page);
    };

    var onPageAfterIn = function onPageAfterIn(page) {
      if (elRef.value !== page.el) return;
      routerPositionClass = 'page-current';
      emit('page:afterin', page);
    };

    var onPageBeforeRemove = function onPageBeforeRemove(page) {
      if (elRef.value !== page.el) return;
      emit('page:beforeremove', page);
    };

    var onPageBeforeUnmount = function onPageBeforeUnmount(page) {
      if (elRef.value !== page.el) return;
      emit('page:beforeunmount', page);
    }; // Helper events


    var onPageStack = function onPageStack(pageEl) {
      if (elRef.value !== pageEl) return;
      routerForceUnstack = false;
    };

    var onPageUnstack = function onPageUnstack(pageEl) {
      if (elRef.value !== pageEl) return;
      routerForceUnstack = true;
    };

    var onPagePosition = function onPagePosition(pageEl, position) {
      if (elRef.value !== pageEl) return;
      routerPositionClass = "page-" + position;
    };

    var onPageRole = function onPageRole(pageEl, rolesData) {
      if (elRef.value !== pageEl) return;
      routerPageRole = rolesData.role;
      routerPageRoleDetailRoot = rolesData.detailRoot;
    };

    var onPageMasterStack = function onPageMasterStack(pageEl) {
      if (elRef.value !== pageEl) return;
      routerPageMasterStack = true;
    };

    var onPageMasterUnstack = function onPageMasterUnstack(pageEl) {
      if (elRef.value !== pageEl) return;
      routerPageMasterStack = false;
    };

    var onPageNavbarLargeCollapsed = function onPageNavbarLargeCollapsed(pageEl) {
      if (elRef.value !== pageEl) return;
      hasNavbarLargeCollapsed = true;
    };

    var onPageNavbarLargeExpanded = function onPageNavbarLargeExpanded(pageEl) {
      if (elRef.value !== pageEl) return;
      hasNavbarLargeCollapsed = false;
    };

    var onCardOpened = function onCardOpened(cardEl, pageEl) {
      if (elRef.value !== pageEl) return;
      hasCardExpandableOpened = true;
    };

    var onCardClose = function onCardClose(cardEl, pageEl) {
      if (elRef.value !== pageEl) return;
      hasCardExpandableOpened = false;
    };

    var onPageTabShow = function onPageTabShow(pageEl) {
      if (elRef.value !== pageEl) return;
      emit('page:tabshow');
    };

    var onPageTabHide = function onPageTabHide(pageEl) {
      if (elRef.value !== pageEl) return;
      emit('page:tabhide');
    };

    var onPtrPullStart = function onPtrPullStart() {
      emit('ptr:pullstart');
    };

    var onPtrPullMove = function onPtrPullMove() {
      emit('ptr:pullmove');
    };

    var onPtrPullEnd = function onPtrPullEnd() {
      emit('ptr:pullend');
    };

    var onPtrRefresh = function onPtrRefresh(done) {
      emit('ptr:refresh', done);
    };

    var onPtrDone = function onPtrDone() {
      emit('ptr:done');
    };

    var onInfinite = function onInfinite() {
      emit('infinite');
    };

    onMounted(function () {
      f7ready(function () {
        f7.on('pageMounted', onPageMounted);
        f7.on('pageInit', onPageInit);
        f7.on('pageReinit', onPageReinit);
        f7.on('pageBeforeIn', onPageBeforeIn);
        f7.on('pageBeforeOut', onPageBeforeOut);
        f7.on('pageAfterOut', onPageAfterOut);
        f7.on('pageAfterIn', onPageAfterIn);
        f7.on('pageBeforeRemove', onPageBeforeRemove);
        f7.on('pageBeforeUnmount', onPageBeforeUnmount);
        f7.on('pageStack', onPageStack);
        f7.on('pageUnstack', onPageUnstack);
        f7.on('pagePosition', onPagePosition);
        f7.on('pageRole', onPageRole);
        f7.on('pageMasterStack', onPageMasterStack);
        f7.on('pageMasterUnstack', onPageMasterUnstack);
        f7.on('pageNavbarLargeCollapsed', onPageNavbarLargeCollapsed);
        f7.on('pageNavbarLargeExpanded', onPageNavbarLargeExpanded);
        f7.on('cardOpened', onCardOpened);
        f7.on('cardClose', onCardClose);
        f7.on('pageTabShow', onPageTabShow);
        f7.on('pageTabHide', onPageTabHide);
      });
    });
    onBeforeUnmount(function () {
      if (!f7) return;
      f7.off('pageMounted', onPageMounted);
      f7.off('pageInit', onPageInit);
      f7.off('pageReinit', onPageReinit);
      f7.off('pageBeforeIn', onPageBeforeIn);
      f7.off('pageBeforeOut', onPageBeforeOut);
      f7.off('pageAfterOut', onPageAfterOut);
      f7.off('pageAfterIn', onPageAfterIn);
      f7.off('pageBeforeRemove', onPageBeforeRemove);
      f7.off('pageBeforeUnmount', onPageBeforeUnmount);
      f7.off('pageStack', onPageStack);
      f7.off('pageUnstack', onPageUnstack);
      f7.off('pagePosition', onPagePosition);
      f7.off('pageRole', onPageRole);
      f7.off('pageMasterStack', onPageMasterStack);
      f7.off('pageMasterUnstack', onPageMasterUnstack);
      f7.off('pageNavbarLargeCollapsed', onPageNavbarLargeCollapsed);
      f7.off('pageNavbarLargeExpanded', onPageNavbarLargeExpanded);
      f7.off('cardOpened', onCardOpened);
      f7.off('cardClose', onCardClose);
      f7.off('pageTabShow', onPageTabShow);
      f7.off('pageTabHide', onPageTabHide);
    });
    var classes = computed(function () {
      return classNames('page', routerPositionClass, {
        stacked: props.stacked && !routerForceUnstack,
        tabs: props.tabs,
        'page-with-subnavbar': props.subnavbar || props.withSubnavbar,
        'page-with-navbar-large': props.navbarLarge || props.withNavbarLarge,
        'no-navbar': props.noNavbar,
        'no-toolbar': props.noToolbar,
        'no-swipeback': props.noSwipeback,
        'page-master': routerPageRole === 'master',
        'page-master-detail': routerPageRole === 'detail',
        'page-master-detail-root': routerPageRoleDetailRoot === true,
        'page-master-stacked': routerPageMasterStack === true,
        'page-with-navbar-large-collapsed': hasNavbarLargeCollapsed === true,
        'page-with-card-opened': hasCardExpandableOpened === true,
        'login-screen-page': props.loginScreen
      }, colorClasses(props));
    });
    var fixedTags = 'navbar toolbar tabbar subnavbar searchbar messagebar fab list-index panel'.split(' ').map(function (tagName) {
      return "f7-" + tagName;
    });
    return function () {
      var fixedList = [];
      var staticList = [];
      var slotsStatic = slots.static,
          slotsFixed = slots.fixed,
          slotsDefault = slots.default;
      var hasSubnavbarComputed = false;
      var hasNavbarLargeComputed = false;
      var hasMessages = props.messagesContent;
      var slotsDefaultRendered = slotsDefault && slotsDefault();

      if (slotsDefaultRendered) {
        slotsDefaultRendered.forEach(function (vnode) {
          if (typeof vnode === 'undefined') return;
          var tag = vnode.type && vnode.type.name ? vnode.type.name : vnode.type;
          var isFixedTag = false;

          if (!tag) {
            if (props.pageContent || props.pageContent === '') staticList.push(vnode);
            return;
          }

          if (tag === 'f7-subnavbar') hasSubnavbarComputed = true;

          if (tag === 'f7-navbar') {
            if (vnode.props && (vnode.props.large || vnode.props.large === '')) hasNavbarLargeComputed = true;
          }

          if (typeof hasMessages === 'undefined' && tag === 'f7-messages') hasMessages = true;

          if (fixedTags.indexOf(tag) >= 0) {
            isFixedTag = true;
          }

          if (props.pageContent) {
            if (isFixedTag) fixedList.push(vnode);else staticList.push(vnode);
          }
        });
      }

      var classesValue = classes.value;

      if ((hasSubnavbarComputed || hasSubnavbar) && typeof props.subnavbar === 'undefined' && typeof props.withSubnavbar === 'undefined' && classesValue.indexOf('page-with-subnavbar') < 0) {
        classesValue += ' page-with-subnavbar';
      }

      if ((hasNavbarLargeComputed || hasNavbarLarge) && typeof props.navbarLarge === 'undefined' && typeof props.withNavbarLarge === 'undefined' && classesValue.indexOf('page-with-navbar-large') < 0) {
        classesValue += ' page-with-navbar-large';
      }

      if (!props.pageContent) {
        return h('div', {
          class: classesValue,
          ref: elRef,
          'data-name': props.name
        }, [slotsFixed && slotsFixed(), slotsStatic && slotsStatic(), slotsDefault && slotsDefaultRendered]);
      }

      return h('div', {
        class: classesValue,
        ref: elRef,
        'data-name': props.name
      }, [fixedList, slotsFixed && slotsFixed(), h(f7PageContent, {
        ptr: props.ptr,
        ptrDistance: props.ptrDistance,
        ptrPreloader: props.ptrPreloader,
        ptrBottom: props.ptrBottom,
        ptrMousewheel: props.ptrMousewheel,
        infinite: props.infinite,
        infiniteTop: props.infiniteTop,
        infiniteDistance: props.infiniteDistance,
        infinitePreloader: props.infinitePreloader,
        hideBarsOnScroll: props.hideBarsOnScroll,
        hideNavbarOnScroll: props.hideNavbarOnScroll,
        hideToolbarOnScroll: props.hideToolbarOnScroll,
        messagesContent: props.messagesContent || hasMessages,
        loginScreen: props.loginScreen,
        onPtrPullStart: onPtrPullStart,
        onPtrPullMove: onPtrPullMove,
        onPtrPullEnd: onPtrPullEnd,
        onPtrRefresh: onPtrRefresh,
        onPtrDone: onPtrDone,
        onInfinite: onInfinite
      }, function () {
        return [slotsStatic && slotsStatic(), staticList];
      })]);
    };
  }
};