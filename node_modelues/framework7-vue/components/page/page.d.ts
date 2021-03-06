
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const Page: DefineComponent<
  {
    
    name: {
      type: StringConstructor;
    },

    stacked: {
      type: BooleanConstructor;
    },

    noNavbar: {
      type: BooleanConstructor;
    },

    noToolbar: {
      type: BooleanConstructor;
    },

    tabs: {
      type: BooleanConstructor;
    },

    noSwipeback: {
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

    withSubnavbar: {
      type: BooleanConstructor;
      default: undefined;
    },

    subnavbar: {
      type: BooleanConstructor;
      default: undefined;
    },

    withNavbarLarge: {
      type: BooleanConstructor;
      default: undefined;
    },

    navbarLarge: {
      type: BooleanConstructor;
      default: undefined;
    },

    pageContent: {
      type: BooleanConstructor;
      default: boolean;
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
  ("page:mounted" | "page:init" | "page:reinit" | "page:beforein" | "page:beforeout" | "page:afterout" | "page:afterin" | "page:beforeremove" | "page:beforeunmount" | "page:tabshow" | "page:tabhide" | "ptr:pullstart" | "ptr:pullmove" | "ptr:pullend" | "ptr:refresh" | "ptr:done" | "infinite")[],
  "page:mounted" | "page:init" | "page:reinit" | "page:beforein" | "page:beforeout" | "page:afterout" | "page:afterin" | "page:beforeremove" | "page:beforeunmount" | "page:tabshow" | "page:tabhide" | "ptr:pullstart" | "ptr:pullmove" | "ptr:pullend" | "ptr:refresh" | "ptr:done" | "infinite"
>;

export default Page;
  