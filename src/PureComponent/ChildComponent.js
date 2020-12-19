import React, { Component, PureComponent } from 'react'

export default class ChildComponent extends PureComponent {
    static getDerivedStateFromProps(props, state) {

        console.log('getDerivedStateFromProps');
        return state
    }
    render() {
        console.log('render comment');
        return (
            <div>
                <p>{this.props.likeNumber.number}</p>
                <div className=' bg-dark p-4'>
                    <p className='text-primary font-weight-bold'>Khải</p>
                    <p className='text-light'>ahihihi</p>
                </div>
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }
    
}
