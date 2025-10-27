import React from "react";
import BannerImg from "../../static/images/profile-config.jpg";

export const Banner = () => {
  return (
    <img
      src={BannerImg}
      alt=""
      className="h-[240px] rounded-[8px] object-cover"
    />
  );
};
