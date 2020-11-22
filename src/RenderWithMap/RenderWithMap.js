import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    products = [
        { id: 1, name: 'iphone', price: 1000 },
        { id: 2, name: 'iphone X', price: 2000 },
        { id: 3, name: 'iphone XS', price: 3000 }

    ]

    renderProducts = () => {
        let arrJSX = [];
        for (let i in this.products) {
            let product = this.products[i];
            let jsxProduct = <div className='col-4'>
                <div className="card">
                    <img className="card-img-top" src="https://picsum.photos/200" alt />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.price}</p>
                    </div>
                </div>
            </div>;
            arrJSX.push(jsxProduct);
        }
        return arrJSX;
    }

    renderProductsWithMap = () => {
        const arrJSX = this.products.map((product, index) => {
            return <div className='col-4' key={index}>
                <div className="card">
                    <img className="card-img-top" src="https://picsum.photos/200" alt />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.price}</p>
                    </div>
                </div>
            </div>;
        })
        return arrJSX;
    }

    renderTable = () => {
        return this.products.map((products, index) => {
            return <tr key={index}>
                <td>{products.id}</td>
                <td>{products.name}</td>
                <td>{products.price}</td>
            </tr>
        })
    }

    render() {


        return (

            <div className="container">
                <div className="row">
                    {this.renderProductsWithMap()}
                </div>
                <table className='table'>
                    <thead>
                        <td>id</td>
                        <td>name</td>
                        <td>Price</td>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>

        )
    }
}
