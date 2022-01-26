import React from 'react';
import About from './components/About/About';
import SectionFeatures from './components/Features/Section-Features';
import Header from './components/Header/Header';
import Testimonials from './components/Testimonials/Testimonials';
import Tours from './components/Tours/Tours';
import BookSection from './components/BookSection/BookSection';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import Popup from './components/UI/Popup';

function App() {
  return (
    <React.Fragment>
      <Navigation/>
      <Header/>
      <About/>
      <SectionFeatures/>
      <Tours/>
      <Testimonials/>
      <BookSection/>
      <Footer/>
      <Popup/>
    </React.Fragment>
  )
}

export default App;
