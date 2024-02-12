import React from "react";
import "./styles/ClientInformationStyles.css";

const ClientInformation = ({register, errors}) => {
  return (
    <div className={"clientContainer"}>
      <div>
        <label>Nome</label>
        <p>{errors.name?.message}</p>
        <input
          id={"name"}
          name={"name"}
          type={"text"}
          {...register("name")}
        />
      </div>

      <div>
        <label>Telefone</label>
        <p>{errors.phone?.message}</p>
        <input
          id={"phone"}
          name={"phone"}
          type={"number"}
          {...register("phone")}
        />
      </div>

      <div>
        <label>E-mail</label>
        <p>{errors.email?.message}</p>
        <input
          id={"email"}
          name={"email"}
          type={"email"}
          {...register("email")}
          />
      </div>
    </div>
  );
};

export default ClientInformation;
