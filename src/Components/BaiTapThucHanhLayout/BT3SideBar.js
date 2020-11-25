import React, { Component } from 'react'

export default class BT3SideBar extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h1>Shop Name</h1>
                <ul style={{ listStyle: 'none' }} className="pl-0">
                    <li className="border border-secondary ">
                        <p className="text-primary p-2">Categories 1</p>
                    </li>
                    <li className="border border-secondary "><p className="text-primary p-2">Categories 2</p>
                    </li>
                    <li className="border border-secondary "><p className="text-primary p-2">Categories 3</p>
                    </li>
                </ul>
            </div>

        )
    }
}
