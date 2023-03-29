import propTypes from "prop-types";
import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Jumbotron />
      <Card
        imageCard="https://via.placeholder.com/500x325.png"
        cardTitle="Card title"
        cardText=" This is a wider card with supporting text below as a natural lead
        to additional content This card has even longer content than the
        first to show that equal height action"
      />
      <Footer copy="Copyright your website 2023" />
    </div>
  );
};

export default Home;
