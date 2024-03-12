import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import './Todoadder.css'

const Todoadder = () => {
    const dispatch = useDispatch()
    const [ todo, setTodo ] = useState("")

    const sendToTodo = (e) => {
        e.preventDefault()
        dispatch({type: "SEND_TODO", todo: todo})
    }

  return (
    <>
      <div className='adder__container'>
        <form className='todo__adder' onSubmit={sendToTodo}>
          <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
          <button type='submit'>+</button>
        </form>
      </div>
    </>
  )
}

export default Todoadder