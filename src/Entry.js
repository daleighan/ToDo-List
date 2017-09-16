import React, { Component } from 'react';

class Entry extends Component {
	constructor(props) {
		super(props);

	}
  
  render() {
  	return (
  		<li><span className="task">{this.props.todo.item}</span><span className="priorty">  {this.props.todo.priority}</span></li>
  	)
  }
}

export default Entry;