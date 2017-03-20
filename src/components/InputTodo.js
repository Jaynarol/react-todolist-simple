import React from 'react'

const InputTodo = ({handleTodo}) => {

  const onChangeHandle = event => {
    if (event.key === 'Enter') {
      handleTodo(event.target.value)
      event.target.value = ''
    }
  }

  return (
    <div>
      <input type="text" onKeyPress={onChangeHandle} />
    </div>
  )
}


export default InputTodo