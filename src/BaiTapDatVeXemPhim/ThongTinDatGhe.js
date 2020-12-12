import React, { Component } from 'react'
import { connect } from 'react-redux'


class ThongTinDatGhe extends Component {
    render() {
        return (
            <div className='mt-5'>
                <button className='gheDuocChon'></button><span style={{ fontSize: '20px' }} className='ml-2 text-light'>Ghế Đã Đặt</span>
                <br></br>
                <button className='gheDangChon'></button><span style={{ fontSize: '20px' }} className='ml-2 text-light'>Ghế đang chọn</span>
                <br></br>
                <button className='ghe'></button><span style={{ fontSize: '20px' }} className='ml-2 text-light'>Ghế Chưa Đặt</span>

                <div>
                    <table className='table table-bordered'>
                        <thead className='text-white'>
                            <tr>
                                <th>Số Ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className='text-warning'>
                            {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                                return <tr key={index}>
                                    <td>{gheDangDat.soGhe}</td>
                                    <td>{gheDangDat.gia}</td>
                                    <td>
                                        <button onClick={() => {
                                            this.props.dispatch({
                                                type: 'HUY_GHE',
                                                soGhe: gheDangDat.soGhe
                                            })
                                        }} className='btn btn-danger'>Hủy</button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot className='text-white'>
                            <tr>
                                <td>Tổng Tiền</td>
                        <td>{this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                            return tongTien += gheDangDat.gia
                        },0)}</td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.stateDatVe.danhSachDangDat
    }
}


export default connect(mapStateToProps)(ThongTinDatGhe)