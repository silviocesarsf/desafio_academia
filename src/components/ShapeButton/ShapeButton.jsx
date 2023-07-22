import React from "react";

const ShapeButton = ({ children, active }) => {
  return (
    <button
      class="text-white relative flex items-center justify-center transition-all
      hover:translate-y-[5%] hover:shadow-md hover:brightness-75"
    >
      <p
        class={`z-40 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-normal uppercase font-bebas flex items-center justify-between gap-5`}
      >
        {children}
      </p>
      {/* Shape svg */}
      <svg
        width="187"
        height="54"
        viewBox="0 0 187 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Rectangle 2"
          d="M0 0H155.628L171.314 13.5L179.157 20.25L187 27V54H0V0Z"
          fill={`${active ? "#FF0202" : "#222222"}`}
        />
      </svg>
    </button>
  );
};

export default ShapeButton;
