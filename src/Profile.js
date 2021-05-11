import React, { Component } from "react";

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Ronice Yemeli",
      bio: " still working on my bio ;)",
      imgSrc:"/pic.jpeg",
      profession: "i'm a student-athlete",
      count:0
    };
  }
  componentDidMount(){
      let number=setInterval(() => {
          this.showInterval()
      }, 1000);
      this.setState({intervalView:number})
  }
  showInterval=()=>{
    this.setState({count:this.state.count+1})
  }

  render() {
    return (
      <div>
        <h5 style={{color:"blue"}}>{this.state.fullName}</h5>
        <h6>{this.state.bio}</h6>
        <h5>
          <img src={this.state.imgSrc} alt="" style={{width:"20%",height:"20%"}} />
        </h5>
        <h6>{this.state.profession}</h6>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}

export default Profile;
