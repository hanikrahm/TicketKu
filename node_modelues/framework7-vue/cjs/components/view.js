"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../shared/utils");

var _mixins = require("../shared/mixins");

var _f = require("../shared/f7");

var _useTab = require("../shared/use-tab");

var _getRouterInitialComponent = require("../shared/get-router-initial-component");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = {
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
  }, _mixins.colorProps),
  emits: ['view:init', 'view:resize', 'swipeback:move', 'swipeback:beforechange', 'swipeback:afterchange', 'swipeback:beforereset', 'swipeback:afterreset', 'tab:hide', 'tab:show'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    // const childrenArray = React.Children.toArray(children);
    // const initialPageComponent = childrenArray.filter((c) => c.props && c.props.initialPage)[0];
    // const restChildren = childrenArray.filter((c) => !c.props || !c.props.initialPage);
    var initialPageComponent = null;
    var f7View = null;
    var elRef = (0, _vue.ref)(null);
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
      var routes = (0, _vue.toRaw)(props.routes || []);
      var routesAdd = (0, _vue.toRaw)(props.routesAdd || []);
      return (0, _utils.noUndefinedProps)(_extends({}, props, {
        routes: routes,
        routesAdd: routesAdd
      }));
    };

    if (_f.f7 && !f7View && props.init) {
      var routerId = (0, _utils.getRouterId)();
      f7View = _f.f7.views.create(elRef.value, _extends({}, getViewParams(), {
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

      _f.f7routers.views.push(routerData);

      if (f7View && f7View.router && (props.url || props.main)) {
        var initialData = (0, _getRouterInitialComponent.getRouterInitialComponent)(f7View.router, initialPageComponent);
        initialPage = initialData.initialPage;
        initialRoute = initialData.initialRoute;

        if (initialRoute && initialRoute.route && initialRoute.route.masterRoute) {
          initialPage = undefined;
          initialRoute = undefined;
        }
      }
    }

    var pages = (0, _vue.ref)(initialPage ? [initialPage] : []);

    var _setPages = function setPages(newPages) {
      newPages.forEach(function (page) {
        // eslint-disable-next-line
        page.component = (0, _vue.toRaw)(page.component);
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

    (0, _vue.onMounted)(function () {
      (0, _f.f7ready)(function () {
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
          var _routerId = (0, _utils.getRouterId)();

          routerData = {
            el: elRef.value,
            routerId: _routerId,
            pages: pages.value,
            instance: f7View,
            setPages: function setPages(newPages) {
              _setPages([].concat(newPages));
            }
          };

          _f.f7routers.views.push(routerData);

          routerData.instance = _f.f7.views.create(elRef.value, _extends({
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
    (0, _vue.onBeforeUnmount)(function () {
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

      _f.f7routers.views.splice(_f.f7routers.views.indexOf(routerData), 1);

      routerData = null;
    });
    (0, _vue.onUpdated)(function () {
      if (!routerData || !_f.f7) return;

      _f.f7events.emit('viewRouterDidUpdate', routerData);
    });
    (0, _useTab.useTab)(elRef, emit);
    var classes = (0, _vue.computed)(function () {
      return (0, _utils.classNames)('view', {
        'view-main': props.main,
        'tab-active': props.tabActive,
        tab: props.tab
      }, (0, _mixins.colorClasses)(props));
    });

    var getComponent = function getComponent(page) {
      return (0, _vue.toRaw)(page.component);
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
      return (0, _vue.h)('div', {
        ref: elRef,
        class: classes.value
      }, [slots.default && slots.default()].concat(pages.value.map(function (page) {
        return (0, _vue.h)(getComponent(page), _extends({
          key: page.id
        }, getProps(page)));
      })));
    };
  }
};
exports.default = _default;