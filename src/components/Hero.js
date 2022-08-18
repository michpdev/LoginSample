import React from "react";

import logo from "../assets/logo.svg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">Two Marshmallows</h1>

    <p className="lead">
    Bringing travel abroad home, we are creating the world's 
    most exclusive community of K-12 language educators and students.
    </p>
  </div>
);

export default Hero;
