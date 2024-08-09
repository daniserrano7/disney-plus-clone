import cx from "classix";

export const HeroCard = ({
  img,
  alt,
  titleImg,
  subtitle,
  info,
  displayStatus = "visible",
}: Props) => {
  return (
    <div className="relative box-border block w-full overflow-hidden rounded shadow-card outline outline-4 -outline-offset-4 outline-transparent transition-all duration-150 ease-linear hover:outline-border/70">
      <img
        src={img}
        alt={alt}
        className={cx(
          "rounded object-contain transition-transform delay-[1.2s] duration-[1.5s] ease-out",
          displayStatus === "visible" ? "scale-100" : "scale-110",
        )}
      />
      <div className="absolute left-[72px] top-0 flex h-full flex-col justify-center transition-all duration-500 ease-in-out">
        <img
          src={titleImg}
          alt={alt}
          className={cx(
            "aspect-video h-[55%] w-fit transition-all delay-[1.2s] duration-[0.6s] ease-out",
            displayStatus === "visible" ? "ml-0 opacity-100" : "-ml-[24px] opacity-0",
          )}
        />
        <div
          className={cx(
            "w-fit transition-all delay-[1.8s] duration-[0.6s] ease-out",
            displayStatus === "visible" ? "opacity-100" : "opacity-0",
          )}
        >
          <p
            className={cx(
              "mb-2 font-bold text-sm transition-all duration-500 ease-in-out",
              !subtitle && "hidden",
            )}
          >
            {subtitle}
          </p>
          {info ? (
            <div className="flex items-center gap-2">
              <Pegi pegi={info.pegi} />
              <div className="flex gap-1 text-xs text-font-subtlest">
                <span>{info.year}</span> <span>•</span> <span>{info.tags.join(", ")}</span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const Pegi = ({ pegi }: { pegi: string }) => {
  return (
    <span className="flex w-fit items-center justify-center rounded-sm bg-background-neutral px-1 py-0.5 font-bold text-xs">
      {pegi}
    </span>
  );
};

export interface Props {
  url: string;
  img: string;
  alt: string;
  titleImg: string;
  subtitle?: string;
  info?: {
    pegi: string;
    year: string;
    tags: string[];
  };
  displayStatus: "visible" | "hidden";
}
