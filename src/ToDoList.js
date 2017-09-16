import React, { Component } from 'react';
import Entry from './Entry.js';
import { SortableContainer } from 'react-anything-sortable';

class ToDoList extends Component {
	constructor(props) {
		super(props);

	}


  render() {
  	return (
  		<SortableContainer className="list">
  			  {this.props.todos.map((todo) => {
  			  	return <Entry key={todo.id} sortData={todo.priority} todo={todo} />	  	
  			  }
  			  )}
  		</SortableContainer>
  	)
  }
}

export default ToDoList;
