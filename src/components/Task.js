import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Task extends Component {
    constructor(props) {
        super(props);
        this.state = { TaskDesc: '', TaskName: '', TaskID: '' }
    }
    deletequote = (e) => {
        e.preventDefault();
        this.props.deletecb(this.props.task.TaskID);
    }

    detailsRedirect = () => {
        this.props.history.push('/details' + this.props.task.TaskID);
    }

    detailsRedirect = (e) => {
        e.preventDefault();
        console.log(this.props.task.TaskName, this.props.task.TaskDesc, this.props.task.TaskID)
        this.setState({ task: this.state });

    }

    render() {
        return (
            <div className="todo-list">
                <li>
                    < input
                        type="checkbox"
                        checked=""
                        onChange=""
                    />
                    Tehtävän nimi: {this.props.task.TaskName} <br />Tehtävä: {this.props.task.TaskDesc}
                </li>
                <div className="dlink" onClick={this.deletequote}>
                    Delete<span className="glyphicon glyphicon-trash"></span>
                </div>
                <li className="taskName" onClick={this.detailsRedirect}>Task ID:{this.props.task.TaskID} </li>
                <li><Link to={`/details/${this.props.task.TaskID}`} >Details</Link></li>

            </div >
        );
    }



}

export default Task;