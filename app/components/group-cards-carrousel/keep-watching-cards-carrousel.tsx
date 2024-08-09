import { KeepWatchingCard, Props as KeppWatchingCardProps } from "../keep-watching-card";
import { GroupCardsCarrousel } from "./group-cards-carrousel";

export const KeepWatchingCardsCarrousel = ({ cards }: Props) => {
  return (
    <GroupCardsCarrousel
      cards={cards}
      renderCard={(item, key) => <KeepWatchingCard {...item} key={key} />}
    />
  );
};

interface Props {
  cards: KeppWatchingCardProps[];
}
