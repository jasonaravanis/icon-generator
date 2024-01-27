import { sprinkles } from "@style-system/atoms/sprinkles.css";
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
          fontSize: "size-c",
        }),
      ]),
      button: sprinkles({
        fontWeight: "semibold",
      }),
      link: style([
        sprinkles({
          color: { hover: "text/highlight" },
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
