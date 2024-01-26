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
        responsiveStyle({
          mobile: { fontSize: "1.25rem", lineHeight: "1.5rem" },
          tablet: { fontSize: "1.25rem", lineHeight: "1.5rem" },
          desktop: { fontSize: "1.375rem", lineHeight: "1.625rem" },
        }),
        sprinkles({
          fontWeight: "regular",
        }),
      ]),
      button: style([
        sprinkles({
          fontWeight: "semibold",
          fontSize: { mobile: "size-c", tablet: "size-b", desktop: "size-b" },
        }),
      ]),
    },
  },
  defaultVariants: {
    color: "default",
    style: "body1",
  },
});

export type TextVariants = RecipeVariants<typeof text>;
