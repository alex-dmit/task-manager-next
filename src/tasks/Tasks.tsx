import { useState } from 'react'
import { CreateTask } from './CreateTask'
import { TasksList } from './TasksList'
import { Task } from './types'

const initTasks: Task[] = [
  {
    id: 1,
    name: 'Learn JS',
    done: false
  },
  {
    id: 2,
    name: 'Learn ReactJS',
    done: false
  },
  {
    id: 3,
    name: 'Learn CSS',
    done: true
  },
]

export const Tasks = () => {
  const [tasks, setTasks] = useState(initTasks)

  function toggleTask(id: number) {
    setTasks(tasks.map(task => {
      if (task.id === id) return { ...task, done: !task.done }
      else return task
    }))
  }

  function addTask(name: string) {
    const id = tasks[tasks.length - 1].id + 1
    setTasks([...tasks, { id, name, done: false }])
  }

  return (
    <>
      <h1>Tasks</h1>
      <CreateTask tasks={tasks} addTask={addTask} />
      <TasksList tasks={tasks} toggleTask={toggleTask} />
    </>
  )
}