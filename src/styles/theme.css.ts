import { assignVars, createTheme, createThemeContract, style } from '@vanilla-extract/css';

import * as properties from './atoms/properties/index.css';
import { colors } from './core/colors.css';
import { responsiveStyle } from './utils/responsiveStyle.css';

export const vars = createThemeContract({
  ...properties,
  colors,
});

export const defaultTheme = createTheme(vars, {
  ...properties,
  colors,
});

export const responsiveTheme = style(
  responsiveStyle({
    xs: {
      vars: {
        ...assignVars(vars.spacingRel, { ...properties.spacingRelXs }),
        ...assignVars(vars.spacingConst, { ...properties.spacingConstXs }),
        ...assignVars(vars.fontSize, { ...properties.fontSizeXs }),
      },
    },
    s: {
      vars: {
        ...assignVars(vars.spacingRel, { ...properties.spacingRelS }),
        ...assignVars(vars.spacingConst, { ...properties.spacingConstS }),
        ...assignVars(vars.fontSize, { ...properties.fontSizeS }),
      },
    },
    m: {
      vars: {
        ...assignVars(vars.spacingRel, { ...properties.spacingRel }),
        ...assignVars(vars.spacingConst, { ...properties.spacingConst }),
        ...assignVars(vars.fontSize, { ...properties.fontSize }),
      },
    },
    l: {
      vars: {
        ...assignVars(vars.spacingRel, { ...properties.spacingRelLg }),
        ...assignVars(vars.spacingConst, { ...properties.spacingConstL }),
        ...assignVars(vars.fontSize, { ...properties.fontSizeL }),
      },
    },
    xl: {
      vars: {
        ...assignVars(vars.spacingRel, { ...properties.spacingRelXL }),
        ...assignVars(vars.spacingConst, { ...properties.spacingConstXL }),
        ...assignVars(vars.fontSize, { ...properties.fontSizeXL }),
      },
    },
  })
);
