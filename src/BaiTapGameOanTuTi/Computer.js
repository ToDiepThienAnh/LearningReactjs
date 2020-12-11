import React, { Component } from 'react'
import styleGame from './buble.module.css'
import { connect } from 'react-redux'

 class Computer extends Component {

    renderThink = () => {
        
        return <img style={{ width:'50%'}} src={this.props.computer.hinhAnh}></img>
    }
    render() {
        // console.log("Computer", this.props.computer);
        return (
            <div style={{  transform: 'translateY(100px)' }}>
                <div className={`${styleGame.thinking} text-center`}>
                    {this.renderThink()}
                </div>
                <img style={{ width: '200px'}} src="./img/img_keobuabao/playerComputer.png"></img>
            </div>
        )
    }
}
 
const mapStateToProps = (state) => {
    return {
        computer: state.stateOanTuTi.computer
    }
}

export default connect(mapStateToProps)(Computer)