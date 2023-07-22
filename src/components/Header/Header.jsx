import Aos from "aos";
import React from "react";
import Logo from "../../assets/logo-robust_habit.png";
import ShapeButton from "../ShapeButton/ShapeButton";

const Header = () => {
  Aos.init();

  return (
    <header
      class="w-screen h-[90px] flex items-center xl:justify-between lg:justify-between md:justify-center px-paddingX absolute z-50"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      {/* Logo */}
      <a href="#" class="xl:block lg:block md:hidden">
        <img src={Logo} alt="Logo Robust Habit" />
      </a>
      <nav className="font-bebas font-normal xl:text-2xl lg:text-2xl md:text-lg text-white space-x-[30px] flex items-center">
        <a href="#" class="duration-[.4s] hover:opacity-80">
          Sobre
        </a>
        <a href="#" class="duration-[.4s] hover:opacity-80">
          Serviços
        </a>
        <a href="#" class="duration-[.4s] hover:opacity-80">
          Preços
        </a>
        <a href="#" class="duration-[.4s] hover:opacity-80">
          Equipamentos
        </a>
        <a href="#" class="flex items-center justify-center">
          <ShapeButton>Registre-se</ShapeButton>
        </a>
      </nav>
    </header>
  );
};

export default Header;
