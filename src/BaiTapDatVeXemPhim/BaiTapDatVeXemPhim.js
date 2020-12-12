import React, { Component } from 'react'
import './BaiTapBookingTicket.css'
import ThongTinDatGhe from './ThongTinDatGhe'
import data from './danhSachGhe.json'
import HangGhe from './HangGhe'

export default class BaiTapDatVeXemPhim extends Component {


    renderHangGhe = () => {
        return data.map((hangGhe, index) => {
            return <div key={ index}>
                <HangGhe hangGhe={hangGhe} soHangGhe={index}></HangGhe>
            </div>
        })
    }

    render() {
        return (
            <div style={{ position: 'fixed', width: '100%', height: '100%', backgroundImage: "url('./img/bgmovie.jpg')", backgroundSize: '100%' }}>
                <div style={{ backgroundColor: 'rgba(0,0,0,0.6)', position: 'fixed', width: '100%', height: "100%" }}>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-8'>
                                <div className='text-warning display-4 text-center'>Đặt Vé xem phim CyberLearn
                                
                                </div>
                                <h3 className='text-white text-center'>Màn hình</h3>
                                <div className='d-flex justify-content-center'>
                                    
                                <div className='screen'></div>
                                
                                </div>
                                {this.renderHangGhe()}
                            </div>
                            
                            <div className='col-4'>
                            <div className='text-success display-4 text-center'>Danh  Sách ghế bạn chọn
                                </div>
                                <ThongTinDatGhe></ThongTinDatGhe>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
