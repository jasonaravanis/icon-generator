import type {
  MediaQuery,
  breakpoints,
} from "@style-system/core/breakpoints.css";

export type Breakpoint = keyof typeof breakpoints;

export type Result<T> = {
  "@media": Record<MediaQuery, T>;
};
