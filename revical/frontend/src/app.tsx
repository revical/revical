import { Component, h } from "preact";

interface AppProps { }

interface AppState {
    currentTab: string;
}

export class App extends Component<AppProps, AppState> {
    state: AppState = { currentTab: "flashcards" };

    render() {
        return <div id="app"></div>;
    }
}