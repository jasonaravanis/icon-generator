import { sprinkles } from "@style-system/styles.css";
import { style } from "@vanilla-extract/css";
import { type RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const buttonRecipe = recipe({
  base: sprinkles({
    color: "white",
    paddingX: { mobile: "space-d", tablet: "space-d", desktop: "space-c" },
    paddingY: { mobile: "space-c", tablet: "space-c", desktop: "space-b" },
    radius: "2",
    borderWidth: "0",
    cursor: { disabled: "not-allowed", default: "pointer" },
    transition: "all",
    transitionDuration: "duration-200",
    transitionTimingFunction: "ease-in-out",
  }),
  variants: {
    type: {
      primary: style([
        sprinkles({
          background: {
            disabled: "primary700",
            default: "button/primary/background",
          },
          boxShadow: { default: "none", hover: "button/primary/boxshadow" },
        }),
      ]),
    },
  },
  defaultVariants: {
    type: "primary",
  },
});

export type ButtonVariants = RecipeVariants<typeof buttonRecipe>;
