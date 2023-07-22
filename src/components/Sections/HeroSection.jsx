import React from "react";
import redOverlay from "../../assets/shapeOverlay.png";
import heroAcademia from "../../assets/heroAcademia.png";
import ShapeButton from "../ShapeButton/ShapeButton";
import Stripe from "../../components/Stripe/Stripe";
import SectionComponent from "../SectionComponent/SectionComponent";
import Arrow from "../../assets/Arrow.svg";
import Aos from "aos";

const HeroSection = () => {
  Aos.init();

  return (
    <>
      <SectionComponent>
        {/* Text Hero */}
        <div class="h-screen w-full px-paddingX flex items-center justify-between">
          <div class="flex flex-col items-start justify-between max-w-[55%] leading-[80px] gap-5">
            <h1
              class="uppercase font-normal text-[82px] font-bungee"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              Aqui não se
            </h1>
            <h1
              class="uppercase font-normal text-[102px] font-bebas"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              Treina fofo
            </h1>
            <p
              class="font-normal text-lg text-white"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="900"
            >
              Transforme-se na nossa academia! Oferecemos equipamentos modernos,
              instrutores qualificados e aulas para todos os níveis. Alcance
              seus objetivos fitness conosco. Experimente hoje!
            </p>
            <div
              class="text-3xl"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="900"
            >
              <ShapeButton>
                Comecar <img src={Arrow} alt="" />
              </ShapeButton>
            </div>
          </div>
          <div class="h-screen w-full ">
            {/* Right Hero */}
            <img
              src={heroAcademia}
              alt="Homem se exercitando"
              class="absolute z-40 right-14 bottom-0 h-[695px]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
            />
            {/* Overlay red */}
            <img
              src={redOverlay}
              alt="Overlay vermelho"
              class="absolute z-30 top-0 right-[0%] h-[100%]"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="500"
            />
          </div>
        </div>
        {/* Stripe */}
        <Stripe />
      </SectionComponent>
    </>
  );
};

export default HeroSection;
