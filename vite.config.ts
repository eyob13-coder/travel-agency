import { reactRouter } from "@react-router/dev/vite";
import { sentryReactRouter, type SentryReactRouterBuildOptions } from "@sentry/react-router";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";


const sentryConfig: SentryReactRouterBuildOptions = {
  org: "eyob-5x",
  project: "javascript-nextjs",
  // An auth token is required for uploading source maps.
  authToken: "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"
  // ...
};

export default defineConfig(config => {
  return {
  plugins: [ tailwindcss(),tsconfigPaths(), reactRouter(),sentryReactRouter(sentryConfig, config)],
  ssr: {
    noExternal: [/^@syncfusion/],
  },
  };
});
