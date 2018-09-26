import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_CURRENT_NUMBER": {
            // set current number which is picked number possible to put into clicked board's field
            return {
                ...state,
                currentNumber: action.payload
            };
        }
        case "SET_FIELD_VALUE": {
            // sets field's value in board[rowIndex][colIndex]
            const { rowIndex, colIndex, value } = action.payload;
            if (!state.board[rowIndex][colIndex].isConstant) {
                // if field value if is not blocked
                state.board[rowIndex][colIndex].value = value;

                // TUTAJ SPRAWDZENIE CZY WŁAŚNIE USTAWIONE POLE NIE MA KONFLIKTU Z JAKIMŚ INNYM (ZGODNIE Z ZASADAMI GRY)
                // Jeśli pola mają konflikt to ustawienie dla każdego z nich hasConflict: true
                // 1. Sprawdzenie wszystkich pól w tym samym wierszu
                // wyfiltrowanie wszystkich pól w wierszu o tej samej wartości
                const currRow = state.board[rowIndex].filter(
                    fieldData => fieldData.value === value
                );

                if (currRow.length > 1) {
                    currRow.map(foundField => (foundField.hasConflict = true));
                }
                // 2. Sprawdzenie wszystkich pól w tej samej kolumnie
                const currCol = state.board
                    .map(row => row[colIndex])
                    .filter(fieldData => fieldData.value === value);

                if (currCol.length > 1) {
                    currCol.map(foundField => (foundField.hasConflict = true));
                }
                // 3. Sprawdzenie wszystkich pól w tym samym "boxie" (można pominąć sprawdzone już wyżej z tego samego wiersza i kolumny)
                const currBoxRow = Math.floor(rowIndex / 3);
                const currBoxCol = Math.floor(colIndex / 3);
                console.log(currBoxRow, currBoxCol);
                let currBox = [];
                for (let i = 0; i < 3; i++) {
                    currBox = currBox.concat(
                        state.board[currBoxRow * 3 + i].slice(
                            currBoxCol * 3,
                            currBoxCol * 3 + 3
                        )
                    );
                }

                const currBoxDoubles = currBox.filter(
                    fieldData => fieldData.value === value
                );
                if (currBoxDoubles.length > 1) {
                    currBoxDoubles.map(
                        foundField => (foundField.hasConflict = true)
                    );
                }
            }
            return state;
        }
        case "LOAD_GAME": {
            // loads game data into board
            return {
                ...state,
                board: action.payload
            };
        }
        default:
            return state;
    }
};

export class Provider extends Component {
    state = {
        board: [
            [
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true }
            ],
            [
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true }
            ],
            [
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true }
            ],
            [
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true }
            ],
            [
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true }
            ],
            [
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true }
            ],
            [
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true }
            ],
            [
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true }
            ],
            [
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true },
                { value: 0, isConstant: true }
            ]
        ],
        currentNumber: 6,
        dispatch: action => this.setState(state => reducer(state, action))
    };
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
