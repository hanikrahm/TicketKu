
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const Message: DefineComponent<
  {
    
    text: {
      type: StringConstructor;
    },

    name: {
      type: StringConstructor;
    },

    avatar: {
      type: StringConstructor;
    },

    image: {
      type: StringConstructor;
    },

    header: {
      type: StringConstructor;
    },

    footer: {
      type: StringConstructor;
    },

    textHeader: {
      type: StringConstructor;
    },

    textFooter: {
      type: StringConstructor;
    },

    first: {
      type: BooleanConstructor;
    },

    last: {
      type: BooleanConstructor;
    },

    tail: {
      type: BooleanConstructor;
    },

    sameName: {
      type: BooleanConstructor;
    },

    sameHeader: {
      type: BooleanConstructor;
    },

    sameFooter: {
      type: BooleanConstructor;
    },

    sameAvatar: {
      type: BooleanConstructor;
    },

    typing: {
      type: BooleanConstructor;
    },

    type: {
      type: StringConstructor;
      default: string;
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
  ("click" | "click:name" | "click:text" | "click:avatar" | "click:header" | "click:footer" | "click:bubble")[],
  "click" | "click:name" | "click:text" | "click:avatar" | "click:header" | "click:footer" | "click:bubble"
>;

export default Message;
  