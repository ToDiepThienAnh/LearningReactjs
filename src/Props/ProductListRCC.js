import React, { Component } from 'react'
import ProductRCC from './ProductRCC'

export default class ProductListRCC extends Component {


    // this.props là thuộc tính có sẵn của react class component dùng để nhận giá trị từ component cha truyền vào
    // this.props là thuộc tính không đc gán lại giá trị mới
    // props thường dùng để binding dữ liệu là chính    

    products = [
        {
          "maSP": 1,
          "tenSP": "VinSmart Live",
          "manHinh": "AMOLED, 6.2\", Full HD+",
          "heDieuHanh": "Android 9.0 (Pie)",
          "cameraTruoc": "20 MP",
          "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
          "ram": "4 GB",
          "rom": "64 GB",
          "giaBan": 5700000,
          "hinhAnh": "./img/sp_vivo850.png"
        },
      
        {
          "maSP": 2,
          "tenSP": "Meizu 16Xs",
          "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
          "heDieuHanh": "Android 9.0 (Pie); Flyme",
          "cameraTruoc": "20 MP",
          "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
          "ram": "4 GB",
          "rom": "64 GB",
          "giaBan": 7600000,
          "hinhAnh": "./img/sp_note7.png"
        },
      
        {
          "maSP": 3,
          "tenSP": "Iphone XS Max",
          "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
          "heDieuHanh": "iOS 12",
          "cameraSau": "Chính 12 MP & Phụ 12 MP",
          "cameraTruoc": "7 MP",
          "ram": "4 GB",
          "rom": "64 GB",
          "giaBan": 27000000,
          "hinhAnh": "./img/sp_iphoneX.png"
        }
      ]

    renderProductList = () => {
        return this.products.map((product, index) => {
            return <div className='col-4'>
                <ProductRCC SanPham={product}></ProductRCC>
            </div>
        })
    }

    render() {
        

        return (
            <div className='container'>
                <h3 className='text-center text-danger'>Danh Sách sản phẩm</h3>
                <div className='row'>                
                    {this.renderProductList()}
                </div>
            </div>
        )
    }
}
