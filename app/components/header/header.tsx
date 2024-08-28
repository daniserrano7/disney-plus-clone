import { useState, useEffect } from "react";
import { FaHouse, FaMagnifyingGlass, FaPlus, FaStar } from "react-icons/fa6";
import { PiFilmReelFill, PiTelevisionFill } from "react-icons/pi";
import cx from "classix";
import logo from "public/images/logo.svg";
import { UserProfile } from "./user-profile";

export const Header = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const isCurrentScroll = window.scrollY > 10;
      const scrollIsTheSame = isCurrentScroll === isScroll;
      if (scrollIsTheSame) return;

      setIsScroll(isCurrentScroll);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [isScroll]);

  return (
    <header
      style={{
        background: cx(
          isScroll
            ? "black"
            : "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.03) 15%, rgba(0, 0, 0, 0.125) 30%, rgba(0, 0, 0, 0.25) 46%, rgba(0, 0, 0, 0.4) 61%, rgba(0, 0, 0, 0.553) 75%, rgba(0, 0, 0, 0.694) 88%, rgba(0, 0, 0, 0.8))",
        ),
      }}
      className={cx(
        "sticky top-0 z-30 flex h-[72px] w-full items-center pl-[36px] pr-[20px] transition-all ease-linear",
        isScroll ? "duration-150" : "duration-300",
      )}
    >
      <a href="/" className="mr-8 block min-h-[48px] min-w-[79px]">
        <img src={logo} alt="Logo" width={79} height={48} />
      </a>
      <ul className="flex list-none">
        <ListItem>
          <ListItemIcon>
            <FaHouse />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FaMagnifyingGlass />
          </ListItemIcon>
          <ListItemText>Search</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FaPlus />
          </ListItemIcon>
          <ListItemText>Watchlist</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FaStar />
          </ListItemIcon>
          <ListItemText>Originals</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PiFilmReelFill />
          </ListItemIcon>
          <ListItemText>Movies</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PiTelevisionFill />
          </ListItemIcon>
          <ListItemText>Series</ListItemText>
        </ListItem>
      </ul>
      <UserProfile />
    </header>
  );
};

const ListItem = ({ children }: ListItemProps) => {
  return (
    <li>
      <a href="/" className="group flex items-center justify-between gap-2 px-5 py-4">
        {children}
      </a>
    </li>
  );
};

const ListItemIcon = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-font">{children}</span>;
};

const ListItemText = ({ children }: { children: React.ReactNode }) => {
  return (
    <span
      className={cx(
        "relative ml-2 font-bold text-sm uppercase",
        "before:absolute before:bottom-[-6px] before:left-0 before:h-[2px] before:min-w-0 before:rounded-b before:bg-border before:opacity-0 before:transition-all before:duration-[250ms] before:ease-out group-hover:before:min-w-full group-hover:before:opacity-100",
      )}
    >
      {children}
    </span>
  );
};

interface ListItemProps {
  url?: string;
  icon?: string;
  children: React.ReactNode;
}
