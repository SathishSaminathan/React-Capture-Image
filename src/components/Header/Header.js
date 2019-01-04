import React, { Component } from 'react'

import "./Header.css";

class Header extends Component {
    render () {
        return (
            <div className="header_style">
                <ul className="login_signup">
                    <li><a>Signup</a></li>
                    <li><a>Login</a></li>
                </ul>
            </div>
        )
    }
}

export default Header