import { Box, type BoxProps } from "@components/box";
import clsx from "clsx";
import * as React from "react";
import { type TextVariants, text } from "./index.css";

export type TextProps = BoxProps & TextVariants;

const Text = React.forwardRef(
  (
    { as = "div", children, className, color, style, ...props }: TextProps,
    ref: React.Ref<HTMLElement>
  ) => {
    return (
      <Box
        as={as}
        className={clsx([text({ color, style }), className])}
        ref={ref}
        style={{ minHeight: "1em" }}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

Text.displayName = "Text";

export { Text };
