import { MenuItem, styled } from "@mui/material";

/**
 * Props for the `StyledMenuItem` component.
 *
 * @property {boolean} [active] - Determines if the menu item is active.
 *                                When active, the menu item will have a primary background color, white text color,
 *                                and no ripple effect on click. When not active, it will have a transparent background,
 *                                black text color, and a ripple effect on click.
 */
export type StyledMenuItemProps = {
  active?: boolean;
};

/**
 * A styled `MenuItem` component from MUI that changes its appearance based on the `active` prop.
 *
 * - When `active` is true:
 *   - Background color is set to the primary color from the theme.
 *   - Text color is white.
 *   - Ripple effect is disabled.
 *   - On hover, the background color remains the primary color and the cursor is set to default.
 *   - The touch ripple effect is hidden.
 * - When `active` is false:
 *   - Background color is transparent.
 *   - Text color is black.
 *   - Ripple effect is enabled.
 *   - On hover, the background color changes to the light primary color from the theme and the cursor is set to pointer.
 *   - The touch ripple effect is displayed.
 */
const StyledMenuItem = styled(MenuItem)<StyledMenuItemProps>(
  ({ theme, active }) => ({
    width: "100%",
    backgroundColor: active ? theme.palette.primary.main : "transparent",
    color: active ? "white" : "black",
    borderRadius: 8,
    padding: "10px 14px 10px 14px",
    disableRipple: active ? true : false,
    "&:hover": {
      backgroundColor: active
        ? theme.palette.primary.main
        : theme.palette.primary.light,
      cursor: active ? "default" : "pointer",
    },
    "& .MuiTouchRipple-root": {
      display: active ? "none" : "block",
    },
  })
);

export default StyledMenuItem;
