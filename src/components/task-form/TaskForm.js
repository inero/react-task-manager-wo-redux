import React from 'react';

class TaskForm extends React.Component {

    state = {
        name: ''
    }

    onChangeHandler = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    onClick = () => {
        this.props.addTask(this.state.name);
        this.setState({name: ''});
    }

    render(){
        return (
            <>
                <input type="text" id="name" value={this.state.name} name="name" onChange={e => this.onChangeHandler(e)} />
                <button type="submit" onClick={this.onClick} name="Add">Add</button>
            </>
        )
    }
}

export default TaskForm;