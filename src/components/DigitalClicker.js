// Code DigitalClicker Component Here
import React, { Component } from 'react'

class DigitalClicker extends Component {
    constructor() {
        super()
    
        this.state = {
            timesClicked: 0
        }
    }
    
    handleOnClick = () => {
        let likes = this.state.timesClicked + 1
        this.setState({
            timesClicked: likes
        })
    }
    render() {
        return (
            <div>
               <button onClick={this.handleOnClick}>{this.state.timesClicked}</button> 
            </div>
        )
    }
}
export default DigitalClicker
