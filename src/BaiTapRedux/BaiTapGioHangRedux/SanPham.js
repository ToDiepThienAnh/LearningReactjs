import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        let {sanPham} = this.props;
        return (
            <div>
                <div className="card">
                    <img className="card-img-top" src={sanPham.hinhAnh} style={{ height:200}} alt />
                    <div className="card-body">
        <h4 className="">{sanPham.tenSP}</h4>
                        <p className="">{(sanPham.donGia).toLocaleString()}</p>
                    </div>
                    <div className='card-footer'>
                        <button className='btn btn-success'>Thêm giỏ Hàng</button>
                    </div>  
                </div>

            </div>
        )
    }
}
