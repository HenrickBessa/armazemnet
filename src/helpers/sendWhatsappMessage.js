export const sendWhatsappMessage = (data, products) => {
    const phoneNumber = 55997217170;

    // Monta a mensagem com os dados recebidos
    const message = `Olá, meu nome é ${data.name || 'N/A'} e gostaria de solicitar uma Cesta corporativa.\n
*Telefone*: ${data.phone || 'N/A'}\n
*Email*: ${data.email || 'N/A'}\n
*Observação*: ${data.observation || 'Sem observação'}\n
*Produtos selecionados*: ${getFormattedProductList(products) || 'Nenhum produto selecionado.'}.`;

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
};

const getFormattedProductList = (products) => {
    const productList = Object.entries(products).map(([key, value]) => `${value}`);
    return productList.join(', ');
};
