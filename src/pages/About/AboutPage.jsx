import {React, useState} from "react";
import FloatingButton from "../../components/FloatingButton";
import "./styles/AboutPageStyle.css"
import {motion} from "framer-motion"
import image1 from "../../assets/img001.jpg"
import image2 from "../../assets/img002.jpg"
import image3 from "../../assets/img003.jpg"

const images = [image1, image2, image3];

const AboutPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (

  <>
  <section className={"aboutContainer"}>
    <div className="aboutSection">
    <h2 className="aboutTitle">Sobre Nós</h2>
    <p>Somos o Armazém das Cestas Básicas, atendendo toda a região da grande Joinville com o fornecimento de cestas básicas, cestas de Natal e outros serviços. Nosso foco está exclusivamente em atender pessoas jurídicas.</p>
    <p>Nossa abordagem de atendimento visa preservar a cultura já existente na empresa. Não trabalhamos com nenhum modelo padrão de cestas, mas sim orçamos o modelo já implantado em sua empresa, garantindo assim a personalização de acordo com suas necessidades.</p>
    <p>Oferecemos preços competitivos, com garantia de valores fixos por pelo menos seis meses e prazos de 30 dias para pagamento no boleto. Estamos comprometidos em proporcionar uma experiência de compra conveniente e vantajosa para sua empresa.</p>
    <p>Estamos à disposição de sua empresa para o orçamento da cesta já implantada. Para isso, gostaríamos de receber sua lista de produtos na página de produtos.</p>
    </div>

    <div className="aboutSection">
    <h3 className="companyInfoTitle">Dados da Empresa</h3>
    <div className="aboutSectionContent">
            <p className="companyInfo">Armazém Comércio de Cestas Básicas Ltda.<br />
              Rua Dalvina Libania Prochnow, 591<br />
              Bairro Nova Brasília<br />
              CEP 89.214-550<br />
              Joinville-SC</p>
          </div>
    </div>
    
    
  </section>
  <FloatingButton />
  </>

  );
};

export default AboutPage;