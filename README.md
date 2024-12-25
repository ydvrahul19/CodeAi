# Frontend Developer Assignment - SignIn & Dashboard

This project is a frontend implementation of a SignIn and Dashboard page designed for CodeAnt AI's hiring assignment.

## Live URL

Check out live application [here](https://codeantai-ochre.vercel.app/).

## Demo

To run the application locally, use the following commands:
```
pnpm i
pnpm run dev
```

## Overview

This application is part of CodeAnt AI hiring challenge. It consists of a SignIn page and a Dashboard page, built using React.js, TypeScript, and Material-UI. It implements a responsive design with reusable components and follows best practices for clean and maintainable code.

The main features include:

- A fully responsive layout suitable for various screen sizes.
- Navigation between the SignIn and Dashboard pages using React Router.
- Integration of the `date-fns` library for date calculations.
- A custom Material-UI theme created with `createTheme`.

## Features

### SignIn Page

- Two sections first for hero image & other for signin options
- Used `ToggleButton` from MUI library to show different options
- Upon clicking on any of those buttons, you've been redirected to dashboard page.

### Dashboard Page

- Created a Navbar component that shows sidebar on desktop & navbar on tablet and mobile screens.
- Displays data dynamically and includes well-organized components.
- Uses `date-fns` to calculate the difference between today's date and the last updated date of a repository.
- Includes icons from `react-icons` for an enhanced UI experience.
- Fully responsive layout with adaptive styling for various screen sizes.

### Code Quality & Documentation

- The project is well-documented, ensuring easy understanding and scalability.
- Reusable components are used throughout the application.
- Strong typing with TypeScript ensures a type-safe and reliable application.

## Highlighted Tools & Components

- [Material-UI `createTheme`](https://mui.com/material-ui/customization/theming/#createtheme)
- [React Router](https://reactrouter.com/)
- [date-fns](https://date-fns.org/)
- [react-icons](https://react-icons.github.io/react-icons/)

## Tech Stack

- HTML5
- CSS3
- React.js (with Vite)
- TypeScript
- Material-UI
- [date-fns](https://date-fns.org/)
- [react-icons](https://react-icons.github.io/react-icons/)
- Vite

