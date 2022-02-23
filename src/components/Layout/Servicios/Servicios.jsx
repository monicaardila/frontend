import React from "react";
import {ServiciosCard} from "../../UI/Servicios_card/ServiciosCard"
import { Button } from "../../UI/Buttons/Button";
import"./servicios.css"
function servicios(){
    return(
    <div className="container_servicios">
        <h2 className="title">SERVICIOS</h2>
        <div className="servicios">
            <div className="Servicio">
                <ServiciosCard
                title= "Servicio_1"
                style_card= "styleCard"
                />
                <Button
                styleButton = "btn-enviar"
                textButton= "Comprar"
                />
            </div>
        
            <div className="Servicio">
                <ServiciosCard
                title= "Servicio_2"
                style_card= "styleCard"
                />
                <Button
                styleButton = "btn-enviar"
                textButton= "Comprar"
                />
            </div>

            <div className="Servicio">
                <ServiciosCard
                title= "Servicio_3"
                style_card= "styleCard"
                />
                <Button
                styleButton = "btn-enviar"
                textButton= "Comprar"
                />
            </div>

            <div className="Servicio">
                <ServiciosCard
                title= "Servicio_4"
                style_card= "styleCard"
                /> <br/>
                <Button
                styleButton = "btn-enviar"
                textButton= "Comprar"
                />
            </div>

            <div className="Servicio">
                <ServiciosCard
                title= "Servicio_5"
                style_card= "styleCard"
                />
                <Button
                styleButton = "btn-enviar"
                textButton= "Comprar"
                />
            </div>
            <div className="Servicio">
                <ServiciosCard
                title= "Servicio_6"
                style_card= "styleCard"
                /> <br/>
                <Button
                styleButton = "btn-enviar"
                textButton= "Comprar"
                />
            </div>
            
        </div> 
    </div>
    )
}
export default servicios;
