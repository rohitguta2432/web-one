import React from 'react'
import './Download.css'
import { AiOutlineApple } from 'react-icons/ai';
import { FaGooglePlay } from 'react-icons/fa';
const Download = () => {
    return (
        <>
            <div className="download_main">
                <h1 className="download_h">Download App Now</h1>
                <br />
                <br />
                <div className="button">
                    <button className="download_btn">
                        <AiOutlineApple className="icon" />
                        <p>Download on the
          App Store</p>
                    </button>
                    <button className="download_btn">
                        <FaGooglePlay className="icon" />
                        <p>GET IT ON
            Google Play</p>
                    </button>
                </div>

            </div>
            <div className="subscribe">
                <input type="text" placeholder="Email Address*" />
                <button className="subscribe_btn">Subscribe</button>
                <br />

                <h2>For Latest Offer in Your City! </h2>
            </div>
        </>
    )
}

export default Download
