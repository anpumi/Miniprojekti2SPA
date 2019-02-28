import React, { Component } from 'react';
import FormComponent from "./FormComponent"
import { createtask } from './ServiceClient';
//Our "Create New Task -form"

class FormContainer extends Component {
    constructor() {
        super()
        this.state = {
            personID: 4,
            taskName: "",
            taskDesc: "",
            status: "",
            priority: "",
            isDone: false,
            inProgress: false,
            DateCreated: "2019-02-26T09:38:56.403"
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ?
            this.setState({
                [name]: checked
            })
            :
            this.setState({
                [name]: value
            })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        var formok = true;
        var auerr = '', terr = '';
        if (this.state.taskName.length === 0) {
            formok = false;
            terr = 'Name required';
        }
        if (this.state.taskDesc.length === 0) {
            formok = false;
            auerr = 'Please enter description';
        }
        if (!formok) {
            this.setState({ formErrors: { name: terr, desc: auerr } });
            return false;
        } else {
            createtask(this.state);
            this.props.history.push('/task');
            this.setState({ taskName: '', taskDesc: '', status: '', priority: '', formErrors: { name: '', desc: '' } });
        }
    }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     //this.props.callback(this.state);
    //     // tähän createCallback -metodin ....
    //     create(this.state, () => {
    //         this.props.history.push('/Task');
    //         this.setState({ taskName: '', taskDesc: '', status: '', priority: '' });
    //     });
    //     // this.props.newTask(this.state);
    //     // this.setState({id:"", taskName:"", taskDesc:""});
    //     // see which params needed above
    // }


    render() {
        return (
            <FormComponent
                handleSubmit={this.handleSubmit}
                data={this.state}
                handleChange={this.handleChange}
            />
        )
    }
}
export default FormContainer;