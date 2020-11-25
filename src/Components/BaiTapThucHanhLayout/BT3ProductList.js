import React, { Component } from 'react'
import BT3ProductItem from './BT3ProductItem'

export default class BT3ProductList extends Component {
    render() {
        return (
            <div className='container pt-2'>
                <div className='row'>
                    <BT3ProductItem></BT3ProductItem>
                    <BT3ProductItem></BT3ProductItem>
                    <BT3ProductItem></BT3ProductItem>
                    <BT3ProductItem></BT3ProductItem>
                    <BT3ProductItem></BT3ProductItem>
                    <BT3ProductItem></BT3ProductItem>
                </div>
            </div>
        )
    }
}
