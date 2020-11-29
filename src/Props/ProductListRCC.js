import React, { Component } from 'react'
import ProductRCC from './ProductRCC'

export default class ProductListRCC extends Component {


    // this.props là thuộc tính có sẵn của react class component dùng để nhận giá trị từ component cha truyền vào
    // this.props là thuộc tính không đc gán lại giá trị mới
    // props thường dùng để binding dữ liệu là chính    

    

    renderProductList = () => {
        return this.products.map((product, index) => {
            return <div className='col-4'>
                <ProductRCC SanPham={product}></ProductRCC>
            </div>
        })
    }

    render() {
        

        return (
            <div className='container'>
                <h3 className='text-center text-danger'>Danh Sách sản phẩm</h3>
                <div className='row'>                
                    {this.renderProductList()}
                </div>
            </div>
        )
    }
}
