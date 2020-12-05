import React, { Component } from 'react'
// import thư viện connect vs redux
import { connect } from 'react-redux';



class GioHang extends Component {
    render() {
        console.log("Giỏ Hàng", this.props.gioHang);
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
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.gioHang.map((value, index) => {
                            <tr key={index}>

                                <td>{value.maSP}</td>
                                <td>{value.maSP}</td>
                                <td><img src={value.maSP} style={{ width: 100, height: 80 }}></img></td>
                                <td>{value.maSP}</td>
                                <td>{value.maSP}</td>
                                <td>{value.maSP}*{value.maSP}</td>
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


// Kết nối react component vs redux store tạo ra 1 component mới export ra ngoài
export default connect(mapStateToProps)(GioHang);