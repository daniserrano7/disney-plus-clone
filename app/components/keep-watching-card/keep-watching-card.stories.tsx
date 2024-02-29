import type { Meta, StoryObj } from "@storybook/react";
import { KeepWatchingCard } from "./keep-watching-card";

const meta: Meta<typeof KeepWatchingCard> = {
  title: "Components/KeepWatchingCard",
  parameters: {
    layout: "centered",
  },
  component: KeepWatchingCard,
};

export default meta;
type Story = StoryObj<typeof KeepWatchingCard>;

export const Movie: Story = {
  args: {
    img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CB389A0D5C9087462D079DAC0BD1A22CBB898C21F9A7A41C84E6EDC461B50EE9/scale?width=400&aspectRatio=1.78&format=jpeg",
    alt: "Ron's Gone Wrong",
    title: "Ron da Error",
    playUrl: "https://www.disneyplus.com/",
    infoUrl: "https://www.disneyplus.com/",
    remainingTime: 32,
    progress: 0.5,
  },
};

export const Serie: Story = {
  args: {
    img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CB389A0D5C9087462D079DAC0BD1A22CBB898C21F9A7A41C84E6EDC461B50EE9/scale?width=400&aspectRatio=1.78&format=jpeg",
    alt: "Ron's Gone Wrong",
    title: "Ron's Gone Wrong",
    categoryTitle: "Animation",
    playUrl: "https://www.disneyplus.com/",
    infoUrl: "https://www.disneyplus.com/",
    remainingTime: 32,
    progress: 0.27,
  },
};
