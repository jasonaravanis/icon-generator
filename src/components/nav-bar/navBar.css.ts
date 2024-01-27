import { sprinkles } from "@style-system/styles.css";

export const container = sprinkles({
  backgroundColor: "background",
  borderStyle: "none",
  borderBottomStyle: "solid",
  borderColor: "text/default",
  borderWidth: "0.5",
  color: "text/contrast",
  paddingX: { default: "space-c" },
  paddingY: { default: "space-c", desktop: "space-a" },
});
