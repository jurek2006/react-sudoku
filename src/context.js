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
        default:
            return state;
    }
};

export class Provider extends Component {
    state = {
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
