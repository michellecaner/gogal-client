import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { GoGalApp } from './components/GoGalApp'
import './index.css';

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <GoGalApp />
      </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
