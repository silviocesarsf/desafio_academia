import React from "react";
import Anilha from "../../assets/icon-anilha.png";

const Stripe = () => {
  return (
    <>
      {/* Stripe Container */}
      <div
        class="text-white bg-[#222] h-[56px] w-full uppercase
    overflow-hidden shrink-0 absolute bottom-0 z-40 font-bebas text-[32px]"
      >
        {/* Stripe content */}
        <div class="max-w-full h-full bottom-0 z-40 font-bebas xl:text-[32px] flex items-center justify-between px-5 lg:text-[15px]">
          <p>Consultoria individual</p>
          <img class="" src={Anilha} alt="Icone anilha" />
          <p>+20 Professores</p>
          <img class="" src={Anilha} alt="Icone anilha" />
          <p>Treine da sua forma</p>
          <img class="" src={Anilha} alt="Icone anilha" />
          <p>+15 Unidades</p>
          <img class="" src={Anilha} alt="Icone anilha" />
          <p>Montamos seu treino</p>
        </div>
      </div>
    </>
  );
};

export default Stripe;
