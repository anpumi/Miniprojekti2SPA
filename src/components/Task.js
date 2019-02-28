import React, { Component } from 'react';

class Task extends Component {
    state = {}

    deletequote = (e) => {
        e.preventDefault();
        this.props.deletecb(this.props.task.TaskID);
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
                    Delete {this.props.task.TaskID} <span className="glyphicon glyphicon-trash"></span>
                </div>

                {/* <li>
                    Button Delete, Muokkaa (ehkä containeriin?)
              </li> */}
            </div>
        );
    }



}

export default Task;