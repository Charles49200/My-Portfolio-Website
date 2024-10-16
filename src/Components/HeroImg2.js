import "./HeroImg2Styles.css"

import React, { Component } from 'react'

class HeroImg2 extends Component {
  render(){
    return (
        <div className="Hero-Img">
            <div className="Heading">
                <h1>{this.props.heading}</h1>
                <p>{this.props.text}</p>
            </div>
        </div>
      );
  }
  
}

export default HeroImg2