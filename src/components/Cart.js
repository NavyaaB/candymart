import React from "react";
import HexCard from "./HexCard";
import holidaysData from "../data/holidays";

function Cart({ cart, setAddToCart }) {
  const cartItems = cart?.map((item) => (
    <tr key={item.name}>
      <td>{item.name}</td>
      <td>${item.price}</td>
      <td>{item.quantity}</td>
    </tr>
  ));

  return (
    <>
      <div className='cart_container'>
        <h3 className='order_id'>
          Order Id: {Math.floor(Math.random() * 100)}
        </h3>
        <div className='order_date'>
          Order Date: {new Date().toLocaleDateString()}
        </div>
        <h4>List of Items</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          {cart?.length === 0 ? (
            <tbody>
              <tr>
                <td>{"Cart is empty"}</td>
                <td>$0</td>
                <td>0</td>
              </tr>
            </tbody>
          ) : (
            <tbody>{cartItems}</tbody>
          )}
        </table>
      </div>
      <div className='hexContainer'>
        {holidaysData.map((day) => (
          <HexCard key={day.id} id={day.id} title={day.name} />
        ))}
      </div>
    </>
  );
}

export default Cart;
