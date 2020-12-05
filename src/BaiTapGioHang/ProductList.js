import React, { Component } from 'react'
import productlist from './productlist.json'
import Product from './Product'
import GioHang from './GioHang'


export default class ProductList extends Component {


    state = {
        productDetail: productlist[0],
        cart: [
            // {
            //     maSP: 1,
            //     tenSP: "VinSmart Live",
            //     soLuong: 1,
            //     donGia: 5700000,
            //     hinhAnh: "./img/sp_vivo850.png"
            // },
            
        ]
    }

    renderProductList = () => {
        return productlist.map((product, index) => {
            return <Product addToCart={this.addProductToCart} viewDetail={this.viewDetailProduct} sanPham={product} key={index}></Product>
        })
    }

    viewDetailProduct = (product) => {
        this.setState({
            productDetail: product,
            
        })
    }
    // Định nghĩa hàm thay đổi số lượng tại nơi chứa state( số lượng nằm trong cart[])
    tangGiamSoLuong = (maSanPham, soluong) => {
        console.log(maSanPham);

        let gioHangCapNhat = [...this.state.cart]
        // tìm trong giỏ hàng có sản phẩm mã == sản phẩm đc click + hoặc -
        let spGioHang = gioHangCapNhat.find(spGH => spGH.maSP === maSanPham)
        if(spGioHang) {
            spGioHang.soLuong += soluong;
        }
        this.setState({
            cart: gioHangCapNhat
        })
    }

    deleteItem = (maSPClick) => {
        console.log(maSPClick);
        
        let gioHangCapNhat = [...this.state.cart]
        const index = gioHangCapNhat.findIndex(product => product.maSP === maSPClick)
        if(index !== -1){
            gioHangCapNhat.splice(index, 1);
        }
        this.setState({
            cart: gioHangCapNhat
        })
    }

    addProductToCart = (product) => {
        let productUpdate = {...product, soLuong: 1}
        const index = this.state.cart.findIndex(product => product.maSP === productUpdate.maSP)
        let newArr = [...this.state.cart];
        if( index !== -1 ){
            
            newArr[index].soLuong++;
            this.setState({
                cart:newArr
            })
        }
        else 
        {
            newArr.push(productUpdate);
            this.setState({
                cart: newArr
            })
        }
      
    }


    render() {
        const { productDetail, cart } = this.state;

        return (
            <div className='container'>
                <GioHang gioHang={cart} deleteItem={this.deleteItem} tangGiamSoLuong={this.tangGiamSoLuong}></GioHang>
                <h1 className='text-danger text-center'>Danh sách sản phẩm</h1>
                <div className='row'>

                    {this.renderProductList()}
                </div>
                <h1 className='text-success text-center mt-4'>Thông tin chi tiết</h1>
                <div className='row mt-4'>
                    <div className='col-6'>
                        
                        <h5 className='text-primary text-center'>{productDetail.tenSP}</h5>
                        <div className="w-100 text-center">

                            <img src={productDetail.hinhAnh} style={{ width: 300 }}></img>

                        </div>

                    </div>
                    <div className='col-6'>
                        <h2>Thông số kĩ thuật</h2>
                        <table className='table'>
                            <tr>
                                <th>Màn hình</th>
                                <td>{productDetail.manHinh}</td>
                            </tr>
                            <tr>
                                <th>Hệ điều hành</th>
                                <td>{productDetail.heDieuHanh}</td>
                            </tr>
                            <tr>
                                <th>Camera trước</th>
                                <td>{productDetail.cameraTruoc}</td>
                            </tr>
                            <tr>
                                <th>Camera sau</th>
                                <td>{productDetail.cameraSau}</td>
                            </tr>
                    
                            <>
                                <th>RAM</th>
                                <td>{productDetail.ram}</td>
                            </>
                            <tr>
                                <th>ROM</th>
                                <td>{productDetail.rom}</td>
                            </tr>

                        </table>
                    </div>
                </div>
            </div>
        )
    }
}