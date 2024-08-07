import type { Meta, StoryObj } from "@storybook/react";
import {
  BrandCardDisney,
  BrandCardPixar,
  BrandCardMarvel,
  BrandCardNationalGeographic,
  BrandCardStarWars,
  BrandCardStar,
} from "./brand-card";

const meta: Meta<typeof BrandCardDisney> = {
  title: "Components/Brand Card",
  parameters: {
    layout: "centered",
  },
  component: BrandCardDisney,
};

export default meta;
type Story = StoryObj<typeof BrandCardDisney>;

export const Default: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8 rounded-lg p-8">
      {[
        BrandCardDisney,
        BrandCardPixar,
        BrandCardMarvel,
        BrandCardNationalGeographic,
        BrandCardStarWars,
        BrandCardStar,
      ].map((BrandCardStory, index) => (
        <div key={index} className="h-[120px]">
          <BrandCardStory />
        </div>
      ))}
    </div>
  ),
};

export const Disney: Story = {
  render: () => (
    <div className="h-[120px]">
      <BrandCardDisney />
    </div>
  ),
};

export const Pixar: Story = {
  render: () => (
    <div className="h-[120px]">
      <BrandCardPixar />
    </div>
  ),
};

export const Marvel: Story = {
  render: () => (
    <div className="h-[120px]">
      <BrandCardMarvel />
    </div>
  ),
};

export const NationalGeographic: Story = {
  render: () => (
    <div className="h-[120px]">
      <BrandCardNationalGeographic />
    </div>
  ),
};

export const StarWars: Story = {
  render: () => (
    <div className="h-[120px]">
      <BrandCardStarWars />
    </div>
  ),
};

export const Star: Story = {
  render: () => (
    <div className="h-[120px]">
      <BrandCardStar />
    </div>
  ),
};
