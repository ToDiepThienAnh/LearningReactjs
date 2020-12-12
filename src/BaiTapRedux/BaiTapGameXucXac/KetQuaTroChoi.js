import React, { Component } from 'react'
import {connect} from 'react-redux'
 class KetQuaTroChoi extends Component {
    render() {
        

        return (

            <div className='container text-center'>
                <h1 className='display-4 '>Bạn chọn: {(!this.props.stateDatCuoc) ? <span className='display-4 text-danger'>Xỉu</span> : <span className='display-4 text-danger'>Tài</span>}</h1>
                <h1 className='display-4'>Số bàn thắng: <span className='display-4 text-success'>{this.props.stateSoBanThang}</span></h1>
                <h1 className='display-4'>Số bàn chơi: <span className='display-4 text-warning'>{this.props.stateSoBanChoi}</span></h1>
                <button onClick={ ()=> {this.props.dispatch({
                    type: 'RANDOM_XUCXAC'
                })}} className='btn btn-success'>Play Game</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        stateDatCuoc: state.stateXucXac.datCuoc,
        stateSoBanChoi: state.stateXucXac.soBanChoi,
        stateSoBanThang: state.stateXucXac.soBanThang,
        mangXucXac: state.stateXucXac.mangXucXac
    }
}



export default connect(mapStateToProps)(KetQuaTroChoi)
