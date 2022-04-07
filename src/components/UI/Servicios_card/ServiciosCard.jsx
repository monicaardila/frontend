import React from "react";
import"./servicios.css" 

export const ServiciosCard = ({ title, style_card, precio, capacidad, soporte, panel }) => {
    return (
        <div className={style_card} >{title}
            <div className="container_ser">
                <div className="container_precio">
                    <p className="precio">¢ {precio} <p className="texto_precio">por SMS</p> </p>
                </div>
                <hr className="hrCard"/>
                <p>{capacidad}  Sms </p>
                <hr className="hrCard"/>
                <p> Servicio de la API </p>  
                <hr className="hrCard"/>
                <p>{panel} Panel administrativo </p>
                <hr className="hrCard"/>
                <p>{soporte} soporte</p>
            </div>
        </div>
    )
}