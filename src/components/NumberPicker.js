import React, { Component } from "react";
import NumberPickerBtn from "./NumberPickerBtn";

export class NumberPicker extends Component {
    renderPickerBtns() {
        //
        return (
            <div>
                {[...Array(9)].map((x, i) => (
                    <NumberPickerBtn key={i + 1} btnNumber={i + 1} />
                ))}
            </div>
        );
    }

    render() {
        return <div className="numberPicker">{this.renderPickerBtns()}</div>;
    }
}

export default NumberPicker;
