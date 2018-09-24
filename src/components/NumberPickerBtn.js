import React, { Component } from "react";

export class NumberPickerBtn extends Component {
    render() {
        const value = this.props.value;
        return (
            <div>
                <button
                    className="numberPicker__btn"
                    onClick={() => console.log(value)}
                >
                    {value}
                </button>
            </div>
        );
    }
}

export default NumberPickerBtn;
