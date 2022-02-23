import React from "react";
import"./servicios.css" 

export const ServiciosCard=({title, style_card}) =>{
    return(
        <div className= {style_card} >{title}</div>
    )
}