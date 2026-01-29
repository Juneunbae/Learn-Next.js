import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";

function ProductList() {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get("http://localhost:4000/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  console.log(products);

  return (
    <ul>
      {products &&
        products.map((product) => {
          return (
            <li key={product.id}>
              <div>
                <Image
                  alt={product.name}
                  src={product.imageUrl}
                  width={300}
                  height={250}
                ></Image>
              </div>
              <div>{product.name}</div>
              <div>{product.price}</div>
            </li>
          );
        })}
    </ul>
  );
}

export default ProductList;
