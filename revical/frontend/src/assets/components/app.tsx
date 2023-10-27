import { Component, h } from "preact";

import { MainWindow } from "./main-window";
import { Titlebar } from "./titlebar";
import { Toolbar } from "./toolbar";

interface AppProps { }

interface AppState { }

export class App extends Component<AppProps, AppState> {
    render() {
        return (
            <>
                <Titlebar />
                <Toolbar />
                <MainWindow />
            </>
        );
    }
}