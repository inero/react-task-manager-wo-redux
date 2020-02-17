import React from 'react';

class TaskItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            edit: false,
            name: props.task.name
        }
    }

    onDoneClick = () => {
        this.props.completeTask(this.props.task.id);
    }

    onEditClick = () => {
        this.setState({edit: !this.state.edit});
    }
    
    onChangeHandler = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    onSaveClick = () => {
        this.props.saveTask(this.state.name, this.props.task.id);
        this.setState({edit: !this.state.edit});
    }

    onDeleteClick = () => {
        this.props.deleteTask(this.props.task.id);
    }

    render(){
        return (
            <li>
                {
                    !this.state.edit ? 
                    <span className={!this.props.task.completed ? 'normal-task' : 'completed-task'}>{this.props.task.name} </span> :
                    <input type="text" id="name" value={this.state.name} name="name" onChange={e => this.onChangeHandler(e)} />
                }
                {
                    !this.props.task.completed ? 
                    <>
                        {   
                            !this.state.edit ? 
                            <>
                                <button type="button" onClick={this.onEditClick}>Edit</button>
                                <button type="button" onClick={this.onDoneClick}>Done</button>
                            </> :
                            <button type="button" onClick={this.onSaveClick}>Save</button> 
                        }
                    </> : 
                    <>
                        <button type="button" onClick={this.onDoneClick}>Undo</button>
                        <button type="button" onClick={this.onDeleteClick}>Delete</button>
                    </>
                }   
            </li>
        )
    }
}

export default TaskItem;