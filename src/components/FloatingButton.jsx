// FloatingButton.js
import React from 'react';
import { FaWhatsapp  } from 'react-icons/fa';
import './styles/FloatingButton.css'


const FloatingButton = () => {

  const handleButtonClick = () => {
    const phoneNumber = 47988800836;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá, desejo obter mais informações sobre as cestas do *Armazém das Cestas*.`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="floating-button" onClick={handleButtonClick}>
      <FaWhatsapp className="whatsapp-icon"/>
    </div>
  );
};

export default FloatingButton;
