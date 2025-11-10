import { SmallCard, Props as SmallCardProps } from "@/components/small-card";
import { GroupCardsCarrousel } from "./group-cards-carrousel";

export const SmallCardsCarrousel = ({ cards }: Props) => {
  return <GroupCardsCarrousel cards={cards} component={SmallCard} paddingBottom={50} />;
};

interface Props {
  cards: SmallCardProps[];
}
