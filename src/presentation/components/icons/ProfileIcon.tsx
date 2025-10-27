import React from "react";

const ProfileIcon = ({ className = "" }) => {
  return (
    <svg
      width="16"
      height="22"
      viewBox="0 0 16 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.16006 9.87C8.06006 9.86 7.94006 9.86 7.83006 9.87C5.45006 9.79 3.56006 7.84 3.56006 5.44C3.56006 2.99 5.54006 1 8.00006 1C10.4501 1 12.4401 2.99 12.4401 5.44C12.4301 7.84 10.5401 9.79 8.16006 9.87Z"
        stroke="#A0A0A0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.15997 13.56C0.739971 15.18 0.739971 17.82 3.15997 19.43C5.90997 21.27 10.42 21.27 13.17 19.43C15.59 17.81 15.59 15.17 13.17 13.56C10.43 11.73 5.91997 11.73 3.15997 13.56Z"
        stroke="#A0A0A0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ProfileIcon;
