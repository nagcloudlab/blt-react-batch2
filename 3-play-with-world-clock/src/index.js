

import ClockBoard from "./components/ClockBoard"
import ReactDOM from "react-dom"
import React from "react"

//--------------------------------------
// Working with DOM via React.js
//--------------------------------------

setInterval(() => {
    ReactDOM.render(<ClockBoard />, document.getElementById('root'))
}, 1000);