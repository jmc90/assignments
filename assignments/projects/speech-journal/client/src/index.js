import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import UserProvider from "./context/UserProvider"
import EntryProvider from "./context/EntryProvider"

ReactDOM.render(
    <BrowserRouter>
        <UserProvider>
            <EntryProvider>
                <App/>
            </EntryProvider>
        </UserProvider>
    </BrowserRouter>
, document.getElementById("root"));

