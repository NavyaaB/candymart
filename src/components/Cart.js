import React from "react";

function Cart({ cart, setAddToCart }) {
  console.log("cart", cart);

  const cartItems = cart.map((item) => (
    <tr>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.quantity}</td>
    </tr>
  ));

  return (
    <div>
      <div className='store_container'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>{cartItems}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Cart;
