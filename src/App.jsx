import './App.css'
import Todoadder from './components/Todo Adder'
import Todolist from './components/Todo List'

function App() {

  return (
    <>
      <div className='todolist__container'>
        <Todoadder />
        <Todolist />
      </div>
    </>
  )
}

export default App
