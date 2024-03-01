import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./header";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  parameters: {
    layout: "top",
  },
  component: Header,
  decorators: [
    (Story) => (
      <div className="w-full">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    url: "https://www.disneyplus.com/",
    img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CB389A0D5C9087462D079DAC0BD1A22CBB898C21F9A7A41C84E6EDC461B50EE9/scale?width=400&aspectRatio=1.78&format=jpeg",
    alt: "Ron's Gone Wrong",
  },
};
