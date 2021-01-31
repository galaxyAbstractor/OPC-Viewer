import React, {Component} from "react";
import {ipcRenderer} from "electron";

class LedStrand extends Component {
    constructor(props) {
        super(props);

        let initialPixels = [];

        for (let i = 0; i < 64; i++) {
            initialPixels.push({
                r: 0,
                g: 0,
                b: 0
            })
        }

        this.state = {
            strand: {
                channel: props.channel,
                pixels: initialPixels
            }
        };

        ipcRenderer.on("update", (event, args) => {
            if (parseInt(args.strand.channel) === parseInt(this.state.strand.channel)) {
                this.setState(args)
            }
        })

    }


    render() {
        return (
            <div className="row led-strand">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            Channel {this.state.strand.channel}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {this.state.strand.pixels.map(((value, index) => {
                                return <span key={index} className="pixel"
                                             style={{backgroundColor: "rgb(" + value.r + "," + value.g + "," + value.b + ")"}}>
                        </span>
                            }))}
                        </div>
                    </div>
                </div>



            </div>
        );
    }
}

export default LedStrand;