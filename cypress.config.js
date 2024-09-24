const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false, 
    baseUrl: 'https://web.superfrete.com', 
    viewportWidth: 1366,
    viewportHeight: 768,
    setupNodeEvents(on, config) {
      
     
    },
  },
});