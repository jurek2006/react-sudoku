import React, { Component } from "react";
import classnames from "classnames";

export class GameInfo extends Component {
    render() {
        const {
            emptyFieldsCounter,
            conflictsCounter,
            gameWon,
            numbersLeftToBePlaced
        } = this.props;
        return (
            <div>
                {gameWon && (
                    <div className="success">
                        <h1 className="success__big">Brawo!</h1>{" "}
                        <p>Sudoku rozwiązane</p>
                    </div>
                )}
                <div className="gameInfo">
                    Wolnych pól:{" "}
                    <span
                        className={classnames("gameInfo__number", {
                            "gameInfo__number--error": emptyFieldsCounter > 0
                        })}
                    >
                        {emptyFieldsCounter}
                    </span>{" "}
                    Konfliktów:{" "}
                    <span
                        className={classnames("gameInfo__number", {
                            "gameInfo__number--error": conflictsCounter > 0
                        })}
                    >
                        {conflictsCounter}
                    </span>
                    <p>Pozostało do umieszczenia:</p>
                    {numbersLeftToBePlaced.map((amount, value) => (
                        <p>
                            Wartość {value + 1}: {amount}
                        </p>
                    ))}
                </div>
            </div>
        );
    }
}

export default GameInfo;
