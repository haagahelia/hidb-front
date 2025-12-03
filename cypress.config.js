import {defineConfig} from "cypress";

export default defineConfig({
    e2e: {
        baseUrl: "http://localhost:5173", // default vite dev server
        viewportWidth: 1280,
        viewportHeight: 800,
        video: false,
        screenshotOnRunFailure: true,
        setupNodeEvents(_on, _config) {
            // implement node event listeners here
        },
    },
});
