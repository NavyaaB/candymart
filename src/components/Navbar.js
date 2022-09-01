import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className='navbar'>
      <ul>
        <li>
          <a href='#home'>My Store</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
        <li style={{ float: "right" }}>
          <Link to='/cart'>
            <img
              className='cart_button active'
              src='https://www.phoca.cz/images/projects/phoca-cart-r.svg'
              alt='cart_image'
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
