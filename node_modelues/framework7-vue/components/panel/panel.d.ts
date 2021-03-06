
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const Panel: DefineComponent<
  {
    
    side: {
      type: StringConstructor;
    },

    effect: {
      type: StringConstructor;
    },

    cover: {
      type: BooleanConstructor;
    },

    reveal: {
      type: BooleanConstructor;
    },

    push: {
      type: BooleanConstructor;
    },

    left: {
      type: BooleanConstructor;
    },

    right: {
      type: BooleanConstructor;
    },

    opened: {
      type: BooleanConstructor;
    },

    resizable: {
      type: BooleanConstructor;
    },

    swipe: {
      type: BooleanConstructor;
    },

    swipeNoFollow: {
      type: BooleanConstructor;
    },

    swipeOnlyClose: {
      type: BooleanConstructor;
    },

    backdrop: {
      type: BooleanConstructor;
      default: boolean;
    },

    backdropEl: {
      type: StringConstructor;
      default: undefined;
    },

    containerEl: {
      type: StringConstructor;
      default: undefined;
    },

    visibleBreakpoint: {
      type: NumberConstructor;
      default: undefined;
    },

    collapsedBreakpoint: {
      type: NumberConstructor;
      default: undefined;
    },

    swipeActiveArea: {
      type: NumberConstructor;
      default: number;
    },

    swipeThreshold: {
      type: NumberConstructor;
      default: number;
    },

    color: {
      type: StringConstructor;
    },

    colorTheme: {
      type: StringConstructor;
    },

    textColor: {
      type: StringConstructor;
    },

    bgColor: {
      type: StringConstructor;
    },

    borderColor: {
      type: StringConstructor;
    },

    rippleColor: {
      type: StringConstructor;
    },

    themeDark: {
      type: BooleanConstructor;
    }
  },
  () => JSX.Element,
  unknown,
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  ("panel:open" | "panel:opened" | "panel:close" | "panel:closed" | "click" | "panel:backdropclick" | "panel:swipe" | "panel:swipeopen" | "panel:breakpoint" | "panel:collapsedbreakpoint" | "panel:resize" | "update:opened")[],
  "panel:open" | "panel:opened" | "panel:close" | "panel:closed" | "click" | "panel:backdropclick" | "panel:swipe" | "panel:swipeopen" | "panel:breakpoint" | "panel:collapsedbreakpoint" | "panel:resize" | "update:opened"
>;

export default Panel;
  