import React from "react";
function Home(){
    return (
        <div className="Home">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                        <img
                        class="img-fluid rounded mb-4 mb-lg-0"
                        src="https://images.pexels.com/photos/7653600/pexels-photo-7653600.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                        alt=""
                        />
                    </div>
                <div class="col-lg-5">
                    <h1 class="font-weight-light">Inicio</h1>
                <p>
                DIGITURNO SMS MADS ofrece mediante su web service, la opción para que
                las empresas puedan construir sus propias soluciones, en donde DIGITURNO
                SMS MADS ofrecerá el gateway de sms con patrones definidos y necesarios
                para que puedan construir herramientas completas y robustas.

                </p>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Home;