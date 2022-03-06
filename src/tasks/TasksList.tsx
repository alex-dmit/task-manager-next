import { Task } from './types'

type TasksListProps = {
  tasks: Task[],
  toggleTask: (id: number) => void
}

function setDecorationStyle(done: boolean) {
  if (done) return 'line-through'
  else return 'none'
}

export const TasksList: React.FC<TasksListProps> = (props) => {  
  return (
    <ul>
      {props.tasks.map(task => {
        return <li key={task.id}
          style={{ textDecoration: setDecorationStyle(task.done) }}
          onClick={() => props.toggleTask(task.id)}>
          {task.name}
        </li>
      })}
    </ul>
  )
}