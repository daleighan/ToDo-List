import React, { Component } from 'react';
import Entry from './Entry.js'

class ToDoList extends Component {
	constructor(props) {
		super(props);

	}


  render() {
  	return (
  		<ul className="list">
  			  {this.props.todos.map((todo) => {
  			  	return <Entry key={todo.id} todo={todo} />	  	
  			  }
  			  )}
  		</ul>
  	)
  }
}

export default ToDoList;
