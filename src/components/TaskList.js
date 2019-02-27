import React, { Component } from 'react';
import TaskDetails from './TaskDetails';
import { create } from './ServiceClient';



class TaskList extends Component {
    render() {
        return (
            <div>
                <h1>Tämä on meidän task List :) </h1>
                <TaskDetails />
            </div>
        );
    }
}

export default TaskList;