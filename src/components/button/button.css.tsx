import { sprinkles } from "@style-system/styles.css";
import { type RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const buttonRecipe = recipe({
  base: sprinkles({
    color: "text/contrast",
    paddingX: { mobile: "space-c", tablet: "space-b", desktop: "space-b" },
    paddingY: { mobile: "space-c", tablet: "space-b", desktop: "space-a" },
    radius: "2",
    borderWidth: "0",
    borderStyle: "solid",
    cursor: { disabled: "not-allowed", default: "pointer" },
    transition: "all",
    transitionDuration: "duration-200",
    transitionTimingFunction: "ease-in-out",
  }),
  variants: {
    type: {
      primary: sprinkles({
        background: {
          disabled: "primary700",
          default: "button/primary/background",
        },
        boxShadow: { default: "none", hover: "button/primary/boxshadow" },
      }),
      secondary: sprinkles({
        borderWidth: "1",
        borderColor: "text/contrast",
        boxShadow: { default: "none", hover: "button/secondary/boxshadow" },
      }),
    },
  },
  defaultVariants: {
    type: "primary",
  },
});

export type ButtonVariants = RecipeVariants<typeof buttonRecipe>;
