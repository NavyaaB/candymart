import React, { useState } from "react";
import categoryData from "../data/categoryData";

import { useParams } from "react-router-dom";

export default function Product({ cart, setAddToCart }) {
  const params = useParams();
  const filterBy = params.category_type;
  //const [cart, setAddToCart] = useState([]);
  let [totalPrice, setTotalPrice] = useState(0);

  const handleAddToCart = (detail) => {
    // console.log("details", detail);
    totalPrice += detail.price;

    if (cart.some((cartItem) => cartItem.id === detail.id)) {
      setAddToCart((cart) =>
        cart.map((cartItem) =>
          cartItem.id === detail.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        )
      );
      return;
    }

    setAddToCart((cart) => [...cart, { ...detail, quantity: 1 }]);
    setTotalPrice(totalPrice);
    // console.log(cart, totalPrice);
  };

  function getFilteredCategories() {
    const res = categoryData.filter((item) => {
      return item.category_url_item === filterBy;
    });
    //console.log('res', res);
    return res;
  }

  return (
    <>
      <div className='header flexLayout'>
        <h2 className='app_name'>{filterBy}</h2>
      </div>
      <div className='store_container'>
        {getFilteredCategories()[0].categories.map((detail) => (
          <div className='product_wrapper' key={detail.id} id={detail.id}>
            <img
              src='https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/16714-birthday-cake-600x600.jpg?ext=.jpg'
              className='category_image'
              alt='category'
              height='150'
              width='150'
            />
            <p className='product_price'>
              <strong>${detail.price}</strong>
            </p>
            <p className='product_name'>{detail.name}</p>

            <button
              type='button'
              className='add_to_cart'
              onClick={(e) => handleAddToCart(detail)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
