import React, { Component } from 'react'

export default class ProductRCC extends Component {

     
    

    render() {

        let {SanPham} = this.props;

        return (
            <div className="card">
                <img className="card-img-top" style={{height: '300px'}} src={SanPham.hinhAnh} alt />
                <div className="card-body">
        <h4 className="card-title">{SanPham.tenSP}</h4>
        <p className="card-text">{SanPham.giaBan}</p>
                </div>
            </div>

        )
    }
}
