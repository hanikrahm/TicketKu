
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const Stepper: DefineComponent<
  {
    
    formatValue: {
      type: FunctionConstructor;
    },

    name: {
      type: StringConstructor;
    },

    inputId: {
      type: StringConstructor;
    },

    disabled: {
      type: BooleanConstructor;
    },

    buttonsOnly: {
      type: BooleanConstructor;
    },

    round: {
      type: BooleanConstructor;
    },

    roundMd: {
      type: BooleanConstructor;
    },

    roundIos: {
      type: BooleanConstructor;
    },

    roundAurora: {
      type: BooleanConstructor;
    },

    fill: {
      type: BooleanConstructor;
    },

    fillMd: {
      type: BooleanConstructor;
    },

    fillIos: {
      type: BooleanConstructor;
    },

    fillAurora: {
      type: BooleanConstructor;
    },

    large: {
      type: BooleanConstructor;
    },

    largeMd: {
      type: BooleanConstructor;
    },

    largeIos: {
      type: BooleanConstructor;
    },

    largeAurora: {
      type: BooleanConstructor;
    },

    small: {
      type: BooleanConstructor;
    },

    smallMd: {
      type: BooleanConstructor;
    },

    smallIos: {
      type: BooleanConstructor;
    },

    smallAurora: {
      type: BooleanConstructor;
    },

    raised: {
      type: BooleanConstructor;
    },

    raisedMd: {
      type: BooleanConstructor;
    },

    raisedIos: {
      type: BooleanConstructor;
    },

    raisedAurora: {
      type: BooleanConstructor;
    },

    init: {
      type: BooleanConstructor;
      default: boolean;
    },

    value: {
      type: NumberConstructor;
      default: number;
    },

    min: {
      type: NumberConstructor;
      default: number;
    },

    max: {
      type: NumberConstructor;
      default: number;
    },

    step: {
      type: NumberConstructor;
      default: number;
    },

    input: {
      type: BooleanConstructor;
      default: boolean;
    },

    inputType: {
      type: StringConstructor;
      default: string;
    },

    inputReadonly: {
      type: BooleanConstructor;
      default: boolean;
    },

    autorepeat: {
      type: BooleanConstructor;
      default: boolean;
    },

    autorepeatDynamic: {
      type: BooleanConstructor;
      default: boolean;
    },

    wraps: {
      type: BooleanConstructor;
      default: boolean;
    },

    manualInputMode: {
      type: BooleanConstructor;
      default: boolean;
    },

    decimalPoint: {
      type: NumberConstructor;
      default: number;
    },

    buttonsEndInputMode: {
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
  ("input" | "change" | "stepper:minusclick" | "stepper:plusclick" | "stepper:change" | "update:value")[],
  "input" | "change" | "stepper:minusclick" | "stepper:plusclick" | "stepper:change" | "update:value"
>;

export default Stepper;
  