import Aos from "aos";
import React from "react";

const CardPlan = ({ plan }) => {
  Aos.init();

  return (
    <div
      class={`xl:h-[322px] xl:w-[399px] md:h-[222px] md:w-[289px] shadow-xl ${
        plan.isRecommended && "xl:mb-[5rem] lg:mb-[41px]"
      }`}
      data-aos="zoom-in"
      data-aos-duration="400"
      data-aos-delay="400"
    >
      {/* Only if this is recommended */}
      {plan.isRecommended && (
        <div class="h-[40px] w-full shrink-0 uppercase xl:text-[18px] lg:text-[13px] font-bold bg-[#FF0202] flex items-center justify-center">
          Recomendado por usuários
        </div>
      )}
      {/* Image */}
      <div class="overflow-hidden">
        <img
          src={plan.image}
          alt="Imagem do plano"
          class="object-cover duration-[1.2s] hover:scale-110 cursor-pointer"
        />
      </div>
      {/* Title */}
      <div
        class={`w-full uppercase xl:text-[42px] lg:text-[35px] font-bebas bg-[#000] p-[10px]`}
      >
        {plan.title}
      </div>
      {/* Select */}
      <div class="w-full flex items-center justify-between bg-[#B4B4B4] p-[11px]">
        {/* Select price */}
        <p class="text-left xl:text-2xl lg:text-xl md:text-base text-[#787878]">
          Teste <br /> gratuitamente
        </p>
        <button
          style={{
            border: `1px solid ${plan.isRecommended ? "#FF0202" : "#787878"}`,
            color: `${plan.isRecommended ? "#FF0202" : "#787878"}`,
          }}
          class={`xl:w-[136px] xl:h-[50px] lg:w-[126px] lg:h-[40px] md:w-[124px] md:h-[36px] shrink-0 rounded-[50px] uppercase xl:text-[18px] lg:text-[13px] md:text-[13px] font-bold transition-all hover:bg-black/10 hover:shadow-xl`}
        >
          Selecionar
        </button>
      </div>
    </div>
  );
};

export default CardPlan;
