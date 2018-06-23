import React, {Component} from "react";
import "./Home.css";

class Home extends Component {

  state = {
    redirect: ''
  }

  render() {
    return (
      <div className="home">
        {this.state.redirect ? this.state.redirect : ''}
      </div> 
    )
  }

}

export default Home;