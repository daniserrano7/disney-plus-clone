import { SmallCard, Props as SmallCardProps } from "@/components/small-card";
import { GroupCardsCarrousel } from "./group-cards-carrousel";

export const SmallCardsCarrousel = ({ cards }: Props) => {
  return (
    <GroupCardsCarrousel
      cards={cards}
      renderCard={(item, key) => <SmallCard {...item} key={key} />}
    />
  );
};

interface Props {
  cards: SmallCardProps[];
}
