import React, { useState } from "react";
import Product from "./Product";
import productsData from "../data/productsData";

export default function Store() {
  const [cart, setAddToCart] = useState([]);
  const [printItems, setPrintItems] = useState(false);
  let [totalPrice, setTotalPrice] = useState(0);

  const handleAddToCart = (item) => {
    totalPrice += item.price;

    if (cart.some((cartItem) => cartItem.id === item.id)) {
      setAddToCart((cart) =>
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        )
      );
      return;
    }

    setAddToCart((cart) => [...cart, { ...item, quantity: 1 }]);
    setTotalPrice(totalPrice);
    console.log(cart, totalPrice);
  };

  const list = productsData.map((product) => (
    <Product
      key={product.id}
      name={product.name}
      price={product.price}
      onClick={() => handleAddToCart(product)}
    />
  ));

  const printItemsDisplay = cart.map((item) => (
    <tr>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.quantity}</td>
    </tr>
  ));
  console.log(cart);
  return (
    <>
      <button className='cart_image cart' onClick={() => setPrintItems(true)}>
        <img
          className='cart_button'
          src='https://www.phoca.cz/images/projects/phoca-cart-r.svg'
          alt='cart_image'
        />
      </button>

      <div className='store_container'>{list}</div>
      {printItems ? (
        <div className='store_container'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>{printItemsDisplay}</tbody>
          </table>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
