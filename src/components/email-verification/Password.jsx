import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Password = () => {
  const [password, setPassword] = useState("");

  const handlePasswordSubmit = async () => {
    try {
      const response = await fetch("https://backendlocalhost.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ password })
      });

      if (response.ok) {
        console.log("Password submitted successfully");
      } else {
        console.error("Failed to submit password");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="email-verification-container">
      <div className="email-verification-image">
        <img src={Logo} alt="logo-img" />
      </div>

      <div className="inbox">
        <h3 className="text-h">Create your password</h3>
        <p className="text-p">
          Make your password poetic: Think of a poem that <br /> have memorized
          or that has a strong meaning. Take a <br /> line from it and use that
          as your password.
        </p>
      </div>

      <div className="form-div">
        <form className="form-control">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Link to={"/region"} onClick={handlePasswordSubmit} className="btn">
            Submit
          </Link>
        </form>
      </div>

      <div className="stepper-wrapper">
        <div className="stepper-item completed">
          <div className="step-counter"></div>
          <div className="step-name">Verify email</div>
        </div>
        <div className="stepper-item completed">
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

export default Password;
