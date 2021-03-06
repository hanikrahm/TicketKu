
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const Messages: DefineComponent<
  {
    
    firstMessageRule: {
      type: FunctionConstructor;
    },

    lastMessageRule: {
      type: FunctionConstructor;
    },

    tailMessageRule: {
      type: FunctionConstructor;
    },

    sameNameMessageRule: {
      type: FunctionConstructor;
    },

    sameHeaderMessageRule: {
      type: FunctionConstructor;
    },

    sameFooterMessageRule: {
      type: FunctionConstructor;
    },

    sameAvatarMessageRule: {
      type: FunctionConstructor;
    },

    customClassMessageRule: {
      type: FunctionConstructor;
    },

    renderMessage: {
      type: FunctionConstructor;
    },

    autoLayout: {
      type: BooleanConstructor;
      default: boolean;
    },

    messages: {
      type: ArrayConstructor;
    },

    newMessagesFirst: {
      type: BooleanConstructor;
      default: boolean;
    },

    scrollMessages: {
      type: BooleanConstructor;
      default: boolean;
    },

    scrollMessagesOnEdge: {
      type: BooleanConstructor;
      default: boolean;
    },

    typing: {
      type: BooleanConstructor;
      default: boolean;
    },

    init: {
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
  
>;

export default Messages;
  