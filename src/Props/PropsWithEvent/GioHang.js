import React, { Component } from 'react'


export default class GioHang extends Component {

    tinhTongTien = () => {
        let tongTien = this.props.gioHang.reduce((tt, spGH, index) => {
            return tt += spGH.soLuong * spGH.donGia;
        },0)
        return tongTien.toLocaleString();
    }
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
                                        <th></th>
                                    </thead>
                                    <tbody>
                                        {gioHang.map((value, index) => {
                                            return <tr key={index}>
                                                <td>{value.maSP}</td>
                                                <td><img src={value.hinhAnh} style={{ width: 50, height: 60 }}></img></td>
                                                <td>{value.tenSP}</td>
                                                <td className='d-flex'>
                                                    <button onClick={() => {this.props.tangGiamSoLuong(value.maSP, 1)}}>+</button>
                                                    {value.soLuong}
                                                    <button onClick={() => {this.props.tangGiamSoLuong(value.maSP, -1)}}>-</button>
                                                    </td>
                                                <td>{value.donGia.toLocaleString()}</td>
                                                <td>{(value.soLuong * value.donGia).toLocaleString()}</td>
                                                <td><button className='btn btn-danger' onClick={() => {this.props.deleteItem(value.maSP);}}>Xóa</button></td>
                                            </tr>
                                        })}

                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan='5'></td>
                                            <td>Tổng tiền</td>
                                    <td colSpan='5'>{this.tinhTongTien()}</td>
                                        </tr>
                                    </tfoot>
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
