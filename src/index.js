import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// global styles
import "normalize.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "@fortawesome/fontawesome";

// libraries
import {BrowserRouter as Router} from "react-router-dom";

// main styles
import "./Layout/styles/Main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router>
    <App/>
</Router>);

reportWebVitals();
