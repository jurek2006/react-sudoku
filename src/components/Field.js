import React, { Component } from "react";
import { Consumer } from "../context";
import classnames from "classnames";

export class Field extends Component {
    handleSetFieldValue(row, col, value, dispatch) {
        dispatch({
            type: "SET_FIELD_VALUE",
            payload: { row: row, col: col, value: value }
        });
    }

    render() {
        const { row, col } = this.props;
        return (
            <Consumer>
                {value => {
                    const { board, dispatch, currentNumber } = value;
                    const fieldData = board[row][col]; //fieldData has properties value and isConstant
                    return (
                        <button
                            className={classnames("field", {
                                "field--empty": fieldData.value === 0,
                                board__colFirst: col % 3 === 0,
                                board__colLast: (col + 1) % 9 === 0,
                                board__rowFirst: row % 3 === 0,
                                board__rowLast: (row + 1) % 9 === 0
                            })}
                            disabled={fieldData.isConstant ? true : false}
                            onClick={this.handleSetFieldValue.bind(
                                this,
                                row,
                                col,
                                currentNumber,
                                dispatch
                            )}
                        >
                            {fieldData.value > 0 ? fieldData.value : "_"}
                        </button>
                    );
                }}
            </Consumer>
        );
    }
}

export default Field;
