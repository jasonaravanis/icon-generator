import { clsx, type ClassValue } from "clsx";
import { createElement, forwardRef } from "react";
import { sprinkles, type Sprinkles } from "@styles/styles.css";

type HTMLProperties<T = HTMLElement> = Omit<
  React.AllHTMLAttributes<T>,
  "as" | "className" | "color" | "height" | "width" | "cursor"
>;

type Props = HTMLProperties &
  Sprinkles & {
    as?: React.ElementType;
    className?: ClassValue;
  };

const Box = forwardRef(({ as = "div", className, ...props }: Props, ref) => {
  const atomProps: Record<string, unknown> = {};
  const nativeProps: Record<string, unknown> = {};

  for (const key in props) {
    if (sprinkles.properties.has(key as keyof Sprinkles)) {
      atomProps[key] = props[key as keyof typeof props];
    } else {
      nativeProps[key] = props[key as keyof typeof props];
    }
  }

  const atomicClasses = sprinkles(atomProps);

  return createElement(as, {
    className: clsx(atomicClasses, className),
    ref,
    ...nativeProps,
  });
});

Box.displayName = "Box";

export type BoxProps = Parameters<typeof Box>[0];

export { Box };
