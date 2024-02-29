import cx from "classix";
import { PiPlayFill } from "react-icons/pi";
import { TiInfoLarge } from "react-icons/ti";

export const KeepWatchingCard = ({
  img,
  alt,
  title,
  categoryTitle,
  playUrl,
  infoUrl,
  remainingTime,
  progress,
}: Props) => {
  return (
    <a
      href={playUrl}
      className="group relative block h-[135px] w-[240px] rounded shadow-card outline outline-0 transition-transform duration-300 ease-out hover:scale-105 hover:outline-[3px] hover:outline-offset-[3px] hover:outline-border"
    >
      <img src={img} alt={alt} className="rounded" />
      <div className="bg-black/70 absolute top-0 flex h-full w-full flex-col justify-between rounded px-4 pb-[26px] pt-2.5 opacity-0 duration-300 ease-in-out hover:opacity-100">
        <div>
          <p className={cx("text-sm", !categoryTitle && "hidden")}>{categoryTitle}</p>
          <h5 className="text-xl">{title}</h5>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="-mb-4 flex gap-4 transition-all duration-300 ease-out group-hover:mb-0">
            <ActionButtonLink url={playUrl}>
              <PiPlayFill size={12} />
            </ActionButtonLink>
            <ActionButtonLink url={infoUrl}>
              <TiInfoLarge size={18} className="ml-[1px]" />
            </ActionButtonLink>
          </div>
          <p className="text-xs text-font-subtle">{remainingTime} min left</p>
        </div>
      </div>
      <div
        role="progressbar"
        className="bg-white/30 absolute bottom-0 left-0 h-[6px] w-full appearance-none rounded-b transition-all duration-300 ease-out group-hover:bottom-3 group-hover:left-4 group-hover:w-[calc(100%-32px)]"
      >
        <div
          style={{ width: `${progress * 100}px` }}
          className="bg-cyan-400 h-full rounded-bl"
        ></div>
      </div>
    </a>
  );
};

interface Props {
  img: string;
  alt: string;
  title: string;
  categoryTitle?: string;
  playUrl: string;
  infoUrl: string;
  remainingTime: number;
  progress: number;
}

const ActionButtonLink = ({ url, children }: ActionButtonLink) => {
  return (
    <a
      href={url}
      className="rounded-full bg-black/70 grid h-[25px] w-[25px] place-items-center border-2 border-border transition-transform duration-100 ease-in-out hover:scale-125"
    >
      {children}
    </a>
  );
};

interface ActionButtonLink {
  url: string;
  children: React.ReactNode;
}
