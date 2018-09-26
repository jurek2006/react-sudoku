import React, { Component } from "react";
import { Board } from "./Board";
import { NumberPicker } from "./NumberPicker";
import { Consumer } from "../context";
export class Game extends Component {
    handleLoadGame = dispatch => {
        const convertGameStringsToBoardaData = gameData => {
            // converts sudoku game data from string
            const boardData = [];
            for (let row = 0; row < 9; row++) {
                boardData[row] = [...gameData.quizz]
                    .map(value => {
                        return {
                            value: parseInt(value, 10),
                            isConstant: value > 0
                        };
                    })
                    .slice(row * 9, (row + 1) * 9);
            }
            return boardData;
        };

        const gameData = {
            quizz:
                "004300209005009001070060043006002087190007400050083000600000105003508690042910300",
            solution:
                "864371259325849761971265843436192587198657432257483916689734125713528694542916378"
        };
        dispatch({
            type: "LOAD_GAME",
            payload: convertGameStringsToBoardaData(gameData) //sends board data as payload
        });
    };

    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <React.Fragment>
                            <button
                                onClick={this.handleLoadGame.bind(
                                    this,
                                    dispatch
                                )}
                            >
                                Wczytaj grę
                            </button>
                            <Board />
                            <NumberPicker />
                        </React.Fragment>
                    );
                }}
            </Consumer>
        );
    }
}

export default Game;
