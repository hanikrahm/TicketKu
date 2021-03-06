function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toDisplayString as _toDisplayString, renderSlot as _renderSlot, createTextVNode as _createTextVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createBlock("i", {
    ref: "elRef",
    style: {
      fontSize: _ctx.sizeComputed,
      width: _ctx.sizeComputed,
      height: _ctx.sizeComputed
    },
    class: _ctx.classesComputed
  }, [_createTextVNode(_toDisplayString(_ctx.iconText) + " ", 1), _renderSlot(_ctx.$slots, "default")], 6);
}

import { ref, computed } from 'vue';
import { classNames } from '../shared/utils';
import { colorClasses, colorProps } from '../shared/mixins';
import { useTooltip } from '../shared/use-tooltip';
import { useTheme } from '../shared/use-theme';
export default {
  name: 'f7-icon',
  render: render,
  props: _extends({
    material: String,
    f7: String,
    icon: String,
    ios: String,
    aurora: String,
    md: String,
    tooltip: String,
    tooltipTrigger: String,
    size: [String, Number]
  }, colorProps),
  setup: function setup(props) {
    var elRef = ref(null);
    var theme = useTheme();
    useTooltip(elRef, props);
    var classesComputed = computed(function () {
      var ios = props.ios,
          md = props.md,
          aurora = props.aurora,
          f7 = props.f7,
          material = props.material,
          icon = props.icon;
      var classes = {
        icon: true
      };
      var themeIcon;
      if (theme.value && theme.value.ios) themeIcon = ios;else if (theme.value && theme.value.md) themeIcon = md;else if (theme.value && theme.value.aurora) themeIcon = aurora;

      if (themeIcon) {
        var parts = themeIcon.split(':');
        var prop = parts[0];
        var value = parts[1];

        if (prop === 'material' || prop === 'f7') {
          classes['material-icons'] = prop === 'material';
          classes['f7-icons'] = prop === 'f7';
        }

        if (prop === 'icon') {
          classes[value] = true;
        }
      } else {
        classes = {
          icon: true,
          'material-icons': material,
          'f7-icons': f7
        };
        if (icon) classes[icon] = true;
      }

      return classNames(classes, colorClasses(props));
    });
    var sizeComputed = computed(function () {
      var size = props.size;

      if (typeof props.size === 'number' || parseFloat(props.size) === props.size * 1) {
        size = props.size + "px";
      }

      return size;
    });
    var iconText = computed(function () {
      var ios = props.ios,
          md = props.md,
          aurora = props.aurora,
          f7 = props.f7,
          material = props.material;
      var text = material || f7;

      if (md && theme.value && theme.value.md && (md.indexOf('material:') >= 0 || md.indexOf('f7:') >= 0)) {
        text = md.split(':')[1];
      } else if (ios && theme.value && theme.value.ios && (ios.indexOf('material:') >= 0 || ios.indexOf('f7:') >= 0)) {
        text = ios.split(':')[1];
      } else if (aurora && theme.value && theme.value.aurora && (aurora.indexOf('material:') >= 0 || aurora.indexOf('f7:') >= 0)) {
        text = aurora.split(':')[1];
      }

      return text;
    });
    return {
      elRef: elRef,
      sizeComputed: sizeComputed,
      classesComputed: classesComputed,
      iconText: iconText
    };
  }
};