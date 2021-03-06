
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const Chip: DefineComponent<
  {
    
    media: {
      type: StringConstructor;
    },

    text: {
      type: PropType<StringConstructor | NumberConstructor>;
    },

    deleteable: {
      type: BooleanConstructor;
    },

    mediaBgColor: {
      type: StringConstructor;
    },

    mediaTextColor: {
      type: StringConstructor;
    },

    outline: {
      type: BooleanConstructor;
    },

    tooltip: {
      type: StringConstructor;
    },

    tooltipTrigger: {
      type: StringConstructor;
    },

    icon: {
      type: StringConstructor;
    },

    iconMaterial: {
      type: StringConstructor;
    },

    iconF7: {
      type: StringConstructor;
    },

    iconIos: {
      type: StringConstructor;
    },

    iconMd: {
      type: StringConstructor;
    },

    iconAurora: {
      type: StringConstructor;
    },

    iconColor: {
      type: StringConstructor;
    },

    iconSize: {
      type: PropType<StringConstructor | NumberConstructor>;
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
  ("delete")[],
  "delete"
>;

export default Chip;
  