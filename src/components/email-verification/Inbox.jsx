import React from "react";

import Logo from "../../assets/logo.png";

const Inbox = () => {
  return (
    <div className="email-verification-container">
      
      <div className="email-verification-image">
        <img src={Logo} alt="logo-img" />
      </div>

      <div className="inbox">
        <h3 className="text-h">Please check your inbox</h3>
        <p className="text-p">Check your email to verify your account.</p>
      </div>

      <div className="stepper-wrapper">
        <div className="stepper-item completed">
          <div className="step-counter"></div>
          <div className="step-name">Verify email</div>
        </div>
        <div className="stepper-item active">
          <div className="step-counter"></div>
          <div className="step-name">Create password</div>
        </div>
        <div className="stepper-item active">
          <div className="step-counter"></div>
          <div className="step-name">Organize data</div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
