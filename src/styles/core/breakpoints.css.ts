import { extend, mapValues } from 'lodash';

export const breakpoints = {
  xs: [0, 575],
  s: [576, 767],
  m: [768, 991],
  l: [992, 1199],
  xl: [1200, Infinity],
} as const;

export type Breakpoint = keyof typeof breakpoints;
export type BreakpointValue = (typeof breakpoints)[Breakpoint];

export const getQuery = (breakpoint: BreakpointValue) =>
  `screen and (min-width: ${breakpoint[0]}px) ${
    breakpoint[1] === Infinity ? '' : `and (max-width: ${breakpoint[1]}px)`
  }`;

export type MediaQuery = string;

export const breakpointQueries = extend(
  { none: {} },
  mapValues(breakpoints, (breakpoint: BreakpointValue) => ({
    '@media': getQuery(breakpoint),
  }))
);
