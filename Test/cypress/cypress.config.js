import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {

    // this setting disables the support feature - remove it to re-enable
    supportFile: false,

    // or add the explicit path
    supportFile: 'cypress/support/e2e.js',

    // or to keep using the legacy file
    supportFile: 'cypress/support/index.js',

  },
})