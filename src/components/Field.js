import React, { Component } from "react";

export class Field extends Component {
    render() {
        const { constantValue, value } = this.props;
        return (
            <button
                className="field"
                disabled={constantValue ? true : false}
                onClick={() => console.log(value)}
            >
                {constantValue ? constantValue : value > 0 ? value : "_"}
            </button>
        );
    }
}

export default Field;
