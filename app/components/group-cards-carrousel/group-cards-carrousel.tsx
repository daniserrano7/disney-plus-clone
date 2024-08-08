import { useState, useEffect } from "react";
import cx from "classix";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

export const GroupCardsCarrousel = <T,>({ cards, renderCard }: Props<T>) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const CARDS_SPACING = 24; // gap between cards
  const SIDE_MARGIN = 144; // margin on the sides, part of the previous/next slide shown
  const ANIMATION_DURATION_SECONDS = 0.3;

  const createCardContainers = (cards: T[], n: number) => {
    const containers = [];
    for (let i = 0; i < cards.length; i += n) {
      containers.push(cards.slice(i, i + n));
    }
    return containers;
  };

  const nextSlide = () => setCurrentStep((prev) => prev + 1);
  const previousSlide = () => setCurrentStep((prev) => prev - 1);

  const containers = createCardContainers(cards, 4);

  useEffect(() => {
    setIsAnimating(true);

    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, ANIMATION_DURATION_SECONDS * 1000);

    return () => clearTimeout(timeout);
  }, [currentStep]);

  return (
    <div className="relative flex w-full items-center overflow-hidden pb-12 pt-3">
      <div
        style={{ width: `calc(((100% - ${SIDE_MARGIN}px) - 16px * 3) / 4)` }}
        className="box-border aspect-video h-auto"
      >
        <div className="relative box-content h-full w-[100vw]">
          <button
            onClick={previousSlide}
            className={cx(
              "group absolute left-0 z-30 grid h-full w-[48px] place-items-center transition-all",
              currentStep === 0 && "hidden",
              isAnimating ? "bg-none duration-0" : "bg-black/30 delay-200 duration-300",
            )}
          >
            <PiCaretLeftBold
              size={40}
              className="opacity-0 transition-opacity duration-150 group-hover:opacity-100"
            />
          </button>
          <button
            onClick={nextSlide}
            className={cx(
              "group absolute right-0 z-30 grid h-full w-[48px] place-items-center transition-all",
              currentStep === containers.length - 1 && "hidden",
              isAnimating ? "bg-none duration-0" : "bg-black/30 delay-200 duration-300",
            )}
          >
            <PiCaretRightBold
              size={40}
              className="opacity-0 transition-opacity duration-150 group-hover:opacity-100"
            />
          </button>
        </div>
      </div>
      {containers.map((cards, index) => (
        <div
          key={index}
          style={{
            left: `calc(${index - currentStep} * (100% - ${SIDE_MARGIN}px + ${CARDS_SPACING}px))`,
            width: `calc(100% - ${SIDE_MARGIN}px)`,
            marginLeft: `${SIDE_MARGIN / 2}px`,
            transitionDuration: `${ANIMATION_DURATION_SECONDS}s`,
          }}
          className="absolute grid h-auto grid-cols-4 gap-4 ease-out"
        >
          {cards.map((card, index) => renderCard(card, index))}
        </div>
      ))}
    </div>
  );
};

interface Props<T> {
  cards: T[];
  renderCard: (card: T, index: number) => React.ReactNode;
}
