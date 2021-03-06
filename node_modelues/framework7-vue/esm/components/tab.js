function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { resolveDynamicComponent as _resolveDynamicComponent, mergeProps as _mergeProps, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode, renderSlot as _renderSlot } from "vue";

function render(_ctx, _cache) {
  var _mergeProps2;

  return _openBlock(), _createBlock("div", {
    ref: "elRef",
    class: _ctx.classes
  }, [_ctx.tabContent ? (_openBlock(), _createBlock(_resolveDynamicComponent(_ctx.getComponent(_ctx.tabContent)), _mergeProps((_mergeProps2 = {
    key: 0
  }, _mergeProps2["key"] = _ctx.tabContent.id, _mergeProps2), _ctx.getProps(_ctx.tabContent)), null, 16)) : _renderSlot(_ctx.$slots, "default", {
    key: 1
  })], 2);
}

import { computed, ref, inject, onMounted, onBeforeUnmount, onUpdated, toRaw } from 'vue';
import { classNames, getComponentId } from '../shared/utils';
import { colorClasses, colorProps } from '../shared/mixins';
import { f7ready, f7routers, f7, f7events } from '../shared/f7';
import { useTab } from '../shared/use-tab';
export default {
  name: 'f7-tab',
  render: render,
  props: _extends({
    tabActive: Boolean
  }, colorProps),
  emits: ['tab:show', 'tab:hide'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var elRef = ref(null);
    var routerData = ref(null);
    var route = inject('f7route', null);
    var router = inject('f7route', null);
    var initialTabContent = null;

    if (!routerData.value && route && route.route && route.route.tab && route.route.tab.id === props.id) {
      var _route$route$tab = route.route.tab,
          component = _route$route$tab.component,
          asyncComponent = _route$route$tab.asyncComponent,
          tabRouteOptions = _route$route$tab.options;

      if (component || asyncComponent) {
        var parentProps = route.route.options && route.route.options.props;
        initialTabContent = {
          id: getComponentId(),
          component: component || asyncComponent,
          isAsync: !!asyncComponent,
          props: _extends({}, parentProps || {}, tabRouteOptions && tabRouteOptions.props || {}, {
            f7router: router,
            f7route: route
          }, route.params)
        };
      }
    }

    var tabContent = ref(initialTabContent || null);

    var setTabContent = function setTabContent(newContent) {
      tabContent.value = newContent;
    };

    if (f7 && !routerData.value) {
      routerData.value = {
        setTabContent: setTabContent
      };
      f7routers.tabs.push(routerData.value);
    }

    onMounted(function () {
      if (elRef.value && initialTabContent) {
        elRef.value.f7RouterTabLoaded = true;
      }

      f7ready(function () {
        if (!routerData.value) {
          routerData.value = {
            el: elRef.value,
            setTabContent: setTabContent
          };
          f7routers.tabs.push(routerData.value);
        } else {
          routerData.value.el = elRef.value;
        }
      });
    });
    onBeforeUnmount(function () {
      if (!routerData.value) return;
      f7routers.tabs.splice(f7routers.tabs.indexOf(routerData.value), 1);
      routerData.value = null;
    });
    onUpdated(function () {
      if (!routerData.value || !f7) return;
      f7events.emit('tabRouterDidUpdate', routerData.value);
    });
    useTab(elRef, emit);
    var classes = computed(function () {
      return classNames('tab', {
        'tab-active': props.tabActive
      }, colorClasses(props));
    });

    var getComponent = function getComponent(content) {
      return toRaw(content.component);
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