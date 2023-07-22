import React from "react";

const SectionComponent = ({ children }) => {
  return (
    <section class="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
      {children}
    </section>
  );
};

export default SectionComponent;
