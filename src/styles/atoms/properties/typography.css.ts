const SIZES = {
  "size-a": 0.75,
  "size-b": 0.875,
  "size-c": 1,
  "size-d": 1.125,
  "size-e": 1.5,
  "size-f": 1.875,
  "size-g": 2.375,
  "size-h": 2.625,
  "size-i": 3.75,
};
export type FontSize = keyof typeof SIZES;
export type FontSizeMap = {
  [key in FontSize]: string;
};

export const fontSizeXs: FontSizeMap = {
  "size-a": "0.75rem",
  "size-b": "0.875rem",
  "size-c": "1rem",
  "size-d": "1.25rem",
  "size-e": "1.5rem",
  "size-f": "1.875rem",
  "size-g": "2.375rem",
  "size-h": "2.625rem",
  "size-i": "3rem",
};
export const fontSizeS: FontSizeMap = fontSizeXs;
export const fontSize: FontSizeMap = {
  "size-a": "0.875rem",
  "size-b": "1rem",
  "size-c": "1.25rem",
  "size-d": "1.5rem",
  "size-e": "1.875rem",
  "size-f": "2.375rem",
  "size-g": "2.625rem",
  "size-h": "3rem",
  "size-i": "3.25rem",
};
export const fontSizeL: FontSizeMap = {
  "size-a": "1rem",
  "size-b": "1.25rem",
  "size-c": "1.5rem",
  "size-d": "1.875rem",
  "size-e": "2.375rem",
  "size-f": "2.625rem",
  "size-g": "3rem",
  "size-h": "3.25rem",
  "size-i": "3.75rem",
};
export const fontSizeXL: FontSizeMap = fontSizeL;

export const fontFamily = {
  sans: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  serif:
    'ui-serif, system-ui-serif, Times New Roman, Georgia, Cambria, "Times New Roman", Times, serif',
  mono: "Courier New, Helvetica Mono, monospace",
  geist: "var(--font-geist)",
};

export const fontWeight = {
  thin: "300",
  regular: "400",
  semibold: "600",
  bold: "800",
  black: "1000",
};

export const lineHeight = {
  none: "1.01",
  tight: "1.05",
  snug: "1.1",
  normal: "1.375",
  relaxed: "1.5",
  loose: "2",
} as const;
