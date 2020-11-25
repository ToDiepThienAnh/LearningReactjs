import React, { Component } from 'react'
import BT3ProductList from './BT3ProductList'
import BT3Carousel from './BT3Carousel'

export default class BT3Content extends Component {
    render() {
        return (
            <div className="container-fluid py-1">
                <div className="container-fluid">
                    <BT3Carousel></BT3Carousel>
                    <BT3ProductList></BT3ProductList>
                </div>
            </div>

        )
    }
}
