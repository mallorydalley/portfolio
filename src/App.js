import React from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './routes'
// import {withRouter} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      {routes}
    </div>
  );
}

export default App;
