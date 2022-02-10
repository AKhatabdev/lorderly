/*
* Author @Awais Khatab
* Project: Lorderly
*
* Browsers: Chrome (Desktop), Safari (Desktop), Mozilla.
*
* Copyright 2021, Awais Khatab, All rights reserved.
* */

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {Provider} from "react-redux";
import store from "./store";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

const rootElement = document.getElementById("root");
console.log(process.env.REACT_APP_FIREBASE_API_KEY);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

