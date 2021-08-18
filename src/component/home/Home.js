import React from 'react'
import Packages from '../packages/Packages'
import Whyplugo from '../plugowhy/Whyplugo'
import Specification from '../specification/Specification'
import './Home.css'

const Home = () => {
    return (
        <>
            <main className="container">
                <section>
                    <img src={window.location.origin + '/images/powerbank.jpg'} alt="" className="img-container" />
                </section>
                <section className="child-container">
                    <h1>How it Works</h1>
                    <br />
                    <h2>rent | Charge | Return </h2>
                    <br />
                    <div className="Works">
                        <figcaption className="step-1">
                            <img src={window.location.origin + '/images/step-1.jpg'} alt="" className="img-step-1" />
                            <p>Download APP and Navigate to nearest Plugo</p>
                        </figcaption>
                        <figcaption className="step-2">
                            <img alt="" src={window.location.origin + '/images/step-2.jpg'} className="img-step-2" />
                            <p>Scan the QR Code to release a power bank</p>
                        </figcaption>
                        <figcaption className="step-3">
                            <img src={window.location.origin + '/images/step-3.jpg'} alt="" className="img-step-3" />
                            <p>Carry the power bank with you to charge your smart device</p>
                        </figcaption>
                        <figcaption className="step-4">
                            <img src={window.location.origin + '/images/step-4.jpg'} alt="" className="img-step-4" />
                            <p>Simply drop the powerbank in nearest Plugo terminal to return</p>
                        </figcaption>
                        
                    </div>
                    
                </section>
               </main>
            <Whyplugo/>
            <Specification/>
            <Packages/>
        </>
    )
}

export default Home
