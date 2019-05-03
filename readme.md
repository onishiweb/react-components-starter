React Components Starter kit
============================

This is a starter project for creating a React frontend project using Webpack, Styled Components, and Jest.

## Getting started

Run `npm install` to install dependencies

### Scripts

`npm start` - will run `webpack-dev-server` including style linting and prettier.

`npm run build` - will run the production build of webpack, compiling assets to the `dist/` folder.

`npm test` - runs Jest tests including visual regression tests using `jest-image-snapshot`.

`npm run test:a11y` - runs accessibility tests with Pa11y CI on the landing page.

## Testing

To run tests locally you must make sure the app is running first via `npm start` before you can run tests with either `npm test` or `npm test:a11y`.
