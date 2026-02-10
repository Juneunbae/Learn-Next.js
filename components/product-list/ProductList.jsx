import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./ProductList.module.css";
import Link from "next/link";
import { fetchProducts } from "@/api";

function ProductList() {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetchProducts().then((response) => {
      setProducts(response.data);
    });
  }, []);

  console.log(products);

  return (
    <ul>
      {products &&
        products.map((product) => {
          return (
            <li key={product.id} className={styles.item}>
              <Link href={`/products/${product.id}`}>
                <div>
                  <Image
                    alt={product.name}
                    src={product.imageUrl}
                    width={300}
                    height={250}
                  ></Image>
                </div>
                <div className={styles.name}>{product.name}</div>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}

export default ProductList;
