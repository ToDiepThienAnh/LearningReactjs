import React, { Component } from 'react'
import BestLapTop from './BestLapTop'
import Carousel from './Carousel'
import Footer from './Footer'
import Header from './Header'
import ProductListComponent from './ProductListComponent'

export default class BaiTapLLayout extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Carousel></Carousel>
                <ProductListComponent></ProductListComponent>
                <BestLapTop></BestLapTop>
                <Footer></Footer>
            </div>
        )
    }
}
