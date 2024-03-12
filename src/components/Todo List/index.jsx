import { useSelector } from 'react-redux'
import './Todolist.css'

const Todolist = () => {
  const data = useSelector(state => state?.todos)

  return (
    <>
        <div className='list__container'>
            {
                data?.map(todo => <p className='todo__text'>{todo}</p>)
            }
        </div>
    </>
  )
}

export default Todolist