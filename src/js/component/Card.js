import React from "react";


export default function Card(props) {
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
}
