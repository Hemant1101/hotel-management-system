import React from "react";

function Hero(props) {
  return (
    <div className="hero">
      <img
        className="heroimg"
        src={process.env.PUBLIC_URL + props.imgaddress}
        alt="hero"
      />
      <div className="content">
        <h1 className="h1">heading{props.heading}</h1>
        <h3 className="h3">subtitle{props.subtitle}</h3>
        <p className="p">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex quasi
          animi quam ad aliquid praesentium voluptates laborum maiores dolorem
          fugit obcaecati fuga ut deserunt.{props.para}
        </p>
      </div>
    </div>
  );
}

export default Hero;
