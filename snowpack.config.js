module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-dotenv',
    [
      '@snowpack/plugin-run-script',
      {cmd: 'svelte-check --output human', watch: '$1 --watch', output: 'stream'},
    ],
    [
      '@snowpack/plugin-run-script',
      {cmd: 'jest', watch: '$1 --watchAll --notify --notifyMode always', output: 'stream'},
    ],
    ['@snowpack/plugin-run-script', {
      cmd: 'eslint \'src/**/*.{js,jsx,ts,tsx}\'',
      watch: 'watch "$1" src'
    }],
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    '@': './src'
  },
}
