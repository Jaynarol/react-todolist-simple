import React, { PropTypes } from 'react'
import ItemTodo from './ItemTodo'

const ShowTodo = ({ todos, handleFinish, handleRemove }) => (
  <div>
    <ul>
      {
        todos.map(todo => (
          <ItemTodo key={todo.id} handleFinish={handleFinish} handleRemove={handleRemove} {...todo} />
        ))
      }
    </ul>
  </div>
)

ShowTodo.propTypes = {
  todos: PropTypes.array
}

export default ShowTodo