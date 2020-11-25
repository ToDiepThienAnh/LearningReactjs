import React, { Component } from 'react'

export default class BT3ProductItem extends Component {
    

    render() {
        return (
            <div className='col-4 mb-2'>
                <div className="card border-top-0 border-bottom-0">
                <img className="card-img-top" src="http://placehold.it/700x400" alt />
                {/* <div className="card-header">
                    <p className="text-primary">Item One</p>
                </div> */}
                <div className="card-body">
                    <p className="text-primary">Item One</p>
                    <h6 className="card-title">$24.99</h6>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, eos.</p>
                </div>
                <div style={{ height: 30 }} className="card bg-light">
                </div>
            </div>
            </div>
        )
    }
}
