import React, { Component } from 'react'
import {connect} from 'react-redux'

class SanPham extends Component {
    render() {
        // console.log("props Sản Phẩm",this.props);
        let { sanPham } = this.props;
        return (
            <div>
                <div className="card">
                    <img className="card-img-top" src={sanPham.hinhAnh} style={{ height: 200 }} alt />
                    <div className="card-body">
                        <h4 className="">{sanPham.tenSP}</h4>
                        <p className="">{(sanPham.donGia).toLocaleString()}</p>
                    </div>
                    <div className='card-footer'>
                        <button onClick={ ()=> {this.props.themGioHang(sanPham)}} className='btn btn-success' >Thêm giỏ Hàng</button>
                    </div>
                </div>

            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    // dispatch là tham số từ redux trả ra (nó là 1 hàm dùng để gửi giá trị lên store)
    return {
        themGioHang: (spClick) => {
            // Gửi dữ liệu lên redux 
            // B1: tạo action 
            const action = {
                type:'THEM_GIO_HANG', // type thuộc tính bắt buộc
                sanPhamClick: {
                    ...spClick,soLuong:1
                }
                // thuộc tính thứ 2 là giá trị gửi lên redux
            }
            // Bước 2 sử dụng phương thức dispatch để đưa action lên redux (reducer)
            dispatch(action);
            console.log(spClick);
        }
    }
}

// kết nối component vs store
// tham số 1 của connect: là mapStateToProps nếu là dữ liệu nào từ store về thì để null 
// tham số 2 của connect là mapDispatchToProps hàm này sẽ tạo ra props là function đưa dữ liệu lên store 
export default connect(null, mapDispatchToProps)(SanPham)
