import React from "react";
import "./styles/ProductListStyles.css";

const ProductList = ({ register, availableProducts, errors }) => {
  return (
    <div className={"productListContainer"}>
      <label>Produtos</label>
      {availableProducts.length < 1 && (
        <p>Sua lista de produtos aparecerá aqui.</p>
      )}
      <>
        {availableProducts.map((product) => (
          <div key={product} className={"productContainer"}>
            <input
              type="radio"
              value={product}
              {...register(product)}
            />
            <p>{product}</p>
          </div>
        ))}
      </>
    </div>
  );
};

export default ProductList;