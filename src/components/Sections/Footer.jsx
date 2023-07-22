import React from "react";
import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer class="bg-[#222] h-[200px] max-w-full flex flex-col items-between justify-center px-paddingX gap-4 relative z-50">
      <p class="text-xl text-center">Desenvolvido por Silvio César</p>
      <div class="flex items-center justify-center space-x-4 text-2xl">
        <a href="https://www.instagram.com/silviocesarsf/" target="_blank">
          <AiOutlineInstagram />
        </a>
        <a href="https://www.linkedin.com/in/silviocesarsf/" target="_blank">
          <AiFillLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
