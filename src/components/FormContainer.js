// import React, { Component } from 'react';
// import FormComponent from "./FormComponent"
// import { create } from './ServiceClient';

// //Our "Create New Task -form"

// class FormContainer extends Component {
//     constructor() {
//         super()
//         this.state = {
//             taskName: "",
//             taskDesc: "",
//             status: "",
//             priority: "",
//             isDone: false,
//             inProgress: false,
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleChange(event) {
//         const { name, value, type, checked } = event.target
//         type === "checkbox" ?
//             this.setState({
//                 [name]: checked
//             })
//             :
//             this.setState({
//                 [name]: value
//             })
//     }


//     handleSubmit = (event) => {
//         event.preventDefault();
//         //this.props.callback(this.state);
//         // tähän createCallback -metodin ....
//         create(this.state, () => {
//             this.props.history.push('/TaskList');
//             this.setState({ taskName: '' , taskDesc: '', status: '', priority: '' } );
//         });
//         // this.props.newTask(this.state);
//         // this.setState({id:"", taskName:"", taskDesc:""});
//         // see which params needed above

//     }

//     render() {
//         return (
//             <FormComponent
//                 handleSubmit={this.handleSubmit}
//                 data={this.state}
//             />
//         )
//     }
// }

// export default FormContainer;