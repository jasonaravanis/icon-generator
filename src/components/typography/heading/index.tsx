import { Box, type BoxProps } from "@components/box";
import clsx from "clsx";
import { type HeadingVariants, heading } from "./heading.css";

export type HeadingProps = BoxProps & HeadingVariants;

export const Heading = ({
  as,
  style,
  children,
  className,
  ...props
}: HeadingProps) => {
  return (
    <Box
      as={as ?? style}
      className={clsx([heading({ style }), className])}
      {...props}
    >
      {children}
    </Box>
  );
};
