import React from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './routes'
// import {withRouter} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      {routes}
      <Footer />
    </div>
  );
}

export default App;
