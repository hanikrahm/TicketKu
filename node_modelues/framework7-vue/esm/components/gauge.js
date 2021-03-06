import { openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode, toDisplayString as _toDisplayString } from "vue";
var _hoisted_1 = {
  class: "gauge"
};

function render(_ctx, _cache) {
  return _openBlock(), _createBlock("div", _hoisted_1, [(_openBlock(), _createBlock("svg", {
    class: "gauge-svg",
    width: _ctx.size + "px",
    height: (_ctx.semiCircle ? _ctx.size / 2 : _ctx.size) + "px",
    viewBox: "0 0 " + _ctx.size + " " + (_ctx.semiCircle ? _ctx.size / 2 : _ctx.size)
  }, [_ctx.semiCircle ? (_openBlock(), _createBlock("path", {
    key: 0,
    class: "gauge-back-semi",
    d: "M" + (_ctx.size - _ctx.borderWidth / 2) + "," + _ctx.size / 2 + " a1,1 0 0,0 -" + (_ctx.size - _ctx.borderWidth) + ",0",
    stroke: _ctx.borderBgColor,
    "stroke-width": _ctx.borderWidth,
    fill: _ctx.bgColor || 'none'
  }, null, 8, ["d", "stroke", "stroke-width", "fill"])) : _createCommentVNode("", true), _ctx.semiCircle ? (_openBlock(), _createBlock("path", {
    key: 1,
    class: "gauge-front-semi",
    d: "M" + (_ctx.size - _ctx.borderWidth / 2) + "," + _ctx.size / 2 + " a1,1 0 0,0 -" + (_ctx.size - _ctx.borderWidth) + ",0",
    stroke: _ctx.borderColor,
    "stroke-width": _ctx.borderWidth,
    "stroke-dasharray": _ctx.length / 2,
    "stroke-dashoffset": _ctx.length / 2 * (1 + _ctx.progress),
    fill: _ctx.borderBgColor ? 'none' : _ctx.bgColor || 'none'
  }, null, 8, ["d", "stroke", "stroke-width", "stroke-dasharray", "stroke-dashoffset", "fill"])) : _createCommentVNode("", true), !_ctx.semiCircle && _ctx.borderBgColor ? (_openBlock(), _createBlock("circle", {
    key: 2,
    class: "gauge-back-circle",
    stroke: _ctx.borderBgColor,
    "stroke-width": _ctx.borderWidth,
    fill: _ctx.bgColor || 'none',
    cx: _ctx.size / 2,
    cy: _ctx.size / 2,
    r: _ctx.radius
  }, null, 8, ["stroke", "stroke-width", "fill", "cx", "cy", "r"])) : _createCommentVNode("", true), !_ctx.semiCircle ? (_openBlock(), _createBlock("circle", {
    key: 3,
    class: "gauge-front-circle",
    transform: "rotate(-90 " + _ctx.size / 2 + " " + _ctx.size / 2 + ")",
    stroke: _ctx.borderColor,
    "stroke-width": _ctx.borderWidth,
    "stroke-dasharray": _ctx.length,
    "stroke-dashoffset": _ctx.length * (1 - _ctx.progress),
    fill: _ctx.borderBgColor ? 'none' : _ctx.bgColor || 'none',
    cx: _ctx.size / 2,
    cy: _ctx.size / 2,
    r: _ctx.radius
  }, null, 8, ["transform", "stroke", "stroke-width", "stroke-dasharray", "stroke-dashoffset", "fill", "cx", "cy", "r"])) : _createCommentVNode("", true), _ctx.valueText ? (_openBlock(), _createBlock("text", {
    key: 4,
    class: "gauge-value-text",
    x: "50%",
    y: _ctx.semiCircle ? '100%' : '50%',
    "font-weight": _ctx.valueFontWeight,
    "font-size": _ctx.valueFontSize,
    fill: _ctx.valueTextColor,
    dy: _ctx.semiCircle ? _ctx.labelText ? -_ctx.labelFontSize - 15 : -5 : 0,
    "text-anchor": "middle",
    "dominant-baseline": !_ctx.semiCircle ? 'middle' : null
  }, _toDisplayString(_ctx.valueText), 9, ["y", "font-weight", "font-size", "fill", "dy", "dominant-baseline"])) : _createCommentVNode("", true), _ctx.labelText ? (_openBlock(), _createBlock("text", {
    key: 5,
    class: "gauge-label-text",
    x: "50%",
    y: _ctx.semiCircle ? '100%' : '50%',
    "font-weight": _ctx.labelFontWeight,
    "font-size": _ctx.labelFontSize,
    fill: _ctx.labelTextColor,
    dy: _ctx.semiCircle ? -5 : _ctx.valueText ? _ctx.valueFontSize / 2 + 10 : 0,
    "text-anchor": "middle",
    "dominant-baseline": !_ctx.semiCircle ? 'middle' : null
  }, _toDisplayString(_ctx.labelText), 9, ["y", "font-weight", "font-size", "fill", "dy", "dominant-baseline"])) : _createCommentVNode("", true)], 8, ["width", "height", "viewBox"]))]);
}

import { computed } from 'vue';
export default {
  name: 'f7-gauge',
  render: render,
  props: {
    type: {
      type: String,
      default: 'circle'
    },
    value: {
      type: [Number, String],
      default: 0
    },
    size: {
      type: [Number, String],
      default: 200
    },
    bgColor: {
      type: String,
      default: 'transparent'
    },
    borderBgColor: {
      type: String,
      default: '#eeeeee'
    },
    borderColor: {
      type: String,
      default: '#000000'
    },
    borderWidth: {
      type: [Number, String],
      default: 10
    },
    valueText: [Number, String],
    valueTextColor: {
      type: String,
      default: '#000000'
    },
    valueFontSize: {
      type: [Number, String],
      default: 31
    },
    valueFontWeight: {
      type: [Number, String],
      default: 500
    },
    labelText: String,
    labelTextColor: {
      type: String,
      default: '#888888'
    },
    labelFontSize: {
      type: [Number, String],
      default: 14
    },
    labelFontWeight: {
      type: [Number, String],
      default: 400
    }
  },
  setup: function setup(props) {
    var semiCircle = computed(function () {
      return props.type === 'semicircle';
    });
    var radius = computed(function () {
      return props.size / 2 - props.borderWidth / 2;
    });
    var length = computed(function () {
      return 2 * Math.PI * radius.value;
    });
    var progress = computed(function () {
      return Math.max(Math.min(props.value, 1), 0);
    });
    return {
      semiCircle: semiCircle,
      radius: radius,
      length: length,
      progress: progress
    };
  }
};