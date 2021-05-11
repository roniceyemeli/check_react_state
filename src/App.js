 import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import Profile from './Profile';


export class App extends Component {
   
  state={
    result:false
  }
  handleClick=()=>{
    this.setState({result:!this.state.result})
  }
 
  render() {
    return (
      <div style={{textAlign:'center',marginTop:"10%"}}>
        <Button variant="secondary" onClick={this.handleClick}>{this.state.result?"Hide Profile":"Show Profile"}</Button>
       <br/>
        {
          this.state.result ? <Profile/>: "click to display" 
        }
      </div>
    )
  }
}

export default App
