import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import FloatingButton from "./FloatingButton";
import Carousel from './ImageCarousel'

const MainSection = () => {
  return (
    <section className={"home"}>
      <div className={"homeText"}>
        <h4 className={"h4Text"}>
          Solicite a sua cesta empresarial com marcas de qualidade!
        </h4>
        <h1 className={"h1Text"}>Customização de cestas</h1>
        <p>
          Faça sua programação semanal, quinzenal ou mensal, entregamos em sua
          empresa todos os materiais de consumos utilizados.
        </p>
        <Link to={"/produtos"} className={"homeButton"}>
          Faça seu pedido
        </Link>
      </div>
      <div className={"homeImage"}>
        <Carousel/>
      </div>
      <FloatingButton />
    </section>
  );
}
export default MainSection;