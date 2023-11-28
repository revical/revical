import React from "react";

import { WindowMinimise, WindowMaximise, Quit } from "../../wailsjs/go/main/App";

interface TitlebarProps { }

interface TitlebarState { }

export class Titlebar extends React.Component<TitlebarProps, TitlebarState> {
	render() {
		return (
			<div id="titlebar" data-wails-drag>
				<div id="titlebar-title">
					<span id="titlebar-title-label">Revical</span>
				</div>
				<div id="titlebar-controls">
					<div className="titlebar-controls-icon" onClick={async () => await WindowMinimise()}><img src="/assets/img/window/minimise.png"></img></div>
					<div className="titlebar-controls-icon" onClick={async () => await WindowMaximise()}><img src="/assets/img/window/maximise.png"></img></div>
					<div className="titlebar-controls-icon" id="titlebar-controls-close" onClick={async () => await Quit()}><img src="/assets/img/window/close.png"></img></div>
				</div>
			</div>
		);
	}
}
