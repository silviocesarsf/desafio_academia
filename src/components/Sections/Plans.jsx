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
    <section class="xl:h-[700px] lg:min-h-screen max-w-full flex flex-col items-center justify-center bg-[#222222] px-paddingX xl:gap-[60px] lg:40px">
      {/* Title */}
      <h1
        class="uppercase font-bebas xl:text-[82px] lg:text-[52px] font-normal"
        data-aos="fade-down"
      >
        Nossos planos
      </h1>
      {/* Plans */}
      <div class="flex items-center justify-center w-full gap-[41px] lg:whitespace-normal">
        {plansObj.map((plan) => (
          <CardPlan plan={plan} key={plan.id} />
        ))}
      </div>
    </section>
  );
};

export default Plans;
