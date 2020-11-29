import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        const { sanPham, viewDetail, addToCart } = this.props

        

        return (
            <div className='col-4'>
                <div className="card">
                    <img className="card-img-top" style={{ height: 300 }} src={sanPham.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="text-center card-title">{sanPham.tenSP}</h4>

                        <div className="w-100 text-center">

                            <button className="text-center btn btn-success" onClick={ ()=> viewDetail(sanPham)}>Xem chi tiết</button>
                            <button className="ml-2 text-center btn btn-danger" onClick= {() => addToCart(sanPham)}>Thêm giỏ hàng</button>
                        </div>
                        {/* <button className="text-center w-100 btn btn-success">Xem chi tiết</button> */}
                    </div>
                </div>
            </div>
        )
    }
}
