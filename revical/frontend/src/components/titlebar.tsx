import { Component, h } from "preact";

import { WindowMinimise, WindowMaximise, Quit } from "../../wailsjs/go/main/App";

interface TitlebarProps { }

interface TitlebarState { }

export class Titlebar extends Component<TitlebarProps, TitlebarState> {
    render() {
        return (
            <div id="titlebar">
                <span id="title-label" data-wails-drag>Title</span>
                <span onClick={WindowMinimise}><i class="circular link small inverted grey minus icon"></i></span>
                <span onClick={WindowMaximise}><i class="circular link small inverted grey window maximize icon"></i></span>
                <span onClick={Quit}><i class="circular link small inverted red times icon"></i></span>
            </div>
        );
    }
}