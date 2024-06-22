import React from "react";

export default function service({ service,selectSquereOrder }) {
  const {
    id,
    name,
    facebook,
    txt_tittle_services_1,
    txt_tittle_services_2,
    txt_services_1,
    txt_services_2,
    picture_1,
    picture_2,
    u_p,
    icon,
  } = service;


  const isEven = id % 2 === 0;
  const order = selectSquereOrder(id);

  return (
    <div className={`services-content ${order}`}>
    <div className="services-row">
      <div className="service-head-item-pic">
        <img src={`/images/${facebook}`} alt={name} loading="lazy" />
      </div>
      <div className="service-head-item-text">
        <h1>{name}</h1>
      </div>
    </div>
    {isEven ? (
      <>
        <div className="services-row">
          <div className="service-squeres">
            <div className="service-squere-text">
              <h3>{txt_tittle_services_1}</h3>
              <img src={`/images/${icon}`} alt="" />
              <p>{txt_services_1}</p>
            </div>
            <div className="service-squere-pic">
              <img src={`/images/${picture_1}`} alt="" />
            </div>
          </div>
        </div>
        <div className="services-row">
          <div className="service-squeres">
            <div className="service-squere-pic">
              <img src={`/images/${picture_2}`} alt="" />
            </div>
            <div className="service-squere-text">
              <h3>{txt_tittle_services_2}</h3>
              <img src={`/images/${icon}`} alt="" />
              <p>{txt_services_2}</p>
            </div>
          </div>
        </div>
      </>
    ) : (
      <>
        <div className="services-row">
          <div className="service-squeres">
            <div className="service-squere-pic">
              <img src={`/images/${picture_2}`} alt="" />
            </div>
            <div className="service-squere-text">
              <h3>{txt_tittle_services_2}</h3>
              <img src={`/images/${icon}`} alt="" />
              <p>{txt_services_2}</p>
            </div>
          </div>
        </div>
        <div className="services-row">
          <div className="service-squeres">
            <div className="service-squere-text">
              <h3>{txt_tittle_services_1}</h3>
              <img src={`/images/${icon}`} alt="" />
              <p>{txt_services_1}</p>
            </div>
            <div className="service-squere-pic">
              <img src={`/images/${picture_1}`} alt="" />
            </div>
          </div>
        </div>
      </>
    )}
  </div>
  );
}
