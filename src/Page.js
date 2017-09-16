import React from 'react';
import ToDoList from './ToDoList.js';
import AddTask from './AddTask.js';
import Axios from 'axios';

class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: window.sampleData,
      newTask: '',
      taskPriority: ''
    };
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    Axios.get('/todos')
    .then(data => {
      this.setState({ todos: data.data });
    })
    .catch((err) => console.log(err));
  }

  sendToDo() {
    Axios.post('/todos', {
      item: this.state.newTask,
      priority: this.state.taskPriority
    })
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
  }

  handleToDoChange(e) {
    console.log(e.target.value);
    this.setState({ newTask: e.target.value })
  }

  handlePriorityChange(e) {
    console.log(e.target.value);
    this.setState({ taskPriority: e.target.value })
  }


  render() {
    return (
      <div>
        <h1>Alex's ToDo List</h1>
          <div className="newentry"><AddTask onValueChange={this.handlePriorityChange.bind(this)} onToDoChange={this.handleToDoChange.bind(this)} /></div>
          <div className="todolist"><ToDoList todos={this.state.todos} /></div>
      </div>
    );
  }
}
export default Page;

window.sampleData = [{
  "id": 1,
  "item": "make dinner for the week",
  "priority": 5
}];
