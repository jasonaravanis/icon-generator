import { sprinkles } from "@style-system/styles.css";
import { responsiveStyle } from "@style-system/utils/responsiveStyle.css";
import { style } from "@vanilla-extract/css";
import { type RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const heading = recipe({
  base: style([
    sprinkles({
      fontFamily: "geist",
      color: "transparent",
    }),
    style({
      backgroundClip: "text",
    }),
  ]),
  variants: {
    color: {
      default: sprinkles({
        background: "text/gradient",
      }),
    },
    style: {
      h1: style([
        responsiveStyle({
          mobile: {
            fontSize: "4rem",
            lineHeight: "4.125rem",
          },
          tablet: {
            fontSize: "5rem",
            lineHeight: "5.125rem",
          },
          desktop: {
            fontSize: "5.5rem",
            lineHeight: "5.625rem",
          },
        }),
      ]),
    },
  },
  defaultVariants: {
    color: "default",
  },
});

export type HeadingVariants = RecipeVariants<typeof heading>;
