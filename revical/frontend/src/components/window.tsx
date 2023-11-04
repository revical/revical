import { Component, h } from "preact";

import { Toolbar } from "./toolbar";
import { WindowContents } from "./window-contents";

interface WindowProps { }

interface WindowState { }

export class Window extends Component<WindowProps, WindowState> {
    render() {
        return (
            <div id="window">
                <Toolbar />
                <WindowContents />
            </div>
        );
    }
}