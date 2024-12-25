/**
 * This module defines and exports a Material-UI theme with custom configurations.
 * The theme includes custom palette colors, component style overrides, typography settings,
 * and breakpoint values.
 *
 * @module theme
 */

import {
  alpha,
  createTheme,
  responsiveFontSizes,
  Theme,
} from "@mui/material/styles";

/**
 * Creates a custom Material-UI theme with the following configurations:
 * - Palette: Defines primary and secondary colors with different shades and contrast text colors.
 * - Components: Customizes the styles and default properties for various Material-UI components such as MuiPaper, MuiToggleButtonGroup, MuiToggleButton, MuiButton, and MuiChip.
 * - Typography: Sets custom font family, font sizes, line heights, font weights, and text alignment for different text variants.
 * - Breakpoints: Defines custom breakpoint values for responsive design.
 *
 * @returns {Theme} The customized Material-UI theme with responsive font sizes.
 */
const theme: Theme = createTheme({
  // Custom palette colors
  palette: {
    primary: {
      dark: "#175CD3",
      main: "#1570EF",
      light: "#EFF8FF",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FFFFFF",
      contrastText: "#171717",
    },
  },
  // Custom component styles and default properties
  components: {
    // MuiPaper component
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          border: "1px solid #E9EAEB",
          borderRadius: "12px",
        },
      },
    },
    //  MuiToggleButtonGroup component
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          backgroundColor: "#FAFAFA",
          borderRadius: "8px",
        },
      },
    },
    // MuiToggleButton component
    MuiToggleButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "8px",
          "&.Mui-selected": {
            borderRadius: "8px",
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
          },
          "&.MuiToggleButtonGroup-lastButton": {
            marginLeft: "-10px",
          },
          color: "#414651",
        }),
      },
    },
    // MuiButton component
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        contained: {
          height: "fit-content",
          textTransform: "none",
          borderRadius: 8,
          "span.MuiButton-icon": {
            size: 24,
          },
        },
        outlined: {
          height: "fit-content",
          fontSize: "1rem",
          textTransform: "none",
          lineHeight: "24px",
          border: "1px solid #D8DAE5",
          color: "black",
          borderRadius: 8,
          "&:hover": {
            backgroundColor: "#f2f2f2",
          },
          "span.MuiButton-icon": {
            size: 24,
          },
        },
      },
    },
    //  MuiChip component
    MuiChip: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        outlined: ({ theme }) => ({
          color: "primary.dark",
          backgroundColor: alpha(theme.palette.primary.main, 0.025),
          padding: "2px 10px 2px 8px",
          textTransform: "capitalize",
          fontWeight: 400,

          "& span": {
            padding: 0,
            margin: "auto auto",
            textAlign: "center",
          },
        }),
      },
    },
  },
  // Custom typography settings
  typography: {
    allVariants: {
      fontFamily: "Inter, sans-serif",
    },
    h1: {
      fontSize: "2rem",
      lineHeight: 3,
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.5rem",
      lineHeight: 2,
      fontWeight: 600,
      textAlign: "start",
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.75,
      textTransform: "none",
    },
    subtitle2: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 1,
      color: "#414651",
    },
    caption: {
      fontSize: "0.875rem",
      fontWeight: 1,
      color: "#414651",
      textAlign: "start",
    },
  },
  // Custom breakpoint values
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1300,
      xl: 1536,
    },
  },
});

// Export the customized Material-UI theme with responsive font sizes
export default responsiveFontSizes(theme);
