import React, { Component } from 'react';

class AddTask extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<textarea defaultValue="enter a new ToDo" className="txt" onChange={this.props.onToDoChange} />
				Priority: 
				<select className="priorityValue" onChange={this.props.onValueChange}>
					<option value="5">5</option>
					<option value="4">4</option>
					<option value="3">3</option>
					<option value="2">2</option>
					<option value="1">1</option>
				</select>
					<span className="add" onClick={this.props.onClick}>New ToDo</span>
			</div>
		)
	}
}

export default AddTask