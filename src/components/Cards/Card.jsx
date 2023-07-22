import React from "react";

const Card = ({ children, isHoveredFunction, isHoveredState }) => {
  return (
    <div
      onMouseEnter={isHoveredFunction}
      class={`xl:h-[346px] xl:w-[346px] lg:w-[300px] lg:h-[300px] md:h-[260px] md:w-[270px] flex flex-col items-start justify-between xl:p-6 lg:p-4 md:p-3 transition-all ${
        isHoveredState && "bg-[#222]"
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
