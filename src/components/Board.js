import React, { Component } from "react";
import { Field } from "./Field";
import "./Board.css";
import { Consumer } from "../context";

export class Board extends Component {
    render() {
        return (
            <Consumer>
                {/* rendering game board stored in context state and got in Consumer value */
                value => {
                    const { board } = value;
                    return (
                        <div className="board">
                            {board.map((boardRow, rowIndex) => (
                                <div className="board-line" key={rowIndex}>
                                    {boardRow.map((field, colIndex) => (
                                        <Field
                                            row={rowIndex}
                                            col={colIndex}
                                            key={colIndex}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default Board;
