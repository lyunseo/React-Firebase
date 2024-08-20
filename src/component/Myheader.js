import React, { Component } from 'react'

class Myheader extends Component{
    render(){
      console.log(this.props);
      return(
        <header>
        <h1 className="logo"><a href="/">{this.props.title}</a></h1>
        <p>{this.props.desc}</p>
      </header>
      )
    }
  }

  export default Myheader;