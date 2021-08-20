import React from 'react'
import './Footer.css';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai';

const Footer = () => {
    return (
        <>
            <h1 className="where">
                Where To Find Us
    </h1>
            <div className="add_container">

                <div className="cafe">
                    <img src="https://plugo.io/wp-content/uploads/2019/01/cafe-icon.png" alt="" className="add_img" />
          Cafes and Resturant
          </div>
                <div className="bars">
                    <img src="https://plugo.io/wp-content/uploads/2019/01/bars-icon.png" alt="" className="add_img" />
          Bars and Clubs
          </div>
                <div className="retail">
                    <img src="https://plugo.io/wp-content/uploads/2019/01/cart-icon.png" alt="" className="add_img" />
          Retail and Shopping Centers
          </div>
                <div className="commercial">
                    <img src="https://plugo.io/wp-content/uploads/2019/01/football-icon.png" alt="" className="add_img" />
          Commercial spaces
          </div>

            </div>
            <button className="add_btn">
                Partner with us!
          </button>
            {/* <div className="footer_term">
                <h3>
                    Terms and Conditions
            </h3>
                <h3>
                    Privacy Policy
            </h3>
                <h3>
                    FAQs
            </h3>
                <h3>
                    Contact
            </h3>
                <h3>
                    About Us
            </h3>
                <br />

            </div>
            <h5> &copy; Copyright  {new Date().getFullYear().toString()} | All Rights Reserve </h5> */}
            {/* <div className="social_img">

                <div className="facebook">
                    <AiFillFacebook className="facebook_img" />
                </div>
                <div className="youtube">
                    <AiFillYoutube className="youtube_img" />
                </div>
                <div className="instagram">
                    <AiFillInstagram className="instagram_img" />
                </div>
                <div className="linkedin">
                    <AiFillLinkedin className="linkedin_img" />
                </div>
                <div className="twiter">
                    <AiFillTwitterCircle className="twitter_img" />
                </div>
            </div>
            <div className="footer_line">

            </div> */}
        </>
    )
}

export default Footer
