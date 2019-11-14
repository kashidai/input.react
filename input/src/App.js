import React from 'react';

class App extends React.Component {

  constructor(props){
    super (props);
    this.state = {name:""}
  };


  handleClick　= (props) => {
    this.setState({name: props.target.value});
  };
  handleSubmit　= (props) => {
    props.preventDefault(props);
    console.log(this.state.name);
  };



  render(){
    return(
        <div>

          <form onSubmit={this.handleSubmit}>
            <input value={this.state.name} type="text" onChange={this.handleClick}/>
            <input type="submit" />
          </form>
          {this.state.name}

        </div>
    )
  }



}


export default App;
