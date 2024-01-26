import { sprinkles } from "@style-system/styles.css";
import { type RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const buttonRecipe = recipe({
  base: sprinkles({
    color: "white",
    paddingX: { mobile: "space-e", tablet: "space-d", desktop: "space-c" },
    paddingY: { mobile: "space-d", tablet: "space-c", desktop: "space-b" },
    radius: "2",
    borderWidth: "0",
  }),
  variants: {
    type: {
      primary: sprinkles({
        background: "button/background/gradient",
      }),
    },
  },
  defaultVariants: {
    type: "primary",
  },
});

export type ButtonVariants = RecipeVariants<typeof buttonRecipe>;
