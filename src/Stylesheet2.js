import React, {Component} from "react";
// import './Stylesheet2.css'
import Style from "./Stylesheet2.module.css";

export default class Stylesheet2 extends Component {
    render() {
        return (
            <div>
                <h1 className={Style.heading1}>My name is Yogesh</h1>
            </div>
        );
    }
}
