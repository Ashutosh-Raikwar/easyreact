import React from 'react';

class App extends React.Component{

  constructor(){
    super()
    this.state={
      like:0,
    }
  }
  

  onClickLike = () =>{
    this.setState({like: this.state.like+1})
  }

  onClickDislike = () =>{
    if(this.state.like>0){
      this.setState({like: this.state.like-1})
    }
  }
    render(){
      return(
        <div>
          <button onClick={this.onClickLike}>
          👍
          </button>
          <button onClick={this.onClickDislike}>
          👎
          </button>
          <div>{this.state.like}</div>
        </div>
      )
    }  
}

export default App;