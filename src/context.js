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
            // sets field's value in board[row][col]
            const { row, col, value } = action.payload;
            if (!state.board[row][col].isConstant) {
                // if field value if is not blocked
                state.board[row][col].value = value;
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
