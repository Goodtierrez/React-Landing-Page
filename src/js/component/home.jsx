import propTypes from "prop-types";
import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark ">
      <div className="container-fluid">
        <a className="navbar-brand ms-1 text-white" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto me-1">
            <a
              className="nav-link active text-white"
              aria-current="page"
              href="#"
            >
              Home
            </a>
            <a className="nav-link text-white" href="#">
              About
            </a>
            <a className="nav-link text-white" href="#">
              Services
            </a>
            <a className="nav-link text-white" href="#">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Jumbotron = () => {
  return (
    <div className="p-5 mb-4 bg-light rounded-3 mt-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Custom jumbotron</h1>
        <p className="col-md-8 fs-4">
          Using a series of utilities, you can create this jumbotron, just like
          the one in previous versions of Bootstrap. Check out the examples
          below for how you can remix and restyle it to your liking.
        </p>
        <button className="btn btn-primary btn-lg" type="button">
          Example button
        </button>
      </div>
    </div>
  );
};

const Card = (props) => {
  return (
    <div className="card-group">
      <div className="card">
        <img src={props.imageCard} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center">{props.cardTitle}</h5>
          <p className="card-text text-center">{props.cardText}</p>
        </div>

        <div className="card-footer d-flex justify-content-center">
          <button className="btn btn-primary ">Button</button>
        </div>
      </div>
      <div className="card">
        <img src={props.imageCard} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center">{props.cardTitle}</h5>
          <p className="card-text text-center">{props.cardText} </p>
        </div>

        <div className="card-footer d-flex justify-content-center">
          <button className="btn btn-primary">Button</button>
        </div>
      </div>
      <div className="card">
        <img src={props.imageCard} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center">{props.cardTitle}</h5>
          <p className="card-text text-center">{props.cardText}</p>
        </div>

        <div className="card-footer d-flex justify-content-center">
          <button className="btn btn-primary">Button</button>
        </div>
      </div>
      <div className="card">
        <img src={props.imageCard} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center">{props.cardTitle}</h5>
          <p className="card-text text-center">{props.cardText}</p>
        </div>

        <div className="card-footer d-flex justify-content-center">
          <button className="btn btn-primary">Button</button>
        </div>
      </div>
    </div>
  );
};

const Footer = (props) => {
  return (
    <footer className="footer mt-2 py-3 bg-dark">
      <div className="container text-center">
        <span className="text-muted">{props.copy}</span>
      </div>
    </footer>
  );
};

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
