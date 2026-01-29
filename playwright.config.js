// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 120000, 
  expect: { timeout: 15000 },
  fullyParallel: false, 
  workers: 1, 
  
  
  reporter: [['html', { open: 'always' }]], 

  use: {
    ignoreHTTPSErrors: true, 
    actionTimeout: 30000,
    navigationTimeout: 60000,
    screenshot: 'on', 
    video: 'on-first-retry',
    trace: 'on', 
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
});