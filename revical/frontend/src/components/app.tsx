import { Component, h } from "preact";

import { Window } from "./window";
import { Titlebar } from "./titlebar";

interface AppProps { }

interface AppState { }

export class App extends Component<AppProps, AppState> {
    render() {
        return (
            <>
                <Titlebar />
                <Window />
            </>
        );
    }
}