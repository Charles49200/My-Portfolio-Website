import React from 'react';
import Navbar from "../Components/Navbar";
import HeroImg from "../Components/HeroImg";
import Footer from "../Components/Footer"; // Capitalized import
import WorkCard from '../Components/WorkCard';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <WorkCard/>
      <Footer /> {/* Correctly rendering the Footer component */}
    </div>
  );
}

export default Home;