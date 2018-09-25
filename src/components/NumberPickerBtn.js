import React, { Component } from "react";
import { Consumer } from "../context";
import classnames from "classnames";
import PropTypes from "prop-types";

export class NumberPickerBtn extends Component {
    static propTypes = {
        btnNumber: PropTypes.number.isRequired
    };

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
                    );
                }}
            </Consumer>
        );
    }
}

export default NumberPickerBtn;
