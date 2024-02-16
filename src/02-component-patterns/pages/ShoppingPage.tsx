import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";

import "../styles/custom-styles.css";

const product = {
  id: "123",
  title: "Coffee Mug",
  img: "../public/coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product} className="bg-dark txt-bold">
          <ProductImage className="custom-image" />
          <ProductTitle className="txt-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark txt-bold">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="txt-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>
        <ProductCard
          product={product}
          className="bg-dark txt-bold"
          style={{
            backgroundColor: "lightgray",
          }}
        >
          <ProductImage
            className="custom-image"
            style={{
              boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.2)",
            }}
          />
          <ProductTitle
            className="txt-bold"
            style={{
              fontSize: "1.5rem",
            }}
          />
          <ProductButtons
            className="custom-buttons"
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          />
        </ProductCard>
      </div>
    </div>
  );
};
