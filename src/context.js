import React, { Component } from "react";

const Context = React.createContext();

const checkConflicts = board => {
    // function checks if there are value conflicts between fields' values (according to sudoku's rules)
    // modifies board - fields with conflicts gets property hasConflict = true
    // if there's not conflict anymore - property value is changed to false
    // brutal force - can be refactored, but it's fast enough
    // returns number of conflicts on the board

    const checkFieldConflict = (rowIndex, colIndex, board) => {
        // function checks if there are value conflicts between given field's value and others fields
        // gets field rowIndex and colIndex on board
        // if there's a conflict fields gets property hasConflict = true
        // returns true if found any conflict

        const markConflicts = (fieldArr, value) => {
            // gets fieldArr which is array of fields (references) and value
            // if there are multiple fields with given value they are modified and gets .hasConflict = true property
            // returns true if found any conflict

            const conflictFields = fieldArr.filter(
                fieldData => fieldData.value === value
            );

            if (conflictFields.length > 1) {
                // if more than 1 field found with the value - found conflict
                conflictFields.map(
                    foundField => (foundField.hasConflict = true)
                );
                return true;
            }

            //no conflicts found
            return false;
        };

        let foundConflict = false;

        // not checking conflict for field if it's value is not between 1 to 9 (0 is empty field but other values are wrong)
        const value = board[rowIndex][colIndex].value;
        if (!(value > 0 && value < 10)) {
            return false;
        }

        // 1. Check if there are multiple fields (including given field) with value in the same row
        if (markConflicts(board[rowIndex], value)) {
            foundConflict = true;
        }

        // 2. Check if there are multiple fields (including given field) with value in the same column
        if (markConflicts(board.map(row => row[colIndex]), value)) {
            foundConflict = true;
        }

        // 3. Check if there are multiple fields (including given field) with value in the same board "box"
        // Sudoku board contains 9 "boxes" (squares), every "box" has 9 fields (in 3 rows and 3 cols)
        let currBox = [];
        // create array of references to fields from the "box" where the field is located
        for (let i = 0; i < 3; i++) {
            currBox = currBox.concat(
                board[Math.floor(rowIndex / 3) * 3 + i].slice(
                    Math.floor(colIndex / 3) * 3,
                    Math.ceil(colIndex / 3) * 3
                )
            );
        }
        if (markConflicts(currBox, value)) {
            foundConflict = true;
        }

        return foundConflict;
    };
    let conflictsCounter = 0; //number of found conflicts

    // cleans every field on board from conflict status, before checking conflicts again
    // importat when field value changed and maybe some conflict doesn't exists anymore
    board.forEach(row => {
        row.forEach(field => (field.hasConflict = false));
    });

    // checks every field on board if there is value conflict with other field
    // and if there actually is for a field - increments checkFieldConflict
    board.forEach((row, rowInd) => {
        row.forEach((col, colInd) => {
            if (checkFieldConflict(rowInd, colInd, board)) {
                conflictsCounter++;
            }
        });
    });

    return conflictsCounter;
};

const countFieldsWithValue = (value, board) => {
    let fieldsCounter = 0;

    board.forEach(row =>
        row.forEach(field => {
            if (field.value === value) {
                fieldsCounter++;
            }
        })
    );

    return fieldsCounter;
};

const countNumbersLeft = board => {
    // counts (and returns) how many times each value (from 1 to 9) is missing to complete the board
    // in sudoku rules (9x9 board) each number has to be exactly 9 times on the board
    // value equals index - 1 (for value 1 is numbersLeft[0], 2 -> numbersLeft[1] ect.)
    const numbersLeft = [];
    for (let i = 1; i < 10; i++) {
        numbersLeft[i - 1] = 9 - countFieldsWithValue(i, board);
    }
    return numbersLeft;
};

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
                state.conflictsCounter = checkConflicts(state.board); //check and marks fields on board with conflicts - stores number of conflicts
                state.emptyFieldsCounter = countFieldsWithValue(0, state.board); //counts empty fields on board (empty field is field with value 0)

                // check if user won the game (if there are no conflicts and no empty fields on the board)
                state.gameWon =
                    state.conflictsCounter + state.emptyFieldsCounter === 0
                        ? true
                        : false;

                state.numbersLeftToBePlaced = countNumbersLeft(state.board);
            }
            return state;
        }
        case "LOAD_GAME": {
            // loads game board (given in action.payload)
            const newBoardData = action.payload;

            const conflictsCounter = checkConflicts(newBoardData); //check and marks fields on board with conflicts - stores number of conflicts
            const emptyFieldsCounter = countFieldsWithValue(0, newBoardData); //counts empty fields on board (empty field is field with value 0)
            return {
                ...state,
                board: newBoardData,
                conflictsCounter,
                emptyFieldsCounter,
                numbersLeftToBePlaced: countNumbersLeft(newBoardData),
                gameWon: false
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
        conflictsCounter: 0, //number of errors on the board at the time
        emptyFieldsCounter: 81, //number of empty fields on board
        currentNumber: 6, //choosen number to place on the board
        numbersLeftToBePlaced: [9, 9, 9, 9, 9, 9, 9, 9, 9], //how many values from each number are still missing on the board (for value 1 is numbersLeftToBePlaced[0], 2 -> [1] ect.)
        gameWon: false,
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
