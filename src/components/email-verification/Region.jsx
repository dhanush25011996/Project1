import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { countryData } from "../../utils/countryData";
import { Link } from "react-router-dom";

const Region = () => {
  const [country, setCountry] = useState("");

  const handleCountryChange = async (e) => {
    try {
      const selectedCountry = e.target.value;
      const response = await fetch("https://backendlocalhost.com");
      if (response.ok) {
        console.log("Country data fetched successfully");
      } else {
        console.error("Failed to fetch country data");
      }
      setCountry(selectedCountry);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleRegionSave = async () => {
    try {
      const response = await fetch("https://backendlocalhost.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ region: country })
      });

      if (response.ok) {
        console.log("Region saved successfully");
      } else {
        console.error("Failed to save region");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="email-verification-container">
      <div className="email-verification-image">
        <img src={Logo} alt="logo-img" />
      </div>

      <div className="inbox">
        <h3 className="text-h">Tell us where to store the data</h3>
        <p className="text-p">
          The data center does not have to match your physical <br /> location.
          By selecting a non-US based data region, <br /> you will incur an
          additional $0.05 ingested if <br /> you upgrade your plan to a paid
          plan.
        </p>
      </div>

      <div className="form-div">
        <form className="form-control">
          <label htmlFor="">Data Region</label>
          <select value={country} onChange={handleCountryChange}>
            {countryData.map((country) => (
              <option key={country.id} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
          <Link to={"/"} onClick={handleRegionSave} className="btn">
            Save
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
        <div className="stepper-item completed">
          <div className="step-counter"></div>
          <div className="step-name">Organize data</div>
        </div>
      </div>
    </div>
  );
};

export default Region;