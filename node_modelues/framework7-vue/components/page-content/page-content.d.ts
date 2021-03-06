
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const PageContent: DefineComponent<
  {
    
    tab: {
      type: BooleanConstructor;
    },

    tabActive: {
      type: BooleanConstructor;
    },

    ptr: {
      type: BooleanConstructor;
    },

    ptrDistance: {
      type: NumberConstructor;
    },

    ptrBottom: {
      type: BooleanConstructor;
    },

    ptrMousewheel: {
      type: BooleanConstructor;
    },

    infinite: {
      type: BooleanConstructor;
    },

    infiniteTop: {
      type: BooleanConstructor;
    },

    infiniteDistance: {
      type: NumberConstructor;
    },

    hideBarsOnScroll: {
      type: BooleanConstructor;
    },

    hideNavbarOnScroll: {
      type: BooleanConstructor;
    },

    hideToolbarOnScroll: {
      type: BooleanConstructor;
    },

    messagesContent: {
      type: BooleanConstructor;
    },

    loginScreen: {
      type: BooleanConstructor;
    },

    ptrPreloader: {
      type: BooleanConstructor;
      default: boolean;
    },

    infinitePreloader: {
      type: BooleanConstructor;
      default: boolean;
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
  ("ptr:pullstart" | "ptr:pullmove" | "ptr:pullend" | "ptr:refresh" | "ptr:done" | "infinite" | "ptrPullStart" | "ptrPullMove" | "ptrPullEnd" | "ptrRefresh" | "ptrDone" | "tab:hide" | "tab:show")[],
  "ptr:pullstart" | "ptr:pullmove" | "ptr:pullend" | "ptr:refresh" | "ptr:done" | "infinite" | "ptrPullStart" | "ptrPullMove" | "ptrPullEnd" | "ptrRefresh" | "ptrDone" | "tab:hide" | "tab:show"
>;

export default PageContent;
  