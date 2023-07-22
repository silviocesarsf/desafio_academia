import React from "react";
import Card from "../Cards/Card";
import SectionComponent from "../SectionComponent/SectionComponent";
import ShapeButton from "../ShapeButton/ShapeButton";
import Arrow from "../../assets/Arrow.svg";
import SportIcon from "../../assets/IconesDiferenciais/sport1.png";
import DumbbellIcon from "../../assets/IconesDiferenciais/dumbbell1.png";
import TrainerIcon from "../../assets/IconesDiferenciais/trainer1.png";
import GymIcon from "../../assets/IconesDiferenciais/gym1.png";
import { useState } from "react";
import Aos from "aos";

// Objeto com as informações

const differencialsObj = [
  {
    icon: SportIcon,
    title: "Equipe Qualificada",
    paragraph:
      "Profissionais altamente capacitados e motivados a ajudá-lo a alcançar seus objetivos.",
    buttonText: "conheça nossos profissionais",
    id: 1,
  },
  {
    icon: DumbbellIcon,
    title: "Ambiente motivador",
    paragraph:
      "Um ambiente seguro e inspirador para ajudá-lo a manter-se motivado durante seus treinos.",
    buttonText: "Faça um tour virtual",
    id: 2,
  },
  {
    icon: TrainerIcon,
    title: "Aulas Diversas",
    paragraph:
      "Oferecemos uma ampla variedade de aulas, desde musculação até dança, para atender a todos os interesses.",
    buttonText: "Ver modalidades",
    id: 3,
  },
  {
    icon: GymIcon,
    title: "Equipamentos Modernos",
    paragraph:
      "Mantemos nossos equipamentos atualizados para garantir a segurança e eficiência de nossos clientes.",
    buttonText: "faça um tour virtual",
    id: 4,
  },
];

const DifferentialsSection = () => {
  Aos.init();

  const [differentialHover, setDifferentialHover] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  const handleDifferentialHover = (id) => {
    setDifferentialHover(!differentialHover);
    setHoveredId(id);
  };

  return (
    <>
      <div class="min-h-screen max-w-full px-paddingX flex flex-col items-between justify-center xl:gap-[126px]">
        {/* Text differencials */}
        <div
          class="flex items-center justify-center gap-[27px]"
          data-aos="fade-down"
          data-aos-duration="500"
        >
          <h1 class="font-bungee xl:text-[62px] lg:text-[52px]">Nossos</h1>
          <h1 class="font-bebas xl:text-[82px] lg:text-[72px]">Diferenciais</h1>
        </div>
        {/* Cards differencials */}
        <div class="w-full xl:flex xl:flex-row items-center xl:justify-center lg:grid lg:grid-cols-2 lg:gap-4 lg:place-content-between">
          {differencialsObj.map((data) => (
            <Card
              isHoveredFunction={() => handleDifferentialHover(data.id)}
              isHoveredState={hoveredId === data.id}
              key={data.id}
            >
              {/* Icon card */}
              <i>
                <img src={data.icon} alt={data.title} />
              </i>
              {/* Title card */}
              <h1 class="uppercase font-bebas text-[28px] font-normal">
                {data.title}
              </h1>
              {/* Paragraph card */}
              <p class="text-lg font-normal leading-[normal] w-[273px] pb-4">
                {data.paragraph}
              </p>
              <ShapeButton active={hoveredId === data.id && true}>
                <span class="w-[187px] p-[15px] text-white font-400 uppercase flex items-center justify-between">
                  <p class="text-left text-base leading-[normal] w-full max-w-[100px]">
                    {data.buttonText}
                  </p>
                  <img src={Arrow} alt="Flecha" class="mr-4" />
                </span>
              </ShapeButton>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default DifferentialsSection;
