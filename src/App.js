import React from "react"

import "./App.css"
import { Pooja } from "./screens/dashboard"

export default function App() {
    return (
        <div className="App">
            {/* <Dashboard/> */}
            <Pooja
                name={"Login"}
                callBack={'handleclickHere'}
                color={"red"}/>
            <Pooja 
                name={"Click Here"}
                callBack={'handleclickHere'} 
                color={"pink"}/>
            <Pooja
                name={"Sign Up"}
                callBack={'handleclickHere'}
                color={"green"}/>
        </div>
    ) 
}