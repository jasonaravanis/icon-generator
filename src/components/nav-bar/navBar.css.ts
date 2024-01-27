import { sprinkles } from "@style-system/styles.css";
import { style } from "@vanilla-extract/css";

export const container = style([
  sprinkles({
    backgroundColor: "background",
    borderStyle: "none",
    borderBottomStyle: "solid",
    borderColor: "text/default",
    borderWidth: "0.5",
    color: "text/contrast",
    paddingX: { default: "space-c" },
    paddingY: { default: "space-c", desktop: "space-a" },
  }),
  style({
    width: "100%",
  }),
]);

export const navBar = style([
  style({
    width: "100%",
  }),
]);
