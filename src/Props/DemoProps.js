import React, { Component } from 'react'
import ProductRFC from './ProductRFC'

export default class DemoProps extends Component {
    render() {
        return (
            <div className='container'>
                <h3 className='text-center'>Danh Sách sản phẩm</h3>
                <div className='row'>
                    <div className='col-3'>
                        <ProductRFC name='Iphone' price='1000$'></ProductRFC>
                    </div>
                    <div className='col-3'>
                        <ProductRFC name='SAmSung ' price='2000$'></ProductRFC>
                    </div>
                    <div className='col-3'>
                        <ProductRFC name='Nokia' price='1500$'></ProductRFC>
                    </div>
                    <div className='col-3'>
                        <ProductRFC name='Xiaomi' price='2300$'></ProductRFC>
                    </div>
                    
                </div>
            </div>
        )
    }
}
