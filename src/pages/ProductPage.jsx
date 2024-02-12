import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./styles/ProductPageStyles.css";
import BasketType from "./Products/BasketType";
import ProductList from "./Products/ProductList";
import Observation from "./Products/Observation";
import SubmitButton from "./Products/SubmitButton";
import ClientInformation from "./Products/ClientInformation";

import {yupResolver} from "@hookform/resolvers/yup";
import { formValidationSchema } from "../helpers/formValidation";
import { sendWhatsappMessage } from "../helpers/sendWhatsappMessage";


const ProductPage = () => {
  const {register, handleSubmit, reset, formState: {errors} } = useForm({
    resolver: yupResolver(formValidationSchema)
  });
  const [availableProducts, setAvailableProducts] = useState([]);

  const onSubmit = data => {
    if (data) {
      const messageData = {};
      const specificKeys = ["Açucar", "Café", "Sal", "Tempero verde", "Pipoca", "Refrigerante", "Salgadinho", "Panetone", "Chocolate Amargo", "Chocolate Branco", "Chocolate Milka", "Cerjeva gourmet", "Arroz", "Feijão", "Massa", "Tempero", "Carne moída", "Frango", "Sal", "Açucar"];

      // Adiciona apenas os dados com valores diferentes de null e undefined
      for (const key in data) {
        if (data[key] !== null && data[key] !== undefined) {
          messageData[key] = data[key];
        }
      }

      const products = {};

      // Cria um objeto novo para enviar na função, onde irá exibir só os produtos escolhidos
      specificKeys.forEach(key => {
        if (messageData[key] !== null && messageData[key] !== undefined) {
            products[key] = key;
        }
      });

      sendWhatsappMessage(messageData, products);
    }
  };

  return (
    <div className={'productPageContainer'}>
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Informações do cliente */}
        <ClientInformation
          register={register}
          errors={errors}
        />

        {/* Tipo de cesta */}
        <BasketType
          register={register}
          availableProducts={availableProducts}
          setAvailableProducts={setAvailableProducts}
          errors={errors}
        />

        {/* Lista de produtos */}
        <ProductList
          register={register}
          availableProducts={availableProducts}
          errors={errors}
          />

        {/* Observações */}
        <Observation
          register={register}
          errors={errors}
          />

        {/* Enviar */}
        <SubmitButton />
      </form>
    </div>
  );
};

export default ProductPage;
