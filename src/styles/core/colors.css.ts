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

  secondary50: "##eef2ff",
  secondary100: "#e0e7ff",
  secondary200: "#c7d2fe",
  secondary300: "#a5b4fc",
  secondary400: "#818cf8",
  secondary500: "#6366f1",
  secondary600: "#4f46e5",
  secondary700: "#4338ca",
  secondary800: "#3730a3",
  secondary900: "#312e81",
  secondary950: "#1e1b4b",

  red: "red",
  blue: "blue",
  green: "green",
  purple: "purple",
} as const;

export const contract = {
  "text/contrast": null,
  "text/default": null,
  "text/header/gradient": null,
  "text/error": null,
  "button/background/gradient": null,
};

type Contract = {
  [key in keyof typeof contract]: string;
};

export const midnight: Contract = {
  "text/contrast": baseColors.primary50,
  "text/default": baseColors.primary500,
  "text/header/gradient": `linear-gradient(180deg, ${baseColors.primary50} 4%, ${baseColors.primary400} 200%)`,
  "text/error": baseColors.red,
  "button/background/gradient": `linear-gradient(180deg, ${baseColors.secondary600}, ${baseColors.secondary700})`,
};

export const dawn: Contract = {
  "text/contrast": baseColors.green,
  "text/default": baseColors.green,
  "text/header/gradient": baseColors.purple,
  "text/error": baseColors.red,
  "button/background/gradient": baseColors.green,
};
