import React, { Component } from "react";
import { Consumer } from "../context";

export class Field extends Component {
    render() {
        const { constantValue, currentValue } = this.props;
        return (
            <Consumer>
                {value => {
                    const { currentNumber } = value;
                    return (
                        <button
                            className="field"
                            disabled={constantValue ? true : false}
                            onClick={() => console.log(currentNumber)}
                        >
                            {constantValue
                                ? constantValue
                                : currentValue > 0
                                    ? currentValue
                                    : "_"}
                        </button>
                    );
                }}
            </Consumer>
        );
    }
}

export default Field;
