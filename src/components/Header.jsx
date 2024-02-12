import React from "react";
import "../styles.css";
import armazemLogo from "../assets/armazemlogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className={"navigation"}>
        <Link to={"/"} className={"navigation-logo"}>
          <img src={armazemLogo} alt="Armazém Logo" width={"64px"} />
          <p>rmazém das Cestas</p>
        </Link>
        <ul className={"nav-menu"}>
          <li className={"nav-item"}>
            <a href="/">Início</a>
          </li>
          <Link to={"/sobre"} className="nav-item">
            Sobre nós
          </Link>
          <Link to={"/produtos"} className={"nav-item"}>
            Produtos
          </Link>
        </ul>
        <div className={"menu"}>
          <span className={"bar"}></span>
          <span className={"bar"}></span>
          <span className={"bar"}></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
