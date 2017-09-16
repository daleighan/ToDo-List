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
      taskPriority: 5
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
    this.setState({ newTask: e.target.value })
  }

  handlePriorityChange(e) {
    this.setState({ taskPriority: e.target.value })
    console.log(this.state);
  }

  handleButtonClick(e) {
    this.sendToDo();
    this.getAllTodos();
  }

  render() {
    return (
      <div>
        <h1>Alex's ToDo List</h1>
          <div className="newentry"><AddTask onClick={this.handleButtonClick.bind(this)} onValueChange={this.handlePriorityChange.bind(this)} onToDoChange={this.handleToDoChange.bind(this)} /></div>
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
