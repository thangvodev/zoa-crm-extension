import React from "react";

const GiftIcon = ({ className = "" }) => {
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
        d="M13.3337 8V14.6667H2.66699V8"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6663 4.66675H1.33301V8.00008H14.6663V4.66675Z"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 14.6667V4.66675"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99967 4.66659H4.99967C4.55765 4.66659 4.13372 4.49099 3.82116 4.17843C3.5086 3.86587 3.33301 3.44195 3.33301 2.99992C3.33301 2.55789 3.5086 2.13397 3.82116 1.82141C4.13372 1.50885 4.55765 1.33325 4.99967 1.33325C7.33301 1.33325 7.99967 4.66659 7.99967 4.66659Z"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 4.66659H11C11.442 4.66659 11.866 4.49099 12.1785 4.17843C12.4911 3.86587 12.6667 3.44195 12.6667 2.99992C12.6667 2.55789 12.4911 2.13397 12.1785 1.82141C11.866 1.50885 11.442 1.33325 11 1.33325C8.66667 1.33325 8 4.66659 8 4.66659Z"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default GiftIcon;
