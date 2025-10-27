import React from "react";

const PhoneIcon = ({ className = "" }) => {
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
        d="M11.333 1.33337H4.66634C3.92996 1.33337 3.33301 1.93033 3.33301 2.66671V13.3334C3.33301 14.0698 3.92996 14.6667 4.66634 14.6667H11.333C12.0694 14.6667 12.6663 14.0698 12.6663 13.3334V2.66671C12.6663 1.93033 12.0694 1.33337 11.333 1.33337Z"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12H8.00667"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PhoneIcon;
