import "../../assets/styles/services.css";
import { useServices } from "../hooks/useServices";
import Service from '../sections/service'
import Spiral from '../sections/spiral_services'
import React, { useState } from "react";

export default function services() {

    const {   data,
      selectSquereOrder,
      handleNextService,
      handlePrevService} = useServices()

  return (
    <div className="services-wrapper">
      <div className="services-container">
        {data.map((service) => (
                <Service
                    key={service.id}
                    service={service}
                    selectSquereOrder={selectSquereOrder}
                />
            ))}
      </div>
      <Spiral
     
      />
    </div>
  );
}
