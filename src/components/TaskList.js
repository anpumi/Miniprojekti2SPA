import React, { Component } from 'react';
import TaskDetails from './TaskDetails';
import { fetchall } from './ServiceClient';


class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }
     //calls REST
  componentDidMount() {
    this.all();
  }
  all = () => {
    fetchall(this.allreceived);
  }
  allreceived = (tasks, error) => {
    if (error) {
      // virhekäsittely
    } else {
      this.setState({ data: tasks });
    }
  }

    render() {

        var taskInstances = this.state.data.map(function (tasks){
            return <Task tasks={tasks} key={tasks.id} {...this.props} className="list-group-item" />
        }.bind(this));
        
        return (
            <div className="taskList">
                <h1>Tämä on meidän task List :) </h1>
                <ul className="list-group">
                {taskInstances}
                </ul>
                <TaskDetails />
            </div>
        );
    }
}

export default TaskList;