import * as Avatar from "@radix-ui/react-avatar";
import { FaPlus } from "react-icons/fa6";
import avatarImage from "public/images/avatar.png";

export const UserProfile = () => {
  return (
    <section className="hover:shadow-overlay group absolute right-0 top-0 h-full max-h-[72px] w-fit rounded border border-transparent bg-transparent p-5 pt-2 ease-linear hover:h-auto hover:max-h-[calc(100vh-40px)] hover:w-[240px] hover:border-border-subtle hover:bg-elevation-overlay hover:transition-[max-height] hover:duration-300">
      <div className="flex items-center justify-end">
        <p className="mr-4">Profile</p>
        <UserAvatar avatar={avatarImage} />
      </div>
      <ul className="invisible space-y-4 text-[15px] capitalize text-font-subtle opacity-0 ease-out group-hover:visible group-hover:opacity-100 group-hover:transition-opacity group-hover:delay-300 group-hover:duration-300">
        <div className="bg-border-subtler mb-4 mt-3 h-[1px]" />
        <li className="hover:text-font">
          <a href="/" className="group/item flex w-full items-center gap-4">
            <span className="bg-border-subtler group/item-hover:bg-border-subtle grid h-[48px] w-[48px] place-items-center rounded-full">
              <FaPlus />
            </span>
            <span>Add profile</span>
          </a>
        </li>
        <li className="hover:text-font">
          <a href="/">Edit profiles</a>
        </li>
        <li className="hover:text-font">
          <a href="/">App settings</a>
        </li>
        <li className="hover:text-font">
          <a href="/">Account</a>
        </li>
        <li className="hover:text-font">
          <a href="/">Help</a>
        </li>
        <li className="hover:text-font">
          <a href="/">Log out</a>
        </li>
      </ul>
    </section>
  );
};

const UserAvatar = ({ avatar }: UserAvatarProps) => {
  return (
    <Avatar.Root className="flex h-[48px] w-[48px] items-center rounded-full">
      <Avatar.Image className="rounded-full object-cover" src={avatar} alt="User avatar" />
      <Avatar.Fallback delayMs={0} className="flex items-center justify-center rounded-full">
        U
      </Avatar.Fallback>
    </Avatar.Root>
  );
};

interface UserAvatarProps {
  avatar: string;
}
