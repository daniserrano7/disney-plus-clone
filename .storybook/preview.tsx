import React from "react";
import type { Preview } from "@storybook/react-vite";
import "../src/styles.css";

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
      options: {
        light: { name: "light", value: "#d3d3d3" },
        dark: { name: "dark", value: "#1a1d29" }
      }
    },
  },

  decorators: [
    (Story) => (
      <div
        style={{
          color: "#f9f9f9",
          backgroundColor: "#1a1d29",
          fontFamily: "system-ui, -apple-system, sans-serif",
          padding: "20px",
        }}
      >
        <Story />
      </div>
    ),
  ],

  initialGlobals: {
    backgrounds: {
      value: "dark"
    }
  }
};

export default preview;
