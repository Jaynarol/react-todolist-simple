import React, { Component } from 'react'
import InputTodo from '../components/InputTodo'
import ShowTodo from '../components/ShowTodo'
import logo from './logo.svg'
import './App.css'

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        text: 'first task',
        finish: false
      },
      {
        id: 2,
        text: 'second task',
        finish: true
      }
    ]
  }

  createNewItem = text => {
    const todo = this.state.todos
    return {
      id: (todo[todo.length - 1] || {id:0}).id + 1,
      text,
      finish: false
    }
  }

  addTodo = text => {
    this.setState({ todos: [...this.state.todos, this.createNewItem(text)]})
  }

  toggleFinish = id => {
    const todo = this.state.todos
    const index = todo.findIndex(item => item.id === id)
    todo[index].finish = !todo[index].finish
    this.setState({ todos: todo })
  }

  removeItem = id => {
    const todo = this.state.todos
    const index = todo.findIndex(item => item.id === id)
    todo.splice(index, 1)
    this.setState({ todos: todo })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <InputTodo handleTodo={this.addTodo} />
          <ShowTodo handleFinish={this.toggleFinish} handleRemove={this.removeItem} {...this.state} />
        </div>
      </div>
    )
  }
}

export default App
