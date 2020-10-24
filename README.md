# Svelte Snowpack Template

A basic Svelte template for Snowpack, with eslint and tailwind configured.

# Usage

To use this template:

```bash
npx create-snowpack-app name --template @joshnuss/svelte-snowpack-template
```

## Available Scripts

### yarn start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### yarn test

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

### yarn lint

Runs `eslint` on all files.

### yarn format

Formats all files according to rules defined in `.eslintrc.js`.

### yarn build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like [@snowpack/plugin-webpack](https://github.com/snowpackjs/snowpack/tree/master/plugins/plugin-webpack) or [snowpack-plugin-rollup-bundle](https://github.com/ParamagicDev/snowpack-plugin-rollup-bundle) to your `snowpack.config.json` config file.
