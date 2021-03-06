
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const LoginScreen: DefineComponent<
  {
    
    opened: {
      type: BooleanConstructor;
    },

    animate: {
      type: BooleanConstructor;
      default: undefined;
    },

    containerEl: {
      type: PropType<StringConstructor | ObjectConstructor>;
      default: undefined;
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
  ("loginscreen:open" | "loginscreen:opened" | "loginscreen:close" | "loginscreen:closed" | "update:opened")[],
  "loginscreen:open" | "loginscreen:opened" | "loginscreen:close" | "loginscreen:closed" | "update:opened"
>;

export default LoginScreen;
  