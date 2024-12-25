import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router";

/**
 * The main application component that sets up the baseline CSS and renders the current route's component.
 *
 * @component
 * @returns {JSX.Element} The rendered application component.
 */
function App(): JSX.Element {
  return (
    <>
      <CssBaseline />
      <Outlet />
    </>
  );
}

export default App;
