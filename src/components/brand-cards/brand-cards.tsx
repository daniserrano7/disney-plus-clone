import {
  BrandCardDisney,
  BrandCardPixar,
  BrandCardMarvel,
  BrandCardStarWars,
  BrandCardNationalGeographic,
  BrandCardStar,
} from "./brand-card";

export const BrandCards = () => {
  return (
    <div className="grid grid-cols-6 gap-8">
      <BrandCardDisney />
      <BrandCardPixar />
      <BrandCardMarvel />
      <BrandCardStarWars />
      <BrandCardNationalGeographic />
      <BrandCardStar />
    </div>
  );
};
