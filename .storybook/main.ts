import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  addons: ["@storybook/addon-links", "@storybook/addon-docs"],

  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: {
        // We need to use a different Vite config which does not use React Router.
        // I've defined a Vite config file in .storybook/sb-vite.config.ts specifically for this purpose.
        viteConfigPath: "./.storybook/sb-vite.config.ts",
      },
    },
  }
};
export default config;
