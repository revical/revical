import React from "react";

import { Titlebar } from "./titlebar";

interface WindowContentsProps { }

interface WindowContentsState { }

export class WindowContents extends React.Component<WindowContentsProps, WindowContentsState> {
	render() {
		return (
			<div id="window-contents">
				<Titlebar />
                Window Contents
			</div>
		);
	}
}
