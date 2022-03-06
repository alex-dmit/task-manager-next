import { FormEvent, useState } from 'react'
import { Task } from './types'

type CreateTaskProps = {
  tasks: Task[],
  addTask: (name: string) => void
}

export const CreateTask: React.FC<CreateTaskProps> = (props) => {
  const [taskName, setTaskName] = useState('')
  
  function createTaskHandle(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    props.addTask(taskName)
  }
  
  return (
    <form onSubmit={createTaskHandle}>
      <input 
        type="text" 
        value={taskName} 
        onChange={(event) => setTaskName(event.target.value)} 
      />
      <button type='submit'>Create task</button>
    </form>
  )
}