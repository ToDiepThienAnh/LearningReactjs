import React, { Component } from 'react';
import { connect } from 'react-redux';
import styleGame from './buble.module.css'

class Player extends Component {

    renderMangTuXi = () => {
        // return this.props.mangTuXi.map((value, index) =>{
        //     return <div style={{ transform: 'translateY(200px)' }} key={index}>
        //             <button className='mr-2'>
        //                 <img style={{ width: '50px' }} src={value.hinhAnh}></img>
        //             </button>

        //         </div>
        // })
        return this.props.mangTuXi.map((value, index) => {
            return <div key={index}>
                <button className='mr-2'>
                    <img style={{ width: '50px' }} src={value.hinhAnh}></img>
                </button>

            </div>
        })
    }
    render() {
        console.log(this.props.mangTuXi);
        return (
            <div style={{ transform:'translateY(100px)'}}>
                <div className={`${styleGame.thinking} text-center`}>
                    <img style={{ width:'50%'}} src="./img/img_keobuabao/keo.png"></img>
                </div>
                <img style={{ width: '200px'}} src="./img/img_keobuabao/player.png"></img>
                <div className='d-flex'>
                    {/* <button className='mr-2'>
                        <img style={{ width: '50px' }} src="./img/img_keobuabao/keo.png"></img>
                    </button>

                    <button className='mr-2'>
                        <img style={{ width: '50px' }} src="./img/img_keobuabao/bua.png"></img>
                    </button>

                    <button>
                        <img style={{ width: '50px' }} src="./img/img_keobuabao/bao.png"></img>
                    </button> */}
                    {this.renderMangTuXi()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangTuXi: state.stateOanTuTi.mangTuXi
    }
}   

export default connect(mapStateToProps)(Player);