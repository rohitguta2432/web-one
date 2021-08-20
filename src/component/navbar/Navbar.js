import React, { useState } from 'react';
import './Navbar.css';
import ReactDom from 'react-dom';
import Modal from 'react-modal';
import { AiFillCloseCircle } from 'react-icons/ai'
import { FiMapPin } from 'react-icons/fi'

function Navbar() {

    const [openModal, setOpenModal] = useState(false);

    const openModals = () => {
        setOpenModal(true);
    }
    const onClose = () => {
        setOpenModal(false);
    }
    return (
        <>
            <nav>
                <div className="main-nav">
                    <img src={window.location.origin + '/images/plugo.png'} alt="" className="logo" />
                    <ul className="navigation-list">
                        <li className="navigation-item active">
                            Home
                            </li>
                        <li className="navigation-item">
                            How it Works
                            </li>
                        <li className="navigation-item">
                            Why Plugo
                            </li>
                        <li className="navigation-item">
                            Plans
                            </li>

                        <li className="navigation-item contact" onClick={openModals}>
                            Contact Us
                            </li>

                        <li className="navigation-item download">
                            Download
                            </li>
                    </ul>
                </div>
                <Modal isOpen={openModal} className="contact_modal">
                    <AiFillCloseCircle onClick={onClose} className="close_modal" />

                    <h1>Contact Us</h1>
                    <div className="contact_form">
                        <input type="text" placeholder="First Name*" />
                        <input type="text" placeholder="Email Address*" />
                        <input type="text" placeholder="Phone No*" />
                        <textarea placeholder="Message" className="contact_message" />
                    </div>
                    <button className="formSubmit">Submit</button>

                    <div className="contact_details">
                        <div className="con_address">
                            <h1 className="where_h1">Where to find us </h1>
                            <h3>PLUGO</h3>
                            <img src="https://plugo.io/wp-content/uploads/2019/01/address-icon.png" alt="" />
                            <p>
                                # 202, 28th main, 7th Cross,Sector 1,
                                HSR Layout,Bangalore-560102
                            </p>
                        </div>
                        <div className="phone">
                            <h1>Phone</h1>
                            <img src="https://plugo.io/wp-content/uploads/2019/01/phone-icon.png" alt=""/>
                            +918047112182
                        </div>
                        <div className="email_details">
                            <h1>E-mail</h1>
                            <img src="https://plugo.io/wp-content/uploads/2019/01/email-icon.png" alt=""/>
                            support@plugo.io
                        </div>

                    </div>

                </Modal>
            </nav>

        </>
    )
}

export default Navbar
