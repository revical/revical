import React from "react";

interface ToolbarProps { }

interface ToolbarState {
    currentTool: string;
}

export class Toolbar extends React.Component<ToolbarProps, ToolbarState> {
	state: ToolbarState = { currentTool: "flashcards" };

	render() {
		return (
			<div id="toolbar">
                Toolbar
			</div>
		);
	}
}
