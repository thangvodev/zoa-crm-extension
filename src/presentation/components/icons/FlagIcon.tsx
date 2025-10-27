import React from "react";

const FlagIcon = ({ className = "" }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2.66699 9.99992C2.66699 9.99992 3.33366 9.33325 5.33366 9.33325C7.33366 9.33325 8.66699 10.6666 10.667 10.6666C12.667 10.6666 13.3337 9.99992 13.3337 9.99992V1.99992C13.3337 1.99992 12.667 2.66659 10.667 2.66659C8.66699 2.66659 7.33366 1.33325 5.33366 1.33325C3.33366 1.33325 2.66699 1.99992 2.66699 1.99992V9.99992Z"
        stroke="#006AF5"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.66699 14.6667V10"
        stroke="#006AF5"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FlagIcon;
