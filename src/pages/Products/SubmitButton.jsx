import React from "react";
import "./styles/SubmitButtonStyles.css";
import whatsappIcon from "../../assets/wppicon.png";

const SubmitButton = () => {
  return (
    <div className="submitButtonContainer">
      <button type="submit" className="whatsappButton">
        <img src={whatsappIcon} alt="WhatsApp" />
        Solicitar
      </button>
    </div>
  );
};

export default SubmitButton;
