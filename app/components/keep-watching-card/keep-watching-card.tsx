import { FaPlay } from "react-icons/fa6";
import { Pegi } from "@/components/pegi";

export const KeepWatchingCard = ({
  img,
  alt,
  title,
  playUrl,
  infoUrl,
  remainingTime,
  progress,
  info,
}: Props) => {
  const remainingTimeText = remainingTime
    ? `${remainingTime} minutes remaining`
    : "Watch next episode";

  return (
    <div>
      <a href={playUrl} className="group relative block">
        <div className="aspect-video rounded shadow-card outline outline-0 transition-transform duration-300 ease-out group-hover:scale-105 group-hover:outline-[3px] group-hover:outline-offset-[3px] group-hover:outline-border">
          <img src={img} alt={alt} className="rounded" />
          {progress ? (
            <div
              role="progressbar"
              className="absolute bottom-2 left-2 mx-auto h-[5px] w-[calc(100%-16px)] appearance-none rounded-full bg-white bg-opacity-30"
            >
              <div
                style={{ width: `${progress * 100}px` }}
                className="bg-background-action h-full rounded-full"
              />
            </div>
          ) : null}
        </div>
        <span className="absolute left-1/2 top-1/2 grid h-[42px] w-[42px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white opacity-0 transition-opacity duration-200 ease-linear group-hover:opacity-100">
          <FaPlay size={20} className="ml-1 fill-black" />
        </span>
      </a>
      <a href={infoUrl} className="group hidden">
        <p className="relative mt-4 text-xs text-font-subtlest transition-all duration-200 ease-linear group-hover:text-font">
          {remainingTimeText}
        </p>
        <p className="mt-1 font-bold text-lg text-font-subtle transition-all duration-200 ease-linear group-hover:text-font">
          {title}
        </p>
        <div className="mt-1 flex items-center gap-2">
          <Pegi value={info.pegi} />
          <div className="flex gap-2 text-xs text-font-subtlest">
            <span>{info.year}</span> <span>•</span> <span>{info.tags.join(", ")}</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export interface Props {
  img: string;
  alt: string;
  title: string;
  playUrl: string;
  infoUrl: string;
  remainingTime?: number;
  progress?: number;
  info: {
    pegi: string;
    year: string;
    tags: string[];
  };
}
