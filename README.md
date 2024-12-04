# React + Vite
This template provides a minimal setup to get React working with Vite, including support for Hot Module Replacement (HMR) and ESLint rules to maintain code quality.

Available Plugins
Currently, two official plugins are available for integrating React with Vite:

@vitejs/plugin-react:
This is the official Vite plugin that makes React work smoothly with Vite.
It uses Babel to convert React code (like JSX) into regular JavaScript that browsers can understand.
It also supports Fast Refresh, which means your app updates instantly without losing its state when you change components during development.

@vitejs/plugin-react-swc:
This plugin is similar to the one above, but it uses SWC instead of Babel.
SWC is a faster tool for converting React code, so it makes the build process quicker.
Just like the other plugin, it also supports Fast Refresh, but it's optimized for speed and better performance, especially for larger projects.
