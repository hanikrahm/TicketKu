function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { computed, ref, onMounted, onBeforeUnmount, onUpdated, toRaw, h } from 'vue';
import { classNames, noUndefinedProps, getRouterId } from '../shared/utils';
import { colorClasses, colorProps } from '../shared/mixins';
import { f7ready, f7routers, f7, f7events } from '../shared/f7';
import { useTab } from '../shared/use-tab';
import { getRouterInitialComponent } from '../shared/get-router-initial-component';
export default {
  name: 'f7-view',
  props: _extends({
    tab: Boolean,
    tabActive: Boolean,
    name: String,
    router: {
      type: Boolean,
      default: true
    },
    linksView: [Object, String],
    url: String,
    main: {
      type: Boolean,
      default: undefined
    },
    stackPages: {
      type: Boolean,
      default: undefined
    },
    xhrCache: {
      type: Boolean,
      default: undefined
    },
    xhrCacheIgnore: Array,
    xhrCacheIgnoreGetParameters: {
      type: Boolean,
      default: undefined
    },
    xhrCacheDuration: Number,
    preloadPreviousPage: {
      type: Boolean,
      default: undefined
    },
    allowDuplicateUrls: {
      type: Boolean,
      default: undefined
    },
    reloadPages: {
      type: Boolean,
      default: undefined
    },
    reloadDetail: {
      type: Boolean,
      default: undefined
    },
    masterDetailResizable: {
      type: Boolean,
      default: undefined
    },
    masterDetailBreakpoint: Number,
    removeElements: {
      type: Boolean,
      default: undefined
    },
    removeElementsWithTimeout: {
      type: Boolean,
      default: undefined
    },
    removeElementsTimeout: Number,
    restoreScrollTopOnBack: {
      type: Boolean,
      default: undefined
    },
    loadInitialPage: {
      type: Boolean,
      default: undefined
    },
    // Swipe Back
    iosSwipeBack: {
      type: Boolean,
      default: undefined
    },
    iosSwipeBackAnimateShadow: {
      type: Boolean,
      default: undefined
    },
    iosSwipeBackAnimateOpacity: {
      type: Boolean,
      default: undefined
    },
    iosSwipeBackActiveArea: Number,
    iosSwipeBackThreshold: Number,
    mdSwipeBack: {
      type: Boolean,
      default: undefined
    },
    mdSwipeBackAnimateShadow: {
      type: Boolean,
      default: undefined
    },
    mdSwipeBackAnimateOpacity: {
      type: Boolean,
      default: undefined
    },
    mdSwipeBackActiveArea: Number,
    mdSwipeBackThreshold: Number,
    auroraSwipeBack: {
      type: Boolean,
      default: undefined
    },
    auroraSwipeBackAnimateShadow: {
      type: Boolean,
      default: undefined
    },
    auroraSwipeBackAnimateOpacity: {
      type: Boolean,
      default: undefined
    },
    auroraSwipeBackActiveArea: Number,
    auroraSwipeBackThreshold: Number,
    // Push State
    browserHistory: {
      type: Boolean,
      default: undefined
    },
    browserHistoryRoot: String,
    browserHistoryAnimate: {
      type: Boolean,
      default: undefined
    },
    browserHistoryAnimateOnLoad: {
      type: Boolean,
      default: undefined
    },
    browserHistorySeparator: String,
    browserHistoryOnLoad: {
      type: Boolean,
      default: undefined
    },
    browserHistoryInitialMatch: {
      type: Boolean,
      default: true
    },
    browserHistoryStoreHistory: {
      type: Boolean,
      default: undefined
    },
    // Animate Pages
    animate: {
      type: Boolean,
      default: undefined
    },
    transition: String,
    // iOS Dynamic Navbar
    iosDynamicNavbar: {
      type: Boolean,
      default: undefined
    },
    // Animate iOS Navbar Back Icon
    iosAnimateNavbarBackIcon: {
      type: Boolean,
      default: undefined
    },
    // MD Theme delay
    materialPageLoadDelay: Number,
    passRouteQueryToRequest: {
      type: Boolean,
      default: undefined
    },
    passRouteParamsToRequest: {
      type: Boolean,
      default: undefined
    },
    routes: Array,
    routesAdd: Array,
    // Routes hooks
    routesBeforeEnter: [Function, Array],
    routesBeforeLeave: [Function, Array],
    init: {
      type: Boolean,
      default: true
    }
  }, colorProps),
  emits: ['view:init', 'view:resize', 'swipeback:move', 'swipeback:beforechange', 'swipeback:afterchange', 'swipeback:beforereset', 'swipeback:afterreset', 'tab:hide', 'tab:show'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    // const childrenArray = React.Children.toArray(children);
    // const initialPageComponent = childrenArray.filter((c) => c.props && c.props.initialPage)[0];
    // const restChildren = childrenArray.filter((c) => !c.props || !c.props.initialPage);
    var initialPageComponent = null;
    var f7View = null;
    var elRef = ref(null);
    var routerData = null;
    var initialPage;
    var initialRoute;

    var onViewInit = function onViewInit(view) {
      emit('view:init', view);

      if (!props.init) {
        routerData.instance = view;
        f7View = routerData.instance;
      }
    };

    var getViewParams = function getViewParams() {
      var routes = toRaw(props.routes || []);
      var routesAdd = toRaw(props.routesAdd || []);
      return noUndefinedProps(_extends({}, props, {
        routes: routes,
        routesAdd: routesAdd
      }));
    };

    if (f7 && !f7View && props.init) {
      var routerId = getRouterId();
      f7View = f7.views.create(elRef.value, _extends({}, getViewParams(), {
        routerId: routerId,
        init: false,
        on: {
          init: onViewInit
        }
      }));
      routerData = {
        routerId: routerId,
        instance: f7View
      };
      f7routers.views.push(routerData);

      if (f7View && f7View.router && (props.url || props.main)) {
        var initialData = getRouterInitialComponent(f7View.router, initialPageComponent);
        initialPage = initialData.initialPage;
        initialRoute = initialData.initialRoute;

        if (initialRoute && initialRoute.route && initialRoute.route.masterRoute) {
          initialPage = undefined;
          initialRoute = undefined;
        }
      }
    }

    var pages = ref(initialPage ? [initialPage] : []);

    var _setPages = function setPages(newPages) {
      newPages.forEach(function (page) {
        // eslint-disable-next-line
        page.component = toRaw(page.component);
      });
      pages.value = newPages;
    };

    var onResize = function onResize(view, width) {
      emit('view:resize', width);
    };

    var onSwipeBackMove = function onSwipeBackMove(data) {
      var swipeBackData = data;
      emit('swipeback:move', swipeBackData);
    };

    var onSwipeBackBeforeChange = function onSwipeBackBeforeChange(data) {
      var swipeBackData = data;
      emit('swipeback:beforechange', swipeBackData);
    };

    var onSwipeBackAfterChange = function onSwipeBackAfterChange(data) {
      var swipeBackData = data;
      emit('swipeback:afterchange', swipeBackData);
    };

    var onSwipeBackBeforeReset = function onSwipeBackBeforeReset(data) {
      var swipeBackData = data;
      emit('swipeback:beforereset', swipeBackData);
    };

    var onSwipeBackAfterReset = function onSwipeBackAfterReset(data) {
      var swipeBackData = data;
      emit('swipeback:afterreset', swipeBackData);
    };

    onMounted(function () {
      f7ready(function () {
        if (f7View) {
          routerData.el = elRef.value;
          routerData.pages = pages.value;

          routerData.setPages = function (newPages) {
            _setPages([].concat(newPages));
          };

          if (initialPage && initialPage.isAsync && !initialPage.initialComponent) {
            initialPage.component().then(function () {
              setTimeout(function () {
                f7View.init(elRef.value);

                if (initialPage) {
                  initialPage.el = f7View.router.currentPageEl;

                  if (initialRoute && initialRoute.route && initialRoute.route.keepAlive) {
                    initialRoute.route.keepAliveData = {
                      pageEl: initialPage.el
                    };
                  }
                }
              }, 100);
            });
          } else {
            f7View.init(elRef.value);

            if (initialPage) {
              initialPage.el = f7View.router.currentPageEl;

              if (initialRoute && initialRoute.route && initialRoute.route.keepAlive) {
                initialRoute.route.keepAliveData = {
                  pageEl: initialPage.el
                };
              }
            }
          }
        } else {
          var _routerId = getRouterId();

          routerData = {
            el: elRef.value,
            routerId: _routerId,
            pages: pages.value,
            instance: f7View,
            setPages: function setPages(newPages) {
              _setPages([].concat(newPages));
            }
          };
          f7routers.views.push(routerData);
          routerData.instance = f7.views.create(elRef.value, _extends({
            routerId: _routerId
          }, getViewParams(), {
            on: {
              init: onViewInit
            }
          }));
          f7View = routerData.instance;
        }

        if (!props.init) return;
        f7View.on('resize', onResize);
        f7View.on('swipebackMove', onSwipeBackMove);
        f7View.on('swipebackBeforeChange', onSwipeBackBeforeChange);
        f7View.on('swipebackAfterChange', onSwipeBackAfterChange);
        f7View.on('swipebackBeforeReset', onSwipeBackBeforeReset);
        f7View.on('swipebackAfterReset', onSwipeBackAfterReset);
      });
    });
    onBeforeUnmount(function () {
      if (f7View) {
        f7View.off('resize', onResize);
        f7View.off('swipebackMove', onSwipeBackMove);
        f7View.off('swipebackBeforeChange', onSwipeBackBeforeChange);
        f7View.off('swipebackAfterChange', onSwipeBackAfterChange);
        f7View.off('swipebackBeforeReset', onSwipeBackBeforeReset);
        f7View.off('swipebackAfterReset', onSwipeBackAfterReset);
        if (f7View.destroy) f7View.destroy();
        f7View = null;
      }

      f7routers.views.splice(f7routers.views.indexOf(routerData), 1);
      routerData = null;
    });
    onUpdated(function () {
      if (!routerData || !f7) return;
      f7events.emit('viewRouterDidUpdate', routerData);
    });
    useTab(elRef, emit);
    var classes = computed(function () {
      return classNames('view', {
        'view-main': props.main,
        'tab-active': props.tabActive,
        tab: props.tab
      }, colorClasses(props));
    });

    var getComponent = function getComponent(page) {
      return toRaw(page.component);
    };

    var getProps = function getProps(page) {
      var pageComponent = page.component,
          pageProps = page.props;
      var keys = [];
      var passProps = {};
      if (pageComponent && pageComponent.props) keys = Object.keys(pageComponent.props);
      keys.forEach(function (key) {
        if (key in pageProps) passProps[key] = pageProps[key];
      });
      return passProps;
    };

    return function () {
      return h('div', {
        ref: elRef,
        class: classes.value
      }, [slots.default && slots.default()].concat(pages.value.map(function (page) {
        return h(getComponent(page), _extends({
          key: page.id
        }, getProps(page)));
      })));
    };
  }
};