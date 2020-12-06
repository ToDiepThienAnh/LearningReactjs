import React, { Component } from 'react'
// import thư viện connect vs redux
import { connect } from 'react-redux';



class GioHang extends Component {
    render() {
        // console.log("Giỏ Hàng", this.props.gioHang);
        return (

            <div>
                <h1 className='text-center display-4'>Giỏ Hàng</h1>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Mã Sản Phẩm</th>
                            <th>Tên Sản Phẩm</th>
                            <th>Hình ảnh</th>
                            <th>Số Lượng</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.gioHang.map((value, index) => {
                            return <tr key={index}>

                                <td>{value.maSP}</td>
                                <td>{value.tenSP}</td>
                                <td><img src={value.hinhAnh} style={{ width: 100, height: 80 }}></img></td>
                                <td>
                                    <button onClick={ () => {this.props.tangGiamSoLuong(value.maSP, 1)}}>+</button>
                                    {value.soLuong}
                                    <button onClick={ () => {this.props.tangGiamSoLuong(value.maSP, -1)}}>-</button>
                                    </td>
                                <td>{value.donGia}</td>
                                <td>{value.soLuong*value.donGia}</td>
                                <td><button onClick={ ()=> {this.props.xoaGioHang(value.maSP)}} className='btn btn-danger'>Xóa</button></td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        )
    }
}

// Định nghĩa hàm lấy state từ redux về biến thành props của reactComponent
const mapStateToProps = (state) => { // state đại diện cho rootReducer
    return {
        gioHang: state.stateGioHang.gioHang
    }
}

// Hàm tạo ra 1 props gửi lên redux store (tất cả reducer )
const mapDisPatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSPClick) => {
            console.log(maSPClick);
            // Đưa dữ liệu lên redux store (reducer)
            const action  = {
                type: 'XOA_GIO_HANG',
                maSPXoa: maSPClick
            }
            dispatch(action);
        },
        tangGiamSoLuong: (maSPCLick,SL) => {
            console.log(maSPCLick,SL);
            const action = {
                type: 'TANG_GIAM_SOLUONG',
                maSPClick: maSPCLick,
                soLuong: SL

            }
            dispatch(action)
        }
    }
}

// Kết nối react component vs redux store tạo ra 1 component mới export ra ngoài
export default connect(mapStateToProps,mapDisPatchToProps)(GioHang);