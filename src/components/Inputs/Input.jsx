import React from "react";

const Input = ({ placeholder, type }) => {
  return (
    <div class="h-full w-full relative">
      <svg
        width="234"
        height="42"
        viewBox="0 0 234 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="h-full w-full"
      >
        <path
          id="Rectangle 20"
          d="M233.5 22.0994V41.5H190.5H0.5V0.5H202.842L233.5 22.0994Z"
          stroke="white"
        />
      </svg>
      <input
        type={type}
        placeholder={placeholder}
        class="bg-transparent absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-white placeholder-white"
      />
    </div>
  );
};

export default Input;
