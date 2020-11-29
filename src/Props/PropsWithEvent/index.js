import React, { Component } from 'react'
import ProductList from './ProductList'
import GioHang from './GioHang'


export class PropsWithEvent extends Component {
    render() {
        return (
            <div>
                <div className='text-right'>
                    <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
                        Giỏ hàng 
                    </button>
                </div>
                <ProductList></ProductList>

            </div>
        )
    }
}

export default PropsWithEvent



