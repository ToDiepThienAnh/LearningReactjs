import React, { Component } from 'react'
import { connect } from 'react-redux'
class TableSinhVien extends Component {

    renderSinhVien = () => {
        return this.props.danhSachSinhVien.map((sv, index) => {
            return <tr key={index}>
           
            <td>{sv.maSinhVien}</td>
            <td>{sv.tenSinhVien}</td>
            <td>{sv.soDienThoai}</td>
            <td>{sv.email}</td>
            <td>
                <button onClick={ ()=> {this.props.dispatch({
                    type:'SUA_SINHVIEN',
                    sinhVienSua: sv
                })}} className='btn btn-info'>Sửa</button>
                <button className='ml-2 btn btn-danger'>Xóa</button>
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
                            <th>Mã Sinh Viên</th>
                            <th>Họ Tên</th>
                            <th>Số Điện Thoại</th>
                            <th>Email</th>
                            <th></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    {this.renderSinhVien()}
                    </tbody>
                </table>
            </div>
        )
    }
}

// cú pháp: () => { return {} } like () => ({})
// const mapStateToProps = (state) => {
//     return {
//         danhSachSinhVien: state.stateDanhSachSinhVien.danhSachSinhVien
//     }
// }

const mapStateToProps = (state) => ({
    danhSachSinhVien: state.stateDanhSachSinhVien.danhSachSinhVien
})

export default connect(mapStateToProps)(TableSinhVien)