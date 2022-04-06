import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Routes from './Routes';

ReactDom.hydrate(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
    ,document.getElementById("root"));
