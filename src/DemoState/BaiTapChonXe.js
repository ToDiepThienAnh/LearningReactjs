import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    state = {
        imgSrc: './img/car/products/red-car.jpg' // giá trị mắc định của state

    }
    
    changeColor = (newColor) => {
        this.setState({
            imgSrc: `./img/car/products/${newColor}-car.jpg`
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        {/* Hình ảnh của xe */}
                        <img src={this.state.imgSrc} className='w-100' alt=""></img>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-header bg-dark text-white">Exterior Color</div>
                            <div className="card-body py-0">
                                <div className="row mt-1 border border-dark py-2">
                                    <div className="col-2">
                                        <img style={{cursor: 'pointer'}} onClick={ () => this.changeColor('black')} src='./img/car/icons/icon-black.jpg' className="w-100" alt />
                                    </div>
                                    <div className="col-10 pt-4">
                                        <h3>Black Color</h3>
                                    </div>
                                    
                                </div>
                                <div className='row mt-4 border border-dark py-2'>
                                <div className="col-2">
                                        <img style={{cursor: 'pointer'}} onClick={ () => this.changeColor('red')} src='./img/car/icons/icon-red.jpg' className="w-100" alt />
                                    </div>
                                    <div className="col-10 pt-4">
                                        <h3>Red Color</h3>
                                    </div>
                                </div>
                                <div className='row mt-4 border border-dark py-2'>
                                <div className="col-2">
                                        <img style={{cursor: 'pointer'}} onClick={ () => this.changeColor('steel')
                                        } src='./img/car/icons/icon-steel.jpg' className="w-100" alt />
                                    </div>
                                    <div className="col-10 pt-4">
                                        <h3>Steel Color</h3>
                                    </div>
                                </div>
                                <div className='row mt-4 border border-dark py-2'>
                                <div className="col-2">
                                        <img style={{cursor: 'pointer'}} onClick={ () => this.changeColor('silver')} src='./img/car/icons/icon-silver.jpg' className="w-100" alt />
                                    </div>
                                    <div className="col-10 pt-4">
                                        <h3>Silver Color</h3>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        )
    }
}
