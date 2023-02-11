/* eslint-disable import/no-extraneous-dependencies */
import '../App.css';
import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import NavBar from './NavBar';
import Toolbox from './Toolbox';
import AboutHome from './AboutHome';
import Projects from './Projects';
import Footer from './Footer';
import Header from './Home'

function App() {
  return (
    <>
      <NavBar />
      <MDBContainer fluid>
        <Header />
        <Toolbox />
        <AboutHome />
        <Projects />
      </MDBContainer>
      <Footer />
    </>
  );
}

export default App;
