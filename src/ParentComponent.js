import React, {Component} from "react";
import ChildComponent from "./ChildComponent";

export default class ParentComponent extends Component {
    ParentMethod = (childName, childSruname) => {
        // alert("Hello From Parent.. " + childName + " " + childSruname );
        alert(`Hello From Parent: Name = ${childName} and Surname = ${childSruname}`)
    };
    render() {
        return <div>
            <ChildComponent callMethod={this.ParentMethod}/>
        </div>;
    }
}
