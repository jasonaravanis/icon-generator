import { breakpointQueries } from "@styles/core/breakpoints.css";
import * as Flex from "@styles/core/flex.css";
import * as Grid from "@styles/core/grid.css";
import { vars, colors } from "@styles/theme.css";
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

const responsiveProperties = defineProperties({
  conditions: breakpointQueries,
  defaultCondition: "none",
  properties: {
    display: ["none", "block", "flex", "grid", "inline", "inline-block"],

    paddingLeft: vars.spacingConst,
    paddingRight: vars.spacingConst,
    paddingTop: vars.spacingConst,
    paddingBottom: vars.spacingConst,

    marginLeft: vars.spacingConst,
    marginRight: vars.spacingConst,
    marginTop: vars.spacingRel,
    marginBottom: vars.spacingRel,

    left: vars.spacingConst,
    right: vars.spacingConst,
    top: vars.spacingConst,
    bottom: vars.spacingConst,

    height: vars.spacingConst,
    maxHeight: vars.spacingConst,
    width: vars.spacingConst,
    maxWidth: vars.spacingConst,

    fontSize: vars.fontSize,
    fontWeight: vars.fontWeight,
    lineHeight: vars.lineHeight,
  },
  shorthands: {
    margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
    padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    inset: ["top", "left", "bottom", "right"],
  },
});

const eventProperties = defineProperties({
  conditions: {
    default: {},
    active: { selector: "&:active:not(:disabled)" },
    hover: { selector: "&:hover:not(:disabled)" },
    focus: { selector: "&:focus" },
    disabled: { selector: "&:disabled" },
  },
  defaultCondition: "default",
  properties: {
    background: colors,
    backgroundColor: colors,
    cursor: ["pointer", "not-allowed"],
    borderRadius: vars.borderRadius,
    borderTopLeftRadius: vars.borderRadius,
    borderTopRightRadius: vars.borderRadius,
    borderBottomLeftRadius: vars.borderRadius,
    borderBottomRightRadius: vars.borderRadius,
    /*
     * TODO: Figure out how to implement box shadow theming better. At the moment
     * we are just combining the colours with the shadows, in order to make "button/primary/boxshadow"
     * available as an option. But all the other colours are invalid options for box shadow
     */
    boxShadow: { ...vars.shadows, ...colors },
    borderLeftStyle: vars.borderStyles,
    borderRightStyle: vars.borderStyles,
    borderTopStyle: vars.borderStyles,
    borderBottomStyle: vars.borderStyles,
    borderWidth: vars.borderWidth,
    borderColor: colors,
    color: colors,
    lineHeight: vars.lineHeight,
    backdropFilter: vars.backdropFilter,
    fontStyle: ["normal", "italic", "underline"],
    outlineColor: colors,
    outlineWidth: vars.borderWidth,
    outlineStyle: vars.borderStyles,
  },
  shorthands: {
    radius: ["borderRadius"],
    shadow: ["boxShadow"],
    borderStyle: [
      "borderLeftStyle",
      "borderRightStyle",
      "borderBottomStyle",
      "borderTopStyle",
    ],
  },
});

const animationProperties = defineProperties({
  conditions: {
    default: {},
    reduceMotion: { "@media": "(prefers-reduced-motion: reduce)" },
  },
  defaultCondition: "default",
  properties: {
    transition: ["all"],
    transitionDuration: vars.duration,
    transitionTimingFunction: vars.timing,
    animationDuration: vars.duration,
    animationTimingFunction: vars.timing,
  },
});

const unresponsiveProperties = defineProperties({
  properties: {
    overflow: ["hidden", "visible", "scroll"],
    fontFamily: vars.fontFamily,
    position: ["relative", "absolute", "sticky"],
    objectFit: ["cover", "fill"],
    textTransform: ["none", "uppercase", "lowercase", "capitalize"],
    textDecoration: ["none", "underline"],
    overflowY: ["hidden", "scroll", "visible"],
    overflowX: ["hidden", "scroll", "visible"],
    textOverflow: ["ellipsis"],
    userSelect: ["auto", "text", "none", "contain", "all"],
    listStyle: ["none", "disc", "number", "inside", "outside"],
    counterReset: ["item"],
    listStylePosition: ["outside", "inside"],
    backdropFilter: vars.backdropFilter,
    zIndex: [-1, 0, 1, 2],
    touchAction: ["auto", "none"],
  },
  shorthands: {},
});

const flexProperties = defineProperties({
  conditions: breakpointQueries,
  defaultCondition: "none",
  properties: {
    display: Flex.display,
    flexDirection: ["row", "row-reverse", "column", "column-reverse"],
    gap: vars.spacingRel,
    alignItems: Flex.align,
    justifyContent: Flex.align,
    wrap: ["wrap", "nowrap"],
    flex: ["0", "1"],
  },
  shorthands: {
    direction: ["flexDirection"],
    align: ["alignItems"],
    justify: ["justifyContent"],
  },
});

const gridProperties = defineProperties({
  conditions: breakpointQueries,
  defaultCondition: "none",
  properties: {
    display: Grid.display,
    gridColumnStart: Grid.columns,
    gridColumnEnd: Grid.columns,
    gridColumn: Grid.columns
      .map((n) => ({ [n]: `span ${n} / span ${n}` }))
      .reduce((prev, current) => ({ ...prev, ...current }), {}),
    gap: vars.spacingRel,
    alignItems: Grid.align,
    justifyContent: Grid.align,
    gridTemplateColumns: Grid.grid,
  },
  shorthands: {
    align: ["alignItems"],
    justify: ["justifyContent"],
    columnStart: ["gridColumnStart"],
    columnEnd: ["gridColumnEnd"],
    columnSpan: ["gridColumn"],
    columns: ["gridTemplateColumns"],
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  animationProperties,
  eventProperties,
  unresponsiveProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];

export const flexSprinkles = createSprinkles(
  flexProperties,
  responsiveProperties,
  eventProperties,
  unresponsiveProperties
);

export type FlexSprinkles = Parameters<typeof flexSprinkles>[0];

export const gridSprinkles = createSprinkles(
  gridProperties,
  responsiveProperties,
  eventProperties,
  unresponsiveProperties
);

export type GridSprinkles = Parameters<typeof gridSprinkles>[0];
