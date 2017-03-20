import React from 'react'

const ItemTodo = ({ id, text, finish, handleFinish, handleRemove }) => {
  const finishClass = ['item', (finish ? 'finishItem' : 'unfinishItem')].join(' ')
  const handleOnClickFinish = () => handleFinish(id)
  const handleOnClickRemove = () => handleRemove(id)

  return (
    <li>
      <span className={finishClass}  onClick={handleOnClickFinish}>{text}</span>
      &nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
      <button onClick={handleOnClickRemove}>X</button>
    </li>
  )
}

export default ItemTodo