import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_CURRENT_NUMBER": {
            return {
                ...state,
                currentNumber: action.payload
            };
        }
        case "SET_FIELD_VALUE": {
            const { row, col, value } = action.payload;
            if (!state.board[row][col].isConstant) {
                // if field value if is not blocked
                state.board[row][col].value = value;
            }
            return state;
        }
        default:
            return state;
    }
};

export class Provider extends Component {
    state = {
        board: [
            [
                { value: 1, isConstant: true },
                { value: 2, isConstant: true },
                { value: 0, isConstant: false },
                { value: 1, isConstant: false },
                { value: 1, isConstant: true },
                { value: 1, isConstant: true },
                { value: 1, isConstant: true },
                { value: 1, isConstant: true },
                { value: 1, isConstant: true }
            ],
            [
                { value: 2 },
                { value: 2 },
                { value: 2 },
                { value: 2 },
                { value: 2 },
                { value: 2 },
                { value: 2 },
                { value: 2 },
                { value: 2 }
            ],
            [
                { value: 3, isConstant: true },
                { value: 3, isConstant: true },
                { value: 3, isConstant: true },
                { value: 3, isConstant: true },
                { value: 3, isConstant: true },
                { value: 3, isConstant: true },
                { value: 3, isConstant: true },
                { value: 3, isConstant: true },
                { value: 3, isConstant: true }
            ],
            [
                { value: 1, isConstant: true },
                { value: 1, isConstant: true },
                { value: 1, isConstant: true },
                { value: 1, isConstant: true },
                { value: 1, isConstant: true },
                { value: 1, isConstant: true },
                { value: 1, isConstant: true },
                { value: 1, isConstant: true },
                { value: 1, isConstant: true }
            ],
            [
                { value: 2, isConstant: true },
                { value: 2, isConstant: true },
                { value: 2, isConstant: true },
                { value: 2, isConstant: true },
                { value: 2, isConstant: true },
                { value: 2, isConstant: true },
                { value: 2, isConstant: true },
                { value: 2, isConstant: true },
                { value: 2, isConstant: true }
            ],
            [
                { value: 3, isConstant: true },
                { value: 3, isConstant: true },
                { value: 3, isConstant: true },
                { value: 3, isConstant: true },
                { value: 3, isConstant: true },
                { value: 3, isConstant: true },
                { value: 3, isConstant: true },
                { value: 3, isConstant: true },
                { value: 3, isConstant: true }
            ],
            [
                { value: 1, isConstant: true },
                { value: 1, isConstant: true },
                { value: 1, isConstant: true },
                { value: 1, isConstant: true },
                { value: 1, isConstant: true },
                { value: 1, isConstant: true },
                { value: 1, isConstant: true },
                { value: 1, isConstant: true },
                { value: 1, isConstant: true }
            ],
            [
                { value: 2, isConstant: true },
                { value: 2, isConstant: true },
                { value: 2, isConstant: true },
                { value: 2, isConstant: true },
                { value: 2, isConstant: true },
                { value: 2, isConstant: true },
                { value: 2, isConstant: true },
                { value: 2, isConstant: true },
                { value: 2, isConstant: true }
            ],
            [
                { value: 3, isConstant: true },
                { value: 3, isConstant: true },
                { value: 3, isConstant: true },
                { value: 0, isConstant: true },
                { value: 3, isConstant: true },
                { value: 3, isConstant: true },
                { value: 9, isConstant: true },
                { value: 3, isConstant: true },
                { value: 3, isConstant: true }
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
