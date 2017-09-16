import React from 'react';
import ToDoList from './ToDoList.js';
import AddTask from './AddTask.js';
import Axios from 'axios';

class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [{"id": 1, "item": "make dinner for the week", "priority": 5}],
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
      this.setState({ todos: data.data.sort(this.comparePriorities) });
    })
    .catch((err) => console.log(err));
  }

  comparePriorities(a, b) {
    if (a.priority < b.priority) {
      return 1;
    }
    if (a.priority > b.priority) {
      return -1;
    }
    return 0;
  }

  sendToDo() {
    if (this.state.newTask !== '') {
      Axios.post('/todos', {
      item: this.state.newTask,
      priority: this.state.taskPriority
      })
      .then((response) => {})
      .catch((err) => console.log(err));
    }
  }

  toDoChange(e) {
    this.setState({ newTask: e.target.value })
  }

  priorityChange(e) {
    this.setState({ taskPriority: e.target.value })
  }

  buttonClick(e) {
    this.sendToDo();
    this.getAllTodos();
  }

  render() {
    return (
      <div>
        <h1>Alex's ToDo List</h1>
          <div className="newentry">
            <AddTask onClick={this.buttonClick.bind(this)} onValueChange={this.priorityChange.bind(this)} onToDoChange={this.toDoChange.bind(this)} />
          </div>
          <div className="todolist"><ToDoList todos={this.state.todos} /></div>
      </div>
    );
  }
}
export default Page;


