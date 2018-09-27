import React, { Component } from "react";
import classnames from "classnames";

export class GameInfo extends Component {
    render() {
        const { emptyFieldsCounter, conflictsCounter, gameWon } = this.props;
        return (
            <div>
                {gameWon && (
                    <div className="success">
                        <h1 className="success__big">Brawo!</h1>{" "}
                        <p>Sudoku rozwiązane</p>
                    </div>
                )}
                <p className="gameInfo">
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
                </p>
            </div>
        );
    }
}

export default GameInfo;
