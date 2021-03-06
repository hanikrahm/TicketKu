import { renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createBlock as _createBlock, resolveDynamicComponent as _resolveDynamicComponent, toDisplayString as _toDisplayString, createCommentVNode as _createCommentVNode, createVNode as _createVNode, createTextVNode as _createTextVNode, withCtx as _withCtx, renderSlot as _renderSlot } from "vue";
var _hoisted_1 = {
  key: 0,
  class: "area-chart-axis"
};
var _hoisted_2 = {
  key: 0
};
var _hoisted_3 = {
  key: 1,
  class: "area-chart-legend"
};

function render(_ctx, _cache) {
  return _openBlock(), _createBlock("div", {
    ref: "elRef",
    class: _ctx.classes
  }, [(_openBlock(), _createBlock("svg", {
    ref: "svgElRef",
    xmlns: "http://www.w3.org/2000/svg",
    width: _ctx.width,
    height: _ctx.height,
    viewBox: "0 0 " + _ctx.width + " " + _ctx.height,
    preserveAspectRatio: "none"
  }, [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.chartData, function (data, index) {
    return _openBlock(), _createBlock(_resolveDynamicComponent(_ctx.ChartTag), {
      key: _ctx.ChartTag + "-" + index,
      fill: _ctx.lineChart ? undefined : data.color,
      stroke: _ctx.lineChart ? data.color : undefined,
      "fill-rule": "evenodd",
      points: _ctx.lineChart ? undefined : data.points,
      d: _ctx.lineChart ? data.points : undefined
    }, null, 8, ["fill", "stroke", "points", "d"]);
  }), 128)), (_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.verticalLines, function (line, index) {
    return _openBlock(), _createBlock("line", {
      key: "line-" + index,
      "data-index": index,
      fill: "#000",
      x1: line,
      y1: 0,
      x2: line,
      y2: _ctx.height,
      class: _ctx.classNames({
        'area-chart-current-line': _ctx.currentIndex === index
      })
    }, null, 10, ["data-index", "x1", "x2", "y2"]);
  }), 128))], 8, ["width", "height", "viewBox"])), _ctx.axis ? (_openBlock(), _createBlock("div", _hoisted_1, [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.axisLabels, function (label, index) {
    return _openBlock(), _createBlock("span", {
      key: index
    }, [_ctx.visibleLegends.includes(label) ? (_openBlock(), _createBlock("span", _hoisted_2, _toDisplayString(_ctx.formatAxisLabelMethod(label)), 1)) : _createCommentVNode("", true)]);
  }), 128))])) : _createCommentVNode("", true), _ctx.legend ? (_openBlock(), _createBlock("div", _hoisted_3, [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.datasets, function (dataset, index) {
    return _openBlock(), _createBlock(_resolveDynamicComponent(_ctx.LegendItemTag), {
      key: index,
      class: _ctx.classNames('area-chart-legend-item', {
        'area-chart-legend-item-hidden': _ctx.hiddenDatasets.includes(index),
        'area-chart-legend-button': _ctx.toggleDatasets
      }),
      type: _ctx.toggleDatasets ? 'button' : undefined,
      onClick: function onClick($event) {
        return _ctx.toggleDataset(index);
      }
    }, {
      default: _withCtx(function () {
        return [_createVNode("span", {
          style: {
            backgroundColor: dataset.color
          }
        }, null, 4), _createTextVNode(" " + _toDisplayString(_ctx.formatLegendLabelMethod(dataset.label)), 1)];
      }),
      _: 2
    }, 1032, ["class", "type", "onClick"]);
  }), 128))])) : _createCommentVNode("", true), _renderSlot(_ctx.$slots, "default")], 2);
}

import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { classNames } from '../shared/utils';
import { f7 } from '../shared/f7';
export default {
  name: 'f7-area-chart',
  render: render,
  props: {
    lineChart: Boolean,
    datasets: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    axis: Boolean,
    axisLabels: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    tooltip: Boolean,
    legend: Boolean,
    toggleDatasets: Boolean,
    width: {
      type: Number,
      default: 640
    },
    height: {
      type: Number,
      default: 320
    },
    maxAxisLabels: {
      type: Number,
      default: 8
    },
    formatAxisLabel: Function,
    formatLegendLabel: Function,
    formatTooltip: Function,
    formatTooltipAxisLabel: Function,
    formatTooltipTotal: Function,
    formatTooltipDataset: Function
  },
  emits: ['select'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var f7Tooltip = null;
    var currentIndex = ref(null);
    var hiddenDatasets = ref([]);
    var elRef = ref(null);
    var svgElRef = ref(null);
    var linesOffsets = ref(null);
    var visibleLegends = computed(function () {
      if (!props.maxAxisLabels || props.axisLabels.length <= props.maxAxisLabels) return props.axisLabels;
      var skipStep = Math.ceil(props.axisLabels.length / props.maxAxisLabels);
      var filtered = props.axisLabels.filter(function (label, index) {
        return index % skipStep === 0;
      });
      return filtered;
    });
    var summValues = computed(function () {
      var summ = [];
      props.datasets.filter(function (dataset, index) {
        return !hiddenDatasets.value.includes(index);
      }).forEach(function (_ref2) {
        var values = _ref2.values;
        values.forEach(function (value, valueIndex) {
          if (!summ[valueIndex]) summ[valueIndex] = 0;
          summ[valueIndex] += value;
        });
      });
      return summ;
    });
    var chartData = computed(function () {
      var datasets = props.datasets,
          lineChart = props.lineChart,
          width = props.width,
          height = props.height;
      var data = [];

      if (!datasets.length) {
        return data;
      }

      var lastValues = datasets[0].values.map(function () {
        return 0;
      });
      var maxValue = 0;

      if (lineChart) {
        datasets.forEach(function (_ref3) {
          var values = _ref3.values;
          var datasetMaxValue = Math.max.apply(Math, values);
          if (datasetMaxValue > maxValue) maxValue = datasetMaxValue;
        });
      } else {
        maxValue = Math.max.apply(Math, summValues.value);
      }

      datasets.filter(function (dataset, index) {
        return !hiddenDatasets.value.includes(index);
      }).forEach(function (_ref4) {
        var label = _ref4.label,
            values = _ref4.values,
            color = _ref4.color;
        var points = values.map(function (originalValue, valueIndex) {
          lastValues[valueIndex] += originalValue;
          var value = lineChart ? originalValue : lastValues[valueIndex];
          var x = valueIndex / (values.length - 1) * width;
          var y = height - value / maxValue * height;

          if (lineChart) {
            return "" + (valueIndex === 0 ? 'M' : 'L') + x + "," + y;
          }

          return x + " " + y;
        });

        if (!lineChart) {
          points.push(width + " " + height + " 0 " + height);
        }

        data.push({
          label: label,
          points: points.join(' '),
          color: color
        });
      });
      return data.reverse();
    });
    var verticalLines = computed(function () {
      var lines = [];

      if (!props.datasets.length) {
        return lines;
      }

      var values = props.datasets[0].values;
      values.forEach(function (value, valueIndex) {
        var x = valueIndex / (values.length - 1) * props.width;
        lines.push(x);
      });
      return lines;
    });

    var toggleDataset = function toggleDataset(index) {
      if (!props.toggleDatasets) return;

      if (hiddenDatasets.value.includes(index)) {
        hiddenDatasets.value.splice(hiddenDatasets.value.indexOf(index), 1);
      } else {
        hiddenDatasets.value.push(index);
      }

      hiddenDatasets.value = [].concat(hiddenDatasets.value);
    };

    var formatAxisLabelMethod = function formatAxisLabelMethod(label) {
      if (props.formatAxisLabel) return props.formatAxisLabel(label);
      return label;
    };

    var formatLegendLabelMethod = function formatLegendLabelMethod(label) {
      if (props.formatLegendLabel) return props.formatLegendLabel(label);
      return label;
    };

    var calcLinesOffsets = function calcLinesOffsets() {
      var lines = svgElRef.value.querySelectorAll('line');
      linesOffsets.value = [];

      for (var i = 0; i < lines.length; i += 1) {
        linesOffsets.value.push(lines[i].getBoundingClientRect().left);
      }
    };

    var formatTooltip = function formatTooltip() {
      var index = currentIndex.value;
      if (index === null) return '';
      var total = 0;
      var currentValues = props.datasets.filter(function (dataset, i) {
        return !hiddenDatasets.value.includes(i);
      }).map(function (dataset) {
        return {
          color: dataset.color,
          label: dataset.label,
          value: dataset.values[index]
        };
      });
      currentValues.forEach(function (dataset) {
        total += dataset.value;
      });

      if (props.formatTooltip) {
        return props.formatTooltip({
          index: index,
          total: total,
          datasets: currentValues
        });
      }

      var labelText = props.formatTooltipAxisLabel ? props.formatTooltipAxisLabel(props.axisLabels[index]) : formatAxisLabelMethod(props.axisLabels[index]);
      if (!labelText) labelText = '';
      var totalText = props.formatTooltipTotal ? props.formatTooltipTotal(total) : total; // prettier-ignore

      var datasetsText = currentValues.length > 0 ? "\n      <ul class=\"area-chart-tooltip-list\">\n        " + currentValues.map(function (_ref5) {
        var label = _ref5.label,
            color = _ref5.color,
            value = _ref5.value;
        var valueText = props.formatTooltipDataset ? props.formatTooltipDataset(label, value, color) : label + ": " + value;
        return "\n              <li><span style=\"background-color: " + color + ";\"></span>" + valueText + "</li>\n            ";
      }).join('') + "\n      </ul>" : ''; // prettier-ignore

      return "\n      <div class=\"area-chart-tooltip-label\">" + labelText + "</div>\n      <div class=\"area-chart-tooltip-total\">" + totalText + "</div>\n      " + datasetsText + "\n    ";
    };

    var setTooltip = function setTooltip() {
      var tooltip = props.tooltip,
          datasets = props.datasets;
      var index = currentIndex.value;
      if (!tooltip) return;
      var hasVisibleDataSets = datasets.filter(function (dataset, i) {
        return !hiddenDatasets.value.includes(i);
      }).length > 0;

      if (!hasVisibleDataSets) {
        if (f7Tooltip && f7Tooltip.hide) f7Tooltip.hide();
        return;
      }

      if (index !== null && !f7Tooltip) {
        f7Tooltip = f7.tooltip.create({
          trigger: 'manual',
          containerEl: elRef.value,
          targetEl: svgElRef.value.querySelector("line[data-index=\"" + index + "\"]"),
          text: formatTooltip(),
          cssClass: 'area-chart-tooltip'
        });

        if (f7Tooltip && f7Tooltip.show) {
          f7Tooltip.show();
        }

        return;
      }

      if (!f7Tooltip || !f7Tooltip.hide || !f7Tooltip.show) {
        return;
      }

      if (index !== null) {
        f7Tooltip.setText(formatTooltip());
        f7Tooltip.setTargetEl(svgElRef.value.querySelector("line[data-index=\"" + index + "\"]"));
        f7Tooltip.show();
      } else {
        f7Tooltip.hide();
      }
    };

    var onMouseEnter = function onMouseEnter() {
      calcLinesOffsets();
    };

    var onMouseMove = function onMouseMove(e) {
      if (!linesOffsets.value) {
        calcLinesOffsets();
      }

      var currentLeft = e.pageX;
      if (typeof currentLeft === 'undefined') currentLeft = 0;
      var distances = linesOffsets.value.map(function (left) {
        return Math.abs(currentLeft - left);
      });
      var minDistance = Math.min.apply(Math, distances);
      var closestIndex = distances.indexOf(minDistance);
      currentIndex.value = closestIndex;
    };

    var onMouseLeave = function onMouseLeave() {
      currentIndex.value = null;
    };

    watch(function () {
      return currentIndex.value;
    }, function () {
      emit('select', currentIndex.value);
      setTooltip();
    });
    onMounted(function () {
      if (!svgElRef.value) return;
      svgElRef.value.addEventListener('mouseenter', onMouseEnter);
      svgElRef.value.addEventListener('mousemove', onMouseMove);
      svgElRef.value.addEventListener('mouseleave', onMouseLeave);
    });
    onBeforeUnmount(function () {
      if (f7Tooltip && f7Tooltip.destroy) {
        f7Tooltip.destroy();
      }

      f7Tooltip = null;
      if (!svgElRef.value) return;
      svgElRef.value.removeEventListener('mouseenter', onMouseEnter);
      svgElRef.value.removeEventListener('mousemove', onMouseMove);
      svgElRef.value.removeEventListener('mouseleave', onMouseLeave);
    });
    var classes = computed(function () {
      return classNames('area-chart');
    });
    var LegendItemTag = computed(function () {
      return props.toggleDatasets ? 'button' : 'span';
    });
    var ChartTag = computed(function () {
      return props.lineChart ? 'path' : 'polygon';
    });
    return {
      currentIndex: currentIndex,
      hiddenDatasets: hiddenDatasets,
      visibleLegends: visibleLegends,
      chartData: chartData,
      verticalLines: verticalLines,
      elRef: elRef,
      svgElRef: svgElRef,
      classes: classes,
      toggleDataset: toggleDataset,
      formatAxisLabelMethod: formatAxisLabelMethod,
      formatLegendLabelMethod: formatLegendLabelMethod,
      LegendItemTag: LegendItemTag,
      ChartTag: ChartTag,
      classNames: classNames
    };
  }
};