import React, { Component } from 'react'
import { connect } from 'react-redux'


class KetQua extends Component {


    render() {
        console.log(this.props.soBanThang);
        return (
            <div>
                <div >
                    <h1 className='display-4 text-warning font-weight-bold my-5'>{this.props.ketQua}</h1>
        <h2 className='display-4 text-success font-weight-bold mt-5'>Số bàn thắng:<span className='text-warning'>{this.props.soBanThang}</span></h2>
                    <h2 className='display-4 text-success font-weight-bold mt-5'>Số bàn chơi: <span className='text-warning'>{this.props.soBanChoi}</span></h2>
                    <button className='btn btn-success mt-5' onClick={()=> {this.props.playGame()}}>Play game</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        soBanThang: state.stateOanTuTi.soBanThang,
        soBanChoi: state.stateOanTuTi.soBanChoi,
        ketQua: state.stateOanTuTi.ketQua
    }
}

const mapDisPatchToProps = (dispatch) => {

    return {
        playGame: () => {
            let count = 0
            let randomComputer = setInterval(()=> {
                let soNgauNhien = Math.floor(Math.random() * 3)
                dispatch({
                    type: 'RANDOM', soNgauNhien
                })
                count++
                if(count > 10){
                    clearInterval(randomComputer)
                    dispatch({
                        type: 'ENDGAME'
                    })
                }
            },100)
            
        }
    }
}
export default connect(mapStateToProps,mapDisPatchToProps)(KetQua)

