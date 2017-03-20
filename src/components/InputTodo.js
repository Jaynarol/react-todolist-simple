import React from 'react'

const InputTodo = ({handleNewTodo}) => {

  const handleKeyPress = event => {
    if (event.key === 'Enter' && event.target.value) {
      handleNewTodo(event.target.value)
      event.target.value = ''
    }
  }

  return (
    <div>
      <input type="text" placeholder="add your task here!" onKeyPress={handleKeyPress} />
    </div>
  )
}


export default InputTodo