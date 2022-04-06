import React from "react";
import porque from "../../../Images/porque1.jpg"
import { Section } from "../Section/Section";
import { Slider_interno } from "../Slider_interno/Slider_interno";
import "./porque_nosotros.css"
const Porque_nostros = () => {
    return (
        <div className="porque_nosotros">
            <Section
                titulo_section="Porque con nosotros"
                sub_titulo1="Soporte 24/7"
                texto1="Nuestro sistema cuenta con soporte 24/7  que le permite al usuario contar con soluciones en tiempo real, respaldado por un equipo capacitado, acompañando al usuario en cada una de sus consultas. "
                sub_titulo2="Web service"
                texto2="El Web Service, permite que mediante el uso de la API DIGITURNO SMS MADS, el usuario pueda personalizar sus servicios visualizando el detalle de los recursos disponibles, y midiendo la gestion de sus indicadores."
                sub_titulo3="Panel administrativo"
                texto3="El panel administrativo o panel de control muestra al usuario el servcio activo y cada uno de los recursos que configuro previamente usando el web service y la API DIGITURNOS SMS MADS."
            />
        </div>
    );
}
export default Porque_nostros