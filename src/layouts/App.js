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

  createNewItem = ({ id, text, finish = false }) => {
    const todo = this.state.todos
    const nextId = todo.length ? todo[todo.length - 1].id + 1 : 1
    return { id: id || nextId, text, finish }
  }

  addTodo = text => {
    this.setState({ todos: [...this.state.todos, this.createNewItem({ text })] })
  }

  toggleFinish = id => {
    this.setState({
      todos: this.state.todos.map(todo => todo.id === id ? { ...todo, finish: !todo.finish } : todo)
    })
  }

  removeItem = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to TodoList App</h2>
          <h4>(Powered by React)</h4>
        </div>
        <div className="App-intro">
          <InputTodo handleNewTodo={this.addTodo} />
          <ShowTodo handleFinish={this.toggleFinish} handleRemove={this.removeItem} {...this.state} />
        </div>
      </div>
    )
  }
}

export default App
