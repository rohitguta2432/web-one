import React from 'react'
import './Specification.css'

const Specification = () => {
    return (
        <>
        <h1>Specification</h1>
        <h5>An Insight into the technology and features of our terminals and Power banks</h5>
        <br />
        <div className="container-specification">

          <div className="main-box">
            The Box
          <hr />
            <br />
            <p>The Plugo terminal boasts an outstanding appearence with 10 slots to rent and return a powerbank.
            Terminal are Green,Connected and in-Control.
          </p>
          </div>
          <div className="box-img">
            <img src='https://plugo.io/wp-content/uploads/2018/12/the-box.jpg?id=97' alt="" className="spescification_img"/>
          </div>
          <div className="powerbank-img">
            <img src="https://plugo.io/wp-content/uploads/2018/12/powerbank.jpg?id=96" alt="" className="spescification_img"/>
          </div>
          <div className="powerbank-text">
            Powerbank
          <br />
            <hr />
            <p>Li-po:5000mAh | Safe to be carried onboard a Flight</p>
            <p>Temperature Sensor prevents it from overheating.</p>
            <p>Output:5v/2.1A | Input:5v/2A</p>
            <p>Intelligent Hardware tracks tampering and damage</p>
          </div>
          <div className="cables-text">
            Cables
          <br />
            <hr />
            <p>Plugo power banks are offered with pre-attached cables</p>
            <p>iPhone, USB Type C "& Micro USB.</p>
            <p>USB 2.0 port: External cables extend the usability to infinity...</p>
          </div>
          <div className="cables-img">
            <img src="https://plugo.io/wp-content/uploads/2018/12/cables.jpg?id=95" alt="" className="spescification_img"/>     
          </div>
        </div>
        </>
    )
}

export default Specification
