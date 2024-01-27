import { breakpoints, getQuery } from "@styles/core/breakpoints.css";

import type { Breakpoint, Result } from "./types";

// Allows you to pass in an object with keys that match the breakpoints defined in the breakpoints.css file.
// The values of the object are the styles that will be applied at that breakpoint.
// Accepts an optional Type parameter that allows you to specify the shape of the styles object.
export const responsiveStyle = <T>(
  styles: Partial<Record<Breakpoint, T>>
): Result<T> => ({
  "@media": Object.entries<T>(styles).reduce<Record<string, T>>(
    (acc, [key, value]) => {
      acc[getQuery(breakpoints[key as Breakpoint])] = value;

      return acc;
    },
    {} as Record<string, T>
  ),
});
