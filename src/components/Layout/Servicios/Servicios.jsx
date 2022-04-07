import React from "react";
import {ServiciosCard} from "../../UI/Servicios_card/ServiciosCard"
import { Button } from "../../UI/Buttons/Button";
import"./servicios.css"
function servicios(){
    return(
    <div className="container_servicio" id="Servicios">
        <h2 className="title">PLANES</h2>
        <div className="servicios">
            <div className="Servicio">
                <ServiciosCard
                title= "Basico"
                style_card= "styleCard"
                precio="0.5"
                capacidad= "5000"
                soporte="24/7"

                />
                
                <Button
                nomClas= "btn-buy"
                textButton= "Comprar"
                />
            </div>
        
            <div className="Servicio">
                <ServiciosCard
                title= "Profesional"
                style_card= "styleCard"
                precio="0.4"
                capacidad= "15000"
                soporte="24/7"

                />
                <Button
                nomClas= "btn-buy"
                textButton= "Comprar"
                />
            </div>

            <div className="Servicio">
                <ServiciosCard
                title= "Master"
                style_card= "styleCard"
                precio="0.3"
                capacidad= "ILIMITADO"
                soporte="247/"
                />
                <Button
                nomClas= "btn-buy"
                textButton= "Comprar"
                />
            </div>

        </div> 
    </div>
    )
}
export default servicios;
