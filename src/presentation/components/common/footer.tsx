import React from "react";
import TransitionLink from "./transition-link";
import HomeFilledIcon from "../icons/HomeFilledIcon";
import UserIcon from "../icons/UserIcon";
import ShoppingBagHappyIcon from "../icons/ShoppingBagHappyIcon";
import NotificationBingIcon from "../icons/NotificationBingIcon";
import NotificationBingFilledIcon from "../icons/NotificationBingFilledIcon";
import UserFilledIcon from "../icons/UserFilledIcon";
import HomeIcon from "../icons/HomeIcon";

const NAV_ITEMS = [
  {
    name: "Trang chủ",
    path: "/",
    icon: ({ active }: { active: boolean }) =>
      active ? (
        <HomeFilledIcon className="size-[20px] text-green6" />
      ) : (
        <HomeIcon className="size-[20px] text-neutral5" />
      ),
  },
  {
    name: "Đặt hàng",
    path: "/order",
    icon: ({ active }: { active: boolean }) =>
      active ? (
        <ShoppingBagHappyIcon className="size-[20px] text-green6" />
      ) : (
        <ShoppingBagHappyIcon className="size-[20px] text-neutral5" />
      ),
  },
  {
    name: "Thông báo",
    path: "/notification",
    icon: ({ active }: { active: boolean }) =>
      active ? (
        <NotificationBingFilledIcon className="size-[20px] text-green6" />
      ) : (
        <NotificationBingIcon className="size-[20px] text-neutral5" />
      ),
  },
  {
    name: "Tài khoản",
    path: "/account",
    icon: ({ active }: { active: boolean }) =>
      active ? (
        <UserFilledIcon className="size-[20px] text-green6" />
      ) : (
        <UserIcon className="size-[20px] text-neutral5" />
      ),
  },
];

function Footer() {
  return (
    <div
      className="p w-ful grid bg-[#FFFFFF] px-[16px] pb-[20px] pt-[10px]"
      style={{
        gridTemplateColumns: `repeat(${NAV_ITEMS.length}, 1fr)`,
        paddingBottom: `max(16px, env(safe-area-inset-bottom)`,
        boxShadow: "0px -4px 12px 0px #406A5D1F",
      }}
    >
      {NAV_ITEMS.map((item, key) => {
        return (
          <TransitionLink
            to={item.path}
            key={key}
            className="flex cursor-pointer flex-col items-center"
          >
            {({ isActive }) => (
              <>
                <div className="flex h-6 w-6 items-center justify-center">
                  <item.icon active={isActive} />
                </div>
                <div
                  className={`text-2xs ${isActive ? "text-green6" : "text-gray5"}`}
                >
                  {item.name}
                </div>
              </>
            )}
          </TransitionLink>
        );
      })}
    </div>
  );
}

export { Footer };
