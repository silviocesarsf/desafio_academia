import Input from "../Inputs/Input";
import React from "react";
import Mulher from "../../assets/mulherAnilha.png";
import Aos from "aos";

const ContactSection = () => {
  Aos.init();

  return (
    <div class="max-w-full flex flex-col items-center justify-center relative">
      <div class="w-full h-[467px] flex items-center justify-between px-paddingX gap-[30px] bg-[#1E1E1E] relative">
        {/* Text Contact */}
        <div class="flex flex-col items-start justify-center">
          <h1 class="uppercase font-bebas text-[82px] leading-normal">
            Entre em contato
          </h1>
          <p class="text-2xl">
            Matricule-se agora mesmo! Fale com um de nossos atendentes
          </p>
          {/* Inputs Contact */}
          <div class="flex items-center justify-start mt-[30px] space-x-[30px]">
            {/* Name input */}
            <Input placeholder={"NOME"} type={"text"} />
            {/* Tel input */}
            <Input placeholder={"TELEFONE"} type={"tel"} />
          </div>
          {/* Contact button */}
          <div class="text-[18px] font-bold whitespace-nowrap relative mt-[30px] cursor-pointer duration-[.6s] hover:brightness-90">
            <svg
              width="234"
              height="42"
              viewBox="0 0 234 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-full h-full"
            >
              <path
                id="Rectangle 22"
                d="M0 0H234H203L234 21.84V42H190.5H0V0Z"
                fill="#FF3939"
              />
            </svg>
            <p class="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] uppercase">
              Solicitar contato
            </p>
          </div>
        </div>
        {/* Hero Contact */}
        <div
          class="absolute bottom-0 right-0"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <img
            src={Mulher}
            alt="Mulher carregando anilhas"
            class="h-[617px] w-[440px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
