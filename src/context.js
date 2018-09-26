import React, { Component } from "react";

const Context = React.createContext();

const checkConflicts = board => {
    // function checks if there are value conflicts between fields' values (according to sudoku's rules)
    // modifies board - fields with conflicts gets property hasConflict = true
    // if there's not conflict anymore - property value is changed to false
    // brutal force - can be refactored, but it's fast enough

    const checkFieldConflict = (rowIndex, colIndex, board) => {
        // function checks if there are value conflicts between given field's value and others fields
        // gets field rowIndex and colIndex on board
        // if there's a conflict fields gets property hasConflict = true

        const markConflicts = (fieldArr, value) => {
            // gets fieldArr which is array of fields (references) and value
            // if there are multiple fields with given value they are modified and gets .hasConflict = true property
            const conflictFields = fieldArr.filter(
                fieldData => fieldData.value === value
            );

            if (conflictFields.length > 1) {
                conflictFields.map(
                    foundField => (foundField.hasConflict = true)
                );
            }
        };

        // not checking conflict for field if it's value is not between 1 to 9 (0 is empty field but other values are wrong)
        const value = board[rowIndex][colIndex].value;
        if (!(value > 0 && value < 10)) {
            return;
        }

        // 1. Check if there are multiple fields (including given field) with value in the same row
        markConflicts(board[rowIndex], value);

        // 2. Check if there are multiple fields (including given field) with value in the same column
        markConflicts(board.map(row => row[colIndex]), value);

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
        markConflicts(currBox, value);
    };

    // cleans every field on board from conflict status, before checking conflicts again
    // importat when field value changed and maybe some conflict doesn't exists anymore
    board.forEach(row => {
        row.forEach(field => (field.hasConflict = false));
    });

    // checks every field on board if there is value conflict with other field
    board.forEach((row, rowInd) => {
        row.forEach((col, colInd) => checkFieldConflict(rowInd, colInd, board));
    });
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
                checkConflicts(state.board);
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
