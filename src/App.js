import React, { Component } from "react";
import "./App.css";
import { Provider } from "./context";
import { Game } from "./components/Game";

class App extends Component {
    render() {
        return (
            <Provider>
                <div className="App">
                    <Game />
                </div>
            </Provider>
        );
    }
}

export default App;
