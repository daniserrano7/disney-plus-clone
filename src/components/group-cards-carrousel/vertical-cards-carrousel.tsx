import { VerticalCard, Props as VerticalCardProps } from "@/components/vertical-card";
import { GroupCardsCarrousel } from "./group-cards-carrousel";

export const VerticalCardsCarrousel = ({ cards }: Props) => {
  return (
    <GroupCardsCarrousel
      cards={cards}
      component={VerticalCard}
      paddingBottom={50}
      cardsPerSlideConfig={{
        default: 5,
        mobile: 2,
        tablet: 4,
        desktop: 5,
      }}
    />
  );
};

interface Props {
  cards: VerticalCardProps[];
}
