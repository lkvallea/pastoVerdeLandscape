import "../../assets/styles/calculator.css";
import React, { useState } from "react";


export default function calculator() {
  const MAX_LENGTH_INPUTS = 24;
  const MIN_AREA = 1;
  const MAX_AREA = 200;
  const STEP_AREA = 1;
  const services = ["Services 1", "Services 2", "Services 3", "Services 4"];
  const cities = ["City 1", "City 2", "City 3", "City 4"];
  const [calculatorTotal, setCalculatorTotal] = [0, 0];

  const [selectedOptionService, setSelectedOptionService] = useState("");
  const [selectedOptionCity, setSelectedOptionCity] = useState("");

  // Función para manejar el cambio de opción
  const handleSelectChangeServices = (event) => {
    setSelectedOptionService(event.target.value); // Actualiza el estado con la opción seleccionada
  };
  const handleSelectChangeCity = (event) => {
    setSelectedOptionCity(event.target.value); // Actualiza el estado con la opción seleccionada
  };
  return (
    <div className="calculator-wrapper">
      <div className="calculator-container">
        <div className="calculator-tittle">
          <img
            src="./images/icon_calculator_purple.png"
            alt="icon-calculator"
          />
          <div className="calculator-tittle-text">
            <h3>Calculator</h3>
            <div>Lorem ipsum</div>
          </div>
        </div>
        <form id="calculator-form">
          <div className="calculator-inputs">
            <div className="calculator-input">
              <label>Proyect Name:</label>
              <input type="text" maxLength={MAX_LENGTH_INPUTS} />
            </div>
            <label className="calculator-input">
              Project Type:
              <select
                touchUi={false}
                className="select select-calculator type"
                value={selectedOptionService}
                onChange={handleSelectChangeServices}
              >
                <option key="na" value="">
                  Pick an option
                </option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </label>
            <label className="calculator-input">
              City:
              <select
                className="select select-calculator city"
                value={selectedOptionCity}
                onChange={handleSelectChangeCity}
              >
                <option key="na" value="">
                  Pick an option
                </option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </label>
            <div className="calculator-input">
              <label>Area:</label>
              <input
                type="number"
                min={MIN_AREA}
                max={MAX_AREA}
                step={STEP_AREA}
              />
            </div>
            <div className="calculator-buttons">
              <input type="button" className="btn btn-contact" />
              <input type="button" className="btn btn-calcular" />
            </div>
          </div>
          <div className="calculator-total">
            <p>
              Budget is arround CAD <span>${calculatorTotal[0]}</span>
              to <span>${calculatorTotal[1]}</span>.
            </p>
            <div className="calculator-red-letters">
              Lorem, ipsum dolor sit amet consectetur
            </div>
          </div>
        </form>
        <div className="calculator-foot-text">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing eli psum dolor
            sit amet consectetur, adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
}
