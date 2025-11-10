import { Pegi } from "@/components/pegi";
import cx from "classix";

export const VerticalCard = ({ url, img, alt, info }: Props) => {
  return (
    <a
      href={url}
      className="relative block h-[338px] w-[240px] rounded shadow-card outline-0 transition-transform duration-300 ease-out hover:scale-105 hover:outline-[3px] hover:outline-offset-[3px] hover:outline-border"
    >
      <img src={img} alt={alt} className="rounded" />
      {info ? (
        <div className="absolute bottom-0 left-0 right-0 flex items-center gap-2">
          <Pegi value={info.pegi} />
          <div className="flex gap-1 text-xs text-font-subtlest">
            <span>{info.year}</span> <span>•</span> <span>{info.tags.join(", ")}</span>
          </div>
        </div>
      ) : null}
    </a>
  );
};

interface Props {
  url: string;
  img: string;
  alt: string;
  info?: {
    pegi: string;
    year: string;
    tags: string[];
  };
}
