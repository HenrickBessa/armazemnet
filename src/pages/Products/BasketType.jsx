import React from "react";
import "./styles/BasketTypeStyles.css";

const BasketType = ({ register, setAvailableProducts, errors }) => {

  const handleBasketTypeChange = (selectedType) => {
    switch (selectedType) {
      case "Cesta corporativa":
        setAvailableProducts([
          "Açucar",
          "Café",
          "Sal",
          "Tempero verde",
          "Pipoca",
          "Refrigerante",
          "Salgadinho",
        ]);
        break;
      case "Cesta de natal":
        setAvailableProducts([
          "Panetone",
          "Chocolate Amargo",
          "Chocolate Branco",
          "Chocolate Milka",
          "Cerjeva gourmet",
        ]);
        break;
      case "Cesta básica":
        setAvailableProducts([
          "Arroz",
          "Feijão",
          "Massa",
          "Tempero",
          "Carne moída",
          "Frango",
          "Sal",
          "Açucar",
        ]);
        break;
      default:
        setAvailableProducts([]);
    }
  };

  return (
    <div className={"basketContainer"}>
      <label>Tipo de Cesta</label>
      {<p>{errors?.basketSelect?.message}</p>}
      <select
        {...register("basketSelect")}
        name={"basketSelect"}
        id={"basketSelect"}
        onChange={(e) => handleBasketTypeChange(e.target.value)}
      >
        <option value={"0"}>&nbsp;&nbsp;&nbsp;Selecione o tipo de cesta</option>
        <option value={"Cesta corporativa"}>&nbsp;&nbsp;&nbsp;Cesta empresarial</option>
        <option value={"Cesta de natal"}>&nbsp;&nbsp;&nbsp;Cesta de natal</option>
        <option value={"Cesta básica"}>&nbsp;&nbsp;&nbsp;Cesta básica</option>
      </select>
    </div>
  );
};

export default BasketType;
