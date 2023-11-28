import React from "react";

import { Titlebar } from "./titlebar";

interface MainWindowProps { }

interface MainWindowState { }

export class MainWindow extends React.Component<MainWindowProps, MainWindowState> {
	render() {
		return (
			<div id="main-window">
				<Titlebar />
				Main Window
			</div>
		);
	}
}
