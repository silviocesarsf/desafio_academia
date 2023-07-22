import React from "react";

const Card = ({ children, isHoveredFunction, isHoveredState }) => {
  return (
    <div
      onMouseEnter={isHoveredFunction}
      class={`xl:h-[346px] xl:w-[346px] lg:w-full flex flex-col items-start justify-between p-6 transition-all ${
        isHoveredState && "bg-[#222]"
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
