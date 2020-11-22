import React, { Component } from 'react'

export default class HandleEvent extends Component {
    showMess = () => {
        alert('hello cybersoft Front End 54');
    }
    
    
    render() {
        const title = 'Thien ANh';
        return (
            
            <div className='container'>
            <h3>Handle Event</h3>
            <button className='btn btn-success' onClick={this.showMess}>Click me</button>
            <button onClick={ () => {
                alert(`hello ${title}`);
            }
        }>{`Hello ${title}`}</button>
        </div>
        )
    }
}
