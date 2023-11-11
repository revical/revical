import { Component, h } from "preact";

interface ToolbarProps { }

interface ToolbarState {
    currentTool: string;
}

export class Toolbar extends Component<ToolbarProps, ToolbarState> {
	state: ToolbarState = { currentTool: "flashcards" };

	render() {
		return (
			<div id="toolbar">
                Toolbar
			</div>
		);
	}
}