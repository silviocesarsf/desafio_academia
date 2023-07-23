import React from "react";
import SectionComponent from "../SectionComponent/SectionComponent";
import Overlay from "../../assets/shapeOverlay.png";
import Casal from "../../assets/casalMaromba.png";
import Aos from "aos";

const JoinSection = () => {
  Aos.init();

  return (
    <SectionComponent>
      <div class="max-w-screen h-full flex items-center justify-between px-paddingX">
        {/* Hero */}
        <div class="w-full h-full relative xl:block lg:hidden">
          <img
            src={Overlay}
            alt="Shape vermelho"
            class="absolute left-[-40%] top-0 -scale-x-100 h-[110%] z-30"
          />
          <img
            src={Casal}
            alt="Casal"
            class="absolute z-40 bottom-0"
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-delay="300"
          />
        </div>
        {/* Right */}
        <div class="flex flex-col items-center justify-center gap-[70px]">
          {/* Text */}
          <div data-aos="fade-down" data-aos-duration="400">
            <h1 class="w-full font-bungee text-[62px] whitespace-nowrap">
              Faça Parte <span class="font-bebas text-[82px]">Da família</span>
            </h1>
            <p class="text-[18px]">
              Nossa academia tem milhares de clientes satisfeitos com resultados
              surpreendentes. Junte-se a nós e comece a transformar seu corpo
              agora!
            </p>
          </div>
          {/* Quantities container */}
          <div class="w-full flex xl:flex-row items-center justify-between gap-[50px]">
            {/* Quantities content */}
            <div
              class="flex flex-col items-center justify-center w-[218px]"
              data-aos="fade-down"
              data-aos-duration="400"
              data-aos-delay="400"
            >
              <h1 class="font-bebas text-[62px] leading-normal">+15</h1>
              <p class="text-[18px] leading-normal xl:text-start lg:text-center">
                Unidades na cidade de São Paulo.
              </p>
            </div>
            <div
              class="flex flex-col items-center justify-center w-[218px]"
              data-aos="fade-down"
              data-aos-duration="400"
              data-aos-delay="500"
            >
              <h1 class="font-bebas text-[62px] leading-normal">+2000</h1>
              <p class="text-[18px] xl:text-start lg:text-center">
                Alunos matriculados em nossas unidades.
              </p>
            </div>
            <div
              class="flex flex-col items-center justify-center w-[218px]"
              data-aos="fade-down"
              data-aos-duration="400"
              data-aos-delay="600"
            >
              <h1 class="font-bebas text-[62px] leading-normal">+100</h1>
              <p class="text-[18px] xl:text-start lg:text-center">
                Professores altamente qualificados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionComponent>
  );
};

export default JoinSection;
