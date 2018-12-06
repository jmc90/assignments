import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import 'bootswatch/dist/cosmo/bootstrap.css'
import './styles/index.css'
import ApodProvider from './context/ApodProvider';


ReactDOM.render(
    <BrowserRouter>
        <ApodProvider>
            <App/>
        </ApodProvider>
    </BrowserRouter>
, document.getElementById("root"));


