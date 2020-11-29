import React, { Component } from 'react'
import productlist from '../data/productlist.json'


export default class ProductList extends Component {


    state = {
        productDetail: productlist[0]
    }

    renderProductList = () => {
        return productlist.map((product, index) => {
            return <div className='col-4' key={index}>
                <div className="card">
                    <img className="card-img-top" style={{ height: 300 }} src={product.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="text-center card-title">{product.tenSP}</h4>

                        <div className="w-100 text-center">

                            <button className="text-center btn btn-success" onClick={ ()=> this.viewDetailProduct(product)}>Xem chi tiết</button>

                        </div>
                        {/* <button className="text-center w-100 btn btn-success">Xem chi tiết</button> */}
                    </div>
                </div>
            </div>
        })
    }

    viewDetailProduct = (product) => {
        this.setState({
            productDetail: product
        })
    }

    render() {
        const { productDetail } = this.state;

        return (
            <div className='container'>
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
