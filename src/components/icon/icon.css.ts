import { sprinkles } from "@style-system/atoms/sprinkles.css";
import { style } from "@vanilla-extract/css";

export const icon = style([
  sprinkles({
    color: "current",
    fontSize: "size-a",
  }),
  {
    fontFamily: "Material Symbols Rounded",
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: "1",
    letterSpacing: "normal",
    textTransform: "none",
    display: "inline-block",
    whiteSpace: "nowrap",
    wordWrap: "normal",
    direction: "ltr",
    WebkitFontFeatureSettings: '"liga"',
    WebkitFontSmoothing: "antialiased",
  },
]);
