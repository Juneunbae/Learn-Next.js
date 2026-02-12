import Image from "next/image";
import React from "react";
import styles from "./CartList.module.css";

export default function CartList({ carts }) {
  const totalPrice = carts.reduce((acc, cur) => {
    return acc + parseFloat(cur.price) || 0;
  }, 0);

  return (
    <div>
      <div>
        <ul>
          {carts.map((cart) => {
            return (
              <li key={cart.id} className={styles.item}>
                <div>
                  <Image
                    src={cart.imageUrl}
                    alt={cart.name}
                    width={75}
                    height={75}
                  ></Image>
                </div>
                <div className={styles.description}>
                  <div>{cart.name}</div>
                  <div>{cart.price}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <p>총 가격: {totalPrice}</p>
        <p>총 수량: {carts.length}</p>
      </div>
    </div>
  );
}
