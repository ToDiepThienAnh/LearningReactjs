import React, { Component } from 'react'
import { connect } from 'react-redux'


class KetQua extends Component {


    render() {
        console.log(this.props.soBanThang);
        return (
            <div>
                <div >
                    <h1 className='display-4 text-warning font-weight-bold my-5'>I'am iron man, i love you 3000 !!!</h1>
        <h2 className='display-4 text-success font-weight-bold mt-5'>Số bàn thắng:<span className='text-warning'>{this.props.soBanThang}</span></h2>
                    <h2 className='display-4 text-success font-weight-bold mt-5'>Số bàn chơi: <span className='text-warning'>{this.props.soBanChoi}</span></h2>
                    <button className='btn btn-success mt-5'>Play game</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        soBanThang: state.stateOanTuTi.soBanThang,
        soBanChoi: state.stateOanTuTi.soBanChoi
    }
}


export default connect(mapStateToProps)(KetQua)

