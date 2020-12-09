import React, { Component } from 'react'

import styleGame from './buble.module.css'

export default class BaiTapGameOanTuTi extends Component {
    render() {
        return (
            <div className={`${styleGame.bgGame}`}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3'>
                            <img style={{ width: '200px', transform: 'translateY(200px)' }} src="./img/img_keobuabao/player.png"></img>
                            <div style={{ transform: 'translateY(200px)'}}>
                                <button className='mr-2'>
                                <img style={{ width: '50px' }} src="./img/img_keobuabao/keo.png"></img>
                                </button>
                                
                                <button  className='mr-2'>
                                <img style={{ width: '50px' }} src="./img/img_keobuabao/bua.png"></img>
                                </button>
                                
                                <button>
                                <img style={{ width: '50px' }} src="./img/img_keobuabao/bao.png"></img>
                                </button>
                                
                            </div>
                        </div>
                        <div className='col-6 text-center'>
                            <div >
                            <h1 className='display-4 text-warning font-weight-bold my-5'>I'am iron man, i love you 3000 !!!</h1>
                            <h2 className='display-4 text-success font-weight-bold mt-5'>Số bàn thắng:<span className='text-warning'>0</span></h2>
                            <h2 className='display-4 text-success font-weight-bold mt-5'>Số bàn chơi: <span className='text-warning'>0</span></h2>
                            <button className='btn btn-success mt-5'>Play game</button>
                            </div>

                        </div>
                        <div className='col-3'>
                            <img style={{ width: '200px', transform: 'translateY(200px)' }} src="./img/img_keobuabao/playerComputer.png"></img>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

