import React, { Component } from 'react'

import styleGame from './buble.module.css'
import Computer from './Computer'
import KetQua from './KetQua'
import Player from './Player'

export default class BaiTapGameOanTuTi extends Component {
    render() {
        return (
            <div className={`${styleGame.bgGame}`}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3'>
                            <Player></Player>
                        </div>
                        <div className='col-6 text-center'>
                            <KetQua></KetQua>

                        </div>
                        <div className='col-3'>
                            <Computer></Computer>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

