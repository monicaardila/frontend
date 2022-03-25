import React from "react";
import { NavLink } from "react-router-dom";
import "./acerca_de_nosotros.css";
import { Link } from "react-router-dom"
import { Section } from "../Section/Section";

function Acerca_de_nosotros() {
    return (
        <div>
            <section className="Acerca_de_nosotros">
                <div className="container_navbar">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="Quienes-somos"> Quienes somos</h3>
                            <div className="underline mx-auto">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, exercitationem? Incidunt, vero est. Quam necessitatibus asperiores aut fugiat consequuntur, sint mollitia omnis error obcaecati perspiciatis repellat voluptatibus, non optio sunt!
                                </p>
                                <Link to="/Sobre-nosotros" className="btn btn-warning"> leer mas </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Section
                titulo_section="Vision, Mision y valores corporativos"
                sub_titulo1="Vision"
                texto1="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quod debitis excepturi sed iusto nemo quibusdam qui esse similique harum sunt ipsam suscipit, maiores dolore consequatur illo provident. Modi, molestias."
                sub_titulo2="Mision"
                texto2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quod debitis excepturi sed iusto nemo quibusdam qui esse similique harum sunt ipsam suscipit, maiores dolore consequatur illo provident. Modi, molestias."
                sub_titulo3="Valores corporativos"
                texto3="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quod debitis excepturi sed iusto nemo quibusdam qui esse similique harum sunt ipsam suscipit, maiores dolore consequatur illo provident. Modi, molestias."
            />

        </div>
    );
}
export default Acerca_de_nosotros;