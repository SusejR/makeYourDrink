import React, {Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return(
            <div className="header">
                <img src="/logo.png"/>
                <h1>Make Your Drink</h1>
            </div>
        )
    }
}
export default Header;