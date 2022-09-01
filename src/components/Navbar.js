import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className='navbar'>
      <ul>
        <li>
          <Link to='/'>Candymart</Link>
        </li>
        <li>
          <Link to='/about_contact'>About</Link>
        </li>
        <li>
          <Link to='/about_contact'>Contact</Link>
        </li>
        <li style={{ float: "right" }}>
          <Link to='/cart'>
            {/* <img
              className='cart_button active'
              src='https://www.phoca.cz/images/projects/phoca-cart-r.svg'
              alt='cart_image'
            /> */}
            Cart
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
