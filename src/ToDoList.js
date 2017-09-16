import React, { Component } from 'react';
import Entry from './Entry.js';
import Sortable from 'react-anything-sortable';

class ToDoList extends Component {
	constructor(props) {
		super(props);

	}


  render() {
  	return (
  		<Sortable className="list">
  			  {this.props.todos.map((todo) => {
  			  	return <Entry key={todo.id} sortData={todo.priority} todo={todo} />	  	
  			  }
  			  )}
  		</Sortable>
  	)
  }
}

export default ToDoList;
