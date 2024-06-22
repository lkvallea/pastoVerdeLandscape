import { useState } from 'react'
import Header from './components/shared/Header'
import Body from './components/shared/Body'
import Footer from './components/shared/Footer'
import FooterMain from './components/shared/FooterMain'
import { BrowserRouter as Router } from 'react-router-dom';


function App() {

  return (
    <>
        <Router>
      <div className='main-wrapper'>
       <Header />
       <Body />
       <Footer />
       <FooterMain/>
      </div>
      </Router>
    </>
  )
}

export default App
