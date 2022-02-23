import React from "react";
import Informacion from "../../Layout/Informacion/Informacion";
import Servicios from "../../Layout/Servicios/Servicios";
import Card from "../../UI/Cards/Card";
import "./home.css"

function Home() {
  return (
    <div className="Home">
      <div class="container_home">
        <Card/>
      </div>
      <div class="container_info">
        <Informacion/>
      </div>
      <div class="container_servicios">
        <Servicios/>
      </div>
    </div>
  );
}
export default Home;
