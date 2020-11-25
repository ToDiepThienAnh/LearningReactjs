import React, { Component } from 'react'


export default class BT3ProductList extends Component {
    products = [
        { name: 'Item One' },
        { name: 'Item Two' },
        { name: 'Item Three' },
        { name: 'Item Four' },
        { name: 'Item Five' },
        { name: 'Item Six' }

    ]

    renderProduct = () => {

        return this.products.map((product, index) => {
            return <div className='col-4 mb-2' key={index}>
                <div className="card border-top-0 border-bottom-0">
                    <img className="card-img-top" src="http://placehold.it/700x400" alt />
                    {/* <div className="card-header">
                    <p className="text-primary">Item One</p>
                </div> */}
                    <div className="card-body">
                        <p className="text-primary">{product.name}</p>
                        <h6 className="card-title">$24.99</h6>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, eos.</p>
                    </div>
                    <div style={{ height: 40 }} className="card bg-light">
                        <div className="d-flex py-2">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star text-secondary" />
                        </div>

                    </div>
                </div>
            </div>
        })
    }


    render() {
        return (
            <div className='container pt-2'>
                <div className='row'>
                    {this.renderProduct()}

                </div>
            </div>
        )
    }
}
