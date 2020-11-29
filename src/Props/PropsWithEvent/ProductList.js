import React, { Component } from 'react'
import productlist from '../data/productlist.json'
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
                <GioHang gioHang={cart}></GioHang>
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
