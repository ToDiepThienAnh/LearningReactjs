import React, { Component } from 'react'

export default class BT3Header extends Component {
    render() {
        return (
            <div className="bg-dark">
                <div className="container">
                    <ul className="nav justify-content-end  ">
                        <li className="nav-item">
                            <a className="nav-link active text-white" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
}
