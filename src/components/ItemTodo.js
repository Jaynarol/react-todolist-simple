import React from 'react'

const ItemTodo = ({ id, text, finish, handleFinish, handleRemove }) => {
  const finishClass = finish ? 'finishItem' : 'unfinishItem'
  const handleOnClickFinish = () => handleFinish(id)
  const handleOnClickRemove = () => handleRemove(id)

  return (
    <li className="item">
      <span className={finishClass}  onClick={handleOnClickFinish}>{text}</span>
      <button className="deleteBtn" onClick={handleOnClickRemove}>X</button>
    </li>
  )
}

export default ItemTodo