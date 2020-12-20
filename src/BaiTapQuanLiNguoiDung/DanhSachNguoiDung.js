import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAction } from '../Redux/Action/action'
// import { createAction } from '../Redux/Action/action'
import { DELETE_USERS, EDIT_USERS } from '../Redux/Action/type'

 class DanhSachNguoiDung extends Component {

    renderDanhSachNguoiDung = () => {
        return this.props.mangThongTinNguoiDung.map((value, index)=>{
            return <tr key={index}>
            <td>{index + 1}</td>
            <td>{value.taiKhoan}</td>
            <td>{value.hoTen}</td>
            <td>{value.matKhau}</td>
            <td>{value.email}</td>
            <td>{value.soDienThoai}</td>
            <td>{value.loaiNguoiDung}</td>
            <td>
                <button className='btn btn-primary mr-1' onClick={()=> this.props.dispatch(createAction(EDIT_USERS, value))}>Chỉnh sửa</button>
                <button className='btn btn-danger' onClick={() => this.props.dispatch(createAction(DELETE_USERS, value))}>Xóa</button>
            </td>
        </tr>
        })
    }

    render() {
        
         return (
            <div className='mt-4'>
                <table className='table'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>STT</th>
                            <th>Tài khoản</th>
                            <th>Họ tên</th>
                            <th>Mật khẩu</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th>Loại người dùng</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderDanhSachNguoiDung()}
                    </tbody>
                </table>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        mangThongTinNguoiDung: state.BaiTapQuanLiNguoiDungReducer.mangThongTinNguoiDung
    }
}

export default connect(mapStateToProps)(DanhSachNguoiDung)