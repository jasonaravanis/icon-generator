import { sprinkles } from "@style-system/styles.css";
import { responsiveStyle } from "@style-system/utils/responsiveStyle.css";
import { style } from "@vanilla-extract/css";
import { type RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const heading = recipe({
  base: style([
    sprinkles({
      fontFamily: "geist",
      fontWeight: "black",
      color: "transparent",
    }),
    style({
      backgroundClip: "text",
    }),
  ]),
  variants: {
    color: {
      default: sprinkles({
        background: "text/header/background",
      }),
    },
    style: {
      h1: style([
        responsiveStyle({
          mobile: {
            fontSize: "2.75rem",
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
      h2: style([
        responsiveStyle({
          mobile: {
            fontSize: "3.5rem",
            lineHeight: "3.625rem",
          },
          tablet: {
            fontSize: "4rem",
            lineHeight: "4.12rem",
          },
          desktop: {
            fontSize: "5rem",
            lineHeight: "5.375rem",
          },
        }),
      ]),
      h3: style([
        responsiveStyle({
          mobile: {
            fontSize: "3rem",
            lineHeight: "3.125rem",
          },
          tablet: {
            fontSize: "3.5rem",
            lineHeight: "3.625rem",
          },
          desktop: {
            fontSize: "4rem",
            lineHeight: "4.125rem",
          },
        }),
      ]),
      h4: style([
        responsiveStyle({
          mobile: {
            fontSize: "2rem",
            lineHeight: "2.125rem",
          },
          tablet: {
            fontSize: "3rem",
            lineHeight: "3.125rem",
          },
          desktop: {
            fontSize: "3rem",
            lineHeight: "3.125rem",
          },
        }),
      ]),
      h5: style([
        responsiveStyle({
          mobile: {
            fontSize: "1.5rem",
            lineHeight: "2rem",
          },
          tablet: {
            fontSize: "1.75rem",
            lineHeight: "2.25rem",
          },
          desktop: {
            fontSize: "2rem",
            lineHeight: "2.25rem",
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
