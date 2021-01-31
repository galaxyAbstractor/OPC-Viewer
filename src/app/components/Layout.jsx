import React, {Component} from "react";
import LedStrand from "./LedStrand";


class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid" id="main">
                <LedStrand channel="1"/>
                <LedStrand channel="2"/>
                <LedStrand channel="3"/>
                <LedStrand channel="4"/>
                <LedStrand channel="5"/>
                <LedStrand channel="6"/>
                <LedStrand channel="7"/>
                <LedStrand channel="8"/>
            </div>
        );
    }
}

export default Layout;