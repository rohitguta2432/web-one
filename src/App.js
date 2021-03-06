import { hot } from 'react-hot-loader/root';
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './component/footer/Footer'
import Home from './component/home/Home'
import Navbar from './component/navbar/Navbar'

const App = () => {
  return (
    <>
      <Router>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Home} />
      </Router>
    </>
  )
}

export default hot(App)
