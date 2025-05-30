/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	testDir: 'tests-e2e',
	projects: [
		{
			name: 'chromium',
			use: { browserName: 'chromium' }
		},
		{
			name: 'firefox',
			use: { browserName: 'firefox' }
		},
		{
			name: 'webkit',
			use: { browserName: 'webkit' }
		}
	]
};

export default config;
