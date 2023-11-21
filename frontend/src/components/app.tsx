import React from "react";

import { Toolbar } from "./toolbar";
import { WindowContents } from "./window-contents";

interface AppProps { }

interface AppState { }

export class App extends React.Component<AppProps, AppState> {
	render() {
		return (
			<>
				<Toolbar />
				<WindowContents />
			</>
		);
	}
}
