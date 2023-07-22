import React from "react";
import CardPlan from "../Cards/CardPlan";
import Image1 from "../../assets/Planos/imagePlan1.png";
import Image2 from "../../assets/Planos/imagePlan2.png";
import Image3 from "../../assets/Planos/imagePlan3.png";
import Aos from "aos";

const plansObj = [
  {
    image: Image1,
    isRecommended: false,
    title: "Passe de 1 dia",
    isFree: true,
    price: "Teste gratuitamente",
    id: 1,
  },
  {
    image: Image2,
    isRecommended: true,
    title: "Passe de 1 mês",
    isFree: false,
    price: "A partir de R$ 99,90",
    id: 2,
  },
  {
    image: Image3,
    isRecommended: false,
    title: "Passe de 1 ano",
    isFree: false,
    price: "A partir de R$ 999,00",
    id: 3,
  },
];

const Plans = () => {
  Aos.init();

  return (
    <section class="xl:h-[657px] lg:h-[1300px] md:h-[1000px] max-w-full flex flex-col items-center xl:justify-center lg:justify-around bg-[#222222] px-paddingX xl:gap-[60px] lg:gap-[20px] md-gap-[10px]">
      {/* Title */}
      <h1
        class="uppercase font-bebas xl:text-[82px] lg:text-[52px] md:text-[42px] font-normal"
        data-aos="fade-down"
      >
        Nossos planos
      </h1>
      {/* Plans */}
      <div class="flex xl:flex-row items-center justify-center w-full xl:gap-[41px] lg:gap-[41px] md:gap-[41px] lg:flex-col md:flex-col">
        {plansObj.map((plan) => (
          <CardPlan plan={plan} key={plan.id} />
        ))}
      </div>
    </section>
  );
};

export default Plans;
