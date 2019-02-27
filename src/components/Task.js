import React, { Component } from 'react';

class Task extends Component {
    state = {}

    render() {
        return (
            <div className="todo-list">
                <li>
                    Tehtävän nimi: {this.props.task.TaskName} <br />Tehtävä: {this.props.task.TaskDesc}
                    < input
                        type="checkbox"
                        checked=""
                        onChange=""
                    />
                </li>
                {/* <li>
                    Button Delete, Muokkaa (ehkä containeriin?)
              </li> */}
            </div>
        );
    }



}

export default Task;