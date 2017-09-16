import React from 'react';
import ToDoList from './ToDoList.js';
import Axios from 'axios';

class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: window.sampleData
    };
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    Axios.get('/todos')
    .then(data => {
      console.log(data);
      this.setState({ todos: data.data });
    })
  }


  render() {
    return (
      <div>
        <h1>Alex's ToDo List</h1>
          <div className="newentry"></div>
          <div className="todolist"><ToDoList todos={this.state.todos} /></div>
      </div>
    );
  }
}
export default Page;

window.sampleData =[{
  "id": 1,
  "item": "make dinner for the week",
  "priority": 5
},
{
  "id": 2,
  "item": "practice violin",
  "priority": 2
},
{ 
  "id": 3,
  "item": "go clothes shopping",
  "priority": 1
}];