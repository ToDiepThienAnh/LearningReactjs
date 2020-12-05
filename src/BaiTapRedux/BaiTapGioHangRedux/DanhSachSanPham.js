import React, { Component } from 'react'
import SanPham from './SanPham'
import dsSanPham from './productlist.json'
export default class DanhSachSanPham extends Component {

    renderDanhSachSanPham = ()=> {
        return dsSanPham.map((value,index) => {
            return <div className='col-4' key={index}>
            <SanPham sanPham={value}></SanPham>
        </div>
        })
    }


    render() {
        return (
            <div className='container'>
                <h1 className='text-center'>Danh Sách Sản Phẩm</h1>
                <div className='row'>
                    {this.renderDanhSachSanPham()}
                    
                </div>
            </div>
        )
    }
}
