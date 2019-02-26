import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import ToDoItem from './ToDoItem';
import TodosData from './TodosData';

const todoItems = TodosData.map((item) => <ToDoItem key={item.id} item={item} />);

class Home extends Component {
    state = {}
    render() {
        return (
            <div>
                <Header />
                <div><h2>Tämä tässä on minun kotisivu</h2></div>
                <div className="todo-list">
                    {todoItems}
                </div>
                <Footer />
            </div>

        );
    }
}

export default Home;