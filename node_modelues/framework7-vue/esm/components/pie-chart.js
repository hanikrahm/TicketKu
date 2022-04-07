import { renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createBlock as _createBlock, renderSlot as _renderSlot } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createBlock("div", {
    ref: "elRef",
    class: _ctx.classes
  }, [(_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _ctx.size,
    height: _ctx.size,
    viewBox: "-" + _ctx.size / 3 + " -" + _ctx.size / 3 + " " + _ctx.size * 2 / 3 + " " + _ctx.size * 2 / 3,
    style: {
      transform: 'rotate(-90deg)'
    }
  }, [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.paths, function (path, index) {
    return _openBlock(), _createBlock("path", {
      key: path.label || index,
      d: path.points,
      fill: path.color,
      "data-index": index,
      class: _ctx.classNames({
        'pie-chart-hidden': _ctx.currentIndex !== null && _ctx.currentIndex !== index
      }),
      onClick: function onClick($event) {
        return _ctx.setCurrentIndex(index);
      },
      onMouseenter: function onMouseenter($event) {
        return _ctx.setCurrentIndex(index);
      },
      onMouseleave: _cache[1] || (_cache[1] = function ($event) {
        return _ctx.setCurrentIndex(null);
      })
    }, null, 42, ["d", "fill", "data-index", "onClick", "onMouseenter"]);
  }), 128))], 12, ["width", "height", "viewBox"])), _renderSlot(_ctx.$slots, "default")], 2);
}

import { computed, onBeforeUnmount, ref, watch } from 'vue';
import { classNames } from '../shared/utils';
import { f7 } from '../shared/f7';
export default {
  name: 'f7-pie-chart',
  render: render,
  props: {
    size: {
      type: Number,
      default: 320
    },
    tooltip: Boolean,
    datasets: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    formatTooltip: Function
  },
  emits: ['select'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var elRef = ref(null);
    var f7Tooltip = null;
    var currentIndex = ref(null);

    var setCurrentIndex = function setCurrentIndex(index) {
      currentIndex.value = index;
    };

    var summValue = computed(function () {
      var summ = 0;
      props.datasets.map(function (d) {
        return d.value || 0;
      }).forEach(function (value) {
        summ += value;
      });
      return summ;
    });
    var paths = computed(function () {
      var p = [];
      var cumulativePercentage = 0;

      function getCoordinatesForPercentage(percentage) {
        var x = Math.cos(2 * Math.PI * percentage) * (props.size / 3);
        var y = Math.sin(2 * Math.PI * percentage) * (props.size / 3);
        return [x, y];
      }

      props.datasets.forEach(function (_ref2) {
        var value = _ref2.value,
            label = _ref2.label,
            color = _ref2.color;
        var percentage = value / summValue.value;

        var _getCoordinatesForPer = getCoordinatesForPercentage(cumulativePercentage),
            startX = _getCoordinatesForPer[0],
            startY = _getCoordinatesForPer[1];

        cumulativePercentage += percentage;

        var _getCoordinatesForPer2 = getCoordinatesForPercentage(cumulativePercentage),
            endX = _getCoordinatesForPer2[0],
            endY = _getCoordinatesForPer2[1];

        var largeArcFlag = percentage > 0.5 ? 1 : 0;
        var points = ["M " + startX + " " + startY, // Move
        "A " + props.size / 3 + " " + props.size / 3 + " 0 " + largeArcFlag + " 1 " + endX + " " + endY, // Arc
        'L 0 0' // Line
        ].join(' ');
        p.push({
          points: points,
          label: label,
          color: color
        });
      });
      return p;
    });

    var formatTooltipText = function formatTooltipText() {
      if (currentIndex.value === null) return '';
      var _props$datasets$curre = props.datasets[currentIndex.value],
          value = _props$datasets$curre.value,
          label = _props$datasets$curre.label,
          color = _props$datasets$curre.color;
      var percentage = value / summValue.value * 100;

      var round = function round(v) {
        if (parseInt(v, 10) === v) return v;
        return Math.round(v * 100) / 100;
      };

      if (props.formatTooltip) {
        return props.formatTooltip({
          index: currentIndex.value,
          value: value,
          label: label,
          color: color,
          percentage: percentage
        });
      }

      var tooltipText = "" + (label ? label + ": " : '') + round(value) + " (" + round(percentage) + "%)";
      return "\n      <div class=\"pie-chart-tooltip-label\">\n        <span class=\"pie-chart-tooltip-color\" style=\"background-color: " + color + ";\"></span> " + tooltipText + "\n      </div>\n    ";
    };

    var setTooltip = function setTooltip() {
      var index = currentIndex.value;
      if (index === null && !f7Tooltip) return;
      if (!props.tooltip || !elRef.value || !f7) return;

      if (index !== null && !f7Tooltip) {
        f7Tooltip = f7.tooltip.create({
          trigger: 'manual',
          containerEl: elRef.value,
          targetEl: elRef.value.querySelector("path[data-index=\"" + index + "\"]"),
          text: formatTooltipText(),
          cssClass: 'pie-chart-tooltip'
        });
        f7Tooltip.show();
        return;
      }

      if (!f7Tooltip) return;

      if (index !== null) {
        f7Tooltip.setText(formatTooltipText());
        f7Tooltip.setTargetEl(elRef.value.querySelector("path[data-index=\"" + index + "\"]"));
        f7Tooltip.show();
      } else {
        f7Tooltip.hide();
      }
    };

    watch(function () {
      return currentIndex.value;
    }, function () {
      emit('select', currentIndex.value, props.datasets[currentIndex.value]);
      setTooltip();
    });
    onBeforeUnmount(function () {
      if (f7Tooltip && f7Tooltip.destroy) {
        f7Tooltip.destroy();
      }

      f7Tooltip = null;
    });
    var classes = computed(function () {
      return classNames('pie-chart');
    });
    return {
      elRef: elRef,
      currentIndex: currentIndex,
      classes: classes,
      paths: paths,
      classNames: classNames,
      setCurrentIndex: setCurrentIndex
    };
  }
};