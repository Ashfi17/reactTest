import React, { useState, useEffect } from "react";
import "../styles/Intro.css";
import ManWithCertificate from "../assets/Group 9.svg";
import Clouds from "../assets/Group 24.svg";
import computerMan from "../assets/computer-man.svg";
import numberTwo from "../assets/number-two.svg";
import businessMan from "../assets/business-man.svg";
import numberOne from "../assets/number-one.svg";
import paperMan from "../assets/paper-man.svg";
import numberThree from "../assets/number-three.svg";

import { connect } from "react-redux";

const Intro = (props) => {
  // destructuring the useState hook, steps is the state variable that will contain the object from reducer
  const [steps, setSteps] = useState({});

  //here we are fetching the workingSteps objet from reducer and setting it to the state variable (steps)
  useEffect(() => {
    const stepsData = props.workingSteps ? props.workingSteps : null;
    setSteps(stepsData);
  }, [props.workingSteps]);

  return (
    <div>
      <ul className="Navbar">
        <li className="Navbar-links Navbar-brand">
          <a href="#brand-name">CERTILITE</a>
        </li>
        <li className="Navbar-links">
          <button className="login-signup-nav-button">Login / Sign up</button>
        </li>
        <li className="Navbar-links">
          <a href="#FAQ">FAQ</a>
        </li>
        <li className="Navbar-links">
          <a href="#How-We-Work">How We Work</a>
        </li>
      </ul>

      <div className="intro-section">
        <div className="certificate-text-section">
          <p className="big-text">
            AUTHENTICATE
            <br />
            YOUR CERTIFICATES
            <br />
            IN LESS THAN A<br />
            MINUTE
          </p>
          <p className="small-text">
            Certilite is a blockchain based certificate verification and
            authentication product for your valuable certifications obtained
            from legit institutions
          </p>
          <button>Register for free</button>
        </div>
        <div className="image-section">
          <img src={Clouds} alt="clouds" />
          <img src={ManWithCertificate} alt="Man with certificate" />
        </div>
      </div>
      <div className="how-we-work-section">
        <h2 style={{ color: "#272343", textAlign: "center" }}>HOW IT WORKS </h2>
        <div className="working-steps-container">
          <div className="left-section">
            <img src={computerMan} alt="computerMan" />
            <img src={numberTwo} alt="numberTwo" className="step-number" />

            <p className="step-instruction">{steps.step2}</p>
            <p className="step-small-text">
              {props.workingSteps.stepSmallText}
            </p>
            <img
              src={businessMan}
              alt="businessMan"
              className="male-person-image"
            />
          </div>
          <div className="vertical-line">
            <div className="outer-circle">
              <div className="inner-circle"></div>
            </div>
          </div>
          <div className="right-section">
            <img src={numberOne} alt="numberOne" className="step-number" />
            <p className="step-instruction">{steps.step1}</p>
            <p className="step-small-text">
              {props.workingSteps.stepSmallText}
            </p>
            <img src={paperMan} alt="paperMan" className="male-person-image" />

            <img src={numberThree} alt="numberThree" className="step-number3" />
            <p className="step-instruction">{steps.step3}</p>
            <p className="step-small-text">
              {props.workingSteps.stepSmallText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  workingSteps: state.introReducer.workingSteps,
});

export default connect(mapStateToProps)(Intro);
