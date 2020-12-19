import React, { Component } from 'react'
import axios from 'axios'
export default class RequestApi extends Component {
    state = {
        mangPhim: []
    }

    renderPhim = async () => {
        // bất đồng bộ
        // const promise = axios({
            // url: 'https://movie0706.cybersoft.edu.vn/api/quanlyphim/laydanhsachphim?manhom=GP01',
            // method: 'GET'
        // })
        // promise.then(res => {
        //     console.log(res.data);
        //     this.setState({
        //         mangPhim: res.data
        //     })
        // })
        let result = await axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/quanlyphim/laydanhsachphim?manhom=GP01',
            method: 'GET'
        })
        this.setState({
            mangPhim: result.data
        })
    }
    render() {
        return (
            <div className='container'>
               
                <div className='row'>
                    {this.state.mangPhim.map((value, index) => {
                        return (<div className='col-4' key={index}>
                            <div className="card">
                                <img className="card-img-top" src={value.hinhAnh} alt />
                                <div className="card-body">
                                    <h4 className="card-title">{value.tenPhim}</h4>
                                    <p className="card-text">{value.moTa}</p>
                                </div>
                            </div>

                        </div>

                        )
                    })}
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.renderPhim()
    }
    
}

