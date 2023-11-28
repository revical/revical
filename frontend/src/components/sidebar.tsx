import React from "react";

import { BiCog } from "react-icons/bi";

interface SidebarProps { }

interface SidebarState {
	currentTool: string;
}

export class Sidebar extends React.Component<SidebarProps, SidebarState> {
	state: SidebarState = { currentTool: "flashcards" };

	render() {
		return (
			<div id="sidebar">
				<div id="sidebar-top" className="sidebar-icons">
				</div>

				<div id="sidebar-bottom" className="sidebar-icons">
					<BiCog />
				</div>
			</div>
		);
	}
}
