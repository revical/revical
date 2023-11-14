import { Component, h } from "preact";

interface WindowContentsProps { }

interface WindowContentsState { }

export class WindowContents extends Component<WindowContentsProps, WindowContentsState> {
	render() {
		return (
			<div id="window-contents">
                Window Contents
			</div>
		);
	}
}
