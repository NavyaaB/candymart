import React from "react";
import "../styles/aboutContact.scss";
import NEW_icon from "../data/assets/NEW_icon.png";
import Data_icon from "../data/assets/Data_icon.png";
import Read_Arrow from "../data/assets/Read_Arrow.png";
import { Link } from "react-router-dom";

export default function AboutAndContact() {
  return (
    <div className='about'>
      <div className='panel_container'>
        <header>
          <div className='header_section'>
            <h3>Thanks for visiting Candymart!</h3>
          </div>
        </header>

        <div className='content'>
          <div className='articles_section'>
            <div className='item_main'>
              <div className='item'>
                <p className='subject'>About Us</p>
                <p>
                  {" "}
                  Since 1991, we've strictly upheld a tradition of candy
                  excellence!
                </p>
              </div>
            </div>
            <div className='item_main'>
              <div className='item'>
                <p className='subject'>Contact Us</p>
                <p>
                  {" "}
                  Customer Care:
                  <br />
                  Monday - Friday: 9:00am - 5:00pm
                  <br />
                  Tel: 000-000-0000
                  <br />
                  Fax: 000-000-0000
                  <br />
                  Email: customercare@candymart.com
                </p>
              </div>
            </div>
            <div className='item_main'>
              <div className='item'>
                <p className='subject'>Share. Celebrate. Indulge.</p>

                <div className='data_icon_content'>
                  <img src={Data_icon} alt='data_icon' className='data_icon' />
                  <p>
                    Welcome to our new and improved website! Find wholesale and
                    discount buying options by...
                    <Link to='/'>
                      <img src={Read_Arrow} alt='read_more_link' />
                    </Link>
                    <span>Read more</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='item_main'>
              <div className='new_icon'>
                <img src={NEW_icon} alt='new_article_icon' />
              </div>
              <div className='item'>
                <p className='subject'>Web</p>
                <p>Candymart.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
