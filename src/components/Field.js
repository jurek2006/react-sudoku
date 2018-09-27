import React, { Component } from "react";
import { Consumer } from "../context";
import classnames from "classnames";
import PropTypes from "prop-types";

export class Field extends Component {
    static propTypes = {
        row: PropTypes.number.isRequired,
        col: PropTypes.number.isRequired
    };

    handleSetFieldValue(row, col, value, dispatch) {
        dispatch({
            type: "SET_FIELD_VALUE",
            payload: { rowIndex: row, colIndex: col, value: value }
        });
    }

    render() {
        const { row, col } = this.props;
        return (
            <Consumer>
                {value => {
                    const { board, currentNumber, gameWon, dispatch } = value;
                    const fieldData = board[row][col]; //fieldData has properties value and isConstant
                    return (
                        <button
                            className={classnames("field", {
                                "field--empty": fieldData.value === 0,
                                "field--hasConflict": fieldData.hasConflict,
                                board__colFirst: col % 3 === 0,
                                board__colLast: (col + 1) % 9 === 0,
                                board__rowFirst: row % 3 === 0,
                                board__rowLast: (row + 1) % 9 === 0
                            })}
                            disabled={
                                gameWon || fieldData.isConstant ? true : false //field cannot get new value when clicked if is blocked or game is finished (gameWon) - then all the fields are blocked
                            }
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
