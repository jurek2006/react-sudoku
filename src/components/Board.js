import React, { Component } from "react";
import { Field } from "./Field";
import "./Board.css";

export class Board extends Component {
    render() {
        return (
            <div className="board">
                <div className="board-line">
                    <Field constantValue={3} value={1} />
                    <Field constantValue={3} />
                    <Field value={0} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                </div>
                <div className="board-line">
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                </div>
                <div className="board-line">
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                </div>
                <div className="board-line">
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                </div>
                <div className="board-line">
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                </div>
                <div className="board-line">
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                </div>
                <div className="board-line">
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                </div>
                <div className="board-line">
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                </div>
                <div className="board-line">
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                    <Field value={1} />
                </div>
            </div>
        );
    }
}

export default Board;
