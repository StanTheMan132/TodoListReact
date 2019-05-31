import React, {Component} from 'react';
import './App.css'
import {inject, observer} from 'mobx-react'

import TodoWrapper from './components/TodoWrapper'
@inject('TodoStore')
@observer
class App extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const time = new Date()
    const todo = {"value": this.todo.value, "time": time} 
    this.props.TodoStore.addTodo(todo)
    this.todo.value = ''
  }
  render() {
    const {TodoStore} = this.props;

    return (
      <div className="App">
        <h1>You have {TodoStore.todoCount} todos</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" placeholder="Enter todo" ref={input => this.todo = input}/>
          <button>Add todo</button>
        </form>
        <h1>Todos:</h1>
        <div className="TodoList">
        {TodoStore.todos.map((bird, i) => (
          <TodoWrapper todo={bird} />
        ))}
        </div>
      </div>
    );
  }
  
}

export default App;
 