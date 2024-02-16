import { useContext, CSSProperties } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export interface Props {
  img?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ img = null, className, style }: Props) => {
  const { product } = useContext(ProductContext);
  const image = img ?? product.img ?? noImage;
  return (
    <img
      className={`${styles.productImg} ${className}`}
      style={style}
      src={image}
      alt="Product"
    />
  );
};
