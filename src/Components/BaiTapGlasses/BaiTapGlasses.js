import React, { Component } from 'react'

export default class BaiTapGlasses extends Component {

    arrProduct = [

        { id: 1, price: 30, name: 'GUCCI G8850U', url: './img/glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 2, price: 50, name: 'GUCCI G8759H', url: './img/glassesImage/v2.png', desc: 'Orange pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './img/glassesImage/v3.png', desc: 'Black pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 4, price: 30, name: 'DIOR D6005U', url: './img/glassesImage/v4.png', desc: 'Yellow square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 5, price: 30, name: 'PRADA P8750', url: './img/glassesImage/v5.png', desc: 'Violet pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 6, price: 30, name: 'PRADA P9700', url: './img/glassesImage/v6.png', desc: 'Dark pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 7, price: 80, name: 'FENDI F8750', url: './img/glassesImage/v7.png', desc: 'Blue pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 8, price: 130, name: 'FENDI F8500', url: './img/glassesImage/v8.png', desc: 'Green pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 9, price: 70, name: 'FENDI F4300', url: './img/glassesImage/v9.png', desc: 'Red pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    ];


    state = {
        imgSrc: this.arrProduct[0].url,
        title: this.arrProduct[0].name,
        price: this.arrProduct[0].price,
        desc: this.arrProduct[0].desc
    }

    changeGlasses = (newUrl) => {
        
        for (let product of this.arrProduct) {
            if (product.url === newUrl) {
                this.setState({
                    imgSrc: product.url,
                    title: product.name,
                    price: product.price,
                    desc: product.desc
                })
                
            }
        }
       
    }

    

    renderGlasses = () => {
        return this.arrProduct.map((product, index) => {
            return <div className="col-2" key={index}> 
                <img className="w-100" style={{ cursor: 'pointer' }} src={product.url} alt onClick={() => this.changeGlasses(product.url)}/>
            </div>
        })
    }

    render() {




        return (
            <div>
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.445)' }} className="text-center text-white py-3">
                    <h1>TRY GLASSES APP ONLINE</h1>
                </div>
                <div className="container mt-4">
                    <div className="d-flex justify-content-around">
                        <div style={{ position: 'relative' }}>
                            <img style={{ height: 400 }} src='./img/glassesImage/model.jpg' alt />
                            <div style={{ position: 'absolute', left: 70, top: 100, width: 200 }}>
                                <img src={this.state.imgSrc} className='w-100' alt />
                            </div>
                            <div style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: 100, backgroundColor: 'rgba(255, 166, 0, 0.5)' }} className="text-white">
                                <h6>{this.state.title} {this.state.price}</h6>
                                <p>{this.state.desc}</p>
                            </div>
                        </div>
                        <div>
                            <img style={{ height: 400 }} src='./img/glassesImage/model.jpg' alt />
                        </div>
                    </div>
                </div>
                <div className="container mt-4 bg-dark">
                    <div className="row py-4">
                        {this.renderGlasses()}
                    </div>
                </div>
            </div>

        )
    }
}

