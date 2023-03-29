import React from "react";

export default function Footer(props){
    return (
      <footer className="footer mt-2 py-3 bg-dark">
        <div className="container text-center">
          <span className="text-muted">{props.copy}</span>
        </div>
      </footer>
    );
  };