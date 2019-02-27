import React, { Component } from 'react';

class TaskDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { id: props.match.params.id, taskName: '', taskDesc: '' }
    }
    //calls REST
    componentDidMount() {
        this.haeyksi();
    }
    haeyksi = () => {
        fetchone(this.state.id, this.yksihaettu);
    }
    yksihaettu = (ydata) => {
         this.setState({ taskName: ydata.taskName, taskDesc: ydata.taskDesc });
    }

    handleQuoteChange = (e) => { this.setState({ taskDesc: e.target.value }); }
    handleNameChange = (e) => { this.setState({ taskName: e.target.value }); }
    handleCreateClick = (e) => {
        e.preventDefault();
            updatequote(this.state, () => {
                this.props.history.push('/QuoteList');
                this.setState({ taskDesc: '', taskName: '' });
            }
       )
    }

    render() {
        return (
            <div>
                <h3>Add or change your task details</h3>
                {/* <p>Tässä tietoja / details</p> */}
                <form>
                    Task Name: <input type="text" placeholder="task name here" value={this.state.taskName} onChange={this.handleNameChange}/> <br/>
                    Task Description: <input type="text" placeholder="task description, max 400 characters" value={this.state.taskDesc} onChange={this.handleQuoteChange}/> <br/>
                    <input class="btn btn-primary" type="submit" value="Submit" onClick={this.handleCreateClick} />
                    <input class="btn btn-primary" type="submit" value="Cancel" onClick={this.handleCreateClick} /> 
                    <input class="btn btn-primary" type="submit" value="Delete" onClick={this.handleCreateClick} /> 
                </form>
            </div>
        );
    }
}

export default TaskDetails;