import React from 'react';

class App extends React.Component {

  constructor(props){
    super (props);
    this.state = {name:""}
  };


  handleClick　= (props) => {
    this.setState({name: props.target.value});
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
