import React from 'react';

class App extends React.Component {

  constructor(props){
    super (props);
    this.state = {name:""}
  };


  handleClick　= (e) => {
      console.log(e.target.type);
    this.setState({name: e.target.value});
  };


  render(){
    return(
        <div>
          <form>
            <input type="text" onChange={this.handleClick}/>
          </form>
          {this.state.name}

        </div>
    )
  }



}


export default App;
