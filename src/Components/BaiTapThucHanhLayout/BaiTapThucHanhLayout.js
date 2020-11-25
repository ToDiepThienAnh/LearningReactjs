import React, { Component } from 'react'
import BT3Content from './BT3Content'
import BT3SideBar from './BT3SideBar'
import BT3Footer from './BT3Footer'
import BT3Header from './BT3Header'


export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <BT3Header></BT3Header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2 p-0">
                            <BT3SideBar></BT3SideBar>
                        </div>
                        <div className="col-8 p-0">
                            <BT3Content></BT3Content>
                        </div>
                    </div>
                </div>
                <BT3Footer></BT3Footer>
            </div>
        )
    }
}
