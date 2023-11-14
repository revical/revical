import { Component, h } from "preact";

import { WindowMinimise, WindowMaximise, Quit } from "../../wailsjs/go/main/App";

interface TitlebarProps { }

interface TitlebarState { }

export class Titlebar extends Component<TitlebarProps, TitlebarState> {
	render() {
		return (
			<div id="titlebar" data-wails-drag>
				<div id="titlebar-title">
					<span id="title-label">Revical</span>
				</div>
				<div id="titlebar-controls">
					<div className="icon" onClick={async () => await WindowMinimise()}><img src="/assets/img/window/minimise.png"></img></div>
					<div className="icon" onClick={async () => await WindowMaximise()}><img src="/assets/img/window/maximise.png"></img></div>
					<div className="icon" id="close" onClick={async () => await Quit()}><img src="/assets/img/window/close.png"></img></div>
				</div>
			</div>
		);
	}
}
