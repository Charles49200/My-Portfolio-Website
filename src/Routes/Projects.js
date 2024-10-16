import React from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"; 
import HeroImg2 from "../Components/HeroImg2"; 
import PricingCard from '../Components/PricingCard';
import WorkCard from '../Components/WorkCard';

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading = "PROJECTS." text = "Some Of My Recent Works"/>
      <WorkCard/> 
      <PricingCard/>
      <Footer />
    </div>
  )
}

export default Projects