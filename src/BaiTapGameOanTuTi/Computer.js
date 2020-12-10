import React, { Component } from 'react'
import styleGame from './buble.module.css'
export default class Computer extends Component {
    render() {
        return (
            <div style={{  transform: 'translateY(100px)' }}>
                <div className={`${styleGame.thinking} text-center`}>
                    <img style={{ width:'50%'}} src="./img/img_keobuabao/keo.png"></img>
                </div>
                <img style={{ width: '200px'}} src="./img/img_keobuabao/playerComputer.png"></img>
            </div>
        )
    }
}
