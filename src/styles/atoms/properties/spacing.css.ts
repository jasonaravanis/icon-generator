import { mapValues } from "lodash";

const SIZES = {
  "space-a": 0.5,
  "space-b": 0.75,
  "space-c": 1,
  "space-d": 2,
  "space-e": 3,
  "space-f": 4,
};
export type Unit = "px" | "rem" | "em";
export type Size = keyof typeof SIZES;

const generateSpacing = (
  base: number,
  unit: Unit = "px"
): { [key in Size]: string } => {
  return mapValues(SIZES, (val) => `${val * base}${unit}`);
};

// relative spacing
export const spacingRelXs = generateSpacing(0.75, "rem");
export const spacingRelS = generateSpacing(0.75, "rem");
export const spacingRel = generateSpacing(1, "rem");
export const spacingRelLg = generateSpacing(1.5, "rem");
export const spacingRelXL = generateSpacing(2, "rem");

// constant spacing
export const spacingConstXs = generateSpacing(12, "px");
export const spacingConstS = generateSpacing(12, "px");
export const spacingConst = generateSpacing(16, "px");
export const spacingConstL = generateSpacing(24, "px");
export const spacingConstXL = generateSpacing(32, "px");
