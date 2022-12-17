import React, { Component } from 'react';
import bell from './bell.png';
import newbell from './newbell.jpg';

class NewComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Subscribe to simplilearn",
             sub: "Subscribe",
             imageURL: newbell
        };
    }
    styles = {
        fontstyle: "italic",
        color: "purple",
      };
    ButtonChange = () => {
        this.setState({
            message: "Hit the bell icon to subscribe to simplilearn updates",
            sub: "Subscribed"
        });
    };
    imageChange=()=>{
        this.setState({
            imageURL: bell,
            message: "The updates were successfully"
        })

    }
  render() {
    return (
      <div className='App'>
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.ButtonChange}>{this.state.sub}</button>
        <p/>
        <img style={{width: '30px', height: '30px'}} 
        src={this.state.imageURL}
        onClick={this.imageChange}
        alt=""/>
      </div>
    )
  }
}

export default NewComp