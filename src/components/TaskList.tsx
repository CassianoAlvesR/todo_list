import React from 'react'

//Style
import styles from "./TaskList.module.css"

//interface's
import { ITask } from "../interfaces/Task"

type Props = {
    taskList: ITask[];
    handleDelete(id: number): void
}

const TaskForm = ({ taskList, handleDelete }: Props) => {
    return (
        <>
            {taskList.length > 0 ? (taskList.map((task) => (
                <div key={task.id} className={styles.task}>
                    <div className={styles.details}>
                        <h4>{task.title}</h4>
                        <p>Dificuldade: {task.difficulty}</p>
                    </div>
                    <div className={styles.actions}>
                        <i className="bi bi-pencil"></i>
                        <i className="bi bi-trash" onClick={() => {handleDelete(task.id)}}></i>
                    </div>
                </div>
            ))) 
                                 : (<p>Nenhuma tarefa encontrada.</p>)}
        </>
    )
}

export default TaskForm