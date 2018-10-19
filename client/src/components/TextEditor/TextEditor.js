import React from "react";
import { Editor, EditorState, RichUtils } from "draft-js";

class PageContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editorState: EditorState.createEmpty()
		};
	}

	onChange = editorState => {
		this.setState({
			editorState
		});
	};

	handleKeyCommand = command => {
		const newState = RichUtils.handleKeyCommand(
			this.state.editorState,
			command
		);
		if (newState) {
			this.onChange(newState);
			return "handled";
		}
		return "not-handled";
	};

	onUnderlineClick = () => {
		this.onChange(
			RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE")
		);
	};

	onBoldClick = () => {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
	};

	onItalicClick = () => {
		this.onChange(
			RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
		);
  };
  
  onH1Click = () => {
    this.onChange(
      RichUtils.toggleBlockType(this.state.editorState, "header-one")
    )
  }
  onH2Click = () => {
    this.onChange(
      RichUtils.toggleBlockType(this.state.editorState, "header-two")
    )
  }
  onH3Click = () => {
    this.onChange(
      RichUtils.toggleBlockType(this.state.editorState, "header-three")
    )
  }

	render() {
		return (
			<div className="editorContainer">
				<button onClick={this.onUnderlineClick}>U</button>
				<button onClick={this.onBoldClick}>
					<b>B</b>
				</button>
				<button onClick={this.onItalicClick}>
					<em>I</em>
				</button>
        <button onClick={this.onH1Click}>H1</button>
        <button onClick={this.onH2Click}>H2</button>
        <button onClick={this.onH3Click}>H3</button>
				<div className="editors">
					<Editor
						editorState={this.state.editorState}
						handleKeyCommand={this.handleKeyCommand}
						onChange={this.onChange}
					/>
				</div>
			</div>
		);
	}
}

export default PageContainer;
