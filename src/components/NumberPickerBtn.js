import React, { Component } from "react";
import { Consumer } from "../context";
import classnames from "classnames";

export class NumberPickerBtn extends Component {
    handleClick = (btnNumber, dispatch) => {
        dispatch({
            type: "SET_CURRENT_NUMBER",
            payload: btnNumber
        });
    };

    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch, currentNumber } = value;
                    const btnNumber = this.props.btnNumber;
                    return (
                        <div>
                            <button
                                disabled={currentNumber === btnNumber}
                                className={classnames("numberPicker__btn", {
                                    "numberPicker__btn--active":
                                        currentNumber === btnNumber
                                })}
                                onClick={this.handleClick.bind(
                                    this,
                                    btnNumber,
                                    dispatch
                                )}
                            >
                                {btnNumber !== 0 ? btnNumber : " "}
                            </button>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default NumberPickerBtn;
