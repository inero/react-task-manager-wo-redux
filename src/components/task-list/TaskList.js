import React from 'react';
import TaskItem from './task-item/TaskItem';

class TaskList extends React.Component {

    onCompletingTask = (taskId) => {
        this.props.completeTask(taskId);
    }

    onUpdatingTask = (taskName, taskId) => {
        this.props.saveTask(taskName, taskId);
    }

    onDeleteTask = (taskId) => {
        this.props.removeTask(taskId);
    }

    render(){
        return (
            <ul>
                {
                    this.props.tasks.map((task, index) => <TaskItem task={task} key={index} saveTask={this.onUpdatingTask} deleteTask={this.onDeleteTask} completeTask={this.onCompletingTask} />)
                }
            </ul>
        )
    }
}

export default TaskList;