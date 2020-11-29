import React, { Component } from 'react'


export default class GioHang extends Component {
    render() {

        const { gioHang } = this.props;

        return (

            <div>
                {/* Button trigger modal */}
                
                {/* Modal */}
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Giỏ Hàng</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className='table'>
                                    <thead>
                                        <th>mã Sãn Phẩm</th>
                                        <th>Hình ảnh</th>
                                        <th>Tên Sản phẩm</th>
                                        <th>Số lượng</th>
                                        <th>Đơn giá</th>
                                        <th>Thành tiền</th>
                                    </thead>
                                    <tbody>
                                        {gioHang.map((value, index) => {
                                            return <tr key={index}>
                                                <td>{value.maSP}</td>
                                            <td><img src={value.hinhAnh} style={{ width: 50, height:60}}></img></td>
                                            <td>{value.tenSP}</td>
                                            <td>{value.soLuong}</td>
                                            <td>{value.donGia}</td>
                                        <td>{ value.soLuong* value.donGia}</td>
                                            </tr>
                                        })}
                                        
                                    </tbody>
                                </table>    
        </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
