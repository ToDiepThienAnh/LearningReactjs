import React, { Component } from 'react'
import DanhSachNguoiDung from './DanhSachNguoiDung'
import FormDangKy from './FormDangKy'

export default class BaiTapQuanLiNguoiDung extends Component {
    render() {
        return (
            <div className='container'>
                <FormDangKy></FormDangKy>
                <DanhSachNguoiDung></DanhSachNguoiDung>
            </div>
        )
    }
}
