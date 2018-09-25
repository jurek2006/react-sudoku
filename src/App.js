import React, { Component } from "react";
import "./App.css";
import { Provider } from "./context";
import { Board } from "./components/Board";
import { NumberPicker } from "./components/NumberPicker";

class App extends Component {
    render() {
        return (
            <Provider>
                <div className="App">
                    <Board />
                    <NumberPicker />
                </div>
            </Provider>
        );
    }
}

export default App;
