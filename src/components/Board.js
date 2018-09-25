import React, { Component } from "react";
import { Field } from "./Field";
import "./Board.css";

export class Board extends Component {
    render() {
        return (
            <div className="board">
                <div className="board-line">
                    <Field constantValue={3} currentValue={1} />
                    <Field constantValue={3} />
                    <Field currentValue={0} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                </div>
                <div className="board-line">
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                </div>
                <div className="board-line">
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                </div>
                <div className="board-line">
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                </div>
                <div className="board-line">
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                </div>
                <div className="board-line">
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                </div>
                <div className="board-line">
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                </div>
                <div className="board-line">
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                </div>
                <div className="board-line">
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                    <Field currentValue={1} />
                </div>
            </div>
        );
    }
}

export default Board;
