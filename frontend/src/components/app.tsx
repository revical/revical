import React from "react";

import { Sidebar } from "./sidebar";
import { MainWindow } from "./main-window";

interface AppProps { }

interface AppState { }

export class App extends React.Component<AppProps, AppState> {
	render() {
		return (
			<>
				<Sidebar />
				<MainWindow />
			</>
		);
	}
}
