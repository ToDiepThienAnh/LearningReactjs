import React, { Component } from 'react'

export default class ChildComponentLifeCycle extends Component {

    constructor(props) {
        super(props)
        this.state = {
            number: 0
        }
        console.log('child contructor');
        
    }

    timeout = () => {
        setInterval(()=> {
            console.log('1');
        },1000)
    }
    
    static getDerivedStateFromProps() {
        console.log(' child getDerivedStateFromProps');
        return null;
    }
    shouldComponentUpdate() {
        console.log(' child shouldComponentUpdate');
        return true
    }

    render() {
        console.log('render child');
        return (
            <div>
                child component
                
            </div>
        )
    }

    componentDidUpdate() {
        console.log('child componentDidUpdate');
    }

    componentDidMount() {
        console.log('child componentDidMount');
    }

    componentWillUnmount() {
        clearInterval(this.timeout)
        console.log('child componentWillUnmount');
    }
    
}
