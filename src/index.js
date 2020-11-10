import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Signup from "./App";


ReactDOM.render(
    <BrowserRouter>
        <Signup />
    </BrowserRouter>,
    document.getElementById("root")
);

