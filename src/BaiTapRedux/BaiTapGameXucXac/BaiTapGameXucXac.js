import React, { Component } from 'react'
import KetQuaTroChoi from './KetQuaTroChoi'
import XucXac from './XucXac'
import styleGame from './BaiTapGameXucXac.module.css'

export default class BaiTapGameXucXac extends Component {
    render() {
        return (
            <div className={`${styleGame.bgGame}`}>
                <h1 className='text-center mt-4'>BÀI TẬP GAME XÚC XÁC</h1>
                <XucXac></XucXac>
                <KetQuaTroChoi></KetQuaTroChoi>
            </div>
        )
    }
}
