import React from "react";
import {Button} from"../Buttons/Button"
import"./card.css"
import"../../../App.css"
function card(){
    return (
        <div className="card_home">
            <div className="container_inf">
                <h2>Disfruta de tu libertad</h2>
                <Button
                    styleButton = "btn-enviar"
                    textButton= "Conocer mas"
                /> 
            </div>
        </div>
    )
}
export default card;