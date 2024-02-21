import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";
import "../styles/custom-styles.css";

import { products } from "../data/products";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark txt-bold"
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({reset, increaseBy, count}) => (
          <>
            <ProductImage className="custom-image" />
            <ProductTitle className="txt-bold" />
            <ProductButtons className="custom-buttons" />

            <button onClick={reset}>Reset</button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            <button onClick={() => increaseBy(+2)}>+2</button>
            <span>{count}</span>
            
          </>
        )}
      </ProductCard>
    </div>
  );
};
