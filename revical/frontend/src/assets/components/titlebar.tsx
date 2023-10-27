import { Component, h } from "preact";

interface TitlebarProps { }

interface TitlebarState { }

export class Titlebar extends Component<TitlebarProps, TitlebarState> {
    render() {
        return (
            <div id="titlebar">
                Titlebar
            </div>
        );
    }
}