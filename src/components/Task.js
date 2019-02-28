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
                    Tehtävä: {this.props.task.TaskName} <br />Kuvaus: {this.props.task.TaskDesc} <br />Done?
                    < input
                        type="checkbox"
                        checked=""
                        onChange=""
                    />
                </li>
                <div className="dlink" onClick={this.deletequote}>
                <a href="#"><span class="glyphicon glyphicon-trash"></span>
                    </a>
                </div>
                <div className="taskName" onClick={this.detailsRedirect}>
                    <span><Link to={`/details/${this.props.task.TaskID}`}>Details</Link></span>
                </div>


            </div >
        );
    }



}

export default Task;