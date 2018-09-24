import React, { Component } from "react";
import "./App.css";
import { Board } from "./components/Board";
import { NumberPicker } from "./components/NumberPicker";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Board />
                <NumberPicker />
            </div>
        );
    }
}

export default App;
