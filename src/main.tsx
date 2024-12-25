/**
 * @fileoverview Entry point for the React application.
 *
 * This file sets up the main application by importing necessary modules,
 * creating a router with routes for different pages, and rendering the
 * application into the root DOM element.
 *
 * @module main
 */

import { ThemeProvider } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.tsx";
import "./index.css";
import Dashboard from "./pages/Dashboard.tsx";
import SignIn from "./pages/SignIn.tsx";
import theme from "./theme.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/",
        element: <SignIn />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
