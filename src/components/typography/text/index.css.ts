import { sprinkles } from "@style-system/atoms/sprinkles.css";
import { responsiveStyle } from "@style-system/utils/responsiveStyle.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import type { RecipeVariants } from "@vanilla-extract/recipes";

export const text = recipe({
  base: style([
    sprinkles({
      display: "inline",
      fontFamily: "geist",
      transition: "all",
      transitionDuration: "duration-200",
      transitionTimingFunction: "ease-in-out",
    }),
  ]),
  variants: {
    color: {
      none: sprinkles({
        color: "current",
      }),
      default: sprinkles({
        color: "text/default",
      }),
      contrast: sprinkles({
        color: "text/contrast",
      }),
      error: sprinkles({
        color: "text/error",
      }),
    },
    style: {
      none: sprinkles({}),
      body1: style([
        sprinkles({
          fontWeight: "regular",
        }),
        style({
          fontSize: "1.25rem",
          lineHeight: "1.5rem",
        }),
      ]),
      button: sprinkles({
        fontWeight: "semibold",
        // fontSize: { mobile: "size-c", tablet: "size-b", desktop: "size-b" },
      }),
      link: style([
        sprinkles({
          color: { hover: "text/highlight" },
        }),
        // style({
        //   textDecorationLine: "none",
        // }),
      ]),
    },
  },
  defaultVariants: {
    color: "default",
    style: "body1",
  },
});

export type TextVariants = RecipeVariants<typeof text>;
