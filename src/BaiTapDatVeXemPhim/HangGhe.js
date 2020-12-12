import React, { Component } from 'react'
import { connect } from 'react-redux'
import './BaiTapBookingTicket.css'

class HangGhe extends Component {

    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {

            let cssGheDaDat = ''
            let disabled = false
            if (ghe.daDat) {
                cssGheDaDat = 'gheDuocChon'
                disabled = true
            }

            // xét trạng thái ghế đang đặt
            let cssGheDangDat =''
            let indexGheDangDat = this.props.danhSachDangDat.findIndex( item => item.soGhe === ghe.soGhe)
            if(indexGheDangDat !== -1){
                cssGheDangDat ='gheDangChon'
            }
            return <button onClick={ ()=> {this.props.datGhe(ghe)}} disabled={disabled} className={`${cssGheDangDat} ${cssGheDaDat} ghe m-2`} key={index}>
                {ghe.soGhe}
            </button>
        })
    }

    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang, index)=>{
            return <span className='rowNumber mr-4'>
                {hang.soGhe}
        </span>
        })
        
    }

    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
            return <div>
                {this.props.hangGhe.hang} {this.renderSoHang()}
            </div>
        } else {
            return <div>
                 {this.props.hangGhe.hang} {this.renderGhe()}
            </div>
        }
    }

    render() {
        // console.log(this.props.stateDatVe);
        return (
            <div className='text-light mt-3 ml-3 text-left'>
                {this.renderHangGhe()}
               
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachDangDat : state.stateDatVe.danhSachDangDat
    }
}

const mapDisPatchToProps = (dispatch) => {
    return {
        datGhe: (ghe)=>{
            dispatch({
                type: 'DAT_GHE',
                ghe
            })
        }
    }
}

export default connect(mapStateToProps,mapDisPatchToProps)(HangGhe)