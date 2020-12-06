import React, { Component } from 'react';
import {connect} from 'react-redux';


 class XucXac extends Component {
     renderXucXac = () => {
         return this.props.mangXucXac.map((value,index)=> {
            return <img key={index} className='mx-2' style={{ width:50}} src={value.hinhAnh}></img>
         })
     }
    render() {
        // console.log(this.props);
        return (
            <div className='container-fluid'>
                <div className='row text-center mt-5'>
                    <div className='col-4'>
                        <button className='p-5 btn btn-danger'><span className='display-4'>Tài</span></button>
                    </div>
                    <div className='col-4'>
                        <div>
                            {this.renderXucXac()}
                        </div>
                        
                    
                    </div>
                    <div className='col-4'>
                        <button className='p-5 btn btn-danger'><span className='display-4'>Xỉu</span></button>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangXucXac: state.stateXucXac.mangXucXac
    }
}


export default connect(mapStateToProps)(XucXac);
