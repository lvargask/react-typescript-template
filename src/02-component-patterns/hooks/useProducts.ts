import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProducts = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const isMounted = useRef(false);
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(initialValues?.count || value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    // propiedades
    counter,
    isMaxcountReached:
      !!initialValues?.count && initialValues.count === initialValues.maxCount,
    maxCount: initialValues.maxCount,

    // metodos
    increaseBy,
    reset
  };
};
