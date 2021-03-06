"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../shared/utils");

var _mixins = require("../shared/mixins");

var _f = require("../shared/f7");

var _useTab = require("../shared/use-tab");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function render(_ctx, _cache) {
  var _mergeProps2;

  return (0, _vue.openBlock)(), (0, _vue.createBlock)("div", {
    ref: "elRef",
    class: _ctx.classes
  }, [_ctx.tabContent ? ((0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.getComponent(_ctx.tabContent)), (0, _vue.mergeProps)((_mergeProps2 = {
    key: 0
  }, _mergeProps2["key"] = _ctx.tabContent.id, _mergeProps2), _ctx.getProps(_ctx.tabContent)), null, 16)) : (0, _vue.renderSlot)(_ctx.$slots, "default", {
    key: 1
  })], 2);
}

var _default = {
  name: 'f7-tab',
  render: render,
  props: _extends({
    tabActive: Boolean
  }, _mixins.colorProps),
  emits: ['tab:show', 'tab:hide'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var elRef = (0, _vue.ref)(null);
    var routerData = (0, _vue.ref)(null);
    var route = (0, _vue.inject)('f7route', null);
    var router = (0, _vue.inject)('f7route', null);
    var initialTabContent = null;

    if (!routerData.value && route && route.route && route.route.tab && route.route.tab.id === props.id) {
      var _route$route$tab = route.route.tab,
          component = _route$route$tab.component,
          asyncComponent = _route$route$tab.asyncComponent,
          tabRouteOptions = _route$route$tab.options;

      if (component || asyncComponent) {
        var parentProps = route.route.options && route.route.options.props;
        initialTabContent = {
          id: (0, _utils.getComponentId)(),
          component: component || asyncComponent,
          isAsync: !!asyncComponent,
          props: _extends({}, parentProps || {}, tabRouteOptions && tabRouteOptions.props || {}, {
            f7router: router,
            f7route: route
          }, route.params)
        };
      }
    }

    var tabContent = (0, _vue.ref)(initialTabContent || null);

    var setTabContent = function setTabContent(newContent) {
      tabContent.value = newContent;
    };

    if (_f.f7 && !routerData.value) {
      routerData.value = {
        setTabContent: setTabContent
      };

      _f.f7routers.tabs.push(routerData.value);
    }

    (0, _vue.onMounted)(function () {
      if (elRef.value && initialTabContent) {
        elRef.value.f7RouterTabLoaded = true;
      }

      (0, _f.f7ready)(function () {
        if (!routerData.value) {
          routerData.value = {
            el: elRef.value,
            setTabContent: setTabContent
          };

          _f.f7routers.tabs.push(routerData.value);
        } else {
          routerData.value.el = elRef.value;
        }
      });
    });
    (0, _vue.onBeforeUnmount)(function () {
      if (!routerData.value) return;

      _f.f7routers.tabs.splice(_f.f7routers.tabs.indexOf(routerData.value), 1);

      routerData.value = null;
    });
    (0, _vue.onUpdated)(function () {
      if (!routerData.value || !_f.f7) return;

      _f.f7events.emit('tabRouterDidUpdate', routerData.value);
    });
    (0, _useTab.useTab)(elRef, emit);
    var classes = (0, _vue.computed)(function () {
      return (0, _utils.classNames)('tab', {
        'tab-active': props.tabActive
      }, (0, _mixins.colorClasses)(props));
    });

    var getComponent = function getComponent(content) {
      return (0, _vue.toRaw)(content.component);
    };

    var getProps = function getProps(content) {
      var tabComponent = content.component,
          tabProps = content.props;
      var keys = [];
      var passProps = {};
      if (tabComponent && tabComponent.props) keys = Object.keys(tabComponent.props);
      keys.forEach(function (key) {
        if (key in tabProps) passProps[key] = tabProps[key];
      });
      return passProps;
    };

    return {
      elRef: elRef,
      classes: classes,
      tabContent: tabContent,
      getComponent: getComponent,
      getProps: getProps
    };
  }
};
exports.default = _default;