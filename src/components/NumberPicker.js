import React, { Component } from "react";
import NumberPickerBtn from "./NumberPickerBtn";

export class NumberPicker extends Component {
    renderPickerBtns() {
        //
        return (
            <div>
                {[...Array(10)].map((x, i) => (
                    <NumberPickerBtn key={i} btnNumber={i} />
                ))}
            </div>
        );
    }

    render() {
        return <div className="numberPicker">{this.renderPickerBtns()}</div>;
    }
}

export default NumberPicker;
