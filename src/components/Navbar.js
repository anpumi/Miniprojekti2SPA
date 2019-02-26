import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {}
    render() {
        return (
            <div>
                <table className="Navi">
                    <tr>
                        <td><Link to="/">Home</Link></td>
                        <td><Link to="/home">Pääsivu</Link></td>
                        <td><Link to="/Container">Tietoja</Link></td>
                    </tr>
                </table >
            </div>

        );
    }
}

export default Navbar;