
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const PhotoBrowser: DefineComponent<
  {
    
    params: {
      type: ObjectConstructor;
    },

    photos: {
      type: ArrayConstructor;
    },

    view: {
      type: PropType<StringConstructor | ObjectConstructor>;
    },

    renderNavbar: {
      type: FunctionConstructor;
    },

    renderToolbar: {
      type: FunctionConstructor;
    },

    renderCaption: {
      type: FunctionConstructor;
    },

    renderObject: {
      type: FunctionConstructor;
    },

    renderLazyPhoto: {
      type: FunctionConstructor;
    },

    renderPhoto: {
      type: FunctionConstructor;
    },

    renderPage: {
      type: FunctionConstructor;
    },

    renderPopup: {
      type: FunctionConstructor;
    },

    renderStandalone: {
      type: FunctionConstructor;
    },

    init: {
      type: BooleanConstructor;
      default: boolean;
    },

    exposition: {
      type: BooleanConstructor;
      default: boolean;
    },

    expositionHideCaptions: {
      type: BooleanConstructor;
      default: boolean;
    },

    type: {
      type: StringConstructor;
    },

    navbar: {
      type: BooleanConstructor;
      default: boolean;
    },

    toolbar: {
      type: BooleanConstructor;
      default: boolean;
    },

    theme: {
      type: StringConstructor;
    },

    captionsTheme: {
      type: StringConstructor;
    },

    iconsColor: {
      type: StringConstructor;
    },

    swipeToClose: {
      type: BooleanConstructor;
      default: boolean;
    },

    pageBackLinkText: {
      type: StringConstructor;
      default: undefined;
    },

    popupCloseLinkText: {
      type: StringConstructor;
      default: undefined;
    },

    navbarOfText: {
      type: StringConstructor;
      default: undefined;
    },

    navbarShowCount: {
      type: BooleanConstructor;
      default: undefined;
    },

    swiper: {
      type: ObjectConstructor;
    },

    url: {
      type: StringConstructor;
    },

    routableModals: {
      type: BooleanConstructor;
      default: boolean;
    },

    virtualSlides: {
      type: BooleanConstructor;
      default: boolean;
    }
  },
  () => JSX.Element,
  unknown,
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  ("photobrowser:open" | "photobrowser:close" | "photobrowser:opened" | "photobrowser:closed" | "photobrowser:swipetoclose")[],
  "photobrowser:open" | "photobrowser:close" | "photobrowser:opened" | "photobrowser:closed" | "photobrowser:swipetoclose"
>;

export default PhotoBrowser;
  