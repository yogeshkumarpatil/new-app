import React, {Component} from "react";
// import './Stylesheet1.css'
import Style1 from "./Stylesheet1.module.css";
import Style2 from "./Stylesheet2.module.css";

export default class Stylesheet1 extends Component {
    render() {
        return (
            <div>
                <h1 className={Style1.heading1}>Welcome TO aaaaaa</h1>
                <h1 className={Style2.heading1}>Welcome TO bbbbbbbbbbb</h1>
            </div>
        );
    }
}