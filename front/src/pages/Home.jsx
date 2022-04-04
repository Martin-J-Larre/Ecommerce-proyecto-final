import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import CategoriesWinter from "../components/CategoriesWinter";
import CategoriesSummer from "../components/CategoriesSummer";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Slider from "../components/Slider";

const Home = (type) => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Slider />
      {type.type === "summer" ? <CategoriesSummer/> : type.type === "winter" ? <CategoriesWinter/> : <Categories/>}
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
