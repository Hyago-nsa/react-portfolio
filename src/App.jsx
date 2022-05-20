import React from 'react'
import Header from "./components/header/header.jsx"
import Navbar from './components/navbar/navbar.jsx'
import Home from "./components/home/home.jsx"
import About from './components/about/about.jsx'
import Services from './components/services/services.jsx';
import Projects from './components/projects/projects.jsx';
import Contact from './components/contact/contact.jsx';
import Footer from './components/footer/footer.jsx';
import Cursor from './components/cursor/cursor.jsx'
import { Helmet } from "react-helmet"

const App = () => {

  return (
      <>
      <Helmet>
        <script src="./script.js" type="text/javascript" />
      </Helmet>

      <Cursor/>
      <Header/>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
      </>
  )
}

export default App