import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: {
        // We need to use a different Vite config which does not use Remix.
        // I've defined a Vite config file in .storybook/sb-vite.config.ts speficially for this purpose.
        viteConfigPath: "./.storybook/sb-vite.config.ts",
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
