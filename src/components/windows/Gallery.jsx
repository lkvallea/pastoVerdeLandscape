import React, { useState } from "react";
import "../../assets/styles/gallery.css";

export default function gallery() {
  const gallery = [
    "example_1.jpeg",
    "example_2.jpeg",
    "example_3.jpeg",
    "example_4.jpeg",
    "example_5.jpeg",
    "example_1.jpeg",
    "example_2.jpeg",
    "example_3.jpeg",
    "example_4.jpeg",
    "example_5.jpeg",
    "example_1.jpeg",
    "example_2.jpeg",
    "example_3.jpeg",
    "example_4.jpeg",
    "example_5.jpeg",
  ];

  return (
    <div className="gallery-wrapper">
      {gallery.map((photo) => (
        <div className="gallery-content">
          <img src={`/images/${photo}`} alt={photo} loading="lazy" />
        </div>
      ))}
    </div>
  );
}
