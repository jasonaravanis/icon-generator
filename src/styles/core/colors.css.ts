export const baseColors = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",

  primary50: "#fafaf9",
  primary100: "#f5f5f4",
  primary200: "#e7e5e4",
  primary300: "#d6d3d1",
  primary400: "#a8a29e",
  primary500: "#78716c",
  primary600: "#57534e",
  primary700: "#44403c",
  primary800: "#292524",
  primary900: "#1c1917",
  primary950: "#0c0a09",

  red: "red",
  blue: "blue",
  green: "green",
  purple: "purple",
} as const;

export const contract = {
  "text/contrast": null,
  "text/default": null,
};

type Contract = {
  [key in keyof typeof contract]: (typeof baseColors)[keyof typeof baseColors];
};

export const midnight: Contract = {
  "text/contrast": baseColors.red,
  "text/default": baseColors.blue,
};

export const dawn: Contract = {
  "text/contrast": baseColors.green,
  "text/default": baseColors.purple,
};
