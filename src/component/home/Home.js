import React from 'react'
import Download from '../download/Download'
import Footer from '../footer/Footer'
import HomeContent from '../homeContent/HomeContent'
import Packages from '../packages/Packages'
import Whyplugo from '../plugowhy/Whyplugo'
import Specification from '../specification/Specification'
import './Home.css'

const Home = () => {
    return (
        <>
            <HomeContent/>
            <Whyplugo />
            <Specification />
            <Packages />
            <Download/>
            <Footer/>
        </>
    )
}

export default Home
