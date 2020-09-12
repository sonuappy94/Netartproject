import React from 'react';
import logo from './logo.svg';
import Logo from './components/Logo'
import MyBody from './components/MyBody'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Lowerbody from './components/LowerBody';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <>
      <Logo/>
      <MyBody/>
      <Lowerbody/>
      <Footer/>
      
      </>
    </div>
  );
}

export default App;
