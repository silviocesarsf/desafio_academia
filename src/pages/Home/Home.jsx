import React from "react";
import ContactSection from "../../components/Sections/ContactSection";
import DifferentialsSection from "../../components/Sections/DifferentialsSection";
import HeroSection from "../../components/Sections/HeroSection";
import JoinSection from "../../components/Sections/JoinSection";
import Plans from "../../components/Sections/Plans";
import Wrapper from "../../components/Wrapper/Wrapper";

const Home = () => {
  return (
    <Wrapper>
      <HeroSection />
      <DifferentialsSection />
      <Plans />
      <JoinSection />
      <ContactSection />
    </Wrapper>
  );
};

export default Home;
