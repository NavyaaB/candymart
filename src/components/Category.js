import React, { useState, useEffect } from "react";
import categoryData from "../data/categoryData";
import { useNavigate } from "react-router-dom";
import Slider from "./Slider";

export default function Category() {
  let [c_data, setCData] = useState(categoryData);

  let navigate = useNavigate();

  const routeChangeToDetails = (category_type) => {
    let path = `/category/${category_type}`;
    navigate(path);
    console.log("candy_type selected : ", category_type);
  };

  useEffect(() => {
    // c_data = c_data.sort((a, b) => a.name.localeCompare(b.name));
    // setCData(c_data);
    setCData(c_data.sort((a, b) => a.name.localeCompare(b.name)));
  }, [c_data]);

  const list = categoryData.map((category) => (
    <div
      key={category.id}
      id={category.id}
      className='product_wrapper'
      onClick={() => routeChangeToDetails(category.category_url_item)}
    >
      <img
        className='category_image'
        src='https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/16714-birthday-cake-600x600.jpg?ext=.jpg'
        alt='category'
        height='150'
        width='150'
      />
      <p className='product_price'>{category.name}</p>
    </div>
  ));

  return (
    <>
      <Slider />
      <div className='header flexLayout'>
        <h2 className='app_name'>Shop By Category</h2>
      </div>
      <div className='store_container'>{list}</div>
    </>
  );
}
