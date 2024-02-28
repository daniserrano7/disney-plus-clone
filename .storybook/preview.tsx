import React from "react";
import type { Preview } from "@storybook/react";
import "../app/styles.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        { name: "light", value: "#d3d3d3" },
        { name: "dark", value: "#1a1d29" },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ color: "#f9f9f9", backgroundColor: "#1a1d29" }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
