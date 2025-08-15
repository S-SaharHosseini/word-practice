import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

class ParentComp extends Component {
    render(){
        return(
            <div className="main">
                <App/>
            </div>
        )
    }

}
export default ParentComp;