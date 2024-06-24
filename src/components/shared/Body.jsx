import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../windows/HomePage"; // Asegúrate de que la ruta y el nombre del archivo coincidan
import Services from "../windows/Services";
import Opinions from "../windows/Opinions";
import Calculator from "../windows/Calculator";
import Gallery from "../windows/Gallery"

export default function Body() {
  return (
    <main className="body-wrapper">
      <Routes>
        {/* Ruta para la página de inicio */}
        <Route path="/" element={<HomePage />} />
        {/* Ruta para la página de inicio */}
        <Route path="/home" element={<HomePage />} />
        {/* Ruta para la página de SERVICIOS */}
        <Route path="/services" element={<Services />} />
        {/* Ruta para la página de Galery */}
        <Route path="/gallery" element={<Gallery />} />
        {/* Ruta para la página de Opinions */}
        <Route path="/opinions" element={<Opinions />} />
        {/* Ruta para la página de Calculator */}
        <Route path="/calculator" element={<Calculator />} />
        {/* Ruta para redirigir cualquier ruta no definida a la página de inicio */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
}
